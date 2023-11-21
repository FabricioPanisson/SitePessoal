document.addEventListener("DOMContentLoaded", function() {
    var phrases = [
        "Desenvolvedor",
        "Programador",
        "Estudante"
    ];

    var textElement = document.getElementById("dynamic-text");
    var currentPhraseIndex = 0;

    function updateText() {
        var currentPhrase = phrases[currentPhraseIndex];
        textElement.textContent = "";

        typeWriter(currentPhrase, 0);
    }

    function typeWriter(phrase, index) {
        if (index < phrase.length) {
            textElement.textContent += phrase.charAt(index);
            index++;
            setTimeout(function() {
                typeWriter(phrase, index);
            }, 100);
        } else {
            setTimeout(function() {
                eraseText();
            }, 2000);
        }
    }

    function eraseText() {
        var currentText = textElement.textContent;
        var newText = currentText.slice(0, -1);
        textElement.textContent = newText;

        if (newText.length > 0) {
            setTimeout(function() {
                eraseText();
            }, 50);
        } else {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(function() {
                updateText();
            }, 500);
        }
    }

    updateText();
});