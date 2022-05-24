exports.toRoman = function (num) {
    const romanKeyMap = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let romanString = '';
    for (let key in romanKeyMap) {
        while (num >= romanKeyMap[key]) {
            romanString += key;
            num -= romanKeyMap[key];
        }
    }
    return romanString;
};
