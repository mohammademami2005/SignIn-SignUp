import './style.css'

const passEyes = document.querySelector("#eye1")
const passEyes2 = document.querySelector("#eye2")
const suSub = document.querySelector("#suSub")
const swapBtn = document.querySelector("#swap")
const swapBox = document.querySelector("#swapBox")
const signInform = document.querySelector("#signIn")
const siMail = document.querySelector("#signInMail")
const siBtn = document.querySelector("#siBtn")
const suPass = document.querySelector("#pass")
const siPass = document.querySelector("#siPass")
const suPassList = document.querySelectorAll("#suPassLabel >li")
const suForm = document.querySelector("#signUp")
const suEmail = document.getElementById("signUpEmail")
const suUsername = document.querySelector("#signUpUsername")
const suUsernameLabel = document.querySelector("#signUpUsernameLabel")
const siLabel = document.querySelector("#siLabel")
const passRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const mailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
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

// sign up username ------------
suUsername.addEventListener("input", () => {
  let username = suUsername.value
  if (username == '' || username.length < 5) {
    suUsernameLabel.innerHTML = 'Username cannot be empty or less than 5 characters.'
    submitState1++
  } else {
    suUsernameLabel.innerHTML = ''
    suUsername.style.borderColor = "green"
  }
})
// sign up username end ------------



// sign up mail \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
suEmail.addEventListener("input", (e) => {
  const label = document.querySelectorAll("#signUpEmailLabel > li")
  let mail = suEmail.value.trim();
  let mailAtLength = (mail.match(/@/g) || []).length;
  const rules = [
    { // 0: Empty
      test: f => f.length !== 0,
      ok: "Email is not empty.",
      fail: "Email cannot be empty."
    },
    { // 1: Contains @
      test: f => /@/.test(f),
      ok: "Contains “@” symbol.",
      fail: "Must contain “@” symbol."
    },
    { // 2: At most one @
      test: f => mailAtLength == 1,
      ok: "mail is have 1 @",
      fail: "You can’t use more than one “@” symbol."
    },
    { // 3: Dot not at the end & exists
      test: f => mail.indexOf(".") >= 0 && (mail.length - mail.lastIndexOf(".")) > 2,
      ok: "Dot position is valid.",
      fail: "Must contain a dot and not end with it."
    },
    { // 4: Min length 10
      test: f => f.length >= 10,
      ok: "Length is valid.",
      fail: "Must be at least 10 characters long."
    },
    { // 5: Script injection check
      test: f => !(/<script/i.test(f) || /&lt;script/i.test(f)),
      ok: "Script tag not inserted",
      fail: "Script tags are not allowed."
    },
    { // 6: Full email regex validation
      test: f => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(f),
      ok: "✅ Email format is valid.",
      fail: "The entered email is invalid."
    }];

  rules.forEach((rule, i) => {
    if (rule.test(mail)) {
      label[i].textContent = rule.ok
      label[i].style.color = "green"
    } else {
      label[i].textContent = rule.fail
      label[i].style.color = "red"
    }
  })
})
suEmail.addEventListener("blur", () => {
  const label = document.querySelectorAll("#signUpEmailLabel > li")
  label.forEach(item => item.classList.add("hidden"))
});
suEmail.addEventListener("focus", () => {
  const label = document.querySelectorAll("#signUpEmailLabel > li")
  label.forEach(item => item.classList.remove("hidden"))
});
// sign up mail end \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// sign up password ======================
suPass.addEventListener("input", (e) => {
  const pass = suPass.value.trim()
  const rules = [
    {  // 0: Length
      test: p => p.length >= 8,
      ok: "Password length is valid.",
      fail: "Password length must be at least 8 characters."
    },
    {  // 1: Lowercase
      test: p => /[a-z]/.test(p),
      ok: "Lowercase letters are present.",
      fail: "No lowercase letters found."
    },
    {  // 2: Uppercase
      test: p => /[A-Z]/.test(p),
      ok: "Uppercase letters are present.",
      fail: "No uppercase letters found."
    },
    {  // 3: Numbers
      test: p => /\d/.test(p),
      ok: "Numbers are present.",
      fail: "No numbers found."
    },
    {  // 4: Special chars
      test: p => /[@\$!%\*\?&]/.test(p),
      ok: "Special characters are present.",
      fail: "No special characters found."
    },
    {
      test: p => p.length !== 0,
      ok: "",
      fail: "input is empty"
    },
    {//5:regx
      test: p => passRegx.test(p),
      ok: "✅",
      fail: "the entered password is invalid.",
    },
    {//6:not allow script
      test: p => !(/<script/i.test(p) || /&lt;script/i.test(p)),
      ok: "",
      fail: "Script tags are not allowed."
    }
  ]
  rules.forEach((rule, i) => {
    if (rule.test(pass)) {
      suPassList[i].textContent = rule.ok
      suPassList[i].style.color = "green"
    } else {
      suPassList[i].textContent = rule.fail
      suPassList[i].style.color = "red"
    }
  })

})

suPass.addEventListener("blur", () => {
  suPassList.forEach(item => item.classList.add("hidden"))
});
suPass.addEventListener("focus", () => {
  suPassList.forEach(item => item.classList.remove("hidden"))
});
// sign up password end ===================

suSub.addEventListener("click", (e) => {
  if(!(passRegx.test(suPass.value) || mailRegx.test(suEmail.value))||(suUsername.value == '' || suUsername.length < 5)){
    e.preventDefault()
  }
})


siBtn.addEventListener("click", (e) => {
  if (passRegx.test(siPass.value) && mailRegx.test(siMail.value)) {
    siLabel.textContent = ''
  } else {
    e.preventDefault()
    siLabel.textContent = "mail or password is incorrect"
    siLabel.classList.add("text-red-500", "text-sm")
  }
})

let flag2 = 0
passEyes.addEventListener("click" , ()=>{
  if(flag2 %2 == 0){
    passEyes.setAttribute("src" , "/img/eye.png")
    siPass.setAttribute("type" , "text")
  }else{
    passEyes.setAttribute("src" , "/img/closed-eyes.png")
    siPass.setAttribute("type" , "password")

  }
  flag2++
})

let flag3 = 0
passEyes2.addEventListener("click" , ()=>{
  if(flag3 %2 == 0){
    passEyes2.setAttribute("src" , "/img/eye.png")
    suPass.setAttribute("type" , "text")
  }else{
    passEyes2.setAttribute("src" , "/img/closed-eyes.png")
    suPass.setAttribute("type" , "password")

  }
  flag3++
})