const connection = require('./connection')

//creating a functon that will allow all key value pairs from the object to be pushed into the arr
function objToSql(ob) {
    const arr = []

    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + '=' + value);
        }
    }
    return arr.toString();
}


const orm = {
    all: function (input, cb) {
        let queryString = `SELECT food, name, address FROM organization`;
        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            //console.log(res)
            cb(res)
        })
    },
    create: function (table, col, val, cb) {
        let queryString = 'INSERT INTO ' + table + ' (' + col.toString() + ') VALUES (?,?) ';
        console.log(queryString)
        connection.query(queryString, val, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    update: function (table, currentVal, condition, cb) {
        let queryString = `UPDATTE ${table} `;
        queryString += ' SET ';
        queryString += objToSql(currentVal);
        queryString += ' WHERE ';
        queryString += condition;
        

        console.log(queryString)
        connection.query(queryString, function(err, res) {
            if(err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;