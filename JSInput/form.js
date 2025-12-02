    const myForm = document.getElementById('myForm');
    const myInput = document.getElementById('myInput');
    const displayTextDiv = document.getElementById('displayText');

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputValue = myInput.value;
        displayTextDiv.textContent = inputValue;
    });