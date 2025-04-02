document.addEventListener("DOMContentLoaded", () => {
    fetch("services.json")
        .then(response => response.json())
        .then(data => mostrarServicios(data))
        .catch(error => console.error("Error cargando los servicios:", error));
});

let mostrarServicios = (services) => {
    const containerCard = document.getElementById("services");

    services.forEach(service => {
        const item = document.createElement("div");
        item.classList.add("cards__services");

        item.innerHTML = `
            <img src="${service.src}" alt="${service.alt}" class="cards__services__image">
            <h3 class="cards__services__title">${service.title}</h3>
            <p class="cards__services__tech">${service.tecnologia}</p>
            <a href="${service.url}" target="_blank" class="cards__services__button">Ver más</a>
        `;

        containerCard.appendChild(item);
    });
};
 