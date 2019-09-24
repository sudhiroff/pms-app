const model = require('./model');

const index = (req, res) => {
  model.find((err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
};

const findById = (req, res) => {
  let query = { '_id': req.parms['id'] };
  model.find(query, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
};

const save = (req, res) => {
  const customer = new model(req.body);
  customer.save((err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
};

const update = (req, res) => {
  let query = { '_id': req.params['id'] };
  const body = req.body;
  model.update(query, body, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  });
};

const remove = (req, res) => {
  let query = { '_id': req.params['id'] };
  const customer = new model(req.body);
  model.findOneAndRemove(query, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  });
};

module.exports = {
  index,
  findById,
  save,
  update,
  remove
}