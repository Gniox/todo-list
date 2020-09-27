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
    .then(async (data) => {
      await localStorage.setItem("@token", data.token);
      getUser();
    })
    .catch(function (error) {
      console.warn("Something went wrong.", error);
    });
}

async function getUser() {
  console.log("12345");
  fetch("http://localhost:4000/user/me", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset-UTF-8",
      token: localStorage.getItem("@token"),
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(async (data) => {
      await localStorage.setItem("@user", JSON.stringify(data));
      console.log("should have set local storage to user");
      //  localStorage.setItem("@user", data);
    })
    .catch(function (error) {
      console.warn("something went wrong.", error);
    });
}

async function signUp(username, email, password) {
  fetch("http://localhost:4000/user/signup", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(async (data) => {
      await localStorage.setItem("@token", data.token);
      getUser();
    })
    .catch(function (error) {
      console.warn("Something went wrong.", error);
    });
}

async function update(uTasks) {
  fetch("http://localhost:4000/user/update", {
    method: "PUT",
    body: JSON.stringify({
      tasks: uTasks,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      token: localStorage.getItem("@token"),
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => {
      getUser();
    })
    .catch(function (error) {
      console.warn(
        "Something went wrong." + localStorage.getItem("@token"),
        error
      );
    });
}

module.exports = {
  sendLogIn,
  getUser,
  signUp,
  update,
};
