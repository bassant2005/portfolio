
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile nav toggle (simple show/hide of the links row)
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => {
    const isOpen = links.style.display === 'flex';
    links.style.display = isOpen ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '60px';
    links.style.right = '28px';
    links.style.background = 'var(--bg)';
    links.style.border = '1px solid var(--line)';
    links.style.borderRadius = '8px';
    links.style.padding = '16px 20px';
    links.style.gap = '14px';
});
