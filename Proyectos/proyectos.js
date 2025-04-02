document.addEventListener("DOMContentLoaded", () => {
    fetch("services.json")
        .then(response => response.json())
        .then(data => response.json(data))
        .then(error => console.error("Error cargando los servicios:", error));
});

let mostrarServicios = (services) =>{
    const containerCard = document.getElementById("cards__services");
    services.forEach(service => {
        const item = document.createElement("div");
        item.classList.add("service");
        item.innerHTML = `
            <img src=${services.src}>
        `;
        containerCard.appendChild(item);
    });
}