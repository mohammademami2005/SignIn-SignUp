import './style.css'


const swapBtn = document.querySelector("#swap")
const swapBox = document.querySelector("#swapBox")
const signUp = document.querySelector("#signUp")
const signIn = document.querySelector("#signIn")

const pass = document.querySelector("#pass")
const suForm = document.querySelector("#signUp")
const suEmail = document.getElementById("signUpEmail")
const label = document.querySelector("#signUpEmailLabel")
const suUsername = document.querySelector("#signUpUsername")
const suUsernameLabel = document.querySelector("#signUpUsernameLabel")
let submitState1 = 0
let flag = 0
swapBtn.addEventListener("click", (e) => {
  if (flag % 2 == 0) {
    swapBox.classList.remove("right-0")
    swapBox.classList.add("right-1/2")
    swapBtn.style.backgroundColor = "#d3d1bc"
    swapBtn.style.color = "black"

    signUp.classList.remove("opacity-0")
    signUp.classList.add("opacity-100")

    signIn.classList.remove("opacity-100")
    signIn.classList.add("opacity-0")
    swapBtn.textContent = "sign in"

  } else {
    swapBox.classList.remove("right-1/2")
    swapBox.classList.add("right-0")
    swapBtn.style.backgroundColor = "#93b3a8"
    swapBtn.style.color = ""


    signUp.classList.remove("opacity-100")
    signUp.classList.add("opacity-0")

    signIn.classList.remove("opacity-0")
    signIn.classList.add("opacity-100")
    swapBtn.textContent = "sign up"

  }
  flag++
})

suForm.addEventListener("submit", (e) => {
  // sign up username ------------
  let username = suUsername.value
  if (username == '' || username.length < 5) {
    suUsernameLabel.innerHTML = "یوزر نیم نمیتونه خالی یا کمتر از 5 کاراکتر باشد"
  }
  // sign up username end ------------

  let mail = suEmail.value.trim();
  let mailAtLength = (mail.match(/@/g) || []).length;
  label.innerHTML = ""; 

  if (mail === "") {
    label.append("نمیتونه خالی باشه");
  }
  if (mail.search(/@/) < 0) {
    label.append("@ ندارد");
  }
  if (mailAtLength > 1) {
    label.append("شما نمیتوانید از دو @ استفاده کنید");
  }
  if (mail.indexOf(".") < 0 || (mail.length - mail.lastIndexOf(".")) <= 2) {
    label.append("ساختار دامنه درست نیست");
  }
  if (mail.length < 10) {
    label.append("ایمیل خیلی کوتاه است");
  }
  if (/<script/i.test(mail) || /&lt;script/i.test(mail)) {
    label.append("بیشرف نکن");
  }
   if (mail.search(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) >= 0) {
    // submitState1++
    label.textContent = "✅"
  }


  if (submitState1 < 3) {
    e.preventDefault()
  }

})

signUpEmail.addEventListener("input", (e) => {

  let mail = e.target.value


})

"نمیتونه با نقطه به پایان برسه"