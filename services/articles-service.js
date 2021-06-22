const { Article } = require('../models/index');

module.exports = {
  create: (req, res) => {
    res.json({ response: 'ok' });
  },

  delete: (req, res) => {
    res.json({ response: 'ok' });
  },

  index: (req, res) => {
    Article.findAll()
      .then(articles => {
        res.json(articles);
      })
      . catch(err => { throw err; });
  },

  show: (req, res) => {
    Article.findById(req.body.id)
      .then(article => {
        res.json(article);
      })
      . catch(err => { throw err; });
  },

  update: (req, res) => {
    res.json({ response: 'ok' });
  }
}
