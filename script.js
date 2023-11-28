document.addEventListener('DOMContentLoaded', () => {
    // Populate the table with mockup Informationsdokumente
    populateTable();
});

function populateTable() {
    const table = document.getElementById('documentsTable');
    const mockupData = [
        { title: 'Haftpflichtversicherung', description: 'Details zur Haftpflichtversicherung' },
        { title: 'Kfz-Versicherung', description: 'Übersicht über Kfz-Versicherungsbedingungen' },
        { title: 'Lebensversicherung', description: 'Informationen zur Lebensversicherung' },
        { title: 'Unfallversicherung', description: 'Wichtige Informationen zur Unfallversicherung' },
        { title: 'Krankenversicherung', description: 'Dokument über Krankenversicherungsleistungen' }
    ];

    mockupData.forEach(doc => {
        addRowToTable(table, doc.title, doc.description);
    });
}

function addRowToTable(table, title, description) {
    const row = table.insertRow();
    const titleCell = row.insertCell(0);
    const descCell = row.insertCell(1);
    const actionCell = row.insertCell(2);

    titleCell.innerText = title;
    descCell.innerText = description;

    // Add to Cart Button with SVG
    const cartButton = document.createElement('button');
    cartButton.classList.add('add-to-cart-btn');
    cartButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/></svg>`;
    cartButton.onclick = function () { /* Function to handle add to cart */ };
    actionCell.appendChild(cartButton);
}
