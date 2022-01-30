//Image variables
var ImgName,author,contents,ImgUrl;
var files = [];
var reader;
var date = Date(Date.now());



//Image Selection Process
document.getElementById("select").onclick = function(e){
    var input = document.createElement('input');
    input.type = 'file';
    input.onchange = e =>{
        files = e.target.files;
        reader = new FileReader();
        reader.onload = function () {
            document.getElementById("myimg").src = reader.result;
        }
        reader.readAsDataURL(files[0]);
    }
    input.click();
}


//image upload
document.getElementById("upload").onclick = function() {
    ImgName = document.getElementById("namebox").value;
    author = document.getElementById("author").value;
    contents = document.getElementById("blog").value;
    var UploadTask = firebase.storage().ref('Image/'+ImgName).put(files[0]);
    UploadTask.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTranferred / snapshot.totalBytes) * 100;
    },


//error handling
    function (error) {
        alert('error in saving image')
    },


//submit image link to database
    function (){
        UploadTask.snapshot.ref.getDownloadURL().then(function(url){
            ImgUrl= url;
            firebase.database().ref('Articles/'+ImgName).set({
                Title : ImgName,
                ImgURL : ImgUrl,
                author: author,
                Body: contents,
                date: date
            });
        alert('Article Uploaded succefull!!');
        }
        );
});
}