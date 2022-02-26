var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');
var auth = require('../lib/auth');
 /*
router.get('/create', function(request, response){
  if(!auth.IsOwner(request,response)){
    response.redirect('/');
    return false
  }
    var title = 'WEB - create';
    var list = template.list(request.list);
    var html = template.HTML(title, list, `
      <form action="/topic/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
    `, '',auth.StatusUI(request,response));
    response.send(html);
  });
   


  router.post('/create_process', function(request, response){
   if(!auth.IsOwner(request,response)){
     response.redirect('/');
     return false
   }
    var post = request.body;
    var title = post.title;
    var description = post.description;
    fs.writeFile(`data/${title}`, description, 'utf8', function(err){
      response.redirect(`/topic/${title}`);
    });
  });
   
  router.get('/update/:pageId', function(request, response){
    if(!auth.IsOwner(request,response)){
      response.redirect('/');
      return false
    }
    var filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
      var title = request.params.pageId;
      var list = template.list(request.list);
      var html = template.HTML(title, list,
        `
        <form action="/topic/update_process" method="post">
          <input type="hidden" name="id" value="${title}">
          <p><input type="text" name="title" placeholder="title" value="${title}"></p>
          <p>
            <textarea name="description" placeholder="description">${description}</textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
        `,
        `<a href="/topic/create">create</a> <a href="/topic/update/${title}">update</a>`
     ,auth.StatusUI(request,response) );
      response.send(html);
    });
  });
   





  router.post('/update_process', function(request, response){
    if(!auth.IsOwner(request,response)){
      response.redirect('/');
      return false
    }
    var post = request.body;
    var id = post.id;
    var title = post.title;
    var description = post.description;
    fs.rename(`data/${id}`, `data/${title}`, function(error){
      fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.redirect(`/topic/${title}`);
      })
    });
  });
   
  router.post('/delete_process', function(request, response){
    if(!auth.IsOwner(request,response)){
      response.redirect('/');
      return false
    }
    var post = request.body;
    var id = post.id;
    var filteredId = path.parse(id).base;
    fs.unlink(`data/${filteredId}`, function(error){
      response.redirect('/');
    });
  });
   

*/


router.get('/add', function(request, response){
  if(!auth.IsOwner(request,response)){
 
    response.send("<script>alert('로그인 해주세요!'); location.href='../auth/login';</script>");
    
    return false
  }
    var title = '새 글 생성';
    var list = template.list2(request.list);
    var html = template.page(title, list,`<div class="col-8 col-12-mobile" id="content">
    <article id="main">
      <header>
        <h2>New Article</h2>
        <form action="/topic/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit" value="추가">
        </p>
      </form>
    
    </article>

  </div>`);
    response.send(html);
  });




  router.post('/create_process', function(request, response){
    if(!auth.IsOwner(request,response)){
      response.send("<script>alert('로그인 해주세요!'); location.href='../../auth/login';</script>");
      
      return false
    }

     var post = request.body;
     var title = post.title;
     var description = post.description;
     fs.writeFile(`data/${title}`, description, 'utf8', function(err){
       response.redirect(`/topic/${title}`);
     });
   });




   router.get('/update/:pageId', function(request, response){
    if(!auth.IsOwner(request,response)){
      response.send("<script>alert('로그인 해주세요!'); location.href='../../auth/login';</script>");
     
      return false
    }
    var filteredId = path.parse(request.params.pageId).base;
    var location = "../"
    fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
      var title = request.params.pageId;
      var location = "../"
      var list = template.list2(request.list,location);
      var html = template.page(title, list,
        `<div class="col-8 col-12-mobile" id="content">
    <article id="main">
      <header>
        <h2>Update Article</h2>
        <form action="/topic/update_process" method="post">
        <p><input type="text" name="title" placeholder="title" value="${title}"></p>
        <p>
          <textarea name="description" placeholder="description">${description}</textarea>
        </p>
        <p>
          <input type="submit" value="제출">
        </p>
      </form>
    
    </article>

  </div>`,location);
      response.send(html);
    });
  });



  router.post('/update_process', function(request, response){
   if(!auth.IsOwner(request,response)){
    response.send("<script>alert('로그인 해주세요!'); location.href='../auth/login';</script>");
      
      return false
    }

    var post = request.body;
    var id = post.id;
    var title = post.title;
    var description = post.description;
    fs.rename(`data/${id}`, `data/${title}`, function(error){
      fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.redirect(`/topic/${title}`);
      })
    });
  });



  router.post('/delete_process', function(request, response){
    if(!auth.IsOwner(request,response)){
      response.send("<script>alert('로그인 해주세요!'); location.href='../auth/login';</script>");
     
      return false
    }
    var post = request.body;
    var id = post.delete;
    var filteredId = path.parse(id).base;
    fs.unlink(`data/${filteredId}`, function(error){
      response.redirect('/');
    });
  });



  
  router.get('/:pageId', function(request, response, next) { 
    var filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
      if(err){
        next(err);
      } else {
        var title = request.params.pageId;
        var sanitizedTitle = sanitizeHtml(title);
        var sanitizedDescription = sanitizeHtml(description, {
          allowedTags:['h1']
        });
        var list = template.list2(request.list);
        var main = template.main(sanitizedTitle,sanitizedDescription);
        var html = template.page(sanitizedTitle, list, main);
        response.send(html);
      }
    });
  });
  module.exports = router;