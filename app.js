(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })

    const exhibitionTabs = document.querySelectorAll('.tab-btn');
    const exhibitionCategories = document.querySelectorAll('.exhibition-category');

    exhibitionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            exhibitionTabs.forEach(button => button.classList.remove('tab-active'));
            exhibitionCategories.forEach(category => category.classList.remove('exhibition-active'));

            tab.classList.add('tab-active');
            document.getElementById(tab.dataset.target).classList.add('exhibition-active');
        });
    });

    window.accessPresentation = function(type) {
        const password = prompt('Ingrese la contraseña para acceder a la presentación:');
        const hashedPassword = btoa(password);
        const correctHash = 'ZXN0dWRpYW50ZTIwMjY=';
        if (hashedPassword === correctHash) {
            // Establecer autenticación en sessionStorage
            sessionStorage.setItem('authenticated', 'true');
            if (type === 'sql') {
                window.open('presentations/sql-ingesta.html', '_blank');
            } else if (type === 'eda') {
                window.open('presentations/eda.html', '_blank');
            } else if (type === 'nlp') {
                window.open('presentations/nlp.html', '_blank');
            } else if (type === 'images') {
                window.open('presentations/images.html', '_blank');
            }
        } else {
            alert('Contraseña incorrecta. Acceso denegado.');
        }
    };
})();
