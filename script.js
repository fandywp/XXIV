window.onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
        // Menampilkan alert
        alert("haloooo");
        alert("semangat semoga balance selaluu bi🤩")
    }, 1000);
};