let deletebt = document.querySelectorAll(".deletebtn");
for (let i = 0; i < deletebt.length; i++) {
let id = deletebt[i].getAttribute("data_id");


  let deleteUser = () => {
    let url = `http://localhost:3000/api/users/${id}`;
    console.log("URl--------> ", url);
    if (confirm("Do you really want to delete this user")) {
      fetch(url, {
        method: "DELETE",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          alert(data.message);
          location.reload();
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };
  deletebt[i].addEventListener("click", deleteUser);
}

