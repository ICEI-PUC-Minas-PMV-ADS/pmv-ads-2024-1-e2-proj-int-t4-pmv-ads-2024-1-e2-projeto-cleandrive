document.querySelectorAll('.faq-question').forEach(function (question) {
    question.addEventListener('click', function () {
        
        var answer = question.nextElementSibling;
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});