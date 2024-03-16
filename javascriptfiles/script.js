<script>
document.querySelectorAll('.key').forEach(key ={">"} {
    key.addEventListener('click', () => {
        // Get the data-note attribute value of the clicked key
        const note = key.getAttribute('data-note');
        // Get the corresponding audio element
        const audio = document.getElementById('note' + note);
        // Play the audio
        audio.play();
    })};
);
</script>