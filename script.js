const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const navItem = document.querySelector(`[data-target="${id}"]`);

      if (entry.isIntersecting) {
        // Remove active from all, then set on current
        document.querySelectorAll('#section-titles span').forEach(s => s.classList.remove('active'));
        navItem.classList.add('active');
      }
    });
  },
  {
    threshold: 0.7, // Section must be 40% visible to trigger
  }
);

document.querySelectorAll('section[id]').forEach((section) => {
  observer.observe(section);
});