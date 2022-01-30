document.querySelector('.leftcolumn_blog')
const postCollection = []
fetch('http://localhost:3000/api/posts').then(async data  =>  {
    return data.json();

    })
    .then(async data => {

    let articles = data
        console.log(articles)  

       
    articles.map((element)=> {
        console.log(element)
        console.log(element.title)
        document.querySelector('.leftcolumn_blog').innerHTML +=  ` 
       
            <div class="left-blog-card">        
                    <div class="image">
                        <img src="${element.photo}">
                    </div>
                        <div style="display: flex; flex-direction: row; gap: 3rem; justify-content: space-between;">
                        <h5 style=" font-size: 14px;">By: ${element.author} </h5>
                        <h5 style=" font-size: 14px;"><i> ${element.createdAt.split('T')[0]}</i></h5>
                        </div>
                        <hr>
                        <h3 style="font-weight:bold; font-size: 20px;">${element.title}</h3>
                        <p style="font-size: 18px;"> ${element.desc}</p>
            </div> 
                
            
            <!--<div style="display: flex; flex-girection: row; justify-content: flex-end; width: wrap-content;">
                    <i class="glyphicon glyphicon-user" style="font-size:24px;"></i>
                    <i class="glyphicon glyphicon-comment" style="font-size:24px;"></i>
                    <i class="glyphicon glyphicon-thumbs-up" style="font-size:24px;"></i>
                    <i class="glyphicon glyphicon-thumbs-down" style="font-size:24px;"></i>
            </div>-->
       
        `

                    
    });


    });

 
