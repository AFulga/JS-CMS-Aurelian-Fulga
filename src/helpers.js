function dateFormat(d) {
  d = new Date(d);
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
  try {
    return {
      ...post,
      content: contentFormat(post.content)[conentType],
      postDate: dateFormat(post.postDate),
    };
  } catch (error) {
    console.log(error);
  }
}

module.exports = { postFormatter, dateFormat };
