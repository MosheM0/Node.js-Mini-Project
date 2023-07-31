const apiHost = 'http://localhost:5000/flats';

const tableBody = document.querySelector('tbody');

init();

async function fetchFlats() {
    const res = await fetch(apiHost);
    return await res.json();
};

async function init(){
    const flats = await fetchFlats();
    fillTable(flats);
};

function fillTable(flats){
    const rows = flats.map(p => createFlatRow(p));
    tableBody.append(...rows);
};

function createFlatRow(flat){
    const rowElement = document.createElement('tr');

    const tdId = document.createElement('td');
    tdId.innerText = flat.id;

    const tdStreetName = document.createElement('td');
    tdStreetName.innerText = flat.streetName;

    const tdStreetNumber = document.createElement('td');
    tdStreetNumber.innerText = flat.streetNumber;

    const tdCity = document.createElement('td');
    tdCity.innerText = flat.city;

    rowElement.append(tdId, tdStreetName, tdStreetNumber, tdCity);

    return rowElement;
};