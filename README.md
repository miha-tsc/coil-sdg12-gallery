# COIL · SDG 12 Gallery

Skupna spletna galerija dveh dijakov o trajnostnem razvojnem cilju ZN **SDG 12 –
Odgovorna poraba in proizvodnja** (*Responsible Consumption and Production*).

Projekt je shranjen v skupnem GitHub repozitoriju in objavljen prek **GitHub Pages**.

## Struktura datotek

```
coil-sdg12-gallery/
├── index.html      – struktura in vsebina spletne strani
├── style.css       – barve, pisave, postavitev in oblikovanje (uradna rjava #BF8B2E)
├── script.js       – interaktivni kviz, filtriranje fotografij
├── README.md       – opis projekta in razdelitev dela
├── images/
│   ├── dijakA/     – 6+ lastnih fotografij dijaka A
│   └── dijakB/     – 6+ lastnih fotografij dijaka B
└── videos/         – predstavitveni videi (priporočeno: YouTube Unlinked + vdelava)
```

## Razdelitev dela (Division of work)

- **Dijak A (Student A):** SDG introduction (hero), homepage design, targets section, first gallery part (6 photos in `images/dijakA/`), presentation video.
- **Dijak B (Student B):** problem research & description ("Naša težava"), facts section, second gallery part (6 photos in `images/dijakB/`), conclusion, presentation video.
- **Together:** interactive quiz + photo filtering (`script.js`), overall look, testing and publication via GitHub Pages.

## Kako zamenjati vsebino s pravimi datotekami

1. Naloži fotografije v `images/dijakA/` in `images/dijakB/` (npr. `foto-01.jpg`).
2. V `index.html` poskrbi, da poti v `<img src="...">` ustrezajo imenom datotek.
3. Videe objavi na YouTubu z vidljivostjo **Unlisted** in v `index.html`
   zamenjaj `VIDEO_ID_A` / `VIDEO_ID_B` z ID-jema posnetkov.

## Objava prek GitHub Pages

1. Odpri repozitorij → **Settings → Pages**.
2. Pod *Build and deployment* izberi **Deploy from a branch**.
3. Izberi vejo **main** in mapo **/(root)** → **Save**.
4. Spletna stran bo dosegljiva na:
   `https.<uporabnisko-ime>.github.io/coil-sdg12-gallery/`

## Pravila sodelovanja

- Vsak dijak dela iz **svojega** GitHub računa (gesel si ne izmenjujeta).
- Ista datoteka se ne ureja hkrati na veji `main`; za sočasno urejanje uporabita ločeni veji in **Pull Requeste**.
- Vsaka spremembra ima jasen commit message (npr. *Add SDG introduction*, *Upload six edited photos*, *Create interactive quiz*).
- Redno preverita, da galerija, slike, videi in kviz delujejo.

Več o cilju: https://sdgs.un.org/goals/goal12
