let registerName = document.querySelector('.register_name');
let registerEmail = document.querySelector('.register_email');
let registerPsw = document.querySelector('.register_psw');
let registerConfirmPsw = document.querySelector('.register_confirm_psw');
let registerErr = document.querySelector('.register_err');
let goLogin = document.querySelector('.go_login');

function registerSubmit(e) {
    e.preventDefault();

    // if(registerName.value !== '' && registerEmail !== '' && registerPsw !== '' && registerConfirmPsw !== '') {

    // }

    let checkNewUser = users.find(data=>data.email===registerEmail.value);

    if(!checkNewUser) {
        if(registerConfirmPsw.value===registerPsw.value) {
            const newUser = {
                id: users.length + 1,
                userName: registerName.value,
                email: registerEmail.value,
                password: registerPsw.value
            }
            users.push(newUser)
            registerErr.innerHTML = "Qeydiyyat ugurla bitdi"
            localStorage.setItem('users', JSON.stringify(users))
        } else {
            registerErr.innerHTML = "Sifre eyni deyil"
        }
    } else {
        registerErr.innerHTML = "Istifadeci movcuddur"
    }

}

goLogin.addEventListener('click', ()=>{
    window.location.href="../login/login.html"
})