const inputData = [
    {
        name: 'Daniel',
        age: 21,
        gender: 'male',
        course: ['English', 'Spanish', 'Math']
    },
    {
        name: 'Alex',
        age: 22,
        gender: 'male',
        course: ['English', 'History']
    },
    {
        name: 'Joe',
        age: 23,
        gender: 'male',
        course: ['English', 'Spanish', 'Science']
    },
    {
        name: 'Sarah',
        age: 20,
        gender: 'female',
        course: ['English', 'History', 'Science']
    },
    {
        name: 'Katie',
        age: 24,
        gender: 'female',
        course: ['Japanese', 'History', 'Spanish']
    },
    {
        name: 'June',
        age: 27,
        gender: 'female',
        course: ['History', 'Math']
    },
    {
        name: 'Cam',
        age: 29,
        gender: 'male',
        course: ['Spanish', 'Math', 'Science', 'English']
    },
    {
        name: 'Sally',
        age: 26,
        gender: 'male',
        course: ['Math', 'Science', 'History']
    }
]

// return names of the people as an array who are older than 25
const peopleOver25 = (data) => {
    ///
}

// return names of the people as an array who aretaking english
const peopleTakingEnglish = (data) => {
    ///
}

// return names of the people as an array who are taking english AND science at the same time
const peopleTakingMathAndScience = (data) => {
    ///
}

// return names of the people as an array who are taking either english OR History at the same time
const peopleTakingSpanishORHistory = (data) => {
    ///
}

// return names of the male people as an array who are taking Math
const malesTakingMath = (data) => {
    ///
}

// return names of the all females who are older than 25
const fermalesTakingMath = (data) => {
    ///
}

// return courses of Sarah
const coursesOfSarah= (data) => {

}


console.log('peopleOver25:', peopleOver25(inputData))
console.log('peopleTakingEnglish:', peopleTakingEnglish(inputData))
console.log('peopleTakingMathAndScience:', peopleTakingMathAndScience(inputData))
console.log('peopleTakingSpanishORHistory:', peopleTakingSpanishORHistory(inputData))
console.log('malesTakingMath:', malesTakingMath(inputData))
console.log('fermalesTakingMath:', fermalesTakingMath(inputData))
console.log('coursesOfSarah:', coursesOfSarah(inputData))
