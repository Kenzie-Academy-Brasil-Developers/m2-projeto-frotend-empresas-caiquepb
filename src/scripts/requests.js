export function getUser() {
    const user = JSON.parse(localStorage.getItem('user'))

    return user
}

export async function login(data){
    const loginData = await fetch ('http://localhost:6278/auth/login',{
        method:'POST',
        headers: {
            'Content-Type': 'applicatin/json'
        },
        body: JSON.stringify(data)
    })

    const loginDataJson = await loginData.json()

    if(!loginDataJson.ok) {
        console.log('toast erro')
    }else{
        console.log('toast certo')
        window.location.replace("/src/pages/userPage.html");
    }
    return loginDataJson
}