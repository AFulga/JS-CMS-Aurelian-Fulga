function dateFormat(d) {
  d = new Date(d);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  let year = d.getFullYear() - 2000;
  let hour = d.getHours();
  let minutes = d.getMinutes();
  const ampm = hour > 12 ? 'PM' : 'AM';
  hour = hour % 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return `${day}/${month}/${year}, ${hour}:${minutes}${ampm}`;
}

function clearInnerHtml($element) {
  $element.innerHTML = '';
}

function createButton(content, classList) {
  return createElement('button', content, classList);
}

function createElement(type, content, attributes = {}) {
  if (content instanceof HTMLElement) {
    return content;
  }
  const $element = document.createElement(type);
  if (content) {
    if (typeof content === 'string') {
      $element.textContent = content;
    } else {
      if (typeof content === 'object') {
        content.forEach((el) => $element.appendChild(el));
      } else {
        $element.appendChild(content);
      }
    }
  }

  Object.keys(attributes).forEach((key) => {
    $element[key] = attributes[key];
  });

  return $element;
}

function materialInput(label, id, textarea) {
  const $label = createElement('label', '', {
    className: textarea
      ? 'mdc-text-field mdc-text-field--outlined mdc-text-field--textarea '
      : 'mdc-text-field mdc-text-field--outlined',
  });

  if (textarea) {
    $label.innerHTML = `<span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading"></span>
    <span class="mdc-notched-outline__notch">
      <span class="mdc-floating-label" id="label-${id}">${label}</span>
    </span>
    <span class="mdc-notched-outline__trailing"></span>
  </span>
  <span class="mdc-text-field__resizer">
    <textarea class="mdc-text-field__input" id="${id}" aria-labelledby="label-${id}" rows="8" cols="40" ></textarea>
    
  </span>`;
  } else {
    $label.innerHTML = `<span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading"></span>
    <span class="mdc-notched-outline__notch">
      <span class="mdc-floating-label" id="label-${id}">${label}</span>
    </span>
    <span class="mdc-notched-outline__trailing"></span>
  </span>
  <input type="text" class="mdc-text-field__input" id="${id}" aria-labelledby="label-${id}">`;
  }
  return $label;
}

function toggleShow() {
  const $loader = document.querySelector('.loader-background');
  const $posts = document.querySelector('.posts-container');
  const $updateForm = document.querySelector('.update-form-container');

  const loader = () => {
    $loader.classList.toggle('show-container-flex');
  };

  const posts = () => {
    $posts.classList.toggle('show-container-flex');
  };

  const updateForm = () => {
    $updateForm.classList.toggle('show-container');
  };

  return { loader, posts, updateForm };
}

function createRow(content, className) {
  const $li = document.createElement('li');
  $li.classList.add(className);
  content.forEach((ct, index) => {
    const className = index == 1 ? 'flex-2 post-title' : index ? 'flex-1' : '';
    const $el = createElement('div', ct, { className });
    $li.appendChild($el);
  });

  return $li;
}

function stringToSlug(str) {
  return str.trim().toLowerCase().replace(' ', '-');
}

async function getUniqueSlug(isSlugUnique, title) {
  let slug = stringToSlug(title)
    .split(/[^A-Za-z0-9]/)
    .join(' ')
    .trim()
    .replace(/\s/g, '-')
    .toLowerCase();

  let newSlug = slug;
  let counter = 2;
  let firstCheck = await isSlugUnique(newSlug);
  console.log('firstCheck', firstCheck);
  while (firstCheck.slug) {
    newSlug = `${slug}-${counter}`;
    firstCheck = await isSlugUnique(newSlug);
    console.log('firstCheck2', firstCheck);
    counter++;
  }

  return newSlug;
}

export {
  dateFormat,
  clearInnerHtml,
  materialInput,
  createElement,
  createButton,
  toggleShow,
  createRow,
  getUniqueSlug,
};
