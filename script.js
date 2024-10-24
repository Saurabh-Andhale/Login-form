
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    
    // Basic Validation
    if (!firstName || !lastName || !email || !phone || !password) {
        alert('All fields are required');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return;
    }

    // Log form data as an object
    console.log({
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
        email: email,
        password: password
    });

    alert('Form submitted successfully!');
});
