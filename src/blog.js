const express = require('express');
const db = require('./db');
const hp = require('./helpers');

const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await db.posts.find().toArray();
  const categoryList = posts.reduce((prev, curr) => {
    const index = prev.findIndex((item) => item.title === curr.category);
    if (index !== -1) {
      prev[index].postIds.push(curr._id);
    } else {
      prev.push({
        title: curr.category,
        postIds: [curr._id],
      });
    }
    return prev;
  }, []);
  const formatedPosts = posts.map((post) => {
    return hp.postFormatter(post, 'shortContent');
  });

  const getPosts = { posts: formatedPosts, categoryList };
  res.render('pages/home', getPosts);
});

router.get('/posts/:slug', async (req, res) => {
  const slug = req.params.slug;
  const post = await db.posts.findOne({ slug }, {});

  const postFormated = hp.postFormatter(post, 'longContent');
  console.log('xxx', postFormated);
  if (postFormated) {
    res.render('pages/single', { post: postFormated });
  } else {
    res.render('pages/notFound', {});
  }
});

module.exports = router;
