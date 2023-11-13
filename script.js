const books = [
    {
      title: "A Origem das Espécies",
      author: "Charles Darwin",
      year: 1859
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949
    },
    {
      title: "O Senhor dos Anéis",
      author: "J.R.R. Tolkien",
      year: 1954
    },
    {
      title: "Dom Quixote",
      author: "Miguel de Cervantes",
      year: 1605
    }
  ]

  // encontrar o livro pelo titulo
function findBookByTitle(listOfBooks, titleDesired) {
    let bookFound = null

    books.forEach((book) => {
        if(book.title === titleDesired) {
            bookFound = book
        }
    })
    return bookFound
}

const bookFound = findBookByTitle(books, "Dom Quixote")


//lista de produtos
const products = [
    { 
        name: "Dell g15",
        price: 4500,
        stock: 10  
    },
    {
        name: "iphone 12",
        price: 3200,
        stock: 20 
    },
    { 
        name: "Fone de Ouvido",
        price: 650,
        stock: 50
    },
    {
        name: "Mouse logitech 403",
        price: 198,
        stock: 30
    }
]

function filterProductsByPrice(value) {
    return products.filter(item => item.price > value)
}

const filteredProducts = filterProductsByPrice(290)

// Array de elementos
const arrayOfElements = [1, 5, 2, 4, 2, 3, 2, 4, 1, 5, 3, 1, 4, 1, 5, 6, 14]

function countFrequencyElements(array) {
    const frequency = {}

    array.forEach(element => {
        if (frequency[element]) {
            frequency[element]++
        } else {
            frequency[element] = 1
        }
    });

    return frequency
}

const frequencyOfElements =  countFrequencyElements(arrayOfElements)


//mesclar objetos
const objectA = { a: 1, b: 2, c: 3, d: 1 }
const objectB = { b: 4, c: 5, d: 6, e: 4 }

function mergeObjects(object1, object2) {
    return Object.assign({}, object1, object2);
}

const mergedObject = mergeObjects(objectA,objectB)

//Remover duplicata de array
const arrayWithDuplicates = [1, 1, 1, 2, 3, 3, 3, 4, 5, 5, 6];

function removeDuplicates(array) {
    return [...new Set(array)];
}

const newArrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates)


//PARTE 02

//verificar numeros primos

function isPrimeNumbers(number) {
    if(number % n === 0)
}
