const openModalButton = document.querySelector('button#open-modal');
const modal = document.querySelector('#modal')


openModalButton.addEventListener('click', openModal);

function openModal() {
  openModalButton.classList.toggle('modal-open');
  modal.classList.toggle('invisible');
}


document.addEventListener('keypress', function(event) {
  const check = openModalButton.getAttribute('class');
  if (check == 'modal-open') {
    if (event.key === 'b') {
      openModalButton.classList.toggle('modal-open');
      modal.classList.toggle('invisible'); 
    }
  }
});




