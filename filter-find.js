// Use the filter or find array methods to solve these problems

/* 
Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

Output: 
[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]
*/

export function getAllDairy(arr) {
    const dairyArray = arr.filter(dairyItem => 
        dairyItem.category === 'dairy'
    );
    return dairyArray;
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    const fruitMorethen = arr.filter(product => 
        product.price > 2 && product.category === 'fruit'
    ); 
    return fruitMorethen;
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    const theCheese = arr.filter(product => 
        product.id === 'cheese'
    );
    console.log(theCheese);
    return theCheese[0];
}


/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    return [];
}