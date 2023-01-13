function openModal(){

    const headerContainer = document.querySelector('.header__container')
    const menuImage = document.querySelector('.header__menu')

    menuImage.addEventListener('click', () => {

        const modalClose = document.createElement('img')
        const headerModal = document.createElement('div')
        const buttonHome = document.createElement('button')
        const buttonLogin = document.createElement('button')
        

        modalClose.src = '../img/modal_close.svg'
        modalClose.alt = 'Modal Close'
        modalClose.classList.add('modal__close')

        headerModal.classList.add('header__modal')
        buttonHome.classList.add('button__white--modal')
        buttonLogin.classList.add('button__blue--modal')
        
        buttonHome.id = 'homeButton'
        buttonLogin.id = 'loginButton'
        
        buttonHome.innerText = "Home"
        buttonLogin.innerText = "Login"

        headerModal.append(buttonHome, buttonLogin)
        headerContainer.append(modalClose, headerModal)

        menuImage.remove()

        closeModal()

        homeAcess()

        loginAcess()
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

        homeAcess()

        loginAcess()
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

function loginAcess(){

    const loginButton = document.querySelectorAll('#loginButton')
        
    loginButton.forEach(element => {
        
        element.addEventListener('click', () => {

            window.location.replace("/src/pages/login.html");
            
        })
    });
}

openModal()

homeAcess()

loginAcess()