document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.fa-star');
  const submitBtn = document.getElementById('submit-btn');
  const feedbackContainer = document.querySelector('.feedback-container');
  const thankYouMessage = document.getElementById('thank-you');
  const feedbackText = document.getElementById('feedback-text');

  let rating = 0;

  stars.forEach((star) => {
    star.addEventListener('mouseover', () => {
      const currentRating = parseInt(star.getAttribute('data-rating'));
      highlightStars(currentRating);
    });

    star.addEventListener('mouseout', () => {
      highlightStars(rating);
    });

    star.addEventListener('click', () => {
      rating = parseInt(star.getAttribute('data-rating'));
      highlightStars(rating);
    });
  });

  function highlightStars(count) {
    stars.forEach((star, index) => {
      star.classList.toggle('active', index < count);
    });
  }

  submitBtn.addEventListener('click', () => {
    if (rating === 0) {
      alert('Please select a rating before submitting.');
      return;
    }

    // Here you would typically send the feedback to a server
    console.log('Rating:', rating);
    console.log('Feedback:', feedbackText.value);

    feedbackContainer.classList.add('hidden');
    thankYouMessage.classList.remove('hidden');
    thankYouMessage.classList.add('fadeIn');
  });
});
