const books = [
    {
      title: "A arte da guerra",
      author: "Sun Tzu",
      year: 1772
    },
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
  ];
  
  function findBookByTitle(titleDesired) {
    let bookFound = null;
  
    books.forEach((book) => {
      if (book.title === titleDesired) {
        bookFound = book;
      }
    });
  
    return bookFound;
  }
  
  function searchBook() {
    const titleInput = document.querySelector('#titleInput');
    const resultDiv = document.querySelector('#result');
  
    const desiredBook = findBookByTitle(titleInput.value);
  
    if (desiredBook !== null) {
      resultDiv.innerText = `Livro encontrado: ${desiredBook.title} de ${desiredBook.author}, publicado em ${desiredBook.year}.`;
    } else {
      resultDiv.innerText = 'Livro não encontrado.';
    }
  }
  


//lista de produtos
const products = [
    { 
        name: "Dell g15",
        price: 4500,
        stock: 10  
    },
    {
        name: "iphone 13",
        price: 3800,
        stock: 20 
    },
    { 
        name: "Fone de Ouvido",
        price: 650,
        stock: 50
    },
    {
        name: "Mouse logitech g403",
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
    if(number <= 1 || number == null) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}


//inverter uma string
function reverseString(str) {
    return str.split('').reverse().join('');
}

const reversedString = reverseString('Hello, world!')


// Somar apenas numeros pares
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function sumEvenNumbers(array) {
    return array.filter(number => number % 2 === 0).reduce((soma, number) => soma + number, 0);
}

let sumEven = sumEvenNumbers(numbers)


// Fatorial
function calculateFactorial(number) {
    if (number < 0) {
        return "Erro: Não exite fatorial de um número negativo.";
    } else if (number === 0 || number === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}


// Verificar palindromo
function checkPalindrome(str) {
    const strWithoutSpaces = str.toLowerCase().replace(/\s/g, '')
    const strInverted = strWithoutSpaces.split('').reverse().join('')

    if( strWithoutSpaces === strInverted ) {
        return true
    } else {
        return false
    }
}