const model =  require('./model');

const index=(req,res)=>{
   model.find((err,result)=>{
       if(err)
         res.send(err);
        else
          res.send(result);
   })
};

const findById=(req,res)=>{
    let query={'id':req.parms['id']};
    model.find(query,(err,result)=>{
        if(err)
          res.send(err);
         else
           res.send(result);
    })
 };

 const save=(req,res)=>{
    const customer=new model(req.body);
    customer.save((err,result)=>{
        if(err)
          res.send(err);
         else
           res.send(result);
    })
 };

 module.exports={
     index,
     findById,
     save
 }