// vom stoca datele în memorie, prin obiectul local data
// pentru a interacționa cu acest obiect, vom crea metodele CRUD
const data = {
  posts: [],
  categoryList: [],
};
let counter = 0;

function updateCategoryList(category, isCatUpdated) {
  const indexCat = data.categoryList.findIndex((cat) => cat.title === category);
  if (indexCat === -1) {
    data.categoryList.push({
      title: category,
      counter: 1,
    });
  } else {
    if (isCatUpdated) {
      data.categoryList[indexCat].counter--;
    } else {
      data.categoryList[indexCat].counter++;
    }
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
  updateCategoryList(category);
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
    updateCategoryList(updatedItem.category);
    return updatedItem;
  }
  const item = data[table][itemIndex];
  if (item.category !== updatedItem.category) {
    updateCategoryList(updatedItem.category);
    updateCategoryList(item.category, true);
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
  updateCategoryList(item.category, true);
  return itemIndex === -1 ? false : true;
};

const getAll = (table) => {
  return data[table].slice(); // întoarcem o copie al array-ului, ca să nu-l modifice cineva întâmplător
};
const removeAll = (table) => {
  data[table] = [];
};

module.exports = { add, getBy, get, set, remove, getAll, removeAll };
