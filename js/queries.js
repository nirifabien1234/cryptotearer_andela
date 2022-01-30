
fetch('http://localhost:3000/api/projects')

            // headers: {Cookie: `${token}` },
            .then(function (response) {
            return response.json()
            
        }).then(function (data) {
            const projects = data.length
            document.getElementById('count_projects').innerHTML += projects
        })

fetch('http://localhost:3000/api/services')
    // method: 'POST',
    // body: new FormData(addPostForm)
    
    // headers: {Cookie: `${token}` },
    
    
.then(function (response) {
    return response.json()
    
}).then(function (data) {
    const services = data.length
    document.getElementById('count_services').innerHTML += services
})

fetch('http://localhost:3000/api/posts')
    // method: 'POST',
    // body: new FormData(addPostForm)
    
    // headers: {Cookie: `${token}` },
    
    
.then(function (response) {
    return response.json()
    
}).then(function (data) {
    const posts = data.length
    document.getElementById('count_posts').innerHTML += posts
})


fetch('http://localhost:3000/api/messages').then(async data  =>  {
    return data.json();

    })
    .then(async data => {
        
        const messages = data.length
    document.getElementById('count_messages').innerHTML += messages
    })
     
         
    


