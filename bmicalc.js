import fs from 'fs';

export function loadJsonData(filePath){
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

//export function loadJsonData;