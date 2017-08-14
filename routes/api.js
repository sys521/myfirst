/**
 * Created by Administrator on 2017/7/30 0030.
 */

var express = require('express');
var router = express.Router();
var Note= require('../model/note.js')



router.get('/notes',function(req,res,next){
    console.log(11111)
    var query={
        raw:true
    }
    if(req.session.user){
        query.where={
            uid:req.session.user.uid
        }
    }
    Note.findAll(query).then(function(notes){
        console.log(notes)
        res.send({status:0,data:notes})
    }).catch(function(){
        res.send({status:1,errormsg:'数据库出错'})
    })
})

router.post('/notes/add',function(req,res,next){

    if(!req.session.user){
        return res.send({status:1,errormsg:'请先登录'})
    }
    if(!req.body.context){
        res.send({status:1,errormsg:'请输入内容'})
    }else{
        var uid=req.session.user.uid
        console.log(req.session.user)
        var  username=req.session.user.username
        Note.create({noteid:req.body.noteid,context:req.body.context,uid:uid,username:username}).then(function(){
            res.send({status:0})
        }).catch(function(){
            res.send({status:1,errormsg:'数据库出错'})
        })
    }
})

router.post('/notes/edit',function(req,res,next){
    console.log(req.body)
    if(!req.session.user){
        return res.send({status:1,errormsg:'请先登录'})
    }
    if(!req.body.context){
        res.send({status:1,errormsg:'请输入内容'})
    }else{
        var uid=req.session.user.uid
        Note.update({context:req.body.context},{where:{noteid:req.body.noteid,uid:uid}}).then(function(){
            res.send({status:0})
        }).catch(function(){
            res.send({status:1,errormsg:'数据库出错'})
        })
    }
})

router.post('/notes/delete',function(req,res,next){
    console.log(res.body)
    if(!req.session.user){
        return res.send({status:1,errormsg:'请先登录'})
    }
    var uid=req.session.user.uid
    Note.destroy({where:{noteid:req.body.noteid,uid:uid}}).then(function(){
        res.send({status:0})
    }).catch(function(){
        res.send({status:1,errormsg:'数据库出错'})
    })
})
module.exports=router;