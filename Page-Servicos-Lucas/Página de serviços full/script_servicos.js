document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('#cards-grid section');

  cards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      cards.forEach(function(otherCard) {
        if (otherCard !== card) {
          otherCard.style.opacity = '0.5';
        }
      });
      card.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    });

    card.addEventListener('mouseleave', function() {
      cards.forEach(function(otherCard) {
        otherCard.style.opacity = '1';
        otherCard.style.boxShadow = 'none';
      });
    });
  });
});
