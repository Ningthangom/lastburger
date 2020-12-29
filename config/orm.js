var connect = require("../config/connection.js");

const orm = {
    getall: function (table,data){
        let query_string = `SELECT * FROM ${table}`;
        connect.query(query_string,function(err,result){
            if(err){
                throw err;
            }
            data(result);
        })
    },
    getInput: function(table,col_name, value,data){
        let query_string = `INSERT INTO ${table} (${col_name}) VALUES ("${value}")`;
        connect.query(query_string,function(err,result){
            if (err){
                throw err;
            };
            data(result)

        });
    },
    update: function(table,col_name,bolean,condition,data){
       let query_string = `UPDATE ${table} SET ${col_name} = ${bolean} WHERE ${condition} `;
       connect.query(query_string,function(err,result){
            if(err){
                throw err;
            };
            data(result);
       });
    },
    delete: function(table,condition,data){
        let query_string = `DELETE FROM ${table} WHERE ${condition}`;
        connect.query(query_string,function(err,result){
            if (err){
                throw err;
            };
            data(result);
        })
    }

};

module.exports = orm;