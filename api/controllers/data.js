const csv = require('csv-parser');
const fs =require('fs');

module.exports = {
    get: (req, res) => {
        const rows = [];
        fs.createReadStream('data.csv')
            .pipe(csv())
            .on('data', (row) => {
                rows.push(row)
            })
            .on('end', () => {
                res.json(rows);
            });
    }
}