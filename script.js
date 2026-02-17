const headlines = document.querySelectorAll('.headline');

headlines.forEach(headline => {
  headline.addEventListener('click', () => {
    const targetId = headline.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);

    if (targetContent.classList.contains('open')) {
      targetContent.classList.remove('open');
    } else {
      document.querySelectorAll('.content').forEach(c => c.classList.remove('open'));
      targetContent.classList.add('open');
    }
  });
});