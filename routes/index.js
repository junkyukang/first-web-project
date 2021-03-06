var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var auth = require('../lib/auth');
const { list1 } = require('../lib/template.js');




router.get('/', function (request, response) {
  var list = template.list1(request.list);
  var html = template.Html(list,auth.StatusUI(request,response)); 
    response.send(html);
  });

  module.exports = router; 





/*
router.get('/', function (request, response) {
  var title = 'Welcome';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `
      <h2>${title}</h2>${description}
      <img src="/image/hello.jpg" style="width:300px; display:block; margin-top:10px;">
      `,
      `<a href="/topic/create">create</a>`,
      auth.StatusUI(request, response)
    ); 
    response.send(html);
  });

  module.exports = router; 
  */