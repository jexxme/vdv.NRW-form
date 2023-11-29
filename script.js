document.addEventListener('DOMContentLoaded', () => {
    // Initialize or update the cart counter
    updateCartCounter();

    // Populate the table with Informationsdokumente
    populateTable();

    document.getElementById('cartButton').addEventListener('click', openShoppingCartModal);
});

let cartItemCount = 0; // Global variable to keep track of cart item count
let cartItems = {}; // Object to store item titles and their quantities

function populateTable() {
    const table = document.getElementById('documentsTable');
    const mockupData = [
        { "rid": "1", "title": "Haftpflichtversicherung", "description": "Details zur Haftpflichtversicherung", "category": "Auto" },
        { "rid": "2", "title": "Kfz-Versicherung", "description": "Übersicht über Kfz-Versicherungsbedingungen", "category": "Auto" },
        { "rid": "3", "title": "Lebensversicherung", "description": "Informationen zur Lebensversicherung", "category": "Lebensversicherung" },
        { "rid": "4", "title": "Unfallversicherung", "description": "Wichtige Informationen zur Unfallversicherung", "category": "Versicherung" },
        { "rid": "5", "title": "Krankenversicherung", "description": "Dokument über Krankenversicherungsleistungen", "category": "Versicherung" },
        { "rid": "6", "title": "Rechtsschutzversicherung", "description": "Details zur Rechtsschutzversicherung", "category": "Versicherung" },
        { "rid": "7", "title": "Gebäudeversicherung", "description": "Übersicht über Gebäudeversicherungspolicen", "category": "Versicherung" },
        { "rid": "8", "title": "Hausratversicherung", "description": "Informationen zur Hausratversicherung", "category": "Versicherung" },
        { "rid": "9", "title": "Berufsunfähigkeitsversicherung", "description": "Wichtige Fakten zur Berufsunfähigkeitsversicherung", "category": "Versicherung" },
        { "rid": "10", "title": "Reiseversicherung", "description": "Leitfaden für Reiseversicherungsoptionen", "category": "Versicherung" },
        { "rid": "11", "title": "Tierhalterhaftpflichtversicherung", "description": "Daten zur Tierhalterhaftpflichtversicherung", "category": "Versicherung" },
        { "rid": "12", "title": "Risikolebensversicherung", "description": "Erläuterungen zur Risikolebensversicherung", "category": "Lebensversicherung" },
        { "rid": "13", "title": "Pflegeversicherung", "description": "Übersicht über Pflegeversicherungsbedingungen", "category": "Versicherung" },
        { "rid": "14", "title": "Rentenversicherung", "description": "Informationen zur Rentenversicherung", "category": "Versicherung" },
        { "rid": "15", "title": "Gewerbeversicherung", "description": "Dokument über Gewerbeversicherungsleistungen", "category": "Versicherung" },
        { "rid": "16", "title": "Bauherrenhaftpflichtversicherung", "description": "Details zur Bauherrenhaftpflichtversicherung", "category": "Versicherung" },
        { "rid": "17", "title": "Fahrradversicherung", "description": "Übersicht über Fahrradversicherungsbedingungen", "category": "Versicherung" },
        { "rid": "18", "title": "Grundbesitzerhaftpflichtversicherung", "description": "Informationen zur Grundbesitzerhaftpflichtversicherung", "category": "Versicherung" },
        { "rid": "19", "title": "Erwerbsunfähigkeitsversicherung", "description": "Wichtige Fakten zur Erwerbsunfähigkeitsversicherung", "category": "Versicherung" },
        { "rid": "20", "title": "Reiserücktrittsversicherung", "description": "Leitfaden für Reiserücktrittsversicherungsoptionen", "category": "Versicherung" },
        { "rid": "21", "title": "Hundehaftpflichtversicherung", "description": "Daten zur Hundehaftpflichtversicherung", "category": "Versicherung" },
        { "rid": "22", "title": "Pferdehaftpflichtversicherung", "description": "Erläuterungen zur Pferdehaftpflichtversicherung", "category": "Versicherung" },
        { "rid": "23", "title": "Elementarschadenversicherung", "description": "Übersicht über Elementarschadenversicherungsbedingungen", "category": "Versicherung" },
        { "rid": "24", "title": "Betriebshaftpflichtversicherung", "description": "Informationen zur Betriebshaftpflichtversicherung", "category": "Versicherung" },
        { "rid": "25", "title": "Photovoltaikversicherung", "description": "Dokument über Photovoltaikversicherungsleistungen", "category": "Versicherung" }
    ]
        ;

    mockupData.forEach(doc => {
        addRowToTable(table, doc.rid, doc.title, doc.description);
    });
}

function addRowToTable(table, rid, title, description) {
    const row = table.insertRow();
    const idCell = row.insertCell(0)
    const checkCell = row.insertCell(1)
    const titleCell = row.insertCell(2);
    const descCell = row.insertCell(3);
    const actionCell = row.insertCell(4);
    const downloadCell = row.insertCell(5);

    idCell.style.display = 'none';
    row.id = 'r' + rid

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "chkbox1";
    checkbox.id = "cbid";

    checkCell.appendChild(checkbox)
    idCell.innerText = rid;
    titleCell.innerText = title;
    descCell.innerText = description;

    downloadCell.style.width = '24px';
    const downloadButton = document.createElement('button');
    downloadButton.id = rid
    downloadButton.classList.add('dwn-btn');
    downloadButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>`
    downloadButton.onclick = function () { fileDownload(this, table); }

    actionCell.style.width = '24px';
    checkCell.style.width = '10px';

    // Add to Cart Button with SVG
    const cartButton = document.createElement('button');
    cartButton.classList.add('add-to-cart-btn');
    cartButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <!-- SVG Path -->
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
        </svg>`;
    cartButton.onclick = function () { addToCart(title); }; // Pass title to addToCart function
    downloadCell.appendChild(downloadButton);
    actionCell.appendChild(cartButton);

}


function addToCart(itemTitle) {
    if (cartItems[itemTitle]) {
        cartItems[itemTitle]++; // Increment quantity if item already in cart
    } else {
        cartItems[itemTitle] = 1; // Add item with quantity 1 if not in cart
    }
    updateCartCounter();
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log(cartItems)
}


function updateCartCounter() {
    let totalCount = 0;
    let storedCartItems = localStorage.getItem('cartItems');
    let cartItems = storedCartItems ? JSON.parse(storedCartItems) : {};

    for (let key in cartItems) {
        totalCount += cartItems[key];
    }

    const cartCounter = document.getElementById('cartCounter');
    if (totalCount > 0) {
        cartCounter.innerText = totalCount;
        cartCounter.style.display = 'inline';
    } else {
        cartCounter.style.display = 'none';
    }
}

window.onscroll = function () { makeHeaderSticky() };

let header = document.getElementById("mainHeader");
let sticky = header.offsetTop;

function makeHeaderSticky() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function fileDownload(button, table) {
    let element = document.createElement('a');
    let buttonId = button.id;
    let filename = table.rows[buttonId].cells[3].innerText
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('Hier ist der Inhalt der Datei'));
    filetype = '.pdf'
    element.setAttribute('download', filename + filetype);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cartButton');
    const shoppingCartModal = new bootstrap.Modal(document.getElementById('shoppingCartModal'));
    cartButton.addEventListener('click', populateCartModal);
    cartButton.addEventListener('click', () => {
        // Perform additional actions if needed
        shoppingCartModal.show();
    });
});


function populateCartModal() {
    const cartItemsList = document.getElementById('cartItemsList');
    cartItemsList.innerHTML = ''; // Clear existing items

    for (let item in cartItems) {
        const quantity = cartItems[item];
        if (quantity > 0) {
            const listItem = document.createElement('div');
            listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            listItem.innerText = item;

            const badge = document.createElement('span');
            badge.classList.add('badge', 'bg-primary', 'rounded-pill');
            badge.innerText = quantity;

            listItem.appendChild(badge);
            cartItemsList.appendChild(listItem);
        }
    }
}