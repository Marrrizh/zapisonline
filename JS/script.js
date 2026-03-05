const categories = [];

const addCategoryBtn = document.getElementById('add-category');
const categoryInput = document.getElementById('category-input');


addCategoryBtn.addEventListener('click', function() {

  const categoryName = categoryInput.value;
  if (categoryName.trim() === '') {
    alert('Введите название категории');
   
}


const newCategory = {
  id: Date.now(),    
  name: categoryName, 
  services: [] 
};

categories.push(newCategory);

categoryInput.value = '';

console.log('Текущие категории:', categories);

});
