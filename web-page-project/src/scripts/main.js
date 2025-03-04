document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar/ocultar el contenido del botón desplegable
    const dropdownButtons = document.querySelectorAll('.dropdown-button');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Cerrar el dropdown si el usuario hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-button')) {
            dropdownButtons.forEach(button => {
                const dropdownContent = button.nextElementSibling;
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            });
        }
    });
});