const nameInp = document.getElementById("exampleInputName");
const surnameInp = document.getElementById("exampleInputSurname");
const passInp = document.getElementById("exampleInputPassword1");
const emialInp = document.getElementById("exampleInputEmail1");
const ageInp = document.getElementById("exampleInputAge");
const form = document.getElementById("form");

function myForm(e) {
  e.preventDefault();

  axios
    .post("https://655c84d425b76d9884fd7251.mockapi.io/form", {
      name: nameInp.value,
      surname: surnameInp.value,
      password: passInp.value,
      age: ageInp.value,
      email: emialInp.value,
    })

    .then((res) => {
      console.log(res.data);
      form.reset();
    });
}

form.addEventListener("submit", myForm);
