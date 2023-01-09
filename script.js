'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// removing classes
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// adding classes
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// open modal
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// close modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// hadneling an 'Esc' keypress event
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    //! igual que arriba
    // if (!modal.classList.contains('hidden')) {
    // closeModal();
    // }
  }
});
