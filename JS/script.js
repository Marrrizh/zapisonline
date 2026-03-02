
const addCategoryBtn = document.getElementById('add-category');

addCategoryBtn.addEventListener('click', function() {
  // Находим блок услуг
  const serviceBlock = document.querySelector('.service');
  // Убираем скрытие
  serviceBlock.hidden = false;
});