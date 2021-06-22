const { Article } = require('../models/index');

module.exports = {
  create: (req, res) => {
    console.log('Body');
    console.log(req.body);
    Article.create({ title: req.body.title, content: req.body.content })
      .then(
        (article) => {
          res.json(article);
        },
        (validation) => {
          res.status(422).json({
            errors: validation.errors.map((error) => {
              return {
                attribute: error.path,
                message: error.message
              };
            })
          })
        }
      );
  },

  delete: (req, res) => {
    let { id } = req.params;
    Article.findByPk(id)
      .then(article => {
        if(article) {
          article.destroy()
          res.status(204).send();
        }
        else res.status(404).send();
      })
  },

  index: (req, res) => {
    Article.findAll().then(articles => { res.json(articles); })
  },

  show: (req, res) => {
    let { id } = req.params;
    Article.findByPk(id)
      .then(article => {
        if(article) res.json(article);
        else res.status(404).send();
      })
  },

  update: (req, res) => {
    let { id } = req.params;
    Article.findByPk(id)
      .then(article => {
        if(article)
          article.update({ title: request.body.title, content: request.body.content })
            .then(article => { res.json(article); })
        else res.status(404).send();
      })
  }
}
