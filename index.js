let express = require('express'); //웹서버가 실행됨(누구나 접근 가능)
let app = express();
let router = require('./router/main')(app); //라우터 폴더 밑에 main.js 실행
let port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public')); //나머지는 public 에 있음

let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
}); //웹 서버 내에서 동작시김
