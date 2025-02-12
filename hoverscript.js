//This hover effect will affect anything with the ".links a" class in the css
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.05)';
        link.style.transition = 'transform 0.2s ease-in-out';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('.icon-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.2)';
        link.style.transition = 'transform 0.2s ease-in-out';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});

