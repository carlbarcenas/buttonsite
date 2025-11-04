const button = document.querySelector('button');

button.addEventListener("click", () => {
    button.setAttribute("id", "active");

    const message = document.createElement("h1");
    message.textContent = "You are sub-lime!"
    document.appendChild(message);
})