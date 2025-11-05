const button = document.querySelector('button');
const body = document.querySelector('.body-container');

button.addEventListener("click", () => {
    button.setAttribute("id", "active");

    const message = document.createElement("h1");
    message.textContent = "You are"
    button.before(message);

    const sublimeContainer = document.createElement("div");
    sublimeContainer.setAttribute("class", "sublime-container");

    const message2a = document.createElement("h1");
    const message2b = document.createElement("h1");
    message2a.textContent = "sub";
    message2b.textContent = "lime!";

    message2a.style.color = 'rgba(35, 219, 41, 1)';
    message2b.style.color = 'rgba(253, 187, 45, 1)';

    message.setAttribute('class', 'part1');
    message2a.setAttribute('class', 'part2');
    message2b.setAttribute('class', 'part2');

    sublimeContainer.appendChild(message2a);
    sublimeContainer.appendChild(message2b);
    button.after(sublimeContainer);
})