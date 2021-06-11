const bodyParser = require('body-parser');

module.exports = function(app) {
     app.use(bodyParser.json());       // to support JSON-encoded bodies
     app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
         extended: true
      }));
     
     app.get('/',function(req,res){ //url 주소 입력 시 실행되는 내용
        res.render('index.html') 
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });
    app.get('/about2',function(req,res){ //url 주소 입력 시 실행되는 내용
      res.render('about2.html') 
   });
     
    app.get('/listall', function (req, res) {
      //res.render('about.html');
      console.log('listall...');
      const getNumber = req.body.getNumber;
      let response = {
            'result': 'true',
            'getLists': getNumber 
      }
      
      console.log('response : ' + response);
      res.status(200).json(response);
   });  // end of get
     
}
