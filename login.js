
function login(username, password) {
    if (username === "admin" && password === "1234") {
        return true;
    }

    return false;
}

function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (login(username, password)) {
        message.textContent = "Login successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Login failed!";
        message.style.color = "red";
    }
}

// Export function để Jest có thể kiểm thử
if (typeof module !== "undefined") {
    module.exports = { login };
}
