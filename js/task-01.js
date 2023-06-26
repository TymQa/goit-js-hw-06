const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log('Количество категорий:' , categoryItems.length)

categoryItems.forEach((item) => {
    const title = item.querySelector('h2').textContent;
    const itemsCount = item.querySelectorAll('li').length;

    console.log(`Категория: ${title}`);
    console.log(`Количество элементов: ${itemsCount}`);
});
