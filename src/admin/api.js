const express = require('express');
const db = require('../db');
const ObjectId = require('mongodb').ObjectID;

const router = express.Router();

router.get('/posts', async (req, res) => {
  const posts = await db.posts.find().toArray();
  // const posts = db.getAll('posts');
  res.send(posts);
});

router.get('/categoryList', async (req, res) => {
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
  res.send(categoryList);
});
// @todo: de adăugat toate rutele necesare pentru a avea un API restfull

router.get('/posts/:id', async (req, res) => {
  const id = req.params.id;
  const posts = await db.posts.findOne({ _id: ObjectId(id) }, {});

  const post = { posts };

  res.send(post);
});

router.post('/posts', (req, res) => {
  const item = req.body;
  const responseItem = db.add('posts', item);

  if (responseItem.status) {
    return res.status(responseItem.status).send(responseItem.msg);
  }
  const getPosts = db.getAll('posts');
  res.send(getPosts);
});

router.put('/posts/:id', async (req, res) => {
  const updatedValues = req.body;
  const id = req.params.id;

  if (!updatedValues.title && !updatedValues.content) {
    return res.status(400).send('Data is not in correct format.');
  }

  const posts = await db.posts.updateOne(
    { _id: ObjectId(id) },
    {
      $set: {
        ...updatedValues,
      },
    }
  );

  res.send('ok');
});

router.delete('/posts/:id', async (req, res) => {
  const id = req.params.id;
  const post = await db.posts.deleteOne({ _id: ObjectId(id) }, {});

  res.send('Post is deleted!');
});

router.delete('/posts', (req, res) => {
  db.removeAll('posts');
  res.send('All posts are deleted!');
});

module.exports = router;
