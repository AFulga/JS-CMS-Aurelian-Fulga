// vom stoca datele în memorie, prin obiectul local data
// pentru a interacționa cu acest obiect, vom crea metodele CRUD

const MongoClient = require('mongodb').MongoClient;
const populate = require('./populateDb');

const getMongoUri = () => {
  // Datele din process.env sunt cele din fișierul .env, dacă nu există, trebuie creat după modelul .env.example
  const user = encodeURIComponent(process.env.mongoUser);
  const pass = encodeURIComponent(process.env.mongoPass);
  const url = process.env.mongoUrl;
  return `mongodb+srv://${user}:${pass}@${url}`;
};

const client = new MongoClient(getMongoUri(), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { client };

client
  .connect()
  .then(() => console.log('MongoDB connected'))

  .then(() => {
    const posts = client.db('app').collection('posts');
    module.exports.posts = posts;
    populate(posts);
  })
  .catch((error) =>
    console.error('Error on connecting to MongoDB server', error)
  );
/*
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



const data = {
  posts: [],
  categoryList: [],
};
let counter = 0;

function updateCategoryList(category, postId, oldCategoryTitle) {

  const categoryToupdate = data.categoryList.find(
    (cat) => cat.title === category
  );
  const oldCategory = data.categoryList.find(
    (cat) => cat.title === oldCategoryTitle
  );

  if (categoryToupdate) {
    if (categoryToupdate.postIds.indexOf(postId) === -1) {
      categoryToupdate.postIds.push(postId);
    }
  } else {
    data.categoryList.push({
      title: category,
      postIds: [postId],
    });
  }

  if (oldCategory) {
    oldCategory.postIds = oldCategory.postIds.filter((id) => id !== postId);
  }

 
}

const add = (table, item) => {
  // create
  const { title, content, category } = item;
  item.id = counter++;

  if (!title || !content) {
    return null;
  }
  data[table].push(item);
  updateCategoryList(category, item.id);
  return item;
};

const getBy = (table, key, value) => {
  // read by key
  const item = data[table].find(
    (dataItem) => dataItem && dataItem[key] === value
  );

  return item;
};
const get = (table, id) => {
  // read
  return getBy(table, 'id', id);
};

const set = (table, updatedItem) => {
  // update
  const itemIndex = data[table].findIndex(
    (dataItem) => dataItem.id === updatedItem.id
  );
  if (itemIndex === -1) {
    if (counter <= updatedItemid) {
      counter = updatedItemid + 1;
    }
    data[table].push(updatedItem);
    updateCategoryList(updatedItem.category, updatedItem.id);
    return updatedItem;
  }
  const item = data[table][itemIndex];
  if (item.category !== updatedItem.category) {
    updateCategoryList(updatedItem.category, updatedItem.id, item.category);
    // updateCategoryList(item.category, true);
  }
  item = { ...item, ...updatedItem };
  return item;
};
const remove = (table, id) => {
  // delete
  const itemIndex = data[table].findIndex(
    (dataItem) => dataItem && dataItem.id === id
  );
  const item = data[table].splice(itemIndex, 1);
  updateCategoryList(item.category, id);
  return itemIndex === -1 ? false : true;
};

const getAll = (table) => {
  return data[table].slice(); // întoarcem o copie al array-ului, ca să nu-l modifice cineva întâmplător
};
const removeAll = (table) => {
  data[table] = [];
};

module.exports = { add, getBy, get, set, remove, getAll, removeAll };
*/
