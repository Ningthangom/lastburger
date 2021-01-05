
    var orm = require("../config/orm.js");

    const burger = {
        getall: function(data){
            orm.getall("burgers", function(result){
                data(result);
            });
        },
        getInput: function(value, data) {
            orm.getInput("burgers","burger_name",value,function(result){
                console.log('data' + "DATA FROM MODEL", data)
                data(result);
            });
        },
        update: function(boolean,condition,data){
            orm.update("burgers","devoured",boolean,condition,function(result){
                console.log("devoured burger from burgers: " + condition)
                data(result);
            })
        },
        delete: function(condition,data){
            orm.delete("burgers",condition,function(rs){
                data(rs);
                console.log(condition + " delected")
            })
        }

    };

module.exports = burger;