document.addEventListener('DOMContentLoaded', () => {
    const AMLVbuscarButton = document.querySelector('.AMLV-search-btn');
    const AMLVnombreInput = document.getElementById('AMLV-nombre');
    const AMLVcustomAlert = document.getElementById('AMLV-customAlert');
    const AMLValertMessage = document.getElementById('AMLV-alertMessage');
    const AMLValertOkButton = document.getElementById('AMLV-alertOkButton');
    const AMLValertCloseButton = document.getElementById('AMLV-alertCloseButton');

    AMLVbuscarButton.addEventListener('click', () => {
        const nombre = AMLVnombreInput.value.trim();
        if (nombre !== "") {
            AMLValertMessage.textContent = `Su nombre es ${nombre}`;
            AMLVcustomAlert.style.display = 'block';
        } else {
            AMLValertMessage.textContent = "Por favor, ingresa un nombre para buscar.";
            AMLVcustomAlert.style.display = 'block';
        }
    });

    AMLValertOkButton.addEventListener('click', () => {
        AMLVcustomAlert.style.display = 'none';
    });

    AMLValertCloseButton.addEventListener('click', () => {
        AMLVcustomAlert.style.display = 'none';
    });
});