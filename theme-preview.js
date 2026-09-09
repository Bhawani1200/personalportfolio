const themeChoice = document.getElementById('theme-choice');
const themeReset = document.getElementById('theme-reset');
const previewThemes = ['ocean', 'lavender', 'mint', 'amber', 'rose'];

function previewTheme(theme) {
  if (!previewThemes.includes(theme)) theme = 'ocean';
  document.body.dataset.theme = theme;
  themeChoice.value = theme;
  try { sessionStorage.setItem('portfolio-theme-preview', theme); } catch {}
}

let savedPreview = 'ocean';
try { savedPreview = sessionStorage.getItem('portfolio-theme-preview') || 'ocean'; } catch {}
previewTheme(savedPreview);
themeChoice.addEventListener('change', () => previewTheme(themeChoice.value));
themeReset.addEventListener('click', () => previewTheme('ocean'));
