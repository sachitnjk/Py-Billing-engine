//get necessary elements
//Sign IN
const signincontainer = document.querySelector(".signin-container");
const loginSubmitButton = document.querySelector(".login-submit");
const userNameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const cancelButton = document.querySelector(".cancelbtn");
const signin = document.querySelector(".signin");



//Sign UP
const signupcontainer = document.querySelector(".signup-container");
const signupSubmitButton = document.querySelector(".submitbtn");
const signupCancel = document.querySelector(".signupcancel");



function signinHandler(event){
    signincontainer.style.display = "block";
}

function signupHandler(event){
    signupcontainer.style.display = "block";
}


function loginSubmitHandler(event) {
    let userid = userNameInput.value;
    let password = passwordInput.value;
    console.log("user " + userid + " has logged in");
    signincontainer.style.display = "none";
}


function cancelHandler(event) {
    signincontainer.style.display = "none";
    
}


function signupCancelHandler(event) {
    signupcontainer.style.display = "none";
    
}


function signupSubmitHandler(event) {
    signupcontainer.style.display = "none";
}




signin.addEventListener("click",signinHandler);

const signup=document.querySelector(".signup");
signup.addEventListener("click",signupHandler);

signupSubmitButton.addEventListener("click",signupSubmitHandler);

loginSubmitButton.addEventListener("click",loginSubmitHandler);

cancelButton.addEventListener("click",cancelHandler);

signupCancel.addEventListener("click",signupCancelHandler);





