const selectElement = document.querySelector('select');
const delBtn = document.querySelector('button');

initSelect();

delBtn.addEventListener('click', deleteFlat);

async function initSelect() {
    const apiUrl = 'http://localhost:5000/flats'
    const res = await fetch(apiUrl);
    const allFlats = await res.json();
    updateFlatsList(allFlats);
};

async function deleteFlat() {
    const apiUrl = 'http://localhost:5000/flats';
    const res = await fetch(apiUrl + '/' + selectElement.value, { method: 'DELETE' });
    const updatedFlatsJson = await res.json();
    console.log(res.status);
    updateFlatsList(updatedFlatsJson);
};

function updateFlatsList(data){
    selectElement.innerText = "";
    const options = data.map(p => new Option(`${p.streetName}  ${p.streetNumber}  ${p.city}`, p.id));
    selectElement.append(...options);
};
