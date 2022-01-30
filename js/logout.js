document.getElementById('logout').addEventListener('click', 
async function logout() {
    localStorage.removeItem('token')
    if (true){
        await Toastify({

            text: "Logged out successfully!",
            
            duration: 3000
            
            }).showToast();
        window.location.href="../Html/login.html"
    }
})

window.addEventListener('load', 
            function checkeAnonymous(){
                const token = localStorage.getItem("token")
                if (!token){
                    window.location.href='../Html/login.html'
                }

            })
            checkeAnonymous()
