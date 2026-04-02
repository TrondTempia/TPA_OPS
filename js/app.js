const defaultData = {
  reportChip: "Havarirapport",
  title: "RSW-ANLEGG",
  subtitle: "Foreløpig teknisk rapport - Dorin CO2-kompressorsystem",
  reportType: "Forelopig / Teknisk",
  systemStatus: "⚠ Ute av drift",
  affectedSystem: "RSW-anlegg / CO2-kompressor",
  faultType: "Motorhavari - Brente viklinger",
  downtime: "~10 uker",
  criticalLevel: "critical",
  criticalText: "Kompressor havarert - ny enhet bestilt - endelig skadeomfang avklares ved oppstart",
  summaryTitle: "Oversikt over hendelsen",
  summaryText: "Det er konstatert havari pa RSW-anlegget som folge av skade i elektromotor, med brente viklinger som sannsynlig feilarsak.",
  eventP1: "Det er registrert havari pa RSW-anlegget. Teknisk vurdering tilsier at arsaken er skade i elektromotor.",
  eventP2: "Den havarerte enheten er en Dorin semihermetisk CO2-kompressor.",
  eventP3: "Ved viklingsbrudd er det etablert standard praksis a skifte komplett kompressor.",
  impact1Text: "Kompressor/enhet er satt ut av drift som folge av motorhavariet.",
  impact1Level: "danger",
  impact2Text: "Frekvensomformer kan ha blitt pafort skade eller feil som folge av den elektriske hendelsen.",
  impact2Level: "warning",
  impact3Text: "PLS og ovrig elektrisk anlegg ombord kan ha blitt pavirket av samme hendelse og ma kontrolleres ved oppstart.",
  impact3Level: "info",
  impact4Text: "Endelig skadeomfang kan forst fastslas etter montering av ny kompressor og gjennomfort test av anlegget.",
  impact4Level: "neutral",
  timeline1Title: "Ny kompressor bestilt",
  timeline1Text: "Erstatningsenhet er bestilt for havarert kompressor.",
  timeline1Tag: "Igangsatt",
  timeline1Level: "critical",
  timeline2Title: "Leveringstid kompressor",
  timeline2Text: "Oppgitt leveringstid fra leverandor.",
  timeline2Tag: "Ca. 8 uker",
  timeline2Level: "urgent",
  timeline3Title: "Frakt og montering",
  timeline3Text: "Transport til fartoy og installasjon av ny enhet.",
  timeline3Tag: "Ca. 2 uker",
  timeline3Level: "urgent",
  timeline4Title: "Samlet estimert nedetid",
  timeline4Text: "Totalt tidsestimat fra bestilling til oppstart.",
  timeline4Tag: "Ca. 10 uker",
  timeline4Level: "info",
  timeline5Title: "Full I/O-test av PLS",
  timeline5Text: "Gjennomfores etter montering. Kontroll av tilhorende funksjoner og signaler.",
  timeline5Tag: "",
  timeline5Level: "dark",
  timeline6Title: "Eventuelt skifte av PLS",
  timeline6Text: "Dersom det avdekkes skade pa PLS, skiftes denne.",
  timeline6Tag: "Lagervare",
  timeline6Level: "success",
  startupText: "Ved installasjon og ny oppstart anbefales full teknisk kontroll og funksjonstest for anlegget settes tilbake i ordinr drift.",
  conclusionEyebrow: "5 - Forelopig konklusjon",
  conclusionTitle: "Oppsummering og veien videre",
  conclusionP1: "Pa bakgrunn av registrerte feil og tekniske observasjoner vurderes havariet a ha sitt utspring i skade pa elektromotor.",
  conclusionP2: "Endelig konklusjon pa samlet skadeomfang vil forst kunne gis etter utskifting av kompressor og fullfort kontroll ved oppstart.",
  section1Title: "Hendelsesbeskrivelse",
  section2Title: "Konsekvenser",
  section3Title: "Tiltak og tidslinje",
  section4Title: "Anbefaling ved oppstart"
};

const serviceData = {
  reportChip: "Servicerapport",
  title: "KJØLEANLEGG",
  subtitle: "Foreløpig servicerapport – inspeksjon og utbedring",
  reportType: "Service / Felt",
  systemStatus: "Service utført – anlegg i prod",
  affectedSystem: "Kjøle-/CO2-system",
  faultType: "Rutineservice / lekkasjekontroll",
  downtime: "Planlagt stopp 4 timer",
  criticalLevel: "info",
  criticalText: "Service utført – funn og tiltak dokumentert – videre anbefalinger følger rapporten",
  summaryTitle: "Serviceutførelse - status",
  summaryText: "Service er gjennomført med fokus på lekkasjekontroll, trykktest og funksjonstest.",
  eventP1: "Status ved ankomst: Anlegget var i gang med redusert kapasitet og lavt trykk på sekundærkretsen.",
  eventP2: "Kunde opplyste om periodevis avvik i kjøleeffekt og mistanke om lekkasje i rørnett.",
  eventP3: "Teknisk vurdering ved ankomst bekreftet behov for nedtapning og trykktest før reparasjon.",
  impact1Text: "Funn: mindre lekkasje i tilkoplingsflens på sekundærkretsen.",
  impact1Level: "info",
  impact2Text: "Funn: tilsmussing i filter og ikke optimal tilstand i kjølevæskesystemet.",
  impact2Level: "warning",
  impact3Text: "Anbefaling: oppfølging serviceintervall og sjekk av ventiler ved neste vedlikehold.",
  impact3Level: "success",
  impact4Text: "Oppfølging: systemet er gjeninntatt drift etter kontroll og verifikasjon.",
  impact4Level: "success",
  timeline1Title: "Anlegget tappet ned og trykktestet",
  timeline1Text: "Anlegget ble tappet ned og trykktestet for å avdekke lekkasjepunkter og verifisere tetthet.",
  timeline1Tag: "Fullført",
  timeline1Level: "success",
  timeline2Title: "Lekasje funnet og reparert",
  timeline2Text: "Lekasje ble lokalisert i flens, reparert med ny pakning og testet.",
  timeline2Tag: "Fullført",
  timeline2Level: "success",
  timeline3Title: "Anlegget fylt opp og i gangkjørt",
  timeline3Text: "Systemet ble fylt opp med kjølevæske og satt i drift med tørrkjøring.",
  timeline3Tag: "Fullført",
  timeline3Level: "success",
  timeline4Title: "Funksjonstest utført",
  timeline4Text: "Kompressor, ventiler og styresystem ble testet under normal drift.",
  timeline4Tag: "Godkjent",
  timeline4Level: "info",
  timeline5Title: "Videre anbefaling",
  timeline5Text: "Gjennomfør ny kontroll etter 3 dager drift og evaluering av trykkstabilitet.",
  timeline5Tag: "Anbefaling",
  timeline5Level: "info",
  timeline6Title: "Dokumentasjon og overlevering",
  timeline6Text: "Serviceprotokoll er oppdatert og overlevert kunde med funn og tiltak.",
  timeline6Tag: "Dokumentasjon",
  timeline6Level: "info",
  startupText: "Anlegget er satt i drift etter service med godkjent trykk; følges opp med 24 timers monitorering.",
  conclusionEyebrow: "5 - Servicekonklusjon",
  conclusionTitle: "Oppsummering service",
  conclusionP1: "Service utført med identifiserte funn og gjennomførte tiltak; lekkasje utbedret og anlegg testet.",
  conclusionP2: "Anlegg satt i drift; videre anbefalinger: tett overvåking 24 timer og tilbakevisitt etter 4 uker.",
  section1Title: "Status ved ankomst",
  section2Title: "Funn og eventuelle",
  section3Title: "Tiltak og tidslinje",
  section4Title: "Anbefaling ved oppstart"
};

const STORAGE_KEY = "rswRapportDraft";
const form = document.getElementById("reportForm");
const printBtn = document.getElementById("printBtn");
const newReportBtn = document.getElementById("newReportBtn");
const loadServiceReportBtn = document.getElementById("loadServiceReportBtn");
const loadExampleBtn = document.getElementById("loadExampleBtn");
const loadServiceExampleBtn = document.getElementById("loadServiceExampleBtn");
const saveJsonBtn = document.getElementById("saveJsonBtn");
const loadJsonBtn = document.getElementById("loadJsonBtn");
const jsonFileInput = document.getElementById("jsonFileInput");
const saveStatus = document.getElementById("saveStatus");

const levelStyles = {
  critical: { icon: "🚨", className: "level-critical", tagClass: "red" },
  urgent: { icon: "⚠️", className: "level-urgent", tagClass: "orange" },
  info: { icon: "ℹ️", className: "level-info", tagClass: "blue" },
  resolved: { icon: "✅", className: "level-resolved", tagClass: "green" },
  dark: { icon: "•", className: "", tagClass: "dark" },
  success: { icon: "✅", className: "", tagClass: "green" }
};

const impactIcons = { danger: "×", warning: "!", info: "i", neutral: "?", success: "✓" };

function setStatus(message) {
  saveStatus.textContent = message;
}

function setFormValues(data) {
  Object.entries(data).forEach(([key, value]) => {
    const field = form.elements.namedItem(key);
    if (field) field.value = value ?? "";
  });
}

function getFormData() {
  return Object.fromEntries(new FormData(form).entries());
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value || "";
}

function applyLevelToCritical(level, text) {
  const container = document.getElementById("criticalInline");
  const iconEl = document.getElementById("criticalIcon");
  const textEl = document.getElementById("criticalText");
  container.classList.remove("level-critical", "level-urgent", "level-info", "level-resolved");
  const style = levelStyles[level] || levelStyles.critical;
  if (style.className) container.classList.add(style.className);
  iconEl.textContent = style.icon;
  textEl.textContent = text ? `KRITISK STATUS: ${text}` : "";
}

function renderImpacts(data) {
  const container = document.getElementById("impactList");
  container.innerHTML = "";
  for (let i = 1; i <= 4; i += 1) {
    const text = data[`impact${i}Text`];
    const level = data[`impact${i}Level`] || "neutral";
    if (!text) continue;
    const item = document.createElement("div");
    item.className = "impact-item";
    const dot = document.createElement("div");
    dot.className = `impact-dot ${level}`;
    dot.textContent = impactIcons[level] || "•";
    const textWrap = document.createElement("div");
    textWrap.textContent = text;
    item.append(dot, textWrap);
    container.appendChild(item);
  }
}

function timelineClassForLevel(level) {
  return {
    critical: "tone-red",
    urgent: "tone-orange",
    info: "tone-blue",
    success: "tone-green",
    dark: "tone-dark"
  }[level] || "tone-dark";
}

function renderTimeline(data) {
  const container = document.getElementById("timelineWrap");
  container.innerHTML = "";
  for (let i = 1; i <= 6; i += 1) {
    const title = data[`timeline${i}Title`];
    const text = data[`timeline${i}Text`];
    const tag = data[`timeline${i}Tag`];
    const level = data[`timeline${i}Level`] || "dark";
    if (!title && !text) continue;
    const item = document.createElement("div");
    item.className = `timeline-item ${timelineClassForLevel(level)}`;
    const marker = document.createElement("div");
    marker.className = "timeline-marker";
    const card = document.createElement("div");
    card.className = "timeline-card";
    const titleEl = document.createElement("div");
    titleEl.className = "timeline-title";
    titleEl.textContent = title || "";
    const textEl = document.createElement("p");
    textEl.className = "timeline-text";
    textEl.textContent = text || "";
    card.append(titleEl, textEl);
    if (tag) {
      const tagEl = document.createElement("span");
      tagEl.className = `tag ${(levelStyles[level] || levelStyles.dark).tagClass}`;
      tagEl.textContent = tag;
      card.appendChild(tagEl);
    }
    item.append(marker, card);
    container.appendChild(item);
  }
}

function renderPreview() {
  const data = getFormData();
  setText("previewChip", data.reportChip);
  setText("previewTitle", data.title);
  setText("previewSubtitle", data.subtitle);
  setText("previewReportType", data.reportType);
  setText("previewSystemStatus", data.systemStatus);
  setText("previewAffectedSystem", data.affectedSystem);
  setText("previewFaultType", data.faultType);
  setText("previewDowntime", data.downtime);
  applyLevelToCritical(data.criticalLevel, data.criticalText || "");
  setText("summaryTitle", data.summaryTitle);
  setText("summaryText", data.summaryText);
  setText("section1Title", data.section1Title || "Hendelsesbeskrivelse");
  setText("section2Title", data.section2Title || "Konsekvenser");
  setText("section3Title", data.section3Title || "Tiltak og tidslinje");
  setText("section4Title", data.section4Title || "Anbefaling ved oppstart");
  setText("eventP1", data.eventP1);
  setText("eventP2", data.eventP2);
  setText("eventP3", data.eventP3);
  renderImpacts(data);
  renderTimeline(data);
  setText("startupText", data.startupText);
  setText("conclusionEyebrow", data.conclusionEyebrow);
  setText("conclusionTitle", data.conclusionTitle);
  setText("conclusionP1", data.conclusionP1);
  setText("conclusionP2", data.conclusionP2);
}

function saveDraftToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(getFormData()));
  setStatus("Utkast lagret lokalt");
}

function resetToBlank() {
  const blank = {};
  Object.keys(defaultData).forEach((key) => {
    if (key === "reportChip") blank[key] = "Havarirapport";
    else if (key === "title") blank[key] = "RSW-ANLEGG";
    else if (key === "criticalLevel") blank[key] = "critical";
    else blank[key] = "";
  });
  setFormValues(blank);
  renderPreview();
  saveDraftToLocalStorage();
}

function resetToBlankService() {
  resetToBlank();
  const serviceBlank = { reportChip: "Servicerapport", title: "KJØLEANLEGG", criticalLevel: "info" };
  setFormValues({ ...getFormData(), ...serviceBlank });
  renderPreview();
  saveDraftToLocalStorage();
  setStatus("Ny rapport service (blank) lastet");
}

function downloadJson() {
  const payload = {
    exportedAt: new Date().toISOString(),
    app: "RSW Rapport App",
    version: 1,
    report: getFormData()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 19).replace(/[T:]/g, "-");
  a.href = url;
  a.download = `rsw-rapport-${stamp}.json`;
  a.click();
  URL.revokeObjectURL(url);
  setStatus("JSON lagret til fil");
}

function loadJsonFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(event.target.result);
      const reportData = parsed.report || parsed;
      setFormValues({ ...defaultData, ...reportData });
      renderPreview();
      saveDraftToLocalStorage();
      setStatus(`JSON lastet inn: ${file.name}`);
    } catch (error) {
      alert("Kunne ikke lese JSON-filen. Sjekk at filen er gyldig.");
      setStatus("Feil ved innlasting av JSON");
    }
  };
  reader.readAsText(file, "utf-8");
}

function init() {
  const savedDraft = localStorage.getItem(STORAGE_KEY);
  if (savedDraft) {
    try {
      setFormValues({ ...defaultData, ...JSON.parse(savedDraft) });
      renderPreview();
      setStatus("Lokalt utkast gjenopprettet");
      return;
    } catch (error) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
  setFormValues(defaultData);
  renderPreview();
  setStatus("Eksempeldata lastet");
}

form.addEventListener("input", () => {
  renderPreview();
  saveDraftToLocalStorage();
});
form.addEventListener("change", () => {
  renderPreview();
  saveDraftToLocalStorage();
});
printBtn.addEventListener("click", () => window.print());
newReportBtn.addEventListener("click", resetToBlank);
loadServiceReportBtn.addEventListener("click", resetToBlankService);
loadExampleBtn.addEventListener("click", () => {
  setFormValues(defaultData);
  renderPreview();
  saveDraftToLocalStorage();
  setStatus("Havarirapport lastet");
});
loadServiceExampleBtn.addEventListener("click", () => {
  setFormValues({ ...defaultData, ...serviceData });
  renderPreview();
  saveDraftToLocalStorage();
  setStatus("Servicerapport-data lastet");
});
saveJsonBtn.addEventListener("click", downloadJson);
loadJsonBtn.addEventListener("click", () => jsonFileInput.click());
jsonFileInput.addEventListener("change", (event) => loadJsonFile(event.target.files[0]));

init();
