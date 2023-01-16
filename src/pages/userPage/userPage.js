import { userProfile, userTypeCheck } from "/src/scripts/requests.js";

async function renderUserInfos(){

    const userList = document.querySelector('.user__box')
    const user = await userProfile()

        userList.insertAdjacentHTML('beforeend', `
            <h1 class="user_username">${user.username}</h1>
            <img class="edit__button" src="/src/img/edit_button.svg" alt="Edit Button">
            <div class="user__info">
                <p class="user__infos">Email: ${user.email}</p>
                <p class="user__infos">${user.professional_level}</p>
                <p class="user__infos">${user.kind_of_work}</p>
            </div>
        `)
        ajustInfos()
        openModal()
}
function ajustInfos(){
    
    const userInfo = document.querySelectorAll('.user__infos')

    userInfo.forEach(inf => {
        if(inf.innerText == "null"){
            inf.classList.add('hidden')
        }
    })

}
function logoutButton(){

    const logoutButton = document.querySelector('.button__logout')

    logoutButton.addEventListener('click', () => {

        localStorage.setItem("user", [])
        window.location.replace("/index.html");
    })
}

function openModal(){

    const body = document.querySelector('body')
    const editButton = document.querySelector('.edit__button')
    

    editButton.addEventListener('click', () => {
        
        body.insertAdjacentHTML('beforeend', `
            <div class="modal__userPage">
                <div class="input__container">
                    <h1 class="modal__title">Editar Perfil</h1>
                    <img class="modal__close" src="/src/img/modal_x.svg" alt="Fechar Modal">
                    <input class="modal__input" type="text" name="username" id="username" value=username>
                    <input class="modal__input" type="text" name="email" id="email" value=email>
                    <input class="modal__input" type="text" name="password" id="password" placeholder="Sua nova senha">
                    <button class="modal__button">Editar Perfil</button>
                </div>
            </div>
        `)

        closeModal()
        updateUser()
    })
}

function closeModal(){

    const closeModal = document.querySelector('.modal__close')
    const modal = document.querySelector('.modal__userPage')

    closeModal.addEventListener('click', () => {

        modal.remove()
    })
    openModal()
}

async function updateUser(){
    const user = await userProfile()
    const {username, email} = user
    const inputs = document.querySelectorAll('.modal__input')
    const modalButton = document.querySelector('.modal__button')
    const updateUser = {}
    
    inputs.forEach(input => {
        if(input.name === 'username'){
            input.value = username
        }else if(input.name === 'email'){
            input.value = email
        }
    })

    modalButton.onclick(async (event) => {
        event.preventDefault()
        
        inputs.forEach(input => {
            updateUser[input.name] = input.value
        })

        if(updateUser.email === email || updateUser.email === '') {
            delete updateUser.email
        } 
        console.log(updateUser)
    })
}

async function checkUser(){
    const user = localStorage.getItem("user")

    const validate = await userTypeCheck(user)

    if(!validate.is_admin){
    }else if(validate.is_admin){
        window.location.replace("/src/pages/adminPage/adminPage.html");
    }else{window.location.replace("/index.html");}

}

renderUserInfos()
logoutButton()
checkUser()