/**
 * Created by Administrator on 2017/7/31 0031.
 */

var express = require('express');
var router = express.Router();
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;



passport.serializeUser(function(user, done) {
    console.log('---serializeUser---')
    console.log(user)
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    console.log('---deserializeUser---')
    done(null, obj);
});



passport.use(new GitHubStrategy({
        clientID: 'aeda822ded6b9caa3279',
        clientSecret: '91d4616c7c7de5f68df6510fa4b4ac82008e65ed',
        callbackURL: "http://127.0.0.1:3009/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {

        done(null, profile);
    }
));


router.get('/logout', function(req, res){
    req.session.destroy();
    res.redirect('/');
})

router.get('/github',
    passport.authenticate('github'));

router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
        console.log(req.user)
        req.session.user={        //设置好req.seesion的时候，给客户端返回数据的时候， 告诉客户端设置cookie，下一次客户端发送请求的时候，服务器根据这个cook，看看是不是存在。
            uid: req.user.id,
            username: req.user.username,
            avatar: req.user._json.avatar_url,
            provider: req.user.provider
        }
        res.redirect('/');
    });





module.exports=router