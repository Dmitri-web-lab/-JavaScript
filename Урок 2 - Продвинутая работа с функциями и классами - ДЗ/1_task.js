class Library {
	#books = [];
	constructor(books) {
		this.#books = books;
	}
	get allBooks() {
		return this.#books;
	}
	addBook(title) {
		let examBooks = this.#books.indexOf(title);
			if (examBooks == -1) {
				this.#books.push(title);
			} else {
				throw new Error(`Такая книга уже есть в библиотеке!`);
				
			}
		}
		
	removeBook(title) {
		let examBooks = this.#books.indexOf(title);
			if (examBooks == -1) {
				throw new Error(`Такой книги нет!`);
			} else {
				this.#books.pop(examBooks);
				
			}
	}
	hasBook(title) {
		let examBooks = this.#books.indexOf(title);
		if (examBooks == -1) {
			return false;
		} else {
			return true;
		}
	}
	}

	const books = new Library(["Tom Soier", "Benedict"]);
	console.log(books.allBooks);
	books.addBook("Limbo");
	console.log(books.allBooks);
	books.removeBook("Limbo");
	console.log(books.allBooks);
	console.log(books.hasBook("Limbo"));