module.exports = getDate = () => {
    let now = new Date()
    let date = ("0" + now.getDate()).slice(-2)
    let month = ("0" + (now.getMonth() + 1)).slice(-2)
    let year = now.getFullYear()
    return dateString = `${date}/${month}/${year}`
}
