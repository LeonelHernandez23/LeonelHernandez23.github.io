document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(link.href, '_blank');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const fill = document.createElement('div');
        fill.classList.add('progress-fill');
        fill.style.width = '0'; // Inicialmente en 0
        bar.appendChild(fill);

        setTimeout(() => {
            fill.style.width = `${progress}%`;
        }, 200);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("theme-toggle");
    const body = document.body;

    // Comprobar si el usuario ya tenía un modo guardado
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener("change", () => {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
});
