const model = require('../user/user.model');

exports.login = (req, res) => {
  const queryObject = {
    'userName': req.body['userName'],
    'password': req.body['password']
  };
  model.findOne(queryObject, (error, result) => {
    if (error)
      res.send("Error---" + err);
    else{ 
      if(result){
        res.send(result);
      } else{
       res.send({'status':'invalid'});
      }
    }
  });
}