async function sendLogIn(email, password) {
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
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(async (data) => {
      await sessionStorage.setItem("@token", data.token);
      getUser();
    })
    .catch(function (error) {
      console.warn("Something went wrong.", error);
    });
}

async function getUser() {
  fetch("http://localhost:4000/user/me", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset-UTF-8",
      token: sessionStorage.getItem("@token"),
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(async (data) => {
      await sessionStorage.setItem("@user", JSON.stringify(data));
    })
    .catch(function (error) {
      console.warn("something went wrong.", error);
    });
}

async function signUp(username, email, password, list) {
  fetch("http://localhost:4000/user/signup", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
      tasks: list,
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
      await sessionStorage.setItem("@token", data.token);
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
      token: sessionStorage.getItem("@token"),
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(() => {
      getUser();
    })
    .catch(function (error) {
      console.warn(
        "Something went wrong." + sessionStorage.getItem("@token"),
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
