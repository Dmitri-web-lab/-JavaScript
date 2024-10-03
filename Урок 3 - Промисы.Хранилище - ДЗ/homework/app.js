// Получаем элементы со страницы index.html
const addButton = document.querySelector('#addFeedback');
const nameProduct = document.querySelector('#nameProduct');
const feedback = document.querySelector('#feedback');

// Добавляем отзывы в хранилище
addButton.addEventListener('click', () => {
	let inputNameProd = nameProduct.value;
	let inputFeedback = feedback.value;
	let getFeedback = localStorage.getItem(inputNameProd);
	if (!getFeedback) { // Если введенное название есть в хранилище, то добавляет к нему отзыв
		const newFeedback = [];
		newFeedback.push(inputFeedback)
		let strTranslation = JSON.stringify(newFeedback);
		localStorage.setItem(inputNameProd, strTranslation);
		alert('Отзыв сохранен!');
	} else { // иначе создает добавляет новый продукт в хранилище и отзыв к нему
		let translationFeedback = JSON.parse(getFeedback)
		translationFeedback.push(inputFeedback);
		let stringObjectFeedback = JSON.stringify(translationFeedback);
		localStorage.setItem(inputNameProd, stringObjectFeedback);
		alert('Отзыв добавлен!');
	}
});

