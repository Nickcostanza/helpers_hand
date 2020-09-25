const connection = require('./connection')

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// function objToSql(ob) {
//     const arr = []

//     for (let key in ob) {
//         let value = ob[key];

//         if (Object.hasOwnProperty.call(ob, key)) {
//             if (typeof value === 'string' && value.indexOf(' ') >= 0) {
//                 value = "'" + value + "'";
//             }
//             arr.push(key + '=' + value);
//         }
//     }
//     return arr.toString();
// }

const orm = {
    allFood: function (input, cb) {
        let queryString = `SELECT name, website FROM organization WHERE food = 1`;
        // console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            //console.log(res)
            cb(res)
        })
    },
    allShelter: function (input, cb) {
        let queryString = `SELECT name, website FROM organization WHERE shelter = 1`;
        // console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            //console.log(res)
            cb(res)
        })
    },
    allHealth: function (input, cb) {
        let queryString = `SELECT name, website FROM organization WHERE health_care = 1`;
        // console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            //console.log(res)
            cb(res)
        })
    },
    allDaily: function (input, cb) {
        let queryString = `SELECT name, website FROM organization WHERE daily_care = 1`;
        // console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            //console.log(res)
            cb(res)
        })
    },
    create: function (table, col, val, cb) {
        let queryString = 'INSERT INTO ' + table;
        
        queryString += ' (' + col.toString() + ') ';
        queryString += 'VALUES (' + printQuestionMarks(val.length) + ')';
        console.log(queryString);
        connection.query(queryString, val, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;