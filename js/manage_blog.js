
// const btnSubmit1 =document.querySelector('.submitBtn')



fetch('https://api-v1-andela.herokuapp.com/api/posts').then(async data  =>  {
    return data.json();

    })
    .then(async data => {

    let articles = data
        console.log(articles)
        for(let i =0; i<= articles.length; i ++) {

        document.querySelector('.article_list').innerHTML +=  `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${articles[i].title}</td>
           
            <td data-id=${articles[i]._id} style="display: flex; flex-direction: row;">
            <button type="button"onclick="document.getElementById('id01').style.display='block'" id="edit" class="btn btn-outline-success">Edit</button>
            <button type="button" id="delete" class="btn btn-outline-danger">Delete</button>
            </td>
        </tr>

        `
}});






// document.getElementById('delete').addEventListener('click', () => {
//     fetch('https://api-v1-andela.herokuapp.com/api/posts',)
// })


