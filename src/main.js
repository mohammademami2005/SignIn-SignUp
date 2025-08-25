import './style.css'


const swapBtn = document.querySelector("#swap")
const swapBox = document.querySelector("#swapBox")
const signUp = document.querySelector("#signUp")
const signIn = document.querySelector("#signIn")

const pass = document.querySelector("#pass")

let flag = 0
swapBtn.addEventListener("click", (e) => {
  if (flag % 2 == 0) {
    swapBox.classList.remove("right-0")
    swapBox.classList.add("right-1/2")

    signUp.classList.remove("opacity-0")
    signUp.classList.add("opacity-100")

    signIn.classList.remove("opacity-100")
    signIn.classList.add("opacity-0")
    swapBtn.textContent = "sign in"

  } else {
    swapBox.classList.remove("right-1/2")
    swapBox.classList.add("right-0")

    signUp.classList.remove("opacity-100")
    signUp.classList.add("opacity-0")

    signIn.classList.remove("opacity-0")
    signIn.classList.add("opacity-100")
    swapBtn.textContent = "sign up"

  }
  flag++
})

let x = 0;
document.getElementById("signUpEmail").addEventListener("input", (e) => {
  const label = document.querySelector("#signUpEmailLabel")
  let mail = e.target.value
  if (mail.search(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) >= 0) {
    pass.focus()
    
  } else {
    label.innerHTML = 'not found'
  }
})
