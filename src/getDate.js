// const reverseString = require('./reverseString.js')
const getDate = () => {
    let now = new Date()
    let date = ("0" + now.getDate()).slice(-2)
    let month = ("0" + (now.getMonth() + 1)).slice(-2)
    let year = now.getFullYear()
    return dateString = `${date}/${month}/${year}`
}

// const convertSingleDigit = (number) => {
//     if (number.toString.length === 1) {
//         let twoDigit = '0'
//         return (twoDigit += number)
//     }
// }



module.exports = getDate
