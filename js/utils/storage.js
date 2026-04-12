// Progress data — localStorage CRUD + import/export
// Key: 'diet_progress_v1'

const STORAGE_KEY = 'diet_progress_v1';

function getProgressEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      return (data.entries || []).sort((a, b) => new Date(a.date) - new Date(b.date));
    }
  } catch (e) { /* corrupt data → fall through to seed */ }

  // First run: seed with initial InBody measurement
  const initial = { entries: PROGRESS_SEED };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  return [...PROGRESS_SEED];
}

function saveEntry(entry) {
  const entries = getProgressEntries();
  const idx = entries.findIndex(e => e.id === entry.id);
  if (idx >= 0) entries[idx] = entry;
  else          entries.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ entries }));
}

function deleteEntry(id) {
  const entries = getProgressEntries().filter(e => e.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ entries }));
}

function exportProgress() {
  const entries = getProgressEntries();
  const json    = JSON.stringify({ entries }, null, 2);
  const blob    = new Blob([json], { type: 'application/json' });
  const url     = URL.createObjectURL(blob);
  const a       = document.createElement('a');
  a.href        = url;
  a.download    = `progreso_nutricional_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importProgress(file, onDone) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.entries || !Array.isArray(data.entries)) throw new Error();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      onDone();
    } catch {
      alert('Archivo inválido. Debe ser un JSON exportado de esta app.');
    }
  };
  reader.readAsText(file);
}
