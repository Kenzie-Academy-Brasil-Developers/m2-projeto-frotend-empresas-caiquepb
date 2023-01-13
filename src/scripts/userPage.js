function logoutButton(){

    const logoutButton = document.querySelector('.button__logout')
          
    logoutButton.addEventListener('click', () => {

        window.location.replace("/index.html");
        
    })
}

logoutButton()