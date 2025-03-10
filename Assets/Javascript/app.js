//Arrays Oversigt
//Bandnavne
const bandNavn = [
    "St. Mariæ skoles big band", 
    "Brønderslev bigband", 
    "Arosia",
    "Tim Lothar,Peter Nande og Søren Lindholt", 
    "Chris Grey & The Bluespand", 
    "Nello & The helping hand blues band", 
    "Johnny Burgin & RJ Mischo", 
    "Jacob Venndt, koncert og jam",
    "HP Lange 'Whats Cooking",
    "Max Wolff og Ib Pallesen",
    "Line Mortensen Duo",
    "Pierre Dørge & New Jungle Orchestra",
    "Blå Jazz På Ulla T",
    "Chris Andersen og Johannes Aaen",
    "Cort Lunde & Aske Stubkjær",
    "Late Night Jam",
    "Wash & Kjær",
    "Lothar, Nande og Lindholt"
];

//Band Billede
const bandImg = [
    "./Img/artist/artistSTMariaeSkolesBigBand.jpg",
    "./Img/artist/artistBronderslevBigBand.jpg",
    "./Img/artist/artistArosia.jpg",
    "./Img/artist/artistTimLotharPeterNandeSorenLindholt.jpg",
    "./Img/artist/artistChrisGreyAndTheBluesSpand.jpg",
    "./Img/artist/artistNelloAndTheHelpingHandBluesBand.jpg",
    "./Img/artist/artistJohnnyBurginAndRJMischo.jpg",
    "./Img/artist/artistJakobVenndt.jpg",
    "./Img/artist/artistHPLange.jpg",
    "./Img/artist/artistMaxWolff.jpg",
    "./Img/artist/artistLineMortensenDuo.jpg",
    "./Img/artist/artistPeirreDørgeOgNewJungleOrchestra.jpg",
    "./Img/artist/artistBlåJazzPåUllaT.jpg",
    "./Img/artist/artistChrisAndersenOgJohannesAaen.jpg",
    "./Img/artist/artistCortLundeOgAskeStubkjær.jpg",
    "./Img/artist/artistLateNightJam.jpg",
    "./Img/artist/artistWashOgKjær.jpg",
    "./Img/artist/artistLotharNadeOgLindholt.jpg"

]

//Band beskrivelser
const bandInfo =[
    "Det populære lokale skoleband med en præsentation af de unge, dygtige musikere.", 
    "Brønderslev bigband har snart eksisteret i 40år og har musiker fra hele danmark.", 
    "Dyk ned i  den rå, upolerede blues fra tiden før anden verdenskrig med tre autentiske musikere.", 
    "To af Den Blå Festivals hovednavne, mundharpespilleren RJ Mischo og guitarisen Johnny burgin.", 
    "De er tilbage det fynske funkblues band!  Siden deres sejr til Danish Blues Challenge i 2012.", 
    "I efteråret 2020 sprang Niels Nello ud som forntman og forsange for sit eget blues band.", 
    "Kan med stolthed fejre 50 års jubilæum.  Orkesteret fokusere ikke på en bestemt stilart",
    "Kom og nyd en fyraftenskoncert, når en samling rutinerede jazzmusikkere slår sig sammen.",
    "I 90'erne boede HP Lange i New Orleans. Han har taget de opskrifter fra sydstaterne til Danmark.",
    "Max Wolff kommer med rå og bramfri blues. Den karismatiske guitarist og sanger bevæger sig ind i sjælen.",
    "Sangerinden Line levere nordisk, lyrisk jazz med god energi og farverige improvisationer.",
    "New Jungle Orchestra har via orkestrets rejser verden rundt defineret en lyd og et musikals udtryk.",
    "En musikalsk oase af lokale og internationale talenter folder sig ud på scenen.",
    "Disse gutter er en duo der bringer en helt unik blanding af ragtime, countryblues og lyriske numre.",
    "Douen fortolker natur og kultur gennem en researchbaseret proces, der udvikler sig igennem musikken.",
    "Blues i en ren nydelsesform - når Sweet Marta og BigStone slipper improvisationen løs.",
    "Vi starter de traditionsrige aftener på Den Blå med de velkendte lokale legender.",
    "Åh ja, det bliver en vild aften når de tre veteraner går på! Tre af landets autentiske bluesmænd."
];

//Spillescene
const bandScene = [
    "Jazzscenen",
    "Bluesscenen Toldbod Plads",
    "Salling ROOFTOP",
    "Klostermarksskolen",
    "KaffeFair",
    "Quist Wine",
    "Center for Dansk Jazzhistorie",
    "Studenterhuset",
    "Ulla Terkelsen",
    "El Mariachi",
    "AbZalon Event Factory",
    "Duus Vinkælder",
    "John Bull Pub"

];
//Spilletid -Dette er skrevet ind som et string grundet at tallet 0 ville ikke vises i htmlen hvis det var skrevet ind som number.
const bandTid = [
    "14.00", 
    "16.00", 
    "17.00", 
    "18.00", 
    "19.00", 
    "19.30", 
    "20.00", 
    "21.00"
];

//Pris for entre
// Ville til at starte med have lavet en boolean hvor hvis true så display en pris og hvis false display Gratis. Dette valgte jeg at sortere fra grundet der er forskellige priser
//Priser bliver skrevet ind som et string istedet for number så der kan komme ,- på
const bandPris  = [
    "Gratis", 
    "40,-", 
    "50,-", 
    "100,-", 
    "150,-"
];

// Indhold fra arrays
// Hele arrayet og indholdet er opsat på denne måde fordi at der ikke er en specifik syntax til hver en af resultElement så der bilver lavet et nye resultElement for hvert band.
const resultElement = document.querySelector(".programBand");
    const band = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[0]}" alt="St. Mariæ skoles big band">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[0]}</h2>
        <p class="programUndertekst">${bandInfo[0]}</p>
        <a href="#">Spillested: ${bandScene[0]}</a>
        <p class="klokke">Kl: ${bandTid[0]}</p>
        <p class="pris">Entré pris: ${bandPris[0]}</p>
      </article>
`;
const resultElementTo = document.querySelector(".programBand");
    const bandTo = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[1]}" alt="Brønderslev bigband">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[1]}</h2>
        <p class="programUndertekst">${bandInfo[1]}</p>
        <a href="#">Spillested: ${bandScene[0]}</a>
        <p class="klokke">Kl: ${bandTid[1]}</p>
        <p class="pris">Entré pris: ${bandPris[0]}</p>
      </article>
`;
const resultElementTre = document.querySelector(".programBand");
    const bandTre = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[2]}" alt="Arosia">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[2]}</h2>
        <p class="programUndertekst">${bandInfo[2]}</p>
        <a href="#">Spillested: ${bandScene[0]}</a>
        <p class="klokke">Kl: ${bandTid[5]}</p>
        <p class="pris">Entré pris: ${bandPris[0]}</p>
      </article>
`;
const resultElementFire = document.querySelector(".programBand");
    const bandFire = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[3]}" alt="Tim Lothar,Peter Nande og Søren Lindholt">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[3]}</h2>
        <p class="programUndertekst">${bandInfo[3]}</p>
        <a href="#">Spillested: ${bandScene[1]}</a>
        <p class="klokke">Kl: ${bandTid[1]}</p>
        <p class="pris">Entré pris: ${bandPris[0]}</p>
      </article>
`;
const resultElementFem = document.querySelector(".programBand");
    const bandFem = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[4]}" alt="Chris Grey & The Bluespand">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[4]}</h2>
        <p class="programUndertekst">${bandInfo[4]}</p>
        <a href="#">Spillested: ${bandScene[1]}</a>
        <p class="klokke">Kl: ${bandTid[3]}</p>
        <p class="pris">Entré pris: ${bandPris[0]}</p>
      </article>
`;
const resultElementSeks = document.querySelector(".programBand");
    const bandSeks = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[5]}" alt="Nello & The helping hand blues band">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[5]}</h2>
        <p class="programUndertekst">${bandInfo[5]}</p>
        <a href="#">Spillested: ${bandScene[1]}</a>
        <p class="klokke">Kl: ${bandTid[6]}</p>
        <p class="pris">Entré pris: ${bandPris[0]}</p>
      </article>
`;
const resultElementSyv = document.querySelector(".programBand");
    const bandSyv = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[6]}" alt="Johnny Burgin & RJ Mischo">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[6]}</h2>
        <p class="programUndertekst">${bandInfo[6]}</p>
        <a href="#">Spillested: ${bandScene[2]}</a>
        <p class="klokke">Kl: ${bandTid[1]}</p>
        <p class="pris">Entré pris: ${bandPris[0]}</p>
      </article>
`;
const resultElementOtte = document.querySelector(".programBand");
    const bandOtte = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[7]}" alt="Jacob Venndt, koncert og jam">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[7]}</h2>
        <p class="programUndertekst">${bandInfo[7]}</p>
        <a href="#">Spillested: ${bandScene[3]}</a>
        <p class="klokke">Kl: ${bandTid[1]}</p>
        <p class="pris">Entré pris: ${bandPris[2]}</p>
      </article>
`;
const resultElementNi = document.querySelector(".programBand");
    const bandNi = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[8]}" alt="HP Lange 'Whats Cooking">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[8]}</h2>
        <p class="programUndertekst">${bandInfo[8]}</p>
        <a href="#">Spillested: ${bandScene[4]}</a>
        <p class="klokke">Kl: ${bandTid[2]}</p>
        <p class="pris">Entré pris: ${bandPris[4]}</p>
      </article>
`;
const resultElementTi = document.querySelector(".programBand");
    const bandTi = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[9]}" alt="Max Wolff og Ib Pallesen">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[9]}</h2>
        <p class="programUndertekst">${bandInfo[9]}</p>
        <a href="#">Spillested: ${bandScene[5]}</a>
        <p class="klokke">Kl: ${bandTid[4]}</p>
        <p class="pris">Entré pris: ${bandPris[0]}</p>
      </article>
`;
const resultElementElleve = document.querySelector(".programBand");
    const bandElleve = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[10]}" alt="Line Mortensen Duo">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[10]}</h2>
        <p class="programUndertekst">${bandInfo[10]}</p>
        <a href="#">Spillested: ${bandScene[6]}</a>
        <p class="klokke">Kl: ${bandTid[5]}</p>
        <p class="pris">Entré pris: ${bandPris[2]}</p>
      </article>
`;
const resultElementTolv = document.querySelector(".programBand");
    const bandTolv = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[11]}" alt="Pierre Dørge & New Jungle Orchestra">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[11]}</h2>
        <p class="programUndertekst">${bandInfo[11]}</p>
        <a href="#">Spillested: ${bandScene[7]}</a>
        <p class="klokke">Kl: ${bandTid[5]}</p>
        <p class="pris">Entré pris: ${bandPris[3]}</p>
      </article>
`;
const resultElementTretten = document.querySelector(".programBand");
    const bandTretten = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[12]}" alt="Blå Jazz På Ulla T">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[12]}</h2>
        <p class="programUndertekst">${bandInfo[12]}</p>
        <a href="#">Spillested: ${bandScene[8]}</a>
        <p class="klokke">Kl: ${bandTid[6]}</p>
        <p class="pris">Entré pris: ${bandPris[1]}</p>
      </article>
`;
const resultElementFjorten = document.querySelector(".programBand");
    const bandFjorten = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[13]}" alt="Chris Andersen og Johannes Aaen">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[13]}</h2>
        <p class="programUndertekst">${bandInfo[13]}</p>
        <a href="#">Spillested: ${bandScene[9]}</a>
        <p class="klokke">Kl: ${bandTid[6]}</p>
        <p class="pris">Entré pris: ${bandPris[0]}</p>
      </article>
`;
const resultElementFemten = document.querySelector(".programBand");
    const bandFemten = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[14]}" alt="Cort Lunde & Aske Stubkjær">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[14]}</h2>
        <p class="programUndertekst">${bandInfo[14]}</p>
        <a href="#">Spillested: ${bandScene[7]}</a>
        <p class="klokke">Kl: ${bandTid[7]}</p>
        <p class="pris">Entré pris: ${bandPris[0]}</p>
      </article>
`;
const resultElementSeksten = document.querySelector(".programBand");
    const bandSeksten = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[15]}" alt="Late Night Jam">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[15]}</h2>
        <p class="programUndertekst">${bandInfo[15]}</p>
        <a href="#">Spillested: ${bandScene[10]}</a>
        <p class="klokke">Kl: ${bandTid[7]}</p>
        <p class="pris">Entré pris: ${bandPris[2]}</p>
      </article>
`;
const resultElementSytten = document.querySelector(".programBand");
    const bandSytten = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[16]}" alt="Wash & Kjær">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[16]}</h2>
        <p class="programUndertekst">${bandInfo[16]}</p>
        <a href="#">Spillested: ${bandScene[11]}</a>
        <p class="klokke">Kl: ${bandTid[7]}</p>
        <p class="pris">Entré pris: ${bandPris[0]}</p>
      </article>
`;
const resultElementAtten = document.querySelector(".programBand");
    const bandAtten = bandNavn;
    resultElement.innerHTML +=`        
      <article class="programImg">
        <img src="${bandImg[17]}" alt="Lothar, Nande og Lindholt">
      </article>
      <article class="programTekstIndhold">
        <h2>${bandNavn[17]}</h2>
        <p class="programUndertekst">${bandInfo[11]}</p>
        <a href="#">Spillested: ${bandScene[12]}</a>
        <p class="klokke">Kl: ${bandTid[7]}</p>
        <p class="pris">Entré pris: ${bandPris[0]}</p>
      </article>
`;