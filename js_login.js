
function signinbtn(){
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    if (email == "ajicust@gmail.com" && pass == "ajiganteng") {
        window.location.assign("./Nonchalant_Coffe/index.html")
        alert("login success wahai pelanggan!")
        
    }
    else if (email == "ajikasir@gmail.com" && pass == "ajitampan"){
        window.location.assign("./kasir_nonchalant.html")
        alert("login success wahai karyawan!")
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