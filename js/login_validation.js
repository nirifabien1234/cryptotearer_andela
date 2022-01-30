const loginBtn = document.querySelector('.loginBtn')
const emailLogin = document.querySelector('#emailLogin')
const passwordLogin = document.querySelector('#passwordLogin')
const form = document.querySelector('#login-form')
const smallTag6 = document.querySelector('#small6')//from login form
const smallTag7 = document.querySelector('#small7')//from login form
const url = "https://api-v1-andela.herokuapp.com/api/user/login/"

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkUser();
    form.reset()
});

async function checkUser() {
   let emailUser = emailLogin.value.trim();
   let passwordUser = passwordLogin.value.trim();

    
     //validation for the email input
    if(emailUser === ''){
        emailLogin.className ="field errorBorder";
        smallTag6.className ="error";
        smallTag6.innerText = "Email cannot be empty!";
    }

    else {
        if( /(.+)@(.+){2,}\.(.+){2,}/.test(emailUser) ){
            emailLogin.className ='field successBorder';
            smallTag6.className ="";
            smallTag6.innerText = "";
          } else {
            // invalid email
            emailLogin.className ="field errorBorder";
            smallTag6.className ="error";
            smallTag6.innerText = "Invalid email!";
          }
        
    }

    //validation for the password input
    if(passwordUser === ''){
        passwordLogin.className ="field errorBorder";
        smallTag7.className ="error";
        smallTag7.innerText = "Password cannot be empty!";
    }else {
            // invalid password
            passwordLogin.className ="field successBorder";
            smallTag7.className ="";
            smallTag7.innerText = "";
          }
    console.log(emailUser)


   await fetch(url, {
        method:'POST',
        body:JSON.stringify({
            email: emailUser,
            password: passwordUser }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        return response.json()
    }).then(async function (data) {
        console.log(data)
        if(data._id){

           await Toastify({

                text: "Invalid credentials!",
                className: "danger",
                style: {
                    background: " green",
                },
                text: "Login Success!",
                gravity: "top", // `top` or `bottom`
                position: "center", 
                offset: {
                 // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: '5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
              },
                duration: 3000
                
                }).showToast();
        localStorage.setItem('token',  data.token)

        window.location.href = '../Html/dashboard.html';
        }else{
            Toastify({

                text: "Invalid credentials!",
                className: "danger",
                style: {
                    background: " red",
                },
                text: "Invalid credentials!",
                gravity: "top", // `top` or `bottom`
                position: "center", 
                offset: {
                 // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: '5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
              },
                duration: 3000
                
                }).showToast();
        }
        
        
    })   
}