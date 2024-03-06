const fs = require('fs')
const path = require('path');
module.exports = () => {
    fs.mkdir(path.join(__dirname, "../public/uploads"), (error, callback) => {})
}

