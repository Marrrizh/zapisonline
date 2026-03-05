const categories = [];

const addCategoryBtn = document.getElementById('add-category');
const categoryInput = document.getElementById('category-input');

function renderCategories() {
  const container = document.getElementById('categories-container');
  container.innerHTML = ''; // очищаем контейнер
  
  // Проходим по всем категориям
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    
    // Создаём блок для категории
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category-item';
    categoryDiv.innerHTML = `
      <h3>${category.name}</h3>
      <p>Услуг пока нет</p>
    `;
    
    container.appendChild(categoryDiv);
  }
};

addCategoryBtn.addEventListener('click', function() {

  const categoryName = categoryInput.value;
  if (categoryName.trim() === '') {
    alert('Введите название категории');
   return;
}


const newCategory = {
  id: Date.now(),    
  name: categoryName, 
  services: [] 
};

categories.push(newCategory);

renderCategories(); // обновить список на странице

categoryInput.value = '';

console.log('Текущие категории:', categories);

});
