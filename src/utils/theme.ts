// Theme management functionality
export function initTheme() {
    function getTheme(): string {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme') as string;
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    function setTheme(theme: string): void {
        const html = document.documentElement;
        const icon = document.getElementById('theme-icon');
        
        if (theme === 'dark') {
            html.classList.add('dark');
            if (icon) icon.textContent = '☀️';
        } else {
            html.classList.remove('dark');
            if (icon) icon.textContent = '🌙';
        }
        
        localStorage.setItem('theme', theme);
    }

    // Initialize theme on page load
    const currentTheme = getTheme();
    setTheme(currentTheme);

    // Add theme switcher click handler
    document.getElementById('theme-switcher')?.addEventListener('click', () => {
        const currentTheme = getTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}
