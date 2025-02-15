document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("art-gallery");
    const imageFolder = "gallery/"; // Change this to your actual image folder path
    const imageCount = 9; // Adjust based on the number of images available // TODO Will change to adjust to gallery folder using node
    
    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement("img");
        img.src = `${imageFolder}art${i}.png`; // Based on file extension PNG by default
        img.alt = `Artwork ${i}`;
        img.classList.add("thumbnail");
        
        img.addEventListener("click", () => {
            showFullImage(img.src);
        });
        
        gallery.appendChild(img);
    }
});

function showFullImage(src) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";

    const container = document.createElement("div");
    container.classList.add("modal-container");
    container.style.padding = "20px";
    container.style.backgroundColor = "#fff";
    container.style.borderRadius = "10px";
    
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("full-image");
    img.style.width = "auto";
    img.style.maxHeight = "75vh";
    img.style.maxWidth = "100%"

    
    container.appendChild(img);
    modal.appendChild(container);
    document.body.appendChild(modal);
    
    modal.addEventListener("click", () => {
        modal.remove();
    });
}
