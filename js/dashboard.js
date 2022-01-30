const addPostForm = document.querySelector('.add_form')
const title = document.querySelector('#subject')
const image = document.getElementById('browseBtn')
const boddy = document.querySelector('.area')
const small1 = document.querySelector('#small1')
const small2 = document.querySelector('#small2')
const small3 = document.querySelector('#small3')
const ImgName = image.name;
const token = localStorage.getItem("token")




// document.getElementById('browseBtn').addEventListener('change', (event) => {
//     const file = event.target.files[0];
//     const storageRef = firebase.storage().ref('images/' +file.name);
//     storageRef.put(file);
// })

addPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    form.reset()
});


function checkInputs() {
    //get the values from the inputs
    const titleValue = title.value.trim();
    const boddyValue = boddy.value.trim();
    const imageValue = image.value


    
    //validation for the first name input
    if(titleValue === ''){
        title.className ="field errorBorder";
        small1.className ="error";
        small1.innerText = "Title cannot be empty!";
        
    }else {
        title.className ='field successBorder';
        small1.className ="";
        small1.innerText = "";
    }

    //validation for post image input
    if(imageValue === ''){
        image.className ="errorBorder";
        small2.className ="error";
        small2.innerText = "Please select image!";
        
    }else {
        image.className ='field successBorder';
        small2.className ="";
        small2.innerText = "";
    }

     //validation for the body input
     if(boddyValue === ''){
        boddy.className ="field errorBorder";
        small3.className ="error";
        small3.innerText = "Article content cannot be empty!";
        
    }else {
        boddy.className ='field successBorder';
        small3.className ="";
        small3.innerText = "";
    }

    console.log(titleValue)
    console.log(imageValue)
    console.log(boddyValue)
    if(titleValue !== '' && boddyValue !== '' && image !== ''){

        fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            body: new FormData(addPostForm)
            
            // headers: {Cookie: `${token}` },
            
            
        }).then(function (response) {
            return response.json()
            
        }).then(function (data) {
            console.log(data)
        })

    }else{
        alert('Please fill all text fields!')
    }
    
}



