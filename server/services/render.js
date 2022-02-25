const axios = require("axios");
exports.homeRoute = (req, res) => {
  // Make a get request to /api/users
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      const {users} = response.data;
      res.render("index", { users: users });
    })
    .catch((err) => {
      res.send(err);
    });
};

// exports.homeRoute = (req, res) => {
//   //Make a get request to /api/users
//   axios
//     .get("http://localhost:3000/api/users")
//     .then(function (res) {
//       console.log(res.data);
//       res.render("index", { users: res.data });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send(err);
//     });
//   //res.render("index",{users: "New Data"});
// };

exports.add_user = (req, res) => {
  res.render("add-user");
};

exports.update_user = (req, res) => {
  res.render("update_user");
};
