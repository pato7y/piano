document.querySelectorAll('.key').forEach(function(key) {
    key.addEventListener('click', function() {
        var note = parseFloat(key.getAttribute('data-note'));
        playNote(note);
    });
});

function playNote(freq) {
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = freq;
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(function() {
        oscillator.stop();
    }, 565); // Adjust the duration of the note here
}
