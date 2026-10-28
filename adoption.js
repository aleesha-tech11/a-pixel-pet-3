let chosenPet = '🐶';
const petButtons = document.querySelectorAll('.choosing-a-pet');
petButtons.forEach(button => {
button.addEventListener('click', () => {
chosenPet = button.textContent.trim();
 });
});
const letsGoBtn = document.getElementById('lets-go-btn');
if (letsGoBtn) {
letsGoBtn.addEventListener('click', () => {
const petNameInput = document.getElementById('pet-name-input');
const petName = petNameInput && petNameInput.value.trim() !== '' ? petNameInput.value.trim() : 'Your cute smol buddy';
localStorage.setItem('selectedPet', chosenPet);
localStorage.setItem('petName', petName);
window.location.href = 'gaming.html';
});
} 