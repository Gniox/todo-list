async function sendLogIn(email, password) {
  console.log("anything ehre?");
  fetch("http://localhost:4000/user/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      if (response.ok) {
        // let token = response.token;
        // let user = this.getUser(response.json(response.json().token));
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => {
      getUser(data);
    })
    .catch(function (error) {
      console.warn("Something went wrong.", error);
    });
};

async function getUser(token) {
  console.log("12345");
  fetch("http://localhost:4000/user/me", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset-UTF-8",
      token: token.token,
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => {
      console.log(data);
    //  localStorage.setItem("@user", data);
    })
    .catch(function (error) {
      console.warn("something went wrong.", error);
    });
};

module.exports = {
  sendLogIn,
  getUser,
};
