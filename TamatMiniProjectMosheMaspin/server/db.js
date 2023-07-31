const fs = require('fs');
const path = require('path');
const crypto = require('crypto')

const flatsPath = path.join(__dirname, 'data', 'flats.json');

function getAllDB() {
    return require('./data/flats.json');
}

function save(allDB) {
    const allDBJSON = JSON.stringify(allDB, null, 2);
    fs.writeFileSync(flatsPath, allDBJSON, 'utf8');
}


function getAllFlats() {
    return getAllDB().flats;
};

function getFlatByID(givenID) {
    return getAllFlats().find(p => p.id === givenID);
}

function insertFlat(streetName, streetNumber, city){
   const allDB = getAllDB();
   const newFlat = {
    id: crypto.randomUUID(),
    streetName,
    streetNumber,
    city,
   };
   allDB.flats.push(newFlat);
   save(allDB);
}

function deleteFlatById(givenID){
    const allDB = getAllDB();
    allDB.flats = allDB.flats.filter(p => p.id !== givenID);
    save(allDB);
    return allDB.flats;
}

module.exports = {
    getAllFlats,
    getFlatByID,
    insertFlat,
    deleteFlatById,
}