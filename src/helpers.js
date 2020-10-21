function dateFormat(d) {
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);

  return `${mo} ${da}, ${ye}`;
}

function contentFormat(content) {
  const splitContent = content.trim().split(/\n/g);
  const addPtoContent = splitContent.map((el) => {
    const clean = el.trim();
    if (!clean) {
      return '\n\n';
    }
    return `<p>${clean}</p>`;
  });

  const firstP = addPtoContent[0];

  let shortContent = '';

  firstP.split(' ').forEach((word) => {
    if (
      shortContent.length < 370 ||
      shortContent[shortContent.length - 1] === '.'
    ) {
      shortContent += ' ' + word.replace('<p>', '');
    }
  });

  shortContent = '<p>' + shortContent + ' [...]';

  return { longContent: addPtoContent.join(''), shortContent };
}

function postFormatter(post, conentType) {
  return {
    ...post,
    content: contentFormat(post.content)[conentType],
    postDate: dateFormat(post.postDate),
  };
}

// function getUniqueSlug(arr, slug) {
//   slug = slug
//     .split(/[^A-Za-z0-9]/)
//     .join(' ')
//     .trim()
//     .replace(/\s/g, '-')
//     .toLowerCase();
//   let newSlug = slug;
//   let counter = 2;
//   while (arr.includes(newSlug)) {
//     newSlug = `${slug}-${counter}`;
//   }

//   return newSlug;
// }

module.exports = { postFormatter, dateFormat };
