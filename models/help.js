const orm = require('../config/orm.js');

const services = {
    all: function(cb) {
        orm.all('organization', function (res) {
            cb(res)
        })
    },
    create: function(col, val, cb) {
        orm.create('organization', col, val, function(res) {
            cb(res);
        });
    },
    update: function(currentVal, condition, cb) {
        orm.update('organization', currentVal, condition, function(res) {
            cb(res);
        });
    }

};

module.exports = services