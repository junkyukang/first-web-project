var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet')
app.use(helmet());
const contentSecurityPolicy = require("helmet-csp");

app.use(
  contentSecurityPolicy({
    useDefaults: true,
    directives: {
      defaultSrc: ["'self'", "default.example"],
      scriptSrc: ["'self'","'unsafe-inline'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
    reportOnly: false,
  })
);
var session = require('express-session')
var FileStore = require('session-file-store')(session)


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression()); //파일 압축
app.use(session({
  secret: 'asadlfkj!@#!@#dfgasdg',
  resave: false,
  saveUninitialized: true,
  store:new FileStore()
}))

app.get('*', function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});
var indexRouter = require('./routes/index');
var topicRouter = require('./routes/topic');
var authRouter = require('./routes/auth');



app.use('/', indexRouter);
app.use('/topic', topicRouter);
app.use('/auth', authRouter);



app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!<p><a href="/">홈으로</a></p>');
});
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!<p><a href="/">홈으로</a></p>')
});
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});