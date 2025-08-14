//// progress bars
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('#skills .progress-bar');

    // Store original widths and reset to 0 initially
    progressBars.forEach(bar => {
        bar.setAttribute('data-percent', bar.style.width.replace('%', ''));
        bar.style.width = '0';
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const value = bar.getAttribute('data-percent');
                    bar.style.width = value + '%';
                });
                observer.disconnect();
            }
        });
    }, {
        threshold: 0.5 // trigger when 50% of section is visible
    });

    // Observe the #skills section
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) observer.observe(skillsSection);
});


//// video player
// Attach click event to all video trigger buttons or images
document.querySelectorAll('.btn-link, .clickable-image').forEach(el => {
  el.style.cursor = 'pointer';
  el.addEventListener('click', e => {
    e.preventDefault();

    const videoSrc = el.getAttribute('data-video-src');
    if (!videoSrc) return;

    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video');
    const source = video.querySelector('source');

    source.src = videoSrc;
    video.load();
    video.play();

    modal.style.display = 'flex';
  });
});

// Close modal when clicking outside the video
document.getElementById('video-modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    closeVideoModal();
  }
});

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('modal-video');

  video.pause();
  video.currentTime = 0;
  modal.style.display = 'none';
}
