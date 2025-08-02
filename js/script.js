const userName = prompt("What is your name?");
if (userName) {
  document.getElementById("greeting").textContent = "Hi, " + userName + "!";
}

document.getElementById('contactForm').addEventListener('submit', function(event) {

    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    let valid = true;
    // Check if name is empty
    if (name.trim() === '') {
        alert('Have you forgotten your name?');
        valid = false;
    }
    // Check if email contains '@'
    if (!email.includes('@')) {
        alert('You should input \'@\'');
        valid = false;
    }

    // If valid, display the result
    if (valid) {
        document.getElementById('message-result').value = `Name: ${name}\nEmail: ${email}\nComment: ${document.getElementById('comment').value}`;
    }
});