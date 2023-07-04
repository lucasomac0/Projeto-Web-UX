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

  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("thanksto");
    button.addEventListener("click", function() {
      alert("Lucas Oliveira Macedo\nAriane Ferreira de Andrade\nNickolas Marmitt Murakami\nDisciplina de Ferramentas Web/UX.\nProfessor: Claudinei Dias.");
    });
  });