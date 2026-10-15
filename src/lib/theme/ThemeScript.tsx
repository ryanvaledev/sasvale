export function ThemeScript() {
  const scriptContent = `
    (function() {
      try {
        var storedTheme = localStorage.getItem('sasvale-theme');
        var theme = storedTheme;
        if (!theme) {
          theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        }
        if (theme === 'light') {
          document.documentElement.setAttribute('data-theme', 'light');
          document.documentElement.classList.add('theme-light');
        } else {
          document.documentElement.setAttribute('data-theme', 'dark');
          document.documentElement.classList.remove('theme-light');
        }
      } catch (e) {}
    })();
  `;

  return (
    <script
      id="sasvale-theme-init"
      dangerouslySetInnerHTML={{ __html: scriptContent }}
    />
  );
}

export default ThemeScript;

