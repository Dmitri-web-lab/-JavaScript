// 1 Задание

const musicCollection = [
	{ title: "Great depression", artist: "Markul", year: 2018 },
	{ title: "Buster keaton", artist: "Miyagi", year: 2019 },
	{ title: "Tragic city", artist: "ЛСП", year: 2017 }
];

musicCollection[Symbol.iterator] = function() {
	return {
		current: 0,
		to: this.length,
		next() {
			return this.current < this.to 
			? { done: false, value: musicCollection[this.current++]} 
			: { done: true };
		}
	}
}

for (let music of musicCollection) {
	console.log(`Название альбома: ${music.title}, Исполнитель: ${music.artist} (${music.year})`);
}

// 2 Задание
const cook = new Map();
cook.set("Маргарита", "Виктор")
cook.set("Пепперони", "Виктор")
cook.set("Калифорния", "Ольга")
cook.set("Филадельфия", "Ольга")
cook.set("Тирамису", "Дмитрий")
cook.set("Чизкейк", "Дмитрий")


const orderAlex = new Set()
orderAlex.add("Пепперони")
				.add("Тирамису")

const orderMaria = new Set()
orderMaria.add("Калифорния")
				.add("Маргарита")

const orderIrina = new Set()
orderIrina.add("Чизкейк")


const orders = new Map();

orders.set("Алексей", orderAlex)
console.log(`Пиццу \"Пепперони" готовит повар: ${cook.get("Пепперони")}`);
console.log(`Десерт \"Тирамису" готовит повар: ${cook.get("Тирамису")}`);
console.log(`Заказ Алексея: ${[...orders.get("Алексей")]}`);

orders.set("Мария", orderMaria)
console.log(`Суши \"Калифорния" готовит повар: ${cook.get("Калифорния")}`);
console.log(`Пиццу \"Маргарита" готовит повар: ${cook.get("Маргарита")}`);
console.log(`Заказ Марии: ${[...orders.get("Мария")]}`);

orders.set("Ирина", orderIrina)
console.log(`Десерт \"Чизкейк" готовит повар: ${cook.get("Чизкейк")}`);
console.log(`Заказ Ирины: ${[...orders.get("Ирина")]}`);