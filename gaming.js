// Lets correct this
const selectedPet = localStorage.getItem('selectedPet') || '🐶';
const petName = localStorage.getItem('petName') || 'Your cute smol buddy';
document.getElementById('pet-container').textContent = selectedPet;
document.getElementById('pet-name-display').textContent = petName;
const hungerBar = document.getElementById('Hunger-level-ig');
const playfulnessBar = document.getElementById('Playfullness');
const feedBtn = document.getElementById('eating-btn');
const playBtn = document.getElementById('Playinggg');
//the inner feeding 
feedBtn.addEventListener('click', () => {
    let currentHunger = parseInt(hungerBar.value);
    if (currentHunger < 100) {
        hungerBar.value = Math.min(100, currentHunger + 15);
    }
});
// n da playing button
playBtn.addEventListener('click', () => {
    let currentPlay = parseInt(playfulnessBar.value);
    if (currentPlay < 100) {
        playfulnessBar.value = Math.min(100, currentPlay + 15);
    }
});
setInterval(() => {
    let currentHunger = parseInt(hungerBar.value);
    hungerBar.value = Math.max(0, currentHunger - 5);
    let currentPlay = parseInt(playfulnessBar.value);
    playfulnessBar.value = Math.max(0, currentPlay - 5);
}, 3000); // interval  3secs
