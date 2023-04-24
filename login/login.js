let loginEmail = document.querySelector('.login_email');
let loginPsw = document.querySelector('.login_psw');
let form = document.querySelector('form');
let goRegister = document.querySelector('.go_register');


if (localStorage.getItem('loggedInUser')) {
    window.location.href='../index.html'
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    let checkUser = users.find(data=>data.email===loginEmail.value);

    if(checkUser) {
        if(checkUser.password===loginPsw.value) {
            window.location.href="../index.html"
            localStorage.setItem('loggedInUser', JSON.stringify(checkUser))
        }
    }
})

goRegister.addEventListener('click', ()=>{
    window.location.href="../register/register.html"
})