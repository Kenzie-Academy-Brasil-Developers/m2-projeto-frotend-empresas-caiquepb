import { listAllDepartments, listAllCompanies, listAllUsers, userTypeCheck } from "/src/scripts/requests.js";

function logoutButton(){

    const logoutButton = document.querySelector('.button__logout')
          
    logoutButton.addEventListener('click', () => {

        localStorage.setItem("user", [])
        window.location.replace("/index.html");   
    })
}
async function renderAllCompanies(){
    const list = document.querySelector('.companies__list')
    const companies = await listAllCompanies()

    companies.forEach(company => {
        list.insertAdjacentHTML('beforeend', `
            <option value=${company.uuid}>${company.name}</option>
        `)
    });
}
async function renderDepartments(){

    const list = document.querySelector('.department__box')
    const departments = await listAllDepartments()

    departments.forEach(department => {
        list.insertAdjacentHTML('beforeend', `
            <li class="list__option">
                <h1 class="list__title">${department.name}</h1>
                <h3 class="list__department">${department.description}</h3>
                <p class="list__company">${department.companies.name}</p>
                <div class="list__images">
                    <img class="list__olho" src="/src/img/admin_olho.svg" alt="">
                    <img class="list__caneta" src="/src/img/admin_caneta.svg" alt="">
                    <img class="list__lixeira" src="/src/img/admin_lixeira.svg" alt="">
                </div>
            </li>
        `)
    });
}
async function renderUsers(){

    const list = document.querySelector('.user__box')
    const users = await listAllUsers()

    users.forEach(user => {
        if(!user.is_admin){
            list.insertAdjacentHTML('beforeend', `
                <li class="list__option">
                    <h1 class="list__title">${user.username}</h1>
                    <h3 class="list__department">${user.professional_level}</h3>
                    <p class="list__company">${user.kind_of_work}</p>
                    <div class="list__images">
                        <img class="list__caneta" src="/src/img/admin_caneta.svg" alt="">
                        <img class="list__lixeira" src="/src/img/admin_lixeira.svg" alt="">
                    </div>
                </li>
        `)}
    });
}

async function checkUser(){
    const user = localStorage.getItem("user")

    const validate = await userTypeCheck(user)

    if(validate.is_admin){
    }else if(!validate.is_admin){
        window.location.replace("/src/pages/userPage/userPage.html");
    }else{window.location.replace("/index.html");}

}

logoutButton()
renderAllCompanies()
renderDepartments()
renderUsers()
checkUser()