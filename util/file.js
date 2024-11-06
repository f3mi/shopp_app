const fs = require('fs');

const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if(err.errno == -4058){
            return;
        }
        if (err) {
            throw (err);
        }
    });
}

exports.deleteFile = deleteFile;