import { userTypeCheck, login } from "/src/scripts/requests.js";

function openModal(){

    const headerContainer = document.querySelector('.header__container')
    const menuImage = document.querySelector('.header__menu')

    menuImage.addEventListener('click', () => {

        const modalClose = document.createElement('img')
        const headerModal = document.createElement('div')
        const buttonHome = document.createElement('button')
        const buttonRegister = document.createElement('button')
        

        modalClose.src = '/src/img/modal_close.svg'
        modalClose.alt = 'Modal Close'
        modalClose.classList.add('modal__close')

        headerModal.classList.add('header__modal')
        buttonHome.classList.add('button__white--modal') 
        buttonRegister.classList.add('button__blue--modal')
        
        buttonHome.id = 'homeButton'
        buttonRegister.id = 'registerButton'
        
        buttonHome.innerText = "Home"
        buttonRegister.innerText = "Cadastro"
        
        headerModal.append(buttonHome, buttonRegister)
        headerContainer.append(modalClose, headerModal)

        menuImage.remove()

        closeModal()

        homeAcess()

        registerAcess()

    })
}
function closeModal(){

    const headerContainer = document.querySelector('.header__container')
    const headerModal = document.querySelector('.header__modal')
    const modalClose = document.querySelector('.modal__close')

    modalClose.addEventListener('click', () => {

        const menuImage = document.createElement('img')

        menuImage.src = '/src/img/header_menu.svg'
        menuImage.alt = 'Modal Menu'
        menuImage.classList.add('header__menu')

        headerContainer.appendChild(menuImage)

        headerModal.remove()
        modalClose.remove()

        openModal()

        registerAcess()

        homeAcess()
    })
}
function homeAcess(){

    const homeButton = document.querySelectorAll('#homeButton')

    homeButton.forEach(element => {
        
        element.addEventListener('click', () => {

            window.location.replace("/index.html");
        })
    });
}
function registerAcess(){

    const registerButton = document.querySelectorAll('#registerButton')
    const registerButton2 = document.querySelector('.register__button')
        
    registerButton.forEach(element => {
        
        element.addEventListener('click', () => {

            window.location.replace("/src/pages/registerPage/register.html");
        })
    });

    registerButton2.addEventListener('click', () => {

        window.location.replace("/src/pages/registerPage/register.html");
    })
}
async function renderLogin() {

    const user = localStorage.getItem("user")
    const validate = await userTypeCheck(user)

    if(validate.is_admin){
        window.location.replace("/src/pages/adminPage/adminPage.html");
    }else if(user && !validate.is_admin){
        window.location.replace("/src/pages/userPage/userPage.html");
    }
}
async function loginForm(){
    const inputs = document.querySelectorAll('.login__input')
    const loginButton = document.querySelector('.login__button')
    const loginUser = {}
        
    loginButton.addEventListener('click', async (event) => {
        event.preventDefault()
        
        inputs.forEach(input => {
            loginUser[input.name] = input.value
        })
        const request = await login(loginUser)
        
        localStorage.setItem('user', JSON.stringify(request.token))
        arrumandoToken()
        renderLogin()
    })
}

function arrumandoToken(){
    let storage = localStorage.getItem('user')
    let newStorage1 = storage.substring(1)
    let newStorage2 = newStorage1.substring(0, newStorage1.length - 1)
    
    return localStorage.setItem('user', newStorage2)
}

openModal()
homeAcess()
registerAcess()

renderLogin()
loginForm()