var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/home123',function(req,res,next){
  res.send({
    code:1,
    msg:"请求成功"
  })
})
module.exports = router;
