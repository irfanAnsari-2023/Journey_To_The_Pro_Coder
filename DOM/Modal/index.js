const modalBtn = document.querySelectorAll(".modal-btn");
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal-btn');
const modal = document.querySelector(".modal");

// Function to open the modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Function to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// Add event listeners to all buttons that open the modal
for (let i = 0; i < modalBtn.length; i++){
    modalBtn[i].addEventListener('click', openModal);

}
// Add event listeners to close button and overlay
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// Close modal when pressing the Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});