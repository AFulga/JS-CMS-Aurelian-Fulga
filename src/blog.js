const express = require('express');
const db = require('./db');
const hp = require('./helpers');

const router = express.Router();

router.get('/', (req, res) => {
  const posts = db.getAll('posts').map((post) => {
    return hp.postFormatter(post, 'shortContent');
  });
  const categoryList = db.getAll('categoryList');
  const getPosts = { posts, categoryList };
  res.render('pages/home', getPosts);
});

router.get('/posts/:slug', (req, res) => {
  const slug = req.params.slug;
  const post = hp.postFormatter(db.getBy('posts', 'slug', slug), 'longContent');
  if (post) {
    res.render('pages/single', { post });
  } else {
    res.render('pages/notFound', {});
  }
});

module.exports = router;
