document.addEventListener('DOMContentLoaded', (event) => {
    const table = document.getElementById('table');

    // Function to remove border from color input fields
    function removeBorder(event) {
        event.target.style.border = 'none';
    }

    // Function to determine text color for contrast
    function getContrastingTextColor(hexColor) {
        // Convert hex to RGB
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);
        // Calculate luminance
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        // Return black or white depending on luminance
        return luminance > 186 ? '#000000' : '#FFFFFF';
    }

    // Function to update the text and its color
    function updateColorText(event) {
        const colorInput = event.target;
        const colorValue = colorInput.value;
        const textColor = getContrastingTextColor(colorValue);
        let textElement = colorInput.nextElementSibling;

        // Create the text element if it doesn't exist
        if (!textElement || textElement.tagName !== 'P') {
            textElement = document.createElement('p');
            textElement.className = 'color-value';
            colorInput.parentNode.appendChild(textElement);
        }

        textElement.textContent = colorValue.toUpperCase();
        textElement.style.color = textColor;
        textElement.style.fontSize = '15px';
        textElement.style.marginTop = '-1.75px';
        textElement.style.fontWeight = '500';
        textElement.style.marginLeft = '-0.8px';
    }

    // Add 49 new rows to the table
    for (let i = 0; i < 49; i++) {
        const newRow = table.insertRow();
        const categoryCell = newRow.insertCell(0);
        const hexCell = newRow.insertCell(1);
        const newHexCell = newRow.insertCell(2);
        
        const categoryInput = document.createElement('input');
        categoryInput.type = 'text';
        categoryInput.className = 'input';
        
        const hexInput = document.createElement('input');
        hexInput.type = 'color';
        hexInput.className = 'color-input';
        hexInput.value = '#dddddd'; // Set default color
        hexInput.style.border = '1px solid #ccc'; // Initial border
        hexInput.style.borderRadius = '0.375rem'; // Initial border radius
        hexInput.style.background = 'none'; // Ensure no background is applied
        hexInput.addEventListener('input', removeBorder);
        hexInput.addEventListener('input', updateColorText);
        
        const newHexInput = document.createElement('input');
        newHexInput.type = 'color';
        newHexInput.className = 'color-input';
        newHexInput.value = '#dddddd'; // Set default color
        newHexInput.style.border = '1px solid #ccc'; // Initial border
        newHexInput.style.borderRadius = '0.375rem'; // Initial border radius
        newHexInput.style.background = 'none'; // Ensure no background is applied
        newHexInput.addEventListener('input', removeBorder);
        newHexInput.addEventListener('input', updateColorText);

        categoryCell.appendChild(categoryInput);
        hexCell.appendChild(hexInput);
        hexCell.style.position = 'relative'; // Ensure the text stays within the cell
        newHexCell.appendChild(newHexInput);
        newHexCell.style.position = 'relative'; // Ensure the text stays within the cell
    }

    // Add event listeners to the existing color input fields and set default value
    const existingColorInputs = document.querySelectorAll('.color-input');
    existingColorInputs.forEach(input => {
        input.value = '#dddddd'; // Set default color
        input.style.border = '1px solid #ccc'; // Initial border
        input.style.borderRadius = '0.375rem'; // Initial border radius
        input.style.background = 'none'; // Ensure no background is applied
        input.addEventListener('input', removeBorder);
        input.addEventListener('input', updateColorText);
    });
});
