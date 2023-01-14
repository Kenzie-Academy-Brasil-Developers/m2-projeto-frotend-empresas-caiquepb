import { getUser, login } from "./requests.js";

function openModal(){

    const headerContainer = document.querySelector('.header__container')
    const menuImage = document.querySelector('.header__menu')

    menuImage.addEventListener('click', () => {

        const modalClose = document.createElement('img')
        const headerModal = document.createElement('div')
        const buttonHome = document.createElement('button')
        const buttonRegister = document.createElement('button')
        

        modalClose.src = '../img/modal_close.svg'
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

        menuImage.src = '../img/header_menu.svg'
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
        
    registerButton.forEach(element => {
        
        element.addEventListener('click', () => {

            window.location.replace("/src/pages/register.html");
            
        })
    });
}

function renderLogin() {
    const user = getUser()

    if(user && user.isAdm){
        window.location.replace("/src/pages/userPage.html");
    }else if(user && !user.isAdm){
        window.location.replace("/src/pages/userPage.html");
    }
}

function userPageAcess(){
    const inputs = document.querySelectorAll('.login__input')
    const loginButton = document.querySelector('.login__button')
    const loginUser = {}
        
    loginButton.addEventListener('click', async (event) => {
        event.preventDefault()
        
        inputs.forEach(input => {
            loginUser[input.name] = input.value
        })
        const request = await login(loginUser)

        localStorage.setItem('user', JSON.stringify(request))
    })
}


openModal()

homeAcess()

registerAcess()

renderLogin()

userPageAcess()