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
            <h2 class="cards__services__title">${service.title}</h2>
            <p class="cards__services__tech">Tecnologías: ${service.tecnologia}</p>
            <p class="cards__services__state"><strong>Estado:</strong> ${service.state}</p>
            <a href="${service.url}" target="_blank" class="cards__services__button">Ver más</a>
        `;

        containerCard.appendChild(item);
    });
};
 