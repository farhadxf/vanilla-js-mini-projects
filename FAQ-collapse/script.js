document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('i');

      // Toggle active class on the question
      question.classList.toggle('active');

      // Toggle show class on the answer
      answer.classList.toggle('show');

      // Adjust max-height for smooth animation
      if (answer.classList.contains('show')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = 0;
      }

      // Rotate icon
      icon.style.transform = answer.classList.contains('show')
        ? 'rotate(180deg)'
        : 'rotate(0)';
    });
  });
});
