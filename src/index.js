const images = document.querySelectorAll('.img');
const modal = document.querySelector('.modal')

images.forEach(image => {
  image.addEventListener("click", () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
  })
});

const close = document.querySelector('.icon-close')

close.addEventListener('click', () => {
  modal.classList.remove('visible')
  modal.classList.add('hidden')
})