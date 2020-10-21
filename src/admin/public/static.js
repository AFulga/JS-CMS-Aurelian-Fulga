// @todo: Adaugă o metodă de a adăuga articole noi
// @todo: Afișează mai multe informații despre un articol
// @todo: Adaugă opțiunea de a edita articolele
// @todo: Transformă pagina într-o operă de artă
function dateFormat(d) {
  d = new Date(d);
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
  const da = new Intl.DateTimeFormat("en", { day: "numeric" }).format(d);

  return `${mo} ${da}, ${ye}`;
}

function createButton(content, classList) {
  return createElement("button", content, classList);
}

function createElement(type, content, className) {
  const $element = document.createElement(type);

  if (typeof content === "string") {
    $element.textContent = content;
  } else {
    if (typeof content === "object") {
      content.forEach((el) => $element.appendChild(el));
    } else {
      $element.appendChild(content);
    }
  }

  $element.classList.add(...className.split(" "));

  return $element;
}

function createRow(content, className) {
  const $li = document.createElement("li");
  $li.classList.add(className);
  const $el1 = createElement("div", content[0], "flex-2");
  const $el2 = createElement("div", content[1], "flex-1");
  const $el3 = createElement("div", content[2], "flex-1");
  const $el4 = createElement("div", content[3], "flex-1");

  $li.appendChild($el1);
  $li.appendChild($el2);
  $li.appendChild($el3);
  $li.appendChild($el4);

  return $li;
}

// get and render posts
function fetchPosts() {
  return fetch("/admin/api/posts")
    .then((response) => response.json())
    .then((posts) => posts)
    .catch((error) => console.error("Error for fetchPosts", error));
}

function renderPosts(posts) {
  const $posts = document.querySelector("#posts-list");
  $posts.innerHTML = "";
  const $headerRow = createRow(
    ["Title", "Category", "Date", "Action"],
    "header-row"
  );
  $posts.appendChild($headerRow);
  posts.forEach((post) => {
    if (post) {
      const { title, id, postDate, category } = post;
      const $postRow = createRow(
        [
          title,
          category,
          dateFormat(postDate),
          [
            createButton("Update", "update-button"),
            createButton("Delete", "delete-button"),
          ],
        ],
        "post-row"
      );
      // document.createElement('li');
      // $post.textContent = post.title;
      $postRow.dataset.postId = id;

      // $post.appendChild(createDeleteButton());
      $posts.appendChild($postRow);
    }
  });
}

function initEvents() {
  const $posts = document.querySelector("#posts-list");
  $posts.addEventListener("click", (event) => {
    // Handle delete
    if (event.target.classList.contains("delete-button")) {
      // @todo: Șterge postarea și din baza de date
      // call DELETE /admin/api/posts/:postId
      // console.log('remove post with id', event.target.parentNode.dataset.postId);
      const id = event.target.parentNode.parentNode.dataset.postId;

      fetch(`/admin/api/posts/${id}`, { method: "DELETE" })
        .then((resp) => fetchPosts().then(renderPosts))
        .catch((err) => console.error(error));
      // $posts.removeChild(event.target.parentNode.parentNode);
    }

    // Handle update
    // @todo: Adaugă logica pentru update
  });
}
function init() {
  fetchPosts().then(renderPosts);
  initEvents();
}

init();
