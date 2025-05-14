document.addEventListener("DOMContentLoaded", async function() {
    const carouselItems = document.querySelector(".carousel-items");

    try {
        const response = await fetch("Aurea/JSON/product.json"); 
        const products = await response.json();

        // Genera dinamicamente i prodotti nel carosello
        carouselItems.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `).join("");

        // Configura lo scrolling con click & drag
        let isDragging = false;
        let startX;
        let scrollLeft;

        carouselItems.addEventListener("mousedown", (e) => {
            isDragging = true;
            carouselItems.classList.add("dragging");
            startX = e.pageX - carouselItems.offsetLeft;
            scrollLeft = carouselItems.scrollLeft;
        });

        carouselItems.addEventListener("mouseleave", () => {
            isDragging = false;
            carouselItems.classList.remove("dragging");
        });

        carouselItems.addEventListener("mouseup", () => {
            isDragging = false;
            carouselItems.classList.remove("dragging");
        });

        carouselItems.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carouselItems.offsetLeft;
            const scrollAmount = (x - startX) * 2; // Movimento fluido
            carouselItems.scrollLeft = scrollLeft - scrollAmount;
        });

    } catch (error) {
        console.error("Errore nel caricamento dei prodotti!", error);
    }
});
