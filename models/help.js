const orm = require('../config/orm.js');

const services = {
    allFood: function(cb) {
        orm.allFood('organization', function (res) {
            cb(res)
        })
    },
    allShelter: function(cb) {
        orm.allShelter('organization', function (res) {
            cb(res)
        })
    },
    allHealth: function(cb) {
        orm.allHealth('organization', function (res) {
            cb(res)
        })
    },
    allDaily: function(cb) {
        orm.allDaily('organization', function (res) {
            cb(res)
        })
    },
    create: function(col, val, cb) {
        orm.create('organization', col, val, function(res) {
            cb(res);
        });
    }
};

module.exports = services