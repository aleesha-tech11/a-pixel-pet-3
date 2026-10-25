const selectedPet = localStorage.getItem('selectedPet') || '🐶';
const petName = localStorage.getItem('petName') || 'Your cute smol buddy';
document.getElementById('pet-container').textContent = selectedPet;
document.getElementById('pet-name-display').textContent = petName;
const hungerBar = document.getElementById('Hunger-level-ig');
const playfulnessBar = document.getElementById('Playfullness');
const feedBtn = document.getElementById('eating-btn');
const playBtn = document.getElementById('Playinggg');
feedBtn.addEventListener('click', () => {
let currentHunger = parseInt(hungerBar.value);
if (currentHunger < 100) {
hungerBar.value = Math.min(100, currentHunger + 15);
}
});
playBtn.addEventListener('click', () => {
let currentPlay = parseInt(playfulnessBar.value);
 playfulnessBar.value = Math.min(100, currentPlay + 15);
 }
);

