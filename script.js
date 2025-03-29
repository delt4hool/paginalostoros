document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Toggle
    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
    const closeBtn = document.createElement("button");
    closeBtn.innerText = "✖ Cerrar";
    closeBtn.classList.add("close-btn");
    sidebar.insertBefore(closeBtn, sidebar.firstChild);

    function openSidebar() {
        sidebar.style.left = "0";
        overlay.style.display = "block";
        menuBtn.style.display = "none"; // Oculta el botón de menú
    }
    function closeSidebar() {
        sidebar.style.left = "-300px";
        overlay.style.display = "none";
        menuBtn.style.display = "block"; // Muestra nuevamente el botón de menú
    }

    menuBtn.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);

    // Carrusel de imágenes
    document.querySelectorAll(".carousel").forEach(carousel => {
        let images = carousel.querySelectorAll("img");
        let prevBtn = document.createElement("button");
        let nextBtn = document.createElement("button");
        prevBtn.innerHTML = "&#10094;";
        nextBtn.innerHTML = "&#10095;";
        prevBtn.classList.add("prev");
        nextBtn.classList.add("next");
        carousel.appendChild(prevBtn);
        carousel.appendChild(nextBtn);
        let index = 0;

        function showImage(i) {
            images[index].classList.remove("active");
            index = (i + images.length) % images.length;
            images[index].classList.add("active");
        }

        images[0].classList.add("active");
        nextBtn.addEventListener("click", () => showImage(index + 1));
        prevBtn.addEventListener("click", () => showImage(index - 1));
    });

    // Cambiar secciones sin recargar la página
    const links = document.querySelectorAll(".sidebar a");
    const sections = document.querySelectorAll("section");
    
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            sections.forEach(section => section.classList.remove("active"));
            const target = this.getAttribute("href").substring(1);
            document.getElementById(target).classList.add("active");
            closeSidebar();
        });
    });
});