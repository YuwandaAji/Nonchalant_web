
function signinbtn(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    if (email == "ajicust@gmail.com" && pass == "ajiganteng") {
        alert("login success wahai pelanggan!")
        window.location.href = "./Nonchalant_Coffe/index.html"
    }
    else if (email == "ajikasir@gmail.com" && pass == "ajitampan"){
        alert("login success wahai karyawan!")
        window.location.href = "kasir_nonchalant.html"
    }
    else {
        alert("yang kamu masukin ada yang salah kocak!")
    }    
}



const container = document.getElementById("container");
const loginBtn = document.getElementById('login');
const registerBtn = document.getElementById('register');

registerBtn.addEventListener('click', () => {
    container.classList.add("active")
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active")
});