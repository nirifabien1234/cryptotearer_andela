


fetch('https://api-v1-andela.herokuapp.com/api/services').then(async data  =>  {
    return data.json();

    })
    .then(async data => {

    let services = data
        console.log(services)
        for(let i =0; i<= services.length; i ++) {
          
                   
                    
                        
            
                   
        document.querySelector('.services_list').innerHTML +=  `
                    <tr id="${services[i]._id}">
                        <th scope="row">${i+1}</th>
                        <td>${services[i].title}</td>
                        <td>${services[i].createdAt}</td>
                    
                        <td style="display: flex; flex-direction: row;">
                        <button type="button" id="view"class="btn btn-outline-primary">View</button>
                        <button type="button" id="edit"class="btn btn-outline-success">Edit</button>
                        <button type="button" id="delete" class="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>

                `
} 

    });