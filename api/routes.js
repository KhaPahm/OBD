const path = require('path');

module.exports = function(app) {
    let dataCtrl = require(path.join(__dirname, '/controllers/data.js'));
    app.route('/api/data')
        .get(dataCtrl.get);
}