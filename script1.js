let trigger_button = document.getElementById('trigger_button');
let iframe_modal = document.getElementById('iframe_modal');
let modal_close_button = document.getElementById('modal_close_button');

isModalOpen = iframe_modal.style.display === 'flex';

iframe_modal.style.removeProperty('display');

// Functions
const openAndCloseFunction = () => {
  if (isModalOpen === false) {
    iframe_modal.style.display = 'flex';
    isModalOpen = true;
  } else {
    iframe_modal.style.removeProperty('display');
    isModalOpen = false;
  }
};

trigger_button.addEventListener('click', openAndCloseFunction);
modal_close_button.onclick = openAndCloseFunction;
