const desc = document.getElementById('message').value
const btnSubmit1 =document.querySelector('.submitBtn')

document.querySelector('.article_list').addEventListener('click', (list) =>{
            list.preventDefault()
        let delButtonPressed = list.target.id == 'delete'
        let editButtonPressed = list.target.id == 'edit'
        let id = list.target.parentElement.dataset.id

        if (delButtonPressed){
            fetch(`http://localhost:3000/api/posts/${id}`, {
                method: 'DELETE',
            }).then(res => res.json())
            .then(() => location.reload())
        }

        if (editButtonPressed){
            
            fetch(`http://localhost:3000/api/posts/${id}`, {
                method: 'GET',
            }).then(res => res.json())
            .then((data) =>{
                
                document.getElementById('subject1').value = data.title
                document.getElementById('message1').textContent = data.desc
                
                
                })}
            
            
                btnSubmit1.addEventListener('click', (e) =>{
                fetch(`http://localhost:3000/api/posts/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: title,
                        desc: desc
                    })
                }).then(res => res.json())
                .then((data) => console.log(data))
            })
})