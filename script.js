const randomTexts = [
    "Pangeran Empatbelas",
    "Sultan Durian",
    "Raja Pisang",
    "Putri Kelapa",
    "Naga Nasi",
    "Ratu Lontong",
    "Dewa Jambu",
    "Malaikat Manggis",
    "Hantu Semangka",
    "Jin Mangga",
    "Tuan Pepaya",
    "Pangeran Nanas",
    "Sultan Sirsak",
    "Raja Jeruk",
    "Putri Anggur",
    "Naga Apel",
    "Ratu Melon",
    "Dewa Duku",
    "Malaikat Kelengkeng",
    "Hantu Jambu",
    "Jin Belimbing",
    "Tuan Salak",
    "Pangeran Rambutan",
    "Sultan Kedondong",
    "Raja Durian",
    "Putri Sawo",
    "Naga Alpukat",
    "Ratu Cermai",
    "Dewa Mentimun",
    "Malaikat Tomat",
    "Hantu Cabe",
    "Jin Wortel",
    "Tuan Terong",
    "Pangeran Kol",
    "Sultan Kacang",
    "Raja Buncis",
    "Putri Labu",
    "Naga Bayam",
    "Ratu Kangkung",
    "Dewa Singkong",
    "Malaikat Ubi",
    "Hantu Toge",
    "Jin Jengkol",
    "Tuan Pete",
    "Pangeran Cendol",
    "Sultan Es Doger",
    "Raja Martabak",
    "Putri Bakso",
    "Naga Sate",
    "Ratu Gado-Gado"
];

function generateRandomText() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== "") {
        const randomIndex = Math.floor(Math.random() * randomTexts.length);
        const outputText = randomTexts[randomIndex];
        document.getElementById('outputText').innerText = outputText;
    } else {
        document.getElementById('outputText').innerText = "Please enter some text.";
    }
}