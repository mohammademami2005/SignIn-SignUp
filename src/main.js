import './style.css'


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

function _mail(mail, mailAtLength, label) {

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
      test: f => mailAtLength <= 1,
      ok: "",
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
      ok: "",
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
}

function _pass(pass) {
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
    {
      test: p => passRegx.test(p),
      ok: "✅",
      fail: "the entered password is invalid."
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
}




// sign up username ------------
suUsername.addEventListener("input", () => {
  let username = suUsername.value
  if (username == '' || username.length < 5) {
    suUsernameLabel.innerHTML = 'Username cannot be empty or less than 5 characters.'
  } else {
    suUsernameLabel.innerHTML = ''
    suUsername.style.borderColor = "green"
  }
})
// sign up username end ------------

suForm.addEventListener("submit", (e) => {
  if (submitState1 < 3) {
    e.preventDefault()
  }
})

// sign up mail \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
suEmail.addEventListener("input", () => {
  const label = document.querySelectorAll("#signUpEmailLabel > li")

  let mail = suEmail.value.trim();
  let mailAtLength = (mail.match(/@/g) || []).length;
  _mail(mail, mailAtLength, label)
  //  if (mail === "") {
  //    label[1].style.color = "red"
  //    label[1].textContent = ' cannot be empty'  
  //  }else{
  //    label[1].style.color = "green"
  //  }
  //  if (mail.search(/@/) < 0) {
  //    label[0].style.color = "red"
  //    label[0].textContent = 'Must contain “@”'
  //  }else{
  //    label[0].style.color = "green"
  //  }
  //  if (mailAtLength > 1) {
  //   label[6].style.color="red"
  //   label[6].textContent = 'You can’t use more than one “@” symbol.'
  //  }else{
  //    label[6].style.color = "green"
  //  }
  //  if (mail.indexOf(".") < 0 || (mail.length - mail.lastIndexOf(".")) <= 2) {
  //    label[2].style.color = "red"
  //    label[2].textContent = "cannot end with a dot"
  //  }else{
  //    label[2].style.color = "green"
  //  }
  //  if (mail.length < 10) {
  //    label[3].style.color = "red"
  //    label[3].textContent = 'must be at least 10 characters long'
  //  }else{
  //    label[3].style.color = "green"
  //  }
  //  if (/<script/i.test(mail) || /&lt;script/i.test(mail)) {
  //    label[4].textContent = "bisharaf"
  //    label[4].style.color = "red"
  //  }else{
  //   label[4].textContent = ''
  //  }
  //   if (mail.search(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) >= 0) {
  //    label[5].textContent = "✅"
  //    label[5].style.color = "red"
  //  }else {
  //   label[5].textContent = "the entered email is invalid."
  //  }
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
// suPass.addEventListener("input", () => {
//   let pass = suPass.value
//   let passRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
//   let flag = 0

//   if (pass.length < 8) {
//     suPassList[0].style.color = "red"
//     suPassList[0].textContent = "Password length must be at least 8 characters."
//   } else {
//     suPassList[0].style.color = "green"
//     flag++
//   }

//   if (/[a-z]/.test(pass)) {
//     suPassList[1].textContent = 'Lowercase letters are present.'
//     suPassList[1].style.color = "green"
//     flag++
//   } else {
//     suPassList[1].textContent = 'No lowercase letters found.'
//     suPassList[1].style.color = "red"
//   }

//   if (/[A-Z]/.test(pass)) {
//     suPassList[2].textContent = 'Uppercase letters are present.'
//     suPassList[2].style.color = "green"
//     flag++
//   } else {
//     suPassList[2].textContent = 'No uppercase letters found.'
//     suPassList[2].style.color = "red"
//   }

//   if (/\d/.test(pass)) {
//     suPassList[3].textContent = 'Numbers are present.'
//     suPassList[3].style.color = "green"
//     flag++
//   } else {
//     suPassList[3].textContent = 'No numbers found.'
//     suPassList[3].style.color = "red"
//   }

//   if (/[@\$!%\*\?&]/.test(pass)) {
//     suPassList[4].textContent = 'Special characters are present.'
//     suPassList[4].style.color = "green"
//     flag++
//   } else {
//     suPassList[4].textContent = 'No special characters found.'
//     suPassList[4].style.color = "red"
//   }

//   if (passRegx.test(pass)) {
//     suPassList[5].textContent = ''
//   } else {
//     suPassList[5].textContent = "The entered password is invalid."
//   }
// })

suPass.addEventListener("input", () => {
  const pass = suPass.value
  _pass(pass)
})

suPass.addEventListener("blur", () => {
  suPassList.forEach(item => item.classList.add("hidden"))
});
suPass.addEventListener("focus", () => {
  suPassList.forEach(item => item.classList.remove("hidden"))
});
// sign up password end ===================


// signInform.addEventListener("submit", (e) => {
// })
siBtn.addEventListener("click", (e) => {
  console.log(passRegx.test(siPass.value) && mailRegx.test(siMail.value))
  if (passRegx.test(siPass.value) && mailRegx.test(siMail.value)) {
    siLabel.textContent = ''
  } else {
    e.preventDefault()
    console.log(siLabel)
    siLabel.textContent = "mail or password is incorrect"
    siLabel.classList.add("text-red-500" , "text-sm")
  }
})

