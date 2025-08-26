import './style.css'


const swapBtn = document.querySelector("#swap")
const swapBox = document.querySelector("#swapBox")
const signInform = document.querySelector("#signIn")

const suPass = document.querySelector("#pass")
const suPassList = document.querySelectorAll("#suPassLabel >li")
const suForm = document.querySelector("#signUp")
const suEmail = document.getElementById("signUpEmail")
const label = document.querySelectorAll("#signUpEmailLabel > li")
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

// sign up username ------------
suUsername.addEventListener("input", ()=>{

  let username = suUsername.value
  if (username == '' || username.length < 5) {
    suUsernameLabel.innerHTML = 'Username cannot be empty or less than 5 characters.'
  }else{
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

// sign up mail ----------------- 
suEmail.addEventListener("input" , ()=>{
  let mail = suEmail.value.trim();
  let mailAtLength = (mail.match(/@/g) || []).length;


   if (mail === "") {
     label[1].style.color = "red"
     label[1].textContent = ' cannot be empty'  
   }else{
     label[1].style.color = "green"
   }
   if (mail.search(/@/) < 0) {
     label[0].style.color = "red"
     label[0].textContent = 'Must contain “@”'
   }else{
     label[0].style.color = "green"
   }
   if (mailAtLength > 1) {
    label[6].style.color="red"
    label[6].textContent = 'You can’t use more than one “@” symbol.'
    
   }else{
     label[6].style.color = "green"
   }
   if (mail.indexOf(".") < 0 || (mail.length - mail.lastIndexOf(".")) <= 2) {
     label[2].style.color = "red"
     label[2].textContent = "cannot end with a dot"
   }else{
     label[2].style.color = "green"
   }
   if (mail.length < 10) {
     label[3].style.color = "red"
     label[3].textContent = 'must be at least 10 characters long'
   }else{
     label[3].style.color = "green"
   }
   if (/<script/i.test(mail) || /&lt;script/i.test(mail)) {
     label[4].textContent = "bisharaf"
     label[4].style.color = "red"
   }else{
    label[4].textContent = ''
   }
    if (mail.search(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) >= 0) {
     label[5].textContent = "✅"
     label[5].style.color = "red"
   }else {
    label[5].textContent = "the entered email is invalid."
   }

  })
suEmail.addEventListener("blur", () => {
  label.forEach(item => item.classList.add("hidden"))
});
suEmail.addEventListener("focus", () => {
  label.forEach(item => item.classList.remove("hidden"))
});
// sign up mail end --------------

// sign up pass ------------
suPass.addEventListener("input" , ()=>{
  let pass = suPass.value
  if(pass.length < 8){
    suPassList[0].style.color = "red"
    suPassList[0].textContent = "password length must be at least 8 characters long"
  }else{
    suPassList[0].style.color = "green"
  }
  


  if(pass.search(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) < 0){
   suPassList[6].textContent =  "the entered email is invalid."
  }else{
    suPassList[6].textContent = ''
  }

})
// sign up pass end ------------


