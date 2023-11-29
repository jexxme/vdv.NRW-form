document.addEventListener('DOMContentLoaded', () => {
    // Initialize or update the cart counter
    updateCartCounter();

    // Populate the table with Informationsdokumente
    populateTable();
});

let cartItemCount = 0; // Global variable to keep track of cart item count
let cartItems = {}; // Object to store item titles and their quantities

function populateTable() {
    const table = document.getElementById('documentsTable');
    const mockupData = [
        { "title": "Haftpflichtversicherung", "description": "Details zur Haftpflichtversicherung", "category": "Auto" },
        { "title": "Kfz-Versicherung", "description": "Übersicht über Kfz-Versicherungsbedingungen", "category": "Auto" },
        { "title": "Lebensversicherung", "description": "Informationen zur Lebensversicherung", "category": "Lebensversicherung" },
        { "title": "Unfallversicherung", "description": "Wichtige Informationen zur Unfallversicherung", "category": "Versicherung" },
        { "title": "Krankenversicherung", "description": "Dokument über Krankenversicherungsleistungen", "category": "Versicherung" },
        { "title": "Rechtsschutzversicherung", "description": "Details zur Rechtsschutzversicherung", "category": "Versicherung" },
        { "title": "Gebäudeversicherung", "description": "Übersicht über Gebäudeversicherungspolicen", "category": "Versicherung" },
        { "title": "Hausratversicherung", "description": "Informationen zur Hausratversicherung", "category": "Versicherung" },
        { "title": "Berufsunfähigkeitsversicherung", "description": "Wichtige Fakten zur Berufsunfähigkeitsversicherung", "category": "Versicherung" },
        { "title": "Reiseversicherung", "description": "Leitfaden für Reiseversicherungsoptionen", "category": "Versicherung" },
        { "title": "Tierhalterhaftpflichtversicherung", "description": "Daten zur Tierhalterhaftpflichtversicherung", "category": "Versicherung" },
        { "title": "Risikolebensversicherung", "description": "Erläuterungen zur Risikolebensversicherung", "category": "Lebensversicherung" },
        { "title": "Pflegeversicherung", "description": "Übersicht über Pflegeversicherungsbedingungen", "category": "Versicherung" },
        { "title": "Rentenversicherung", "description": "Informationen zur Rentenversicherung", "category": "Versicherung" },
        { "title": "Gewerbeversicherung", "description": "Dokument über Gewerbeversicherungsleistungen", "category": "Versicherung" },
        { "title": "Bauherrenhaftpflichtversicherung", "description": "Details zur Bauherrenhaftpflichtversicherung", "category": "Versicherung" },
        { "title": "Fahrradversicherung", "description": "Übersicht über Fahrradversicherungsbedingungen", "category": "Versicherung" },
        { "title": "Grundbesitzerhaftpflichtversicherung", "description": "Informationen zur Grundbesitzerhaftpflichtversicherung", "category": "Versicherung" },
        { "title": "Erwerbsunfähigkeitsversicherung", "description": "Wichtige Fakten zur Erwerbsunfähigkeitsversicherung", "category": "Versicherung" },
        { "title": "Reiserücktrittsversicherung", "description": "Leitfaden für Reiserücktrittsversicherungsoptionen", "category": "Versicherung" },
        { "title": "Hundehaftpflichtversicherung", "description": "Daten zur Hundehaftpflichtversicherung", "category": "Versicherung" },
        { "title": "Pferdehaftpflichtversicherung", "description": "Erläuterungen zur Pferdehaftpflichtversicherung", "category": "Versicherung" },
        { "title": "Elementarschadenversicherung", "description": "Übersicht über Elementarschadenversicherungsbedingungen", "category": "Versicherung" },
        { "title": "Betriebshaftpflichtversicherung", "description": "Informationen zur Betriebshaftpflichtversicherung", "category": "Versicherung" },
        { "title": "Photovoltaikversicherung", "description": "Dokument über Photovoltaikversicherungsleistungen", "category": "Versicherung" }
    ]
        ;

    mockupData.forEach(doc => {
        addRowToTable(table, doc.title, doc.description);
    });
}

function addRowToTable(table, title, description) {
    const row = table.insertRow();
    const checkCell = row.insertCell(0)
    const titleCell = row.insertCell(1);
    const descCell = row.insertCell(2);
    const actionCell = row.insertCell(3);
    const downloadCell = row.insertCell(4);


    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "chkbox1";
    checkbox.id = "cbid";

    checkCell.appendChild(checkbox)
    titleCell.innerText = title;
    descCell.innerText = description;

    downloadCell.style.width = '24px';
    const downloadButton = document.createElement('button');
    downloadButton.classList.add('dwn-btn');
    downloadButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>`

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

var header = document.getElementById("mainHeader");
var sticky = header.offsetTop;

function makeHeaderSticky() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

