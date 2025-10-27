// Modal

const textElements = document.querySelectorAll("h1, h2, h3,  p, a, strong");
const closeModal = document.getElementById('close__contact__me__modal');
const openModal = document.getElementById('open__contact__me__modal');
const modal = document.getElementById('contact__me__modal');
const toggleBtn = document.getElementById("theme-toggle");
const overlay = document.getElementById('overlay');
const body = document.body;

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


// Modo claro predeterminado
if (localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
}

// Aplicar el tema guardado
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "🌙";
} else {
  toggleBtn.textContent = "☀️";
}

// Cambiar al hacer clic
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "dark");

      textElements.forEach(el => {
          el.style.color = "#ffffff";
      });
  } else {
    toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "light");
      
      textElements.forEach(el => {
      el.style.color = "#111111";
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.accordion-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      item.classList.toggle('open');
    });
  });
});


// Valor en años footer

const getYear = () => {
    return new Date().getFullYear();
};

document.getElementById("year").textContent = getYear();

