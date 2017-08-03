/**
 * Created by Administrator on 2017/7/30 0030.
 */

var Sequelize=require('sequelize')
var path=require('path')



const sequelize = new Sequelize('undefined', 'undefined', 'undefined', {
    host: 'localhost',
    dialect:'sqlite',
    // SQLite only
    storage: path.join(__dirname,'../database/database.sqlite')
})


//测试是否能与数据库连接。
/*sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});*/

var Note = sequelize.define('note',{
    noteid:{
        type:Sequelize.STRING
    },
    context:{
        type:Sequelize.STRING
    },
    uid:{
        type:Sequelize.STRING
    }
})
//Note.sync({force:true})
    /*.then(function(){
    Note.create({context:'hello world'})
}).then(function(){
    Note.findAll({raw:true}).then(function(notes){
        console.log(notes)
    })
})*/

module.exports=Note

