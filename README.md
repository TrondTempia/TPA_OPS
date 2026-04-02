# RSW Rapport App

Lokal HTML-app for tekniske rapporter med live forhåndsvisning, PDF-utskrift og JSON-lagring.

## Nå bygget inn

- redigerbare felter for hele rapporten
- statusvalg som styrer ikon og farge
- tidslinje med nivåvalg
- **Lagre JSON** til fil
- **Last inn JSON** fra fil
- automatisk lokalt utkast i nettleseren
- knapp for ny rapport
- knapp for eksempeldata
- utskrift til PDF

## Lokal kjøring

### Quick Start
1. Åpne `index.html` direkte i nettleser, eller
2. Bruk VS Code **Live Server**-utvidelsen:
   - Høyreklikk på `index.html` → "Open with Live Server"
   - Appen åpnes på `http://localhost:5500`

### Bruk
1. Fyll ut rapporten i venstre panel
2. Forhåndsvisningen oppdateres live til høyre
3. Trykk **Lagre JSON** for å eksportere rapportdata
4. Trykk **Last inn JSON** for å importere tidligere rapport
5. Trykk **Skriv ut PDF** for å generere PDF-versjon
6. Trykk **Ny rapport** for å starte blank mal

## Publisering til GitHub Pages

### Oppsett
1. **Opprett GitHub-repo** for prosjektet
2. **Push** alle filer (including `robots.txt` og `404.html`)
3. **Aktivér GitHub Pages**:
   - Gå til repo settings → Pages
   - Velg branch som source (f.eks. `main`)
   - Lagre

Appen vil da være tilgjengelig på `https://brukernavn.github.io/repo-navn` (eller anpasset domene)

### Testing
- Åpne siden på mobil/annen enhet for å sjekke responsivitet
- Teste alle knapper og formularer
- Prøv å lagre/laste JSON-filer
- Test PDF-utskrift

### Viktige merknader
- **Søkemotorer**: Siden er konfigurert med `robots.txt` og `meta noindex` for å unngå indeksering
- **Data-lagring**: Alt lagres lokalt i nettleserens localStorage (persisterer mellom sesjoner)
- **Offline-funksjonalitet**: Appen fungerer fullstendig offline—ingen serverkall
- **Filstørrelser**: GitHub Pages har ingen filstørrelsebegrensning for statiske sider
- **Subpath**: Hvis repo ligger under subpath (f.eks. `user.github.io/repo`), sjekk at alle relative paths virker

## JSON-format

Appen støtter både:

- eksportert format fra appen selv:

```json
{
  "exportedAt": "2026-03-31T11:00:00.000Z",
  "app": "RSW Rapport App",
  "version": 1,
  "report": {
    "title": "RSW-ANLEGG"
  }
}
```

- eller enklere format direkte med felter:

```json
{
  "title": "RSW-ANLEGG",
  "criticalLevel": "critical"
}
```

## Tips

Hvis du trykker `Ny rapport`, blir skjemaet nullstilt og dette lagres også som nytt lokalt utkast.
Hvis du vil starte helt rent, kan du også åpne appen og deretter trykke `Ny rapport` med en gang.
