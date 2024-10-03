const outputFeedback = document.querySelector('.outputFeedback');
let unID = 1;

// Создаем заголовки добавленных продуктов
for (let i = 0; i < localStorage.length; i++) {
	let keyStorage = localStorage.key(i);
	outputFeedback.insertAdjacentHTML('beforeend', `
	<div class="container">
	<h1 class="titleFeedback">${keyStorage}</h1>
	<div id="${unID}"></div>
	</div>
	`);
	unID++; // Присвоение уникального идентификатора
}

// Создаем отзывы и кнопки для их удаления
const titleFeedback = document.querySelectorAll('.titleFeedback');

titleFeedback.forEach(element => {
	element.addEventListener('click', (event) => {
		let nameProd = event.target.textContent; // Название продукта
		let getParent = event.target.nextElementSibling; // <div id="1"></div>
		let addFeedback = getParent.getAttribute('id'); // Узнаем id выбранного элемента для работы с ним
		let examChild = getParent.children; // html collection -> array

		// Cтраховка от дублирования вывода данных
		if (examChild.length == 0) {
			let getNameProd = localStorage.getItem(nameProd);
			const nameProdParse = JSON.parse(getNameProd);

			nameProdParse.forEach(element => {
				let elemID = document.getElementById(addFeedback);
				elemID.insertAdjacentHTML('beforeend', `
			<div class="feedback">
			<p class="feedbackText">${element}</p>
			<button id="btnDelete">Удалить отзыв</button>
			`)
			})
		} else { 
			console.log("Вывод отзывов произведен"); 
		}

		// Кнопка для удаления отзыва
		const btnDelete = document.querySelectorAll("#btnDelete");
		btnDelete.forEach(element => {
			element.addEventListener('click', (event) => {
				let textFeedback = event.target.previousElementSibling; // <p> Текст с отзывом </p>
				let elem = event.target.parentNode.parentNode.previousElementSibling; // элемент h1 с названием продукта
				let delProdFeedback = elem.textContent; // Название продукта
				let delProd = localStorage.getItem(delProdFeedback); // Вывод их хранилища по ключу (названию продукта)
				const delProdParse = JSON.parse(delProd); // Выведенные данные распарсили

				delProdParse.forEach(element => {
					if (element === textFeedback.textContent) {
						delProdParse.pop(element);
						let delProdStroke = JSON.stringify(delProdParse);
						localStorage.setItem(delProdFeedback, delProdStroke);
						textFeedback.parentNode.remove();
						if (elem.nextElementSibling.children.length == 0) { // длина элемента <div id="1"></div>
							elem.nextElementSibling.remove(); // элемент <div id="1"></div>
							elem.remove();
						}
					}
				});

				if (delProdParse.length == 0) { // Проверка -> если отзывов нет, то заголовок удаляется из хранилища
					localStorage.removeItem(delProdFeedback);
				}

			});
		});
	});
});