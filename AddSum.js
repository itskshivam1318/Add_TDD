const Add = (string) => {
    let delim = ""
    if (string.match(/\/\//)) { delim = string[2]; string = string.slice(3) }

    const regex = delim != "" ? new RegExp(',|\n|' + delim) : new RegExp(',|\\n')
    // console.log(regex)
    // console.log(string)

    const input = string.split(regex)
    // console.log(input)

    if (input.length == 1) return Number(input[0])
    return input.reduce((total, num) => {
        if (num == "") return total = 0;
        if (Number(num) < 0) throw "negatives not allowed"
        return total += Number(num)
    }, 0)
}

// console.log(Add("//;\n1;2"))
// console.log(Add("-1,2"))

module.exports = Add;