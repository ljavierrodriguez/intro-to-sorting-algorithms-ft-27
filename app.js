let numeros = [19, 2, 32, 12, 1, 69, 90, 110, 321, 43, 24, 45]
let estudiantes = [
    { id: 1, name: "Hugo" },
    { id: 2, name: "Paco" },
    { id: 3, name: "Luis" },
    { id: 4, name: "Mickey" },
    { id: 5, name: "Donald" },
    { id: 6, name: "Minie" },
    { id: 7, name: "Guffy" },
    { id: 8, name: "Pluto" }
]

let nombres = ["Hugo", "Paco", "Luis", "Mickey", "Donald", "Minie", "Guffy", "Pluto"]
let result1 = ["Hugo", "Luis", "Paco", "Mickey", "Donald", "Minie", "Guffy", "Pluto"] // 0
let result2 = ["Hugo", "Luis", "Mickey", "Paco", "Donald", "Minie", "Guffy", "Pluto"] // 1
let result3 = ["Hugo", "Luis", "Mickey", "Donald", "Paco", "Minie", "Guffy", "Pluto"] // 2
let result4 = ["Hugo", "Luis", "Mickey", "Donald", "Minie", "Paco", "Guffy", "Pluto"] // 3
let result5 = ["Hugo", "Luis", "Mickey", "Donald", "Minie", "Guffy", "Paco", "Pluto"] // 4

console.log(nombres)
console.log(bubbleSort([...nombres]))

console.log(numeros)
console.log(bubbleSort([...numeros]))

console.log(estudiantes)
console.log(bubbleSortObj([...estudiantes]))


function bubbleSort(arr = []) {
    const size = arr.length

    for (let index = 0; index < size - 1; index++) {
        for (let i = 0; i < size - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }

    return arr
}

function bubbleSortObj(arr = []) {
    const size = arr.length

    for (let index = 0; index < size - 1; index++) {
        for (let i = 0; i < size - 1; i++) {
            if (arr[i].id < arr[i + 1].id) {
                const temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }

    return arr
}
//  0   1   2   3  4   5  6    7    8    9  10  11
// [1, 2, 12, 19, 24, 32, 43, 45, 321, 90, 69, 110]


// index = 2
// min = 3
// i = 3
// arr[i] = 12
// arr[min] = 32

// temp = 19
// arr[index] = 

function selectionSort(arr = []) {
    const size = arr.length // 12

    for (let index = 0; index < size - 1; index++) {
        let min = index; // 2
        for (let i = index + 1; i < size; i++) {
            if (arr[i] < arr[min]) {
                min = i
            }
        }

        if (min !== index) {
            const temp = arr[index]
            arr[index] = arr[min]
            arr[min] = temp
        }

    }

    return arr
}


console.log(busquedaLineal("Pluto", nombres))

function busquedaLineal(element, arr = []) {
    /* for(let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            return true;
        }
    } */
    for (value of arr) {
        if (value === element) {
            return true
        }
    }
    return false
}

let num = [1, 2, 12, 19, 24, 32, 43, 45, 69, 90, 110, 321]
let num2 = [43, 45, 69, 90, 110, 321]
let num3 = [90, 110, 321]

let search = 110
let mitad = 1
let pivote = num[mitad]
