
function dayTwo() {
    const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const lines = data.split(/\r?\n/);
    let total = 0;

    for(line of lines) {
        const entry = line.split(':');
        const name = parseInt(entry[0].split(' ')[1]);
        const marbles = entry[1].split(/[,;]/);
        let rd = 0;
        let gr = 0;
        let bl = 0;

        for (let marble of marbles) {
            const couple = marble.trim().split(' ');
            const num = parseInt(couple[0]);
            const color = couple[1];

            if (color === 'red' && num > rd) {
                rd = num;
            }

            if (color === 'green' && num > gr) {
                gr = num;
            }

            if (color === 'blue' && num > bl) {
                bl = num;
            }

        }

        let cube = rd*bl*gr;

        total += cube;
    }

    console.log(total);
});
}

module.exports = dayTwo;