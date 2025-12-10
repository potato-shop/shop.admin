import Toastify from 'toastify-js';

export function showToast(message: string) {
  Toastify({
    text: message,
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: false,
    gravity: 'top', // `top` or `bottom`
    position: 'center', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: 'linear-gradient(to right, #465DFF, #7B8CFF)',
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
