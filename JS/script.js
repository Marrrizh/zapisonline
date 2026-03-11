const categories = [];

const addCategoryBtn = document.getElementById('add-category');
const categoryInput = document.getElementById('category-input');

function renderCategories() {
  const container = document.getElementById('categories-container');
  container.innerHTML = ''; 

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];

    // Создаем блок категории
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category-item';
    
    // Заголовок категории
    const title = document.createElement('h3');
    title.textContent = category.name;
    categoryDiv.appendChild(title);
    
    // СОЗДАЕМ ФОРМУ ДЛЯ УСЛУГИ
    const serviceForm = document.createElement('div');
    serviceForm.className = 'service-form';
    
    // Поле для названия
    const serviceNameInput = document.createElement('input');
    serviceNameInput.type = 'text';
    serviceNameInput.placeholder = 'Название услуги';
    serviceNameInput.className = 'service-name';
    
    // Поле для цены
    const servicePriceInput = document.createElement('input');
    servicePriceInput.type = 'number';
    servicePriceInput.placeholder = 'Цена';
    servicePriceInput.className = 'service-price';
    
    // Поле для длительности
    const serviceDurationInput = document.createElement('input');
    serviceDurationInput.type = 'number';
    serviceDurationInput.placeholder = 'Длительность (мин)';
    serviceDurationInput.className = 'service-duration';
    serviceDurationInput.min = 5;
    serviceDurationInput.value = 30;
    
    // Кнопка
    const addServiceBtn = document.createElement('button');
    addServiceBtn.textContent = 'Добавить услугу';
    addServiceBtn.className = 'add-service';
    
    // Собираем форму
    serviceForm.appendChild(serviceNameInput);
    serviceForm.appendChild(servicePriceInput);
    serviceForm.appendChild(serviceDurationInput);
    serviceForm.appendChild(addServiceBtn);
    
    // Добавляем форму в блок категории
    categoryDiv.appendChild(serviceForm);
    
    // Контейнер для списка услуг (пока пустой)
    const servicesList = document.createElement('div');
    servicesList.className = 'services-list';
    servicesList.id = `services-${category.id}`;
    categoryDiv.appendChild(servicesList);
    
    // Добавляем блок категории в общий контейнер
    container.appendChild(categoryDiv);
  }
}



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
