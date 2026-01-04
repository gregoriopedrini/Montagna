// --- CONFIGURAZIONE COLORI ---
const COLORI = {
    main: "#17a2ad",       // Colore principale (Teal)
    begino: "#cfc194",     // Beige/Oro (Ideale per iniziare)
    azzurro: "#a3e7d9",    // Azzurrino (Didattica?)
    arancione: "#ff5e0e",  // Arancione (Vie lunghe?)
    marrone: "#695d46",    // Marrone (Alpinismo?)
    dark: "#0f172a"        // Sfondo scuro
};

// --- IL TUO "FOGLIO EXCEL" DELLE ATTIVITÀ ---
// Qui inserisci tutte le uscite. 
// Se "data" è vuota (""), l'uscita appare nel catalogo senza data.
// Se "data" è presente (es. "11 Gen"), appare nel CALENDARIO.

const ATTIVITA = [
    // --- CALENDARIO GENNAIO (Uscite fissate) ---
    {
        id: "pania-croce",
        categoria: "calendario",
        titolo: "Pania della Croce",
        sottotitolo: "Normale dal Vallone dell'Inferno",
        data: "11 Gen",
        anno: "2026",
        // Opzione A: Prezzo fisso a partecipante (per gruppi più grandi)
        prezzo_partecipante: "100€ a testa",
        min_partecipanti: 2,
        posti_max: 3,
        difficolta: "Facile",
        impegno_fisico: "Moderato",
        ritrovo: "Piglionico (LU) ore 08:30",
        materiale: "Ramponi 12 punte, piccozza classica, imbrago, casco, una ghiera HMS.",
        descrizione: "Salita classica invernale che attraversa il Vallone dell'Inferno.",
        img_bck_color: COLORI.main,
        badge: "Ideale per iniziare"
    },
    {
        id: "pania-secca",
        categoria: "calendario",
        titolo: "Pania Secca",
        sottotitolo: "Cresta dei Denti della Pania",
        data: "17 Gen",
        anno: "2026",
         // Opzione B: Prezzo per 1 o 2 persone (per vie tecniche)
        prezzo_1: "350€",
        prezzo_2: "180€ cad.",
        min_partecipanti: 1,
        posti_max: 2,
        difficolta: "Media",
        impegno_fisico: "Moderato",
        ritrovo: "Isola Santa ore 08:30",
        materiale: "Ramponi 12 punte, piccozza classica, imbrago, casco, una ghiera HMS.",
        descrizione: "Una delle creste più belle delle Apuane. Terreno misto ed esposto. Richiesta assenza di vertigini. Fine attività metà pomeriggio.",
        img_bck_color: COLORI.main,
    },
    {
        id: "tambura",
        categoria: "calendario",
        titolo: "Monte Tambura",
        sottotitolo: "Dalla Carcaraia (Apuane)",
        data: "18 Gen",
        anno: "2026",
        // Opzione A: Prezzo fisso a partecipante (per gruppi più grandi)
        prezzo_partecipante: "80€ a testa",
        min_partecipanti: 2,
        posti_max: 6,
        difficolta: "Facile",
        impegno_fisico: "Moderato",
        ritrovo: "Lago di Gramolazzo ore 08:30",
        materiale: "Ramponi 12 punte, piccozza classica, imbrago, casco, una ghiera HMS.",
        descrizione: "Ambiente selvaggio e aspro caratterizzato dalla tipica morfologia carsica. La Tambura in inverno offre un'estetica alpina di grande respiro.",
        img_bck_color: COLORI.main,
        badge: "Ideale per iniziare"
    },
    {
        id: "pisanino",
        categoria: "calendario",
        titolo: "Monte Pisanino",
        sottotitolo: "Cresta della Mirandola",
        data: "24 Gen",
        anno: "2026",
        // Opzione B: Prezzo per 1 o 2 persone (per vie tecniche)
        prezzo_1: "450€",
        prezzo_2: "240€ cad.",
        min_partecipanti: 1,
        posti_max: 2,
        difficolta: "D-",
        impegno_fisico: "Alto",
        ritrovo: "Lago di Gramolazzo ore 07:00",
        materiale: "Ramponi 12 punte, piccozza classica, imbrago, casco, una ghiera HMS, cordino kevlar 120cm, freno, lampada frontale.",
        descrizione: "Ambiente maestoso sul re delle Apuane, una salita di gran soddisfazione lungo una delle sue creste più iconiche!.",
        img_bck_color: COLORI.main,
        
    },

    // --- CATALOGO: ALPINISMO INVERNALE (Senza data) ---
    {
        id: "canale-centrale-giovo",
        categoria: "alpinismo",
        titolo: "Canale Centrale Giovo",
        sottotitolo: "Appennino Tosco-Emiliano",
        data: "", // Vuoto perché è a catalogo
         // Opzione B: Prezzo per 1 o 2 persone (per vie tecniche)
        prezzo_1: "360€",
        prezzo_2: "190€ cad.",
        min_partecipanti: 1,
        posti_max: 2,
        difficolta: "D",
        impegno_fisico: "Medio",
        ritrovo: "Lago Santo Modenese",
        materiale: "Due piccozze, ramponi, imbrago, casco, kit autosoccorso.",
        descrizione: "Una classica salita di pendenza su neve e misto facile. Perfetta per introdursi al ripido.",
        img_bck_color: COLORI.marrone
    },

    id: "pisanino",
        categoria: "Alpinismo",
        titolo: "Monte Pisanino",
        sottotitolo: "Cresta della Mirandola",
        data: "",
        // Opzione B: Prezzo per 1 o 2 persone (per vie tecniche)
        prezzo_1: "450€",
        prezzo_2: "240€ cad.",
        min_partecipanti: 1,
        posti_max: 2,
        difficolta: "D-",
        impegno_fisico: "Alto",
        ritrovo: "Lago di Gramolazzo ore 07:00",
        materiale: "Ramponi 12 punte, piccozza classica, imbrago, casco, una ghiera HMS, cordino kevlar 120cm, freno, lampada frontale.",
        descrizione: "Ambiente maestoso sul re delle Apuane, una salita di gran soddisfazione lungo una delle sue creste più iconiche!.",
        img_bck_color: COLORI.main,

    // --- CATALOGO: VIE LUNGHE (Senza data) ---
    {
        id: "oppio-colnaghi",
        categoria: "vie-lunghe",
        titolo: "Via Oppio Colnaghi",
        sottotitolo: "Pizzo d'Uccello",
        data: "",
         // Opzione B: Prezzo per 1 o 2 persone (per vie tecniche)
        prezzo_1: "690€",
        prezzo_2: "340€ cad.",
        min_partecipanti: 1,
        posti_max: 2,
        difficolta: "V+",
        impegno_fisico: "Molto Alto",
        ritrovo: "Vincame",
        materiale: "Scarpette, imbrago, casco, lampada frontale, 2 litri di acqua",
        descrizione: "La classica delle Apuane. Una salita storica di oltre 700m di sviluppo su roccia ottima.",
        img_bck_color: COLORI.arancione
    },

    // --- CATALOGO: SELVAGGIO BLU (Trekking con data) ---
    {
        id: "selvaggio-blu-mag",
        categoria: "selvaggio-blu",
        titolo: "Selvaggio Blu",
        sottotitolo: "Sardegna - Golfo di Orosei",
        data: "28 Mar - 2 Apr", // Ha la data anche se è una categoria speciale
        anno: "2026",
        prezzo: "Da definire",
        difficolta: "",
        impegno_fisico: "Alto",
        ritrovo: "Santa Maria Navarrese",
        materiale: "",
        descrizione: "Il trekking più difficile d'Italia. 6 giorni in autonomia tra falesie a picco sul mare, calate in corda doppia e notti sotto le stelle. la logistica è ancora in definizione, contattami per avere aggiornamenti!",
        img_bck_color: COLORI.main // Usa il colore main come richiesto
    },
    
    // --- CATALOGO: DIDATTICA (Senza data) ---
    {
        id: "corso-base",
        categoria: "didattica",
        titolo: "Corso Base Alpinismo",
        sottotitolo: "Tecniche di progressione su neve",
        data: "",
        prezzo: "250€ (2 giorni)",
        difficolta: "Base",
        impegno_fisico: "Basso",
        ritrovo: "Da definire",
        materiale: "Noleggio incluso nel prezzo.",
        descrizione: "Impara l'uso di ramponi e piccozza, l'autosoccorso in valanga e la gestione della cordata.",
        img_bck_color: COLORI.azzurro
    },
 {
        id: "didattica-arrampicata",
        categoria: "didattica",
        titolo: "Didattica arrampicata e sicurezza",
        sottotitolo: "Tecniche di progressione su neve",
        data: "",
        prezzo: "100€",
        difficolta: "Base",
        impegno_fisico: "Basso",
        ritrovo: "Da definire",
        materiale: "Noleggio incluso nel prezzo.",
        descrizione: "Impara l'uso di ramponi e piccozza, l'autosoccorso in valanga e la gestione della cordata.",
        img_bck_color: COLORI.azzurro
    }
];

// --- BIO (CHI SONO) ---
const BIO = {
    titolo: "Chi Sono",
    descrizione: "Mi chiamo Gregorio Pedrini, sono un Aspirante Guida Alpina di primo livello. La montagna è la mia casa e la mia passione. Organizzo uscite su misura per portarti a scoprire le meraviglie delle Apuane e delle Alpi, con un occhio sempre attento alla sicurezza e al divertimento.",
    img: "https://raw.githubusercontent.com/gregoriopedrini/Montagna/main/iomini.jpeg"
};
