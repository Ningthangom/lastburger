
    var orm = require("../config/orm.js");

    const burger = {
        getall: function(data){
            orm.getall("burgers", function(result){
                data(result);
            });
        },
        getInput: function(value, data) {
            orm.getInput("burgers","burger_name",value,function(result){
                data(result);
            });
        },
        update: function(bolean,condition,data){
            orm.update("burgers","devoured",bolean,condition,function(result){
                data(result);
            })
        },
        delete: function(condition,data){
            orm.delete("burgers",condition,function(err,result){
                if(err){
                    throw err;
                }
                data(result)
            })
        }

    };

module.exports = burger;