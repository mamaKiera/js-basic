// const grade = (score) => {
//     if (Math.round(score) > 80) {
//         console.log("You got A")
//     } else if (Math.round(score) >= 70 && Math.round(score) <= 79) {
//         console.log("You got B")
//     } else if (Math.round(score) >= 60 && Math.round(score) <= 69) {
//         console.log("You got C")
//     } else if (Math.round(score) >= 50 && Math.round(score) <= 59) {
//         console.log("You got D")
//     } else if (Math.round(score) <= 50 && Math.round(score) >= 0) {
//         console.log("You got F")
//     } else if (score < 0 || score > 100) {
//         console.log("Error")
//     }
// }

const grade = (score) => {
    score = Math.round(score) 

    if (score > 100 || score < 0) {
        console.log("Error")
        return
    } else if (score >= 80) {
        console.log("A")
    } else if (score >= 70) {
        console.log("B") 
    } else if (score >= 60) {
        console.log("C")
    } else if (score >= 50) {
        console.log("D")
    } else {
        console.log("F")
    }
}

grade(299)