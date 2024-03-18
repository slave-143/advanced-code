document.addEventListener('DOMContentLoaded', function () {
    // Create an audio element
    var audio = new Audio(r'C:\Users\A NAVEN KUMAR REDDY\Downloads\scott-buckley-moonlight(chosic.com).mp3'); // Replace 'your-sound-file.mp3' with the path to your sound file
    audio.loop = true; // Enable looping
    audio.volume = 0.5; // Adjust volume as needed

    // Play the audio when the page loads
    audio.play();
});
