var express = require('express');
var router = express.Router();


/*����ӿڣ�
 1.��ȡ����notes�Ľӿ�   /api/notes           get            respons[status:0,data{context} {status:1,errmsg:why?}]
 2.����һ��note�Ľӿ�    /api/notes/add       post           request[{id:},{context:}]     respons[{status:0,��ӳɹ�}��{status:1,errmsg:why}]
 3.ɾ��һ��note�Ľӿ�    /api/notes/delete    post           request[{id:},{context:}]     respons[{status:0,]
 4.�޸�һ��note�Ľӿ�    /api/notes/edit      post           request{{id:},{context:}]}    respons[{status:0.]
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
