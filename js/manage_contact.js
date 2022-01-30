
const token = localStorage.getItem("token")
const postCollection = []
console.log(token)
fetch('http://localhost:3000/api/messages', {headers: {Cookie: `token ${token}` }}).then(async data  =>  {
    return data.json();

    })
    .then(async message => {
        
        for(let i =0; i<= message.length; i ++) {        
        document.querySelector('.message_list').innerHTML +=  `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${message[i].subject}</td>
            
            <td>${message[i].first_name}  ${message[i].last_name}</td>
            <td>${message[i].email}</td>
            <td>${message[i].createdAt}</td>
           
            <td style="display: flex; flex-direction: row;">
            <button type="button" class="btn btn-outline-primary">View</button>
            <button type="button" class="btn btn-outline-danger">Delete</button>
            </td>
        </tr>

        `
         
    
} 

    });

 
