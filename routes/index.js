var express = require('express');
var router = express.Router();


/*定义接口：
 1.获取所有notes的接口   /api/notes           get            respons[status:0,data{context} {status:1,errmsg:why?}]
 2.增加一个note的接口    /api/notes/add       post           request[{id:},{context:}]     respons[{status:0,添加成功}，{status:1,errmsg:why}]
 3.删除一个note的接口    /api/notes/delete    post           request[{id:},{context:}]     respons[{status:0,]
 4.修改一个note的接口    /api/notes/edit      post           request{{id:},{context:}]}    respons[{status:0.]
*/

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.user){
        var data={
            islogin:true,
            username: req.session.user.username,
            avatar: req.session.user.avatar,
        }
        res.render('index',data)
    }else{
        res.render('index',{islogin:false})
    }
});

module.exports = router;
