document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("art-gallery");
    const imageFolder = "gallery/"; // Change this to your actual image folder path
    const imageCount = 9; // Adjust based on the number of images available
    
    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement("img");
        img.src = `${imageFolder}art${i}.png`;
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
    
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("full-image");
    
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    modal.addEventListener("click", () => {
        modal.remove();
    });
}
