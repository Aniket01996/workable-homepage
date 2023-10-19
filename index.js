// const submitBtn = document.querySelector(".sumbitBtn");
// const submitMsg = document.querySelector("#submitMessage");

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   //   submitMsg.classList.add("active");
//   submitMsg.style.display = "block";
// });
function validation(event) {
  event.preventDefault();
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(fName);
  console.log(lName);
  console.log(email);
  console.log(password);

  if (
    fName.trim() === "" ||
    lName.trim() === "" ||
    email.trim() === "" ||
    password.trim() === ""
  ) {
    alert("Blanks not allowed!");
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email");
    } else {
      document.querySelector("#submitMessage").style.display = "block";
      setTimeout(() => {
        document.querySelector("#submitMessage").style.display = "none";
      }, 3000);
    }
  }

  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}
