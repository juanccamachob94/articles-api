const router = require('express').Router();
const ArticlesService = require('../services/articles-service');

router.route('/')
  .get(ArticlesService.index)
  .post(ArticlesService.create);

router.route('/:id')
  .get(ArticlesService.show)
  .put(ArticlesService.update)
  .delete(ArticlesService.delete);

module.exports = router;
