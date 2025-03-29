export const logicExercises = [
  {
    id: 1,
    title: 'Suma de dos números',
    description: 'Escribe una función que reciba dos números y devuelva su suma.',
    code: `const addNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
      return 'Both arguments must be numbers'
    }
    return a + b
  }`,
    difficulty: 'easy'
  },
  {
    id: 2,
    title: 'Número par o impar',
    description: 'Crea una función que determine si un número es par o impar.',
    code: ` const checkEvenOrOdd = (n) => {
    if (typeof n !== 'number' || isNaN(n)) {
      return 'A argument must be number'
    }
    return n % 2 === 0 ? 'even' : 'odd'
  }`,
    difficulty: 'easy'
  },
  {
    id: 3,
    title: 'Máximo de dos números',
    description: 'Escribe una función que reciba dos números y devuelva el mayor de ellos.',
    code: ` const findMax = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
      return 'Both arguments must be numbers'
    }
    return a > b ? a : b
  }`,
    difficulty: 'easy'
  },
  {
    id: 4,
    title: 'Múltiplo de 5',
    description: 'Crea una función que determine si un número es múltiplo de 5.',
    code: ` const checkMultipleOfFive = (n) => {
    if (typeof n !== 'number' || isNaN(n)) {
      return 'The argument must be a number'
    }
    return n % 5 === 0 ? 'Multiple of 5' : 'Not a multiple of 5'
  }`,
    difficulty: 'easy'
  },
  {
    id: 5,
    title: 'Contar caracteres',
    description:
      'Escribe una función que reciba una cadena de texto y devuelva la cantidad de caracteres que tiene.',
    code: ` const countStringLength = (text) => {
    if (typeof text !== 'string') return 'The argument must be a string'
    return text.length
  }`,
    difficulty: 'easy'
  },
  {
    id: 6,
    title: 'Convertir grados Celsius a Fahrenheit',
    description: 'Escribe una función que convierta grados Celsius a Fahrenheit.',
    code: `const CelsiusToFahrenheit = (celsius) => {
    if (typeof grades !== 'number' || isNaN(celsius)) return 'The argument must be a number'
    return parseFloat((celsius * 9) / 5 + 32).toFixed(2)
  }`,
    difficulty: 'easy'
  },
  {
    id: 7,
    title: 'Invertir una cadena',
    description:
      'Crea una función que reciba una cadena y devuelva la misma cadena pero invertida.',
    code: ` const stringReverse = (text) => {
    if (typeof text !== 'string') return 'Input must be a string'
    if (text.length === 0) return 'Empty string provided'
    return text.split('').reverse().join('').toLocaleLowerCase()
  }`,
    difficulty: 'easy'
  },
  {
    id: 8,
    title: 'Eliminar espacios de una cadena',
    description: 'Crea una función que reciba una cadena y elimine los espacios en blanco.',
    code: ` const eliminateSpaces = (text) => {
    if (typeof text !== 'string') return 'Input must be a string'
    if (text.length === 0) return 'Empty string provided'
  
    return text.split(' ').join('')
  }`,
    difficulty: 'easy'
  },
  {
    id: 9,
    title: 'Contar vocales en una cadena',
    description: 'Escribe una función que reciba una cadena y cuente cuántas vocales tiene.',
    code: `const countVowels = (text) => {
    text = text.toLowerCase()
  
    const vowels = 'aáeéiíoóuú'
    let count = 0
  
    for (let char of text) {
      if (vowels.includes(char)) {
        count++
      }
    }
  
    return count
  }`,
    difficulty: 'easy'
  },
  {
    id: 10,
    title: 'Reemplazar vocales por un carácter',
    description:
      'Crea una función que reciba una cadena y reemplace todas las vocales por el carácter *.',
    code: `const changeVowels = (text) => {
    text = text.toLowerCase()
  
    const vowels = 'aáeéiíoóuú'
    let result = ''
    if (typeof text !== 'string') return 'Input must be a string'
    if (text.length === 0) return 'Empty string provided'
    for (let char of text) {
      if (vowels.includes(char)) {
        result += '*'
      } else {
        result += char
      }
    }
    return result
  }`,
    difficulty: 'easy'
  },
  {
    id: 11,
    title: 'Determinar si una palabra existe en una frase',
    description:
      'Escribe una función que reciba una frase y una palabra, y determine si la palabra está en la frase.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 12,
    title: 'Contar palabras en una frase',
    description: 'Crea una función que reciba una frase y cuente cuántas palabras tiene.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 13,
    title: 'Determinar si un año es bisiesto',
    description: 'Escribe una función que reciba un año y determine si es bisiesto.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 14,
    title: 'Factorial de un número',
    description: 'Crea una función que calcule el factorial de un número.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 15,
    title: 'Generar un número aleatorio dentro de un rango',
    description:
      'Escribe una función que genere un número aleatorio entre un mínimo y un máximo dados.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 16,
    title: 'Tabla de multiplicar',
    description:
      'Crea una función que reciba un número y devuelva su tabla de multiplicar del 1 al 10.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 17,
    title: 'Encontrar el número más grande en un array',
    description:
      'Escribe una función que reciba un array de números y devuelva el número más grande.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 18,
    title: 'Sumar los números de un array',
    description:
      'Crea una función que reciba un array de números y devuelva la suma de todos ellos.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 19,
    title: 'Ordenar un array de números',
    description: 'Escribe una función que reciba un array de números y lo ordene de menor a mayor.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 20,
    title: 'Eliminar elementos duplicados de un array',
    description: 'Crea una función que reciba un array y elimine los elementos duplicados.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 21,
    title: 'Contar la cantidad de un carácter en una cadena',
    description:
      'Escribe una función que reciba una cadena y un carácter, y cuente cuántas veces aparece ese carácter en la cadena.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 22,
    title: 'Determinar si un número es primo',
    description: 'Crea una función que reciba un número y determine si es primo.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 23,
    title: 'Fibonacci',
    description:
      'Escribe una función que muestre los primeros n números de la secuencia de Fibonacci.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 24,
    title: 'Determinar si un número es un cuadrado perfecto',
    description: 'Crea una función que reciba un número y determine si es un cuadrado perfecto.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 25,
    title: 'Intercambiar mayúsculas y minúsculas en una cadena',
    description:
      'Crea una función que reciba una cadena y cambie las letras mayúsculas por minúsculas y viceversa.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 26,
    title: 'Encontrar la palabra más larga en una frase',
    description: 'Escribe una función que reciba una frase y devuelva la palabra más larga.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 27,
    title: 'Cálculo de potencia',
    description:
      'Crea una función que reciba dos números: una base y un exponente, y devuelva el resultado de elevar la base al exponente.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 28,
    title: 'Verificar si una palabra es un palíndromo',
    description:
      'Escribe una función que determine si una palabra es un palíndromo (se lee igual al revés).',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 29,
    title: 'Simular una contraseña segura',
    description:
      'Escribe una función que genere una contraseña aleatoria con letras, números y símbolos.',
    code: `Pendiente`,
    difficulty: 'easy'
  },
  {
    id: 30,
    title: 'Calcular el promedio de un array de números',
    description: 'Crea una función que reciba un array de números y devuelva el promedio.',
    code: `Pendiente`,
    difficulty: 'easy'
  }
]
