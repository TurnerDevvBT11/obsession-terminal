function checkLogin() {
    let user = document.getElementById('user').value;
    if(user === "admin") { // You can change 'admin' to whatever code you want
        window.location.href = "https://your-final-page-link.com"; 
    } else {
        alert("ACCESS DENIED");
    }
}
