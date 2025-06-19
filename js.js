document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    // Animate all progress bars when section is visible
    document.querySelectorAll('.progress').forEach(bar => {
    const value = bar.getAttribute('data-percent');
    bar.style.width = value + '%';
});
    // Only trigger once
    observer.disconnect();
}
});
}, {
    threshold: 0.5 // trigger when 50% of section is visible
});

    // Observe the skills section
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) observer.observe(skillsSection);
});

