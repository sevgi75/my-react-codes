function selam(mesaj, isim) {
    return `${mesaj + " " + isim}`;
}
console.log(selam("Merhaba", "Enes"));
console.log(selam("Merhaba", "Enes", "Ebrar"));
function selam2(mesaj, isim) {
    console.log(`${mesaj + " " + isim}`);
}
selam2("Merhaba", "Enes");
let getResult = (username, points) => {
    return `Hello ${username + points}`;
};
function selam3(mesaj, isim) {
    if (!isim)
        isim = "user";
    return `${mesaj + " " + isim}`;
}
console.log(selam3("Merhaba", "Enes"));
console.log(selam3("Merhaba"));
