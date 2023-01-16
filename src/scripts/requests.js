async function createUser(data) {
    const user = await fetch(`http://localhost:6278/auth/register`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    .then(res => res.json())
    
    return user;
}
async function login(data){
    const user = await fetch (`http://localhost:6278/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    
    return user
}
async function listAllCompanies(){
    const company = await fetch(`http://localhost:6278/companies`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
    return company;
}
async function listCompaniesSectors(sector){
    const company = await fetch(`http://localhost:6278/companies/${sector}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
    return company;
}
async function listAllSectors(){
    const sector = await fetch(`http://localhost:6278/sectors`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return sector;
}
async function userProfile(){
    const token = localStorage.getItem("user")
    const user = await fetch(`http://localhost:6278/users/profile`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
        },  
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
    return user
}
async function listAllCoworkersDepartments(){
    const token = localStorage.getItem("user")
    const coworker = await fetch(`http://localhost:6278/users/departments/coworkers`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return coworker
}
async function listUserDepartments(){
    const token = localStorage.getItem("user")
    const department = await fetch(`http://localhost:6278/users/departments`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return department
}
async function userUpdate(data){
    const token = localStorage.getItem("user")
    const user = await fetch(`http://localhost:6278/users`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
        body: json.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return user
}
async function listAllUsers(){
    const token = localStorage.getItem("user")
    const user = await fetch(`http://localhost:6278/users`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return user;
}
async function usersOutOfWork(){
    const token = localStorage.getItem("user")
    const user = await fetch(`http://localhost:6278/admin/out_of_work`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return user;
}
async function adminUserUpdate(uuid, data){
    const token = localStorage.getItem("user")
    const user = await fetch(`http://localhost:6278/admin/update_user/${uuid}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
        body: json.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return user
}
async function deleteUser(uuid){
    const token = localStorage.getItem("user")
    const user = await fetch(`http://localhost:6278/admin/delete_user/${uuid}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return user
}
async function registerCompany(data){
    const token = localStorage.getItem("user")
    const company = await fetch(`http://localhost:6278/companies`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
        body: json.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return company
}
async function listAllDepartments(){
    const token = localStorage.getItem("user")
    const department = await fetch(`http://localhost:6278/departments`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return department
}
async function listAllCompanyDepartments(uuid){
    const token = localStorage.getItem("user")
    const department = await fetch(`http://localhost:6278/departments${uuid}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return department
}
async function createDepartment(){
    const token = localStorage.getItem("user")
    const department = await fetch(`http://localhost:6278/departments`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return department
}
async function hireEmployee(data){
    const token = localStorage.getItem("user")
    const employee = await fetch(`http://localhost:6278/departments/hire/`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return employee
}
async function fireEmployee(uuid){
    const token = localStorage.getItem("user")
    const employee = await fetch(`http://localhost:6278/departments/dismiss${uuid}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return employee
}
async function editDepartment(uuid, data){
    const token = localStorage.getItem("user")
    const department = await fetch(`http://localhost:6278/departments${uuid}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return department
}
async function deleteDepartment(uuid){
    const token = localStorage.getItem("user")
    const department = await fetch(`http://localhost:6278/departments${uuid}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return department
}
async function userTypeCheck(token){
    const user = await fetch(`http://localhost:6278/auth/validate_user`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return user
}

export{
    createUser,
    login,
    listAllCompanies,
    listCompaniesSectors,
    listAllSectors,
    userProfile,
    listAllCoworkersDepartments,
    listUserDepartments,
    userUpdate,
    listAllUsers,
    usersOutOfWork,
    adminUserUpdate,
    deleteUser,
    registerCompany,
    listAllDepartments,
    listAllCompanyDepartments,
    createDepartment,
    hireEmployee,
    fireEmployee,
    editDepartment,
    deleteDepartment,
    userTypeCheck,
}