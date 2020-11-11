import {
  dateFormat,
  clearInnerHtml,
  materialInput,
  createElement,
  createButton,
  toggleShow,
  createRow,
  getUniqueSlug,
} from './hp.js';

// get and render posts
function fetchPosts() {
  return fetch('/admin/api/posts')
    .then((response) => response.json())
    .then((posts) => posts)
    .catch((error) => console.error('Error for fetchPosts', error));
}

function fetchCategories() {
  return fetch('/admin/api/categoryList')
    .then((categoryList) => categoryList.json())
    .then((categoryList) => categoryList)
    .catch((error) => console.error('Error for fetchCatrgories', error));
}

function getFormData() {
  const $postTitle = document.querySelector('#postTitle');
  const $postCategory = document.querySelector('#postCategory');
  // const $postCategoryList = document.querySelector('#postCategoryList');
  const $postAuthor = document.querySelector('#postAuthor');
  const $postContent = document.querySelector('#postContent');

  return {
    title: $postTitle.value,
    category: $postCategory.value,
    author: $postAuthor.value,
    content: $postContent.value,
    lastUpdate: new Date(),
  };
}

function createUpdateFormElements() {
  const $postTitle = materialInput('Post title', 'postTitle');
  const $postCategory = materialInput('Category', 'postCategory');
  const $postAuthor = materialInput('Author', 'postAuthor');

  const $postContent = materialInput('Content', 'postContent', true);

  const $postUpdateBtn = createElement('div', 'Save', {
    className: 'save-post-btn',
  });

  const $cancelBtn = createElement('div', 'Cancel', {
    className: 'cancel-btn',
  });

  const $buttonsContainer = createElement('div', [$postUpdateBtn, $cancelBtn], {
    className: 'buttons-container',
  });

  return {
    $postTitle,
    $postCategory,
    $postAuthor,
    $postContent,
    // $postCategoryList,
    $postUpdateBtn,
    $buttonsContainer,
    // $categoryWrap,
  };
}

function populateUpdateForm(categories = null, post = null) {
  const $updateFormContainer = document.querySelector('.update-form');
  const updateForm = createUpdateFormElements();
  const {
    $postTitle,
    $postCategory,
    $postAuthor,
    $postContent,
    // $postCategoryList,
    $postUpdateBtn,
    $buttonsContainer,
    // $categoryWrap,
  } = updateForm;

  const defObj = {
    title: '',
    category: '',
    author: '',
    content: '',
    _id: '',
  };

  const { title, category, author, content, _id } = post ? post.posts : defObj;
  const fragment = new DocumentFragment();

  $postTitle.querySelector('input').value = title;
  $postCategory.querySelector('input').value = category;
  $postAuthor.querySelector('input').value = author;
  $postContent.querySelector('textarea').value = content;

  if (_id) {
    $postUpdateBtn.dataset.postId = _id;
  }

  mdc.textField.MDCTextField.attachTo($postTitle);
  mdc.textField.MDCTextField.attachTo($postCategory);
  mdc.textField.MDCTextField.attachTo($postAuthor);
  mdc.textField.MDCTextField.attachTo($postContent);

  fragment.appendChild($postTitle);
  fragment.appendChild($postCategory);
  // fragment.appendChild($categoryWrap);
  fragment.appendChild($postAuthor);
  fragment.appendChild($postContent);
  fragment.appendChild($buttonsContainer);

  $updateFormContainer.appendChild(fragment);
}

function renderPosts(posts) {
  const $posts = document.querySelector('#posts-list');
  const fragment = new DocumentFragment();

  clearInnerHtml($posts);

  posts.forEach((post) => {
    if (post) {
      const { title, _id, postDate, category, author } = post;
      const $chNC = createElement('i', '', {
        className: 'far fa-square',
      });
      const $chC = createElement('i', '', {
        className: 'fas fa-check-square',
      });
      const $checkBox = createElement('div', [$chNC, $chC], {
        className: 'check-box',
      });

      const $editImg = document.createElement('img');

      const $editContainer = createElement('div', '', {
        className: 'edit-container',
      });
      $editContainer.innerHTML =
        '<img class="edit-post" src="./assests/circle-edit.svg" />';
      const $postRow = createRow(
        [
          $checkBox,
          title,
          author,
          category,
          dateFormat(postDate),
          $editContainer,
        ],
        'post-row'
      );

      $postRow.dataset.postId = _id;

      fragment.appendChild($postRow);
    }
  });
  $posts.appendChild(fragment);
  toggleShow().loader();
  toggleShow().posts();
}

function initEvents() {
  const $posts = document.querySelector('#posts-list');
  const $postsContainer = document.querySelector('.posts-container');
  const $updateForm = document.querySelector('#updateForm');
  const $page = document.querySelector('.page');

  $page.addEventListener('click', (event) => {
    // const id = event.target.closest('li').dataset.postId;
    const targetClass = event.target.classList;

    // Handle delete
    if (targetClass.contains('delete-btn')) {
      const selectedPostsIds = Array.from(
        document.querySelectorAll('li.selected')
      )
        .map((post) => post.dataset.postId)
        .join('_');

      if (selectedPostsIds) {
        toggleShow().posts();
        toggleShow().loader();
        fetch(`/admin/api/posts/${selectedPostsIds}`, { method: 'DELETE' })
          .then((resp) =>
            fetchPosts().then((posts) => {
              renderPosts(posts);
            })
          )
          .catch((err) => console.error(error));
      }
    }

    //Select posts for deletion
    if (
      targetClass.contains('fa-square') ||
      targetClass.contains('fa-check-square')
    ) {
      const $el =
        event.target.closest('li') || event.target.closest('.posts-header');
      const $listRows = Array.from(document.querySelectorAll('.post-row'));

      if ($el.classList.contains('posts-header')) {
        $listRows.forEach((row) => {
          if ($el.classList.contains('selected')) {
            row.classList.remove('selected');
          } else {
            row.classList.add('selected');
          }
        });
      }
      $el.classList.toggle('selected');

      if (!$listRows.every((row) => row.classList.contains('selected'))) {
        document.querySelector('.posts-header').classList.remove('selected');
      }
    }

    //Handle Post Edit
    if (targetClass.contains('edit-post')) {
      const id = event.target.closest('li').dataset.postId;
      toggleShow().posts();
      toggleShow().loader();
      Promise.all([
        fetchCategories().then((cat) => cat),
        fetch(`/admin/api/posts/${id}`)
          .then((resp) => resp.json())
          .then((resp) => resp),
      ])
        .then((values) => {
          populateUpdateForm(...values);
          toggleShow().loader();
          toggleShow().updateForm();
        })
        .catch((err) => console.error(err));
    }

    //Handle post update
    if (targetClass.contains('save-post-btn')) {
      const id = event.target.dataset.postId;

      const formData = getFormData();
      clearInnerHtml($updateForm);
      toggleShow().loader();

      const route = id ? `/admin/api/posts/${id}` : '/admin/api/posts';
      const method = id ? 'PUT' : 'POST';

      const rerenderPosts = () => {
        const body = JSON.stringify(formData);

        fetch(route, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        }).then((resp) => {
          fetchPosts().then((posts) => {
            renderPosts(posts);
            toggleShow().updateForm();
          });
        });
      };

      if (!id) {
        delete formData.lastUpdate;
        formData.img = 'https://picsum.photos/750/310';
        formData.postDate = new Date();
        formData.comments = [];
        const slugRet = getUniqueSlug(async (newSlug) => {
          const findPostBySlug = await fetch(`/admin/api/posts/slug/${newSlug}`)
            .then((response) => response.json())
            .then((response) => response);

          return findPostBySlug;
        }, formData.title).then((response) => {
          formData.slug = response;
          rerenderPosts();
        });
      } else {
        rerenderPosts();
      }
    }

    //Handle cancel
    if (targetClass.contains('cancel-btn')) {
      clearInnerHtml($updateForm);

      toggleShow().loader();
      fetchPosts().then((posts) => {
        renderPosts(posts);
        toggleShow().updateForm();
      });
    }

    //Handle Add new post
    if (
      targetClass.contains('menu-add-post') ||
      targetClass.contains('fa-plus')
    ) {
      clearInnerHtml($updateForm);
      toggleShow().posts();
      toggleShow().loader();
      populateUpdateForm();
      toggleShow().loader();
      toggleShow().updateForm();
    }

    //Handle click on post menu button
    if (targetClass.contains('menu-post-icon')) {
      const $shownContainer = document.querySelector('.show-container');
      toggleShow().posts();
      if (
        $shownContainer &&
        $shownContainer.classList.contains('update-form-container')
      ) {
        toggleShow().updateForm();
        clearInnerHtml($updateForm);
      }
      toggleShow().loader();

      fetchPosts().then((posts) => {
        renderPosts(posts);
      });
    }
  });
}

function init() {
  fetchPosts().then((posts) => {
    renderPosts(posts);
  });
  initEvents();
}

init();
