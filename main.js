// let BackPack = []


// BackPack.push ("sword")
// BackPack.push ("shield")
// BackPack.push ("food")


// // BackPack.shift()
// BackPack.slice(0,1)

// let furCoat = 'fur coat'

// BackPack.push(furCoat)
// BackPack.pop()

// let itemcount = BackPack.length

// BackPack.push("flint", "blanket", "knife", "toothbrush");
// let BackPack2 = BackPack.splice(3,3)

// console.log(BackPack2, BackPack)

// console.log(itemcount)

// for (let i = 0; i < BackPack.length; i++)

// for (let i = 0; i <= BackPack2.length - 1; i++){
// console.log("practice loops")


let guessMe = 54

while (guessMe < 100) {
    console.log('---------',guessMe)
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        guessMe += 25
    } else if (guessMe % 3 == 0) {
        guessMe -= 27
    } else {
        guessMe += 3
    }
    guessMe += 22
}


console.log("final value:", guessMe)

