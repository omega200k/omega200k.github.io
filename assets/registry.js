function login () {
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('passwordcreation').value;
  
    if (userID === 'admin' && password === '1234') {
        window.location.href = 'homepage.html';
    } else {
        alert('Invalid username or password');
    }
}
