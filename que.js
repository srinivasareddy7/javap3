document.getElementById('quiz-form').addEventListener('submit', function(event)
 {
    event.preventDefault(); // Prevent form submission

    const answers = {
        q1: 'A',
        q2: 'B',
    };

    let score = 0;
    const formData = new FormData(event.target);

    for (let [key, value] of formData.entries()) {
        if (answers[key] === value) 
            {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You scored ${score} out of ${Object.keys(answers).length}`;
});
