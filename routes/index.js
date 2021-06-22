module.exports = (app) => {
  app.use('/api/articles', require('./articles'));
};
