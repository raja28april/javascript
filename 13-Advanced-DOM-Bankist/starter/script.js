'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

/////Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSelections = document.querySelectorAll('.section');
console.log(allSelections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//////////////////////////////////////////
// Creating and inserting elements
//.insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved function and anlaytics. <button class = "btn btn--close-cookie">Got it</button>';
message.innerHTML = 'We use cookies for improved function and anlaytics. <button class = "btn btn--close-cookie">Got it!</button>';

header.prepend(message);//prepend method adds element as first child
header.append(message);//append method adds element as its last child

// header.append(message.cloneNode(true));

header.before(message);//adds message element before the header element
header.after(message);//adds message element after the header element

//Delete Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //message.remove();
    message.parentElement.removeChild(message);
  })
///////////////////////////////////////////


