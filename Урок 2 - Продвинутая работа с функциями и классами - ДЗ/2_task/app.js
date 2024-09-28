const initialData = [
	{
	product: "Apple iPhone 13",
	reviews: [
	{
	id: "1",
	text: "Отличный телефон! Батарея держится долго.",
	},
	{
	id: "2",
	text: "Камера супер, фото выглядят просто потрясающе.",
	},
	],
	},
	{
	product: "Samsung Galaxy Z Fold 3",
	reviews: [
	{
	id: "3",
	text: "Интересный дизайн, но дорогой.",
	},
	],
	},
	{
	product: "Sony PlayStation 5",
	reviews: [
	{
	id: "4",
	text: "Люблю играть на PS5, графика на высоте.",
	},
	],
	},
	];

const dataFeedback = document.querySelector('.dataFeedback');
const enterFeedback = document.querySelector('.enterFeedback');
const addFeedback = document.querySelector('.addFeedback');
const enterNameProduct = document.querySelector('.enterNameProduct');

	initialData.forEach(element => {
		let titleProduct = document.createElement('h2');
		dataFeedback.appendChild(titleProduct);
		titleProduct.textContent = `Товар: ${element.product}`;
		element.reviews.forEach(element => {
			let feedbackProduct = document.createElement('p');
			dataFeedback.appendChild(feedbackProduct);
			feedbackProduct.textContent = `Отзыв пользователя: ${element.id}. Текст: ${element.text}`;
		})
	})

let uniqueID = 5;

addFeedback.addEventListener('click', () => {
	try {
		let feedbackVal = enterFeedback.value;
		let nameProductVal = enterNameProduct.value;
		console.log(feedbackVal); // введенный текст
		let feedbackLength = feedbackVal.length;
		console.log(feedbackLength); // колличество введенных символов
		if (feedbackLength < 50 || feedbackLength > 500) {
			throw new Error('Количество введенных символов должно быть не менее 50 и не более 500!');
		} else {
			
			// Формируем Отзыв
			let incrementID = uniqueID++;
			let varCreateFeedback = {
				product: nameProductVal,
				reviews: [
				{
				id: incrementID,
				text: feedbackVal,
				},
				],
				}
				dataFeedback.insertAdjacentHTML('afterend', `
					<h2>Товар: ${varCreateFeedback.product}</h2>
					<div>Отзыв пользователя: ${varCreateFeedback.reviews[0].id}. Текст: ${varCreateFeedback.reviews[0].text}</div>
				`);
				console.log(incrementID);
	}
	} catch (error) {
		dataFeedback.textContent = error.message;
	}
})