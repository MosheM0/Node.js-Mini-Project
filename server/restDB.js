
const fs = require('fs');
const path = require('path');

const sampleData = require('./sample/flats.json');
const dbJsonPath = path.join(__dirname,'data','flats.json');

const dbJsonContent = JSON.stringify(sampleData, null, 2);
fs.writeFileSync(dbJsonPath,dbJsonContent,'utf-8');
