


fetch('http://localhost:3000/api/projects').then(async data  =>  {
    return data.json();

    })
    .then(async data => {

    let projects = data
        console.log(projects)
        for(let i =0; i<= projects.length; i ++) {
          
                   
                    
                        
            
                   
        document.querySelector('.message_list').innerHTML +=  `
        <tr id="${projects[i]._id}">
            <th scope="row">${i+1}</th>
            <td>${projects[i].title}</td>
            <td>${projects[i].createdAt}</td>
           
            <td style="display: flex; flex-direction: row;">
            <button type="button" id="view"class="btn btn-outline-primary">View</button>
            <button type="button" id="edit"class="btn btn-outline-success">Edit</button>
            <button type="button" id="delete" class="btn btn-outline-danger">Delete</button>
            </td>
        </tr>

        `
} 

    });