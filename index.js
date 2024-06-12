var dict_of_adj_nums = {
    '0': ['0', '8'],
    '1': ['1', '2', '4'],
    '2': ['2', '1', '3', '5'],
    '3': ['3', '2', '6'],
    '4': ['4', '1', '5', '7'],
    '5': ['5', '2', '4', '6', '8'],
    '6': ['6', '3', '5', '9'],
    '7': ['7', '4', '8'],
    '8': ['8', '5', '7', '9', '0'],
    '9': ['9', '6', '8']
};
function getCombinations(earliercharacter, remaining){
    if(remaining.length==0){
        return [earliercharacter]
    }
    // current digit
    const currentDigit = remaining[0];
    // other digits
    const restOfDigits = remaining.slice(1);
    // digits that are following current digit
    const followingDigits = dict_of_adj_nums[currentDigit];
    const combinations=[]

    followingDigits.forEach((followingDigit) => {
        const newCombinations = getCombinations(earliercharacter+followingDigit, restOfDigits)
        combinations.push(...newCombinations)
    })
    return combinations

}
function getPINs() {
    const observed='1875'
    var number = observed.split('')
    const combos = getCombinations('',number)
    console.log(combos)
    combos.forEach((combo) => {
        document.getElementById("box").innerHTML += (`<span> ${combo} <span>`)
    })
    document.getElementById("len").innerHTML = `The  ${combos.length} Combinations are: <br/>`
}
getPINs()

