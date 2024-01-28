function selam4(mesaj, ...isim) {
    return `${mesaj + " " + isim.join(",") + "!"}`;
}
console.log(selam4("Merhaba", "Enes"));
console.log(selam4("Merhaba", "Enes", "Ebrar", "Canan", "Can"));
