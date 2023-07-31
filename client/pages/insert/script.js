const apiHost = 'http://localhost:5000';
const form = document.querySelector('form');

form.addEventListener('submit', requestInsertNewFlat);

async function requestInsertNewFlat(event) {
    event.preventDefault();
    

    const body = JSON.stringify({
        streetName: form['StreetName-name'].value,
        streetNumber: Number(form['StreetNumber-name'].value),
        city: form['city-name'].value
    });

    const res = await fetch(`${apiHost}/flats`, {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' }
    });
    console.log(res.status);
    console.log('flat was inserted successfully');
    form.reset();
};