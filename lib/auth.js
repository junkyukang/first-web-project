module.exports = {
    IsOwner: function(request, response) {
        if (request.session.is_logined) {
          return true;
        } else {
          return false;
        }
      },

    StatusUI : function(request, response){
        var authStatusUI = '<p><a href="/auth/login">로그인</a></p>'
        if(this.IsOwner(request, response)){
          authStatusUI = `${request.session.nickname} | <a href="/auth/logout">로그아웃</a>`;
        }
        return authStatusUI;
      }
}

  
