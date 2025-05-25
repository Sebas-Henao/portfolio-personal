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
            <div class= "cards__services__button__container">
                <a href="${service.repo}" target="_blank"     class="cards__services__button">repositorio</a>
                <a href="${service.url}" target="_blank"     class="cards__services__button">visitar</a>
            </div>
        `;

        containerCard.appendChild(item);
    });
};
 
// Modal

const openModal = document.getElementById('open__contact__me__modal');
const closeModal = document.getElementById('close__contact__me__modal');
const modal = document.getElementById('contact__me__modal');
const overlay = document.getElementById('overlay');

openModal.addEventListener('click', () => {
    modal.showModal();
    overlay.style.display = 'block'; 
});

closeModal.addEventListener('click', () => {
    modal.close();
    overlay.style.display = 'none';
});

//Función copiar email

const copyText = document.getElementById('text__to__copy');
const btnCopy = document.getElementById('copy__email');
const copyIcon = document.getElementById('copy__icon')

btnCopy.addEventListener('click', (event) => {
    event.preventDefault();
    const text = copyText.textContent.trim();

    navigator.clipboard.writeText(text).then(() => {
        alert(`📋 texto copiado con éxito: ${text}`);
        copyIcon.src = '../assets/copy-check.png';

        setTimeout(() => {
            copyIcon.src = '../assets/copy.png';
        }, 2000);

    }).catch((err) => {
        console.log(`error al copiar: `, err)
    });
    

   
});

//marcar opción seleccionada
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navBar__nav__links");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const href = link.getAttribute("href");

        if (href !== "#") {
            const linkPage = href.split("/").pop(); 

            if (linkPage === currentPage) {
                link.classList.add("active");
            }
        }
    });
});

// Valor en años footer

const getYear = () => {
    return new Date().getFullYear();
};

document.getElementById("year").textContent = getYear();