document.addEventListener("DOMContentLoaded",function (){
    const togglePassword = document.getElementById("togglePassword");
    const passwordFile = document.getElementById("password");

    togglePassword.addEventListener("click",function (){
        const isPasswordHidden = passwordField.type === "password";
        passwordField.type = isPasswordHidden ? "text" : "password";

        this.classList.toggle("active", isPasswordHidden);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const userInitials = 'DN';
    document.getElementById('user-initials').textContent = userInitials;
});