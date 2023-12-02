
function dayOne() {
    const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const lines = data.split(/\r?\n/);

    let total = 0;

    lines.forEach((line) => {
        spelledNums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

        spelledNums.forEach((num, index) => {
            const regex = new RegExp(num, 'g');
            line = line.replace(regex, (match) => `${match}${index + 1}${match}`);
        });
        const nums =  line.split('').filter(char => !isNaN(char) && char !== ' ').join('');
        const firstNum = nums[0];
        const lastNum = nums[nums.length - 1];

        const doubleNum = parseInt(firstNum + lastNum);
        total += doubleNum;
    });

    console.log(total);
});
}

module.exports = dayOne;