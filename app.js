// --- BASE DE DATOS DE ACORDES ---
const chordsData = {
    "A": [ { name: "A", positions: [2, 1, 0, 0] }, { name: "Am", positions: [2, 0, 0, 0] }, { name: "A7", positions: [0, 1, 0, 0] }, { name: "Amaj7", positions: [1, 1, 0, 0] } ],
    "B": [ { name: "B", positions: [4, 3, 2, 2] }, { name: "Bm", positions: [4, 2, 2, 2] }, { name: "B7", positions: [2, 3, 2, 2] }, { name: "Bb", positions: [3, 2, 1, 1] } ],
    "C": [ { name: "C", positions: [0, 0, 0, 3] }, { name: "Cm", positions: [0, 3, 3, 3] }, { name: "C7", positions: [0, 0, 0, 1] }, { name: "Cmaj7", positions: [0, 0, 0, 2] } ],
    "D": [ { name: "D", positions: [2, 2, 2, 0] }, { name: "Dm", positions: [2, 2, 1, 0] }, { name: "D7", positions: [2, 2, 2, 3] } ],
    "E": [ { name: "E", positions: [4, 4, 4, 2] }, { name: "Em", positions: [0, 4, 3, 2] }, { name: "E7", positions: [1, 2, 0, 2] } ],
    "F": [ { name: "F", positions: [2, 0, 1, 0] }, { name: "Fm", positions: [1, 0, 1, 3] }, { name: "F#m", positions: [2, 1, 2, 0] } ],
    "G": [ { name: "G", positions: [0, 2, 3, 2] }, { name: "Gm", positions: [0, 2, 3, 1] }, { name: "G7", positions: [0, 2, 1, 2] } ]
};

// --- BASE DE DATOS DE CANCIONES (Tus PDFs) ---
const songsData = [
    {
        title: "9 to 5",
        artist: "Dolly Parton",
        difficulty: "Facil",
        color: "var(--diff-easy)",
        lyrics: `[Intro] <b>G</b> (4 compases)\n\n[Verso 1]\n<b>G</b>\nTumble outta bed, and I stumble to the kitchen\nPour myself a cup of ambition\n<b>C</b>\nYawn and stretch, and try to come to life\n<b>G</b>\nJump in the shower and the blood starts pumpin'\n<b>D7</b>\nOut on the street the traffic starts jumpin'\n<b>G</b>\nWith folks like me on the job from 9 to 5\n\n[Estribillo]\n<b>G</b>\nWorkin' 9 to 5, what a way to make a livin'\n<b>C</b>                                     <b>G</b>\nBarely gettin' by, it's all takin' and no givin'\n<b>D7</b>\nIt's enough to drive you crazy if you let it!`
    },
    {
        title: "Addams Family, The",
        artist: "Vic Mizzy",
        difficulty: "Facil",
        color: "var(--diff-easy)",
        lyrics: `[Intro]\n<b>G</b>   <b>Am</b>   <b>G</b>\nBa da da doom (chasquidos)\n\n[Verso]\n<b>G</b>           <b>Am</b>             <b>D7</b>             <b>G</b>\nThey're creepy and they're kooky, mysterious and spooky\n<b>G</b>           <b>Am</b>             <b>D7</b>             <b>G</b>\nThey're all together ooky, the Addams Family\n\n<b>G</b>           <b>Am</b>             <b>D7</b>             <b>G</b>\nTheir house is a museum, when people come to see 'em\n<b>G</b>           <b>Am</b>             <b>D7</b>             <b>G</b>\nThey really are a scream, the Addams Family`
    },
    {
        title: "All I Do Is Dream of You",
        artist: "Gene Kelly",
        difficulty: "Dificil",
        color: "var(--diff-hard)",
        lyrics: `[Verso]\n<b>F</b>             <b>Bb</b>\nAll I do is dream of you the whole night through.\n<b>Bb</b>\nWith the dawn I still go on and dream of you\n<b>Bb7</b>                 <b>Eb6</b>              <b>Ebm6</b>\nYou're every thought, you're everything, you're every song I ever sing\n<b>C7</b>                  <b>F7</b>               <b>F7+5</b>\nSummer, winter, autumn and spring.`
    },
    {
        title: "All I Have to Do Is Dream",
        artist: "The Everly Brothers",
        difficulty: "Facil",
        color: "var(--diff-easy)",
        lyrics: `[Intro]\n<b>C</b>    <b>Am</b>    <b>F</b>    <b>G7</b>\nDreeeeaaam, dream, dream, dream...\n\n[Verso 1]\n<b>C</b>    <b>Am</b>    <b>F</b>      <b>G7</b>\nWhen I want you... in my arms\n<b>C</b>    <b>Am</b>    <b>F</b>      <b>G7</b>\nWhen I want you... and all your charms\n<b>C</b>    <b>Am</b>    <b>F</b>      <b>G7</b>               <b>C</b>\nWhenever I want you, all I have to do is dream...`
    },
    {
        title: "All My Loving",
        artist: "The Beatles",
        difficulty: "Medio",
        color: "var(--diff-med)",
        lyrics: `[Verso]\n<b>Dm</b>              <b>G7</b>              <b>C</b>               <b>Am</b>\nClose your eyes and I'll kiss you, tomorrow I'll miss you\n<b>F</b>           <b>Dm</b>          <b>Bb</b>    <b>G7</b>\nRemember I'll always be true\n<b>Dm</b>              <b>G7</b>              <b>C</b>               <b>Am</b>\nAnd then while I'm away, I'll write home every day\n<b>F</b>           <b>G7</b>          <b>C</b>\nAnd I'll send all my loving to you...`
    },
    {
        title: "Alone Again (Naturally)",
        artist: "Gilbert O'Sullivan",
        difficulty: "Dificil",
        color: "var(--diff-hard)",
        lyrics: `[Verso 1]\n<b>Cmaj7</b>       <b>C6</b>               <b>Em7</b>\nIn a little while from now, if I'm not feeling any less sour\n<b>Gm</b>             <b>Em7b5</b>          <b>A7</b>\nI promise myself to treat myself and visit a nearby tower...\n<b>Dm</b>             <b>Fm6</b>\nAnd climbing to the top, will throw myself off\n<b>C</b>       <b>C+</b>    <b>C6</b>       <b>F#m7b5</b>   <b>B7</b>\nIn an effort to make it clear to whoever...`
    },
    {
        title: "Amazing Grace",
        artist: "Tradicional",
        difficulty: "Facil",
        color: "var(--diff-easy)",
        lyrics: `[Verso 1]\n<b>C</b>                  <b>F</b>         <b>C</b>\nAmazing grace! How sweet the sound\n<b>C</b>                         <b>G7</b>\nThat saved a wretch like me!\n<b>C</b>                  <b>F</b>         <b>C</b>\nI once was lost, but now am found;\n<b>C</b>       <b>G7</b>        <b>C</b>\nWas blind, but now I see.`
    },
    {
        title: "Among My Souvenirs",
        artist: "Connie Francis",
        difficulty: "Dificil",
        color: "var(--diff-hard)",
        lyrics: `[Verso]\n<b>A</b>             <b>Bbdim</b> <b>Bm7</b>\nThere's nothing left for me\n<b>E7</b>             <b>F#dim</b> <b>A6</b>\nOf days that used to be\n<b>C#m7</b> <b>F#dim</b> <b>Bm7</b>   <b>E7</b>  <b>Bm7</b>  <b>E7</b>\nI live in memories... among my souvenirs.`
    },
    {
        title: "And I Love Her",
        artist: "The Beatles",
        difficulty: "Medio",
        color: "var(--diff-med)",
        lyrics: `[Verso]\n<b>Dm</b>          <b>Am</b>\nI give her all my love\n<b>Dm</b>          <b>Am</b>\nThat's all I do\n<b>Dm</b>          <b>Am</b>\nAnd if you saw my love\n<b>F</b>           <b>G7</b>      <b>Cmaj7</b>\nYou'd love her too... I love her.`
    },
    {
        title: "And I Love You So",
        artist: "Don McLean",
        difficulty: "Medio",
        color: "var(--diff-med)",
        lyrics: `[Verso 1]\n<b>G</b>             <b>Em</b>\nAnd I love you so\n<b>Am7</b>             <b>D7</b>\nThe people ask me how, how I've lived till now\n<b>G</b>              <b>Em</b>\nI tell them I don't know...\n\n[Verso 2]\n<b>Am7</b>              <b>D7</b>\nAnd yes, I know how lonely life can be\n<b>G</b>\nThe shadows follow me\n<b>Em</b>              <b>B+</b>\nAnd the night won't set me free...`
    }
];

// Elementos DOM
const navContainer = document.getElementById('root-nav');
const chordContainer = document.getElementById('chord-container');
const songListContainer = document.getElementById('song-list-container');
const modal = document.getElementById('song-modal');

// --- INICIO ---
function init() {
    renderNav();
    loadChords('A'); 
    highlightActiveButton('A');
    renderSongs();
}

// --- PESTAÑAS ---
function switchTab(tab) {
    document.querySelectorAll('.menu-tab').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-' + tab).classList.add('active');

    if(tab === 'chords') {
        document.getElementById('view-chords').style.display = 'block';
        document.getElementById('view-songs').style.display = 'none';
    } else {
        document.getElementById('view-chords').style.display = 'none';
        document.getElementById('view-songs').style.display = 'block';
    }
}

// --- ACORDES ---
function renderNav() {
    navContainer.innerHTML = '';
    Object.keys(chordsData).forEach(root => {
        const btn = document.createElement('button');
        btn.innerText = root;
        btn.className = 'nav-btn';
        btn.onclick = () => { loadChords(root); highlightActiveButton(root); };
        navContainer.appendChild(btn);
    });
}

function highlightActiveButton(activeRoot) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText === activeRoot);
    });
}

function loadChords(root) {
    chordContainer.innerHTML = '';
    chordsData[root].forEach(chord => chordContainer.appendChild(createChordCard(chord)));
}

function createChordCard(chord) {
    const card = document.createElement('div');
    card.className = 'chord-card';
    card.innerHTML = `<div class="chord-name">${chord.name}</div>`;
    card.appendChild(drawFretboard(chord.positions));
    return card;
}

function drawFretboard(positions) {
    const board = document.createElement('div');
    board.className = 'fretboard';
    const nut = document.createElement('div'); nut.className = 'nut'; board.appendChild(nut);

    for (let s = 0; s < 4; s++) {
        const stringDiv = document.createElement('div');
        stringDiv.className = 'string';
        stringDiv.style.gridColumn = s + 1;
        stringDiv.style.gridRow = "2 / span 4";
        
        for(let i=1; i<=4; i++){
            let f = document.createElement('div'); f.className='fret-line'; f.style.top = (i * 25) + "%";
            stringDiv.appendChild(f);
        }

        const pos = positions[s];
        if (pos > 0) {
            const dot = document.createElement('div'); dot.className = 'dot';
            dot.style.top = ((pos * 25) - 12.5) + "%";
            stringDiv.appendChild(dot);
        } else if (pos === 0) {
            const o = document.createElement('div'); o.innerText = "○"; o.className='status-indicator';
            stringDiv.appendChild(o);
        } else {
            const x = document.createElement('div'); x.innerText = "×"; x.className='status-indicator';
            stringDiv.appendChild(x);
        }
        board.appendChild(stringDiv);
    }
    return board;
}

// --- CANCIONES ---
function renderSongs() {
    const levels = ["Facil", "Medio", "Dificil"];
    songListContainer.innerHTML = '';

    levels.forEach(level => {
        // Filtrar y ordenar A-Z
        let songsInLevel = songsData.filter(s => s.difficulty === level);
        songsInLevel.sort((a, b) => a.title.localeCompare(b.title));

        if(songsInLevel.length > 0) {
            const title = document.createElement('h3');
            title.className = 'difficulty-title';
            title.innerText = level + " 🌺";
            songListContainer.appendChild(title);

            songsInLevel.forEach(song => {
                const item = document.createElement('div');
                item.className = 'song-item';
                item.innerHTML = `
                    <div class="song-info">
                        <h3>${song.title}</h3>
                        <p>${song.artist}</p>
                    </div>
                    <div class="badge" style="background-color: ${song.color}">${level}</div>
                `;
                item.onclick = () => openSongModal(song);
                songListContainer.appendChild(item);
            });
        }
    });
}

function openSongModal(song) {
    document.getElementById('modal-title').innerText = song.title;
    document.getElementById('modal-artist').innerText = song.artist;
    document.getElementById('modal-body').innerHTML = song.lyrics;
    modal.classList.remove('hidden');
}

function closeModal() { modal.classList.add('hidden'); }

window.onclick = function(e) { if (e.target == modal) closeModal(); }

// Arrancar
init();