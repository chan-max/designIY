

function hashString(str) {
    str = String(str);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash;
}


function randomArrayItem(arr, hash) {
    const index = hashString(hash) % arr.length;
    return arr[index];
}


function randomArrayItemWithTimeHash(arr, hash) {

    hash = hash + new Date().getDate();

    const index = hashString(hash) % arr.length ;
    return arr[index];
}





export class Random {
    randomArrayItem = randomArrayItem

    randomArrayItemWithTimeHash = randomArrayItemWithTimeHash
}