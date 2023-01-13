function openModal(){

    const headerContainer = document.querySelector('.header__container')
    const menuImage = document.querySelector('.header__menu')

    menuImage.addEventListener('click', () => {

        const modalClose = document.createElement('img')
        const headerModal = document.createElement('div')
        const buttonLogin = document.createElement('button')
        const buttonRegister = document.createElement('button')

        modalClose.src = './src/img/modal_close.svg'
        modalClose.alt = 'Modal Close'
        modalClose.classList.add('modal__close')

        headerModal.classList.add('header__modal')
        buttonLogin.classList.add('button__white--modal')
        buttonRegister.classList.add('button__blue--modal')

        buttonLogin.id = 'loginButton'
        buttonRegister.id = 'registerButton'

        buttonLogin.innerText = "Login"
        buttonRegister.innerText = "Cadastro"

        headerModal.append(buttonLogin, buttonRegister)
        headerContainer.append(modalClose, headerModal)

        menuImage.remove()

        closeModal()

        loginAcess()

        registerAcess()
    })

}

function closeModal(){

    const headerContainer = document.querySelector('.header__container')
    const headerModal = document.querySelector('.header__modal')
    const modalClose = document.querySelector('.modal__close')

    modalClose.addEventListener('click', () => {

        const menuImage = document.createElement('img')

        menuImage.src = './src/img/header_menu.svg'
        menuImage.alt = 'Modal Menu'
        menuImage.classList.add('header__menu')

        headerContainer.appendChild(menuImage)

        headerModal.remove()
        modalClose.remove()

        openModal()

        loginAcess()

        registerAcess()
    })

}

function loginAcess(){

    const loginButton = document.querySelectorAll('#loginButton')
        
    loginButton.forEach(element => {
        
        element.addEventListener('click', () => {

            window.location.replace("/src/pages/login.html");
            
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

openModal()

loginAcess()

registerAcess()