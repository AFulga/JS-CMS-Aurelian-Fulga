// const db = require('./db');

// @todo: populează de aici baza de date cu mai multe intrări pentru a fi ușor de testat
const populate = async (posts) => {
  const isDbPopulated = await posts.find().count();

  if (isDbPopulated) return;

  const result = await posts.insertMany([
    {
      title: 'Technology in a nutshell',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus, erat quis porta euismod, quam justo blandit lectus, eu vulputate tortor felis sit amet magna. Phasellus porta orci vel mollis posuere. Donec vitae ullamcorper est, at interdum nisi. Etiam massa quam, pellentesque vel blandit non, laoreet sed urna. Donec fermentum nulla libero, ac viverra erat interdum vitae. Vivamus vulputate nec ex a fringilla. Suspendisse potenti. Sed finibus, nibh nec blandit rutrum, purus massa ornare dui, a scelerisque mauris sapien quis tortor.
  
      Donec sodales purus ac odio imperdiet, eu sagittis erat scelerisque. Suspendisse sit amet sapien laoreet, rhoncus lorem id, luctus massa. Proin vitae tempor mi. Nunc est est, volutpat id tellus et, euismod suscipit tellus. Proin eleifend sollicitudin est vitae gravida. Curabitur faucibus, sem vitae feugiat aliquet, velit lacus interdum augue, eleifend bibendum metus mauris ut dolor. Suspendisse fringilla maximus venenatis. Aliquam at tortor facilisis, sagittis nibh non, tristique orci. Nullam pretium lectus eget odio venenatis pretium. Fusce tempor ut quam a facilisis. Phasellus ut faucibus nibh. Sed vitae mattis enim.
              
      Maecenas quis viverra ipsum. Duis venenatis augue sit amet lorem dapibus, et efficitur est tincidunt. Morbi pretium vehicula tempus. Donec bibendum neque eu purus malesuada, sed tempus dui dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non metus eu ex consectetur fermentum nec tincidunt justo. Nam gravida dolor enim, eget tincidunt enim blandit eu. Ut dignissim hendrerit dui, pellentesque volutpat diam iaculis nec. Nunc in dictum lacus, a varius purus. Proin rhoncus tellus vel purus malesuada feugiat a nec ante. Vestibulum vitae suscipit lectus, vitae molestie augue. Cras viverra euismod enim, ac eleifend velit tempor id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      slug: 'post-1',
      img: 'https://picsum.photos/750/310',
      postDate: new Date(2020, 11, 25),
      comments: [],
      author: 'Joe Doe',
      category: 'Technology',
    },
    {
      title: 'Good bocks to read!',
      content: `Sed vulputate, sem sit amet placerat feugiat, diam odio consequat odio, id ullamcorper leo enim ac tortor. Nullam vel pretium nulla, eleifend sodales justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vulputate finibus dui, facilisis vulputate ligula elementum eu. Aenean sollicitudin ut ex sit amet suscipit. Praesent id diam, ipsum. Integer a tincidunt magna. Donec tempor id justo ac tempor. Fusce dignissim lorem in pretium feugiat. Nunc et pellentesque arcu. Maecenas auctor justo at metus porta, ut ultricies magna mollis. Praesent suscipit congue metus vel condimentum. Suspendisse ut congue leo. Etiam scelerisque laoreet cursus.
  
      Suspendisse potenti. Suspendisse ipsum turpis, scelerisque eu tortor vehicula, hendrerit convallis mi. Ut eget magna at diam condimentum pulvinar nec eu nibh. Integer eros elit, scelerisque malesuada elementum sed, ultricies eget urna. Nullam at tellus ac nibh facilisis suscipit. Nam sit amet dui augue. Proin aliquet, enim quis consectetur eleifend, felis augue fermentum sem, nec eleifend tortor ipsum vel tellus. Cras ut purus imperdiet, lobortis libero ut, euismod orci. Nam cursus metus eget tellus elementum lacinia eget auctor odio.
      
      Duis at ligula tristique, varius magna a, porta urna. Curabitur aliquam purus vitae consectetur varius. Donec imperdiet aliquet ipsum eu consectetur. Praesent tempor risus nulla, at ornare tortor finibus varius. Cras efficitur dapibus ornare. Morbi tincidunt vel purus quis venenatis. Ut blandit sem nec neque eleifend volutpat. Nullam nec magna tellus.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et commodo eros. Donec quis purus ac mi molestie vehicula id vitae nisi. Sed nec feugiat velit. Maecenas convallis felis sem, non interdum lectus eleifend sed. Proin egestas tortor leo, nec posuere dui consectetur eget. Sed non nulla metus. Sed congue dolor massa, id luctus tortor auctor a. Duis diam diam, malesuada sit amet elit quis, luctus faucibus sapien. Duis a arcu ornare dolor pulvinar hendrerit sit amet a nunc. Curabitur condimentum consequat efficitur. Phasellus eget consequat ipsum. Cras porttitor metus quis leo sodales, sit amet molestie est finibus. Donec auctor neque eu blandit lobortis.
      
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis a tristique erat. Donec a vehicula augue. Aliquam volutpat, purus sit amet ultrices finibus, massa erat auctor massa, non rhoncus ligula tellus nec lorem. Morbi faucibus felis in vestibulum blandit. Proin eu tortor ut ante tincidunt egestas. Proin lobortis ac nisl nec convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas non massa at diam mattis pharetra. Mauris volutpat congue neque, at ullamcorper ligula ornare quis. Vestibulum vel purus quis velit hendrerit fermentum et ac tortor. Nunc id semper tortor, eget tincidunt neque. Vestibulum quis condimentum orci. Duis bibendum facilisis dapibus.`,
      slug: 'good-bocks-to-read',
      img: 'http://placeimg.com/750/310/any',
      postDate: new Date(2015, 3, 15),
      comments: [],
      author: 'Nick Frasier',
      category: 'Books',
    },
    {
      title: 'Poetry',
      content: `In in nulla ut turpis tristique facilisis ac vel neque. Sed ornare cursus massa, a cursus lacus sagittis vitae. Nulla in est leo. Maecenas mollis, ligula et interdum interdum, arcu sapien iaculis ex, in luctus leo metus vitae quam. Proin fringilla tempus fermentum. Curabitur porttitor consectetur congue. Sed ultricies justo sed aliquet iaculis. Phasellus facilisis sapien vehicula sem dignissim, laoreet luctus magna vehicula. Vivamus blandit aliquam accumsan. Donec at dolor ex. Nullam pulvinar dictum neque id ornare.
  
      Sed quis nibh vel quam pharetra dictum vitae vitae ipsum. Nunc lobortis vel est eu pellentesque. Aenean posuere lectus turpis, ut elementum sem pulvinar sed. Etiam nec pretium erat. Suspendisse vitae fermentum metus, nec facilisis libero. Mauris commodo orci nec enim pellentesque, vel volutpat ipsum ultricies. Praesent cursus tellus vitae dolor imperdiet aliquet. Maecenas pellentesque sed sem mollis tincidunt. Donec porta ipsum arcu, a congue risus placerat sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vitae maximus metus. Pellentesque lobortis luctus dui id scelerisque. Suspendisse potenti. Fusce nec feugiat leo. In malesuada orci velit, ac pulvinar turpis mattis non.
      
      Phasellus nec ullamcorper lorem. Pellentesque viverra nulla quis lectus ornare vestibulum. Suspendisse leo orci, dictum et quam et, dignissim fermentum ante. Morbi sit amet eros vitae ipsum efficitur ultricies. Nam in eleifend augue, nec congue felis. Donec non ipsum at purus egestas auctor. Etiam lorem metus, porta eget elementum a, blandit sit amet est. Sed sagittis velit vel congue feugiat. Phasellus efficitur pretium interdum. Pellentesque nec tellus massa. Ut non urna non metus posuere dignissim et nec ligula. Pellentesque rhoncus risus ipsum, eu pretium magna molestie non.
      
      Proin at finibus est. Nulla ut sagittis mi. Integer ultricies lorem nec erat suscipit, at condimentum turpis imperdiet. Quisque eget quam mattis, dapibus nibh a, posuere risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec molestie risus sit amet tempor lacinia. Quisque eget posuere libero. Fusce auctor, diam sit amet porttitor iaculis, felis arcu imperdiet sem, id congue eros metus quis purus. Praesent erat nisl, dapibus non condimentum sed, vulputate in nisi. Vivamus dolor metus, venenatis in dictum ac, aliquam eu odio. Aliquam eu nibh venenatis, varius mi ut, hendrerit elit. Nulla sed dapibus urna. In auctor dignissim commodo.
      
      Mauris tincidunt ex nec cursus luctus. Phasellus vel arcu aliquam, consequat dolor quis, laoreet enim. Aliquam pretium libero sed vulputate pretium. Etiam auctor lorem nec eros eleifend, eu feugiat ante aliquam. Ut elit orci, consectetur vel malesuada in, pretium in ante. Mauris a vehicula risus. Cras pharetra magna at dui ultricies accumsan. Nulla mattis dictum libero id rutrum. Suspendisse ac odio sollicitudin, maximus justo in, pretium ipsum. Praesent vehicula molestie quam, non sollicitudin ante malesuada eu. Mauris malesuada turpis lectus, vitae commodo tortor ultrices quis. Fusce id aliquet purus, ac gravida nulla.`,
      slug: 'post-3',
      img: 'https://loremflickr.com/750/310',
      postDate: new Date(2010, 7, 5),
      comments: [],
      author: 'Brandon Gray',
      category: 'Books',
    },
    {
      title: 'Enough already with the superhero movies',
      content: `In in nulla ut turpis tristique facilisis ac vel neque. Sed ornare cursus massa, a cursus lacus sagittis vitae. Nulla in est leo. Maecenas mollis, ligula et interdum interdum, arcu sapien iaculis ex, in luctus leo metus vitae quam. Proin fringilla tempus fermentum. Curabitur porttitor consectetur congue. Sed ultricies justo sed aliquet iaculis. Phasellus facilisis sapien vehicula sem dignissim, laoreet luctus magna vehicula. Vivamus blandit aliquam accumsan. Donec at dolor ex. Nullam pulvinar dictum neque id ornare.
  
      Sed quis nibh vel quam pharetra dictum vitae vitae ipsum. Nunc lobortis vel est eu pellentesque. Aenean posuere lectus turpis, ut elementum sem pulvinar sed. Etiam nec pretium erat. Suspendisse vitae fermentum metus, nec facilisis libero. Mauris commodo orci nec enim pellentesque, vel volutpat ipsum ultricies. Praesent cursus tellus vitae dolor imperdiet aliquet. Maecenas pellentesque sed sem mollis tincidunt. Donec porta ipsum arcu, a congue risus placerat sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vitae maximus metus. Pellentesque lobortis luctus dui id scelerisque. Suspendisse potenti. Fusce nec feugiat leo. In malesuada orci velit, ac pulvinar turpis mattis non.
      
      Phasellus nec ullamcorper lorem. Pellentesque viverra nulla quis lectus ornare vestibulum. Suspendisse leo orci, dictum et quam et, dignissim fermentum ante. Morbi sit amet eros vitae ipsum efficitur ultricies. Nam in eleifend augue, nec congue felis. Donec non ipsum at purus egestas auctor. Etiam lorem metus, porta eget elementum a, blandit sit amet est. Sed sagittis velit vel congue feugiat. Phasellus efficitur pretium interdum. Pellentesque nec tellus massa. Ut non urna non metus posuere dignissim et nec ligula. Pellentesque rhoncus risus ipsum, eu pretium magna molestie non.
      
      Proin at finibus est. Nulla ut sagittis mi. Integer ultricies lorem nec erat suscipit, at condimentum turpis imperdiet. Quisque eget quam mattis, dapibus nibh a, posuere risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec molestie risus sit amet tempor lacinia. Quisque eget posuere libero. Fusce auctor, diam sit amet porttitor iaculis, felis arcu imperdiet sem, id congue eros metus quis purus. Praesent erat nisl, dapibus non condimentum sed, vulputate in nisi. Vivamus dolor metus, venenatis in dictum ac, aliquam eu odio. Aliquam eu nibh venenatis, varius mi ut, hendrerit elit. Nulla sed dapibus urna. In auctor dignissim commodo.
      
      Mauris tincidunt ex nec cursus luctus. Phasellus vel arcu aliquam, consequat dolor quis, laoreet enim. Aliquam pretium libero sed vulputate pretium. Etiam auctor lorem nec eros eleifend, eu feugiat ante aliquam. Ut elit orci, consectetur vel malesuada in, pretium in ante. Mauris a vehicula risus. Cras pharetra magna at dui ultricies accumsan. Nulla mattis dictum libero id rutrum. Suspendisse ac odio sollicitudin, maximus justo in, pretium ipsum. Praesent vehicula molestie quam, non sollicitudin ante malesuada eu. Mauris malesuada turpis lectus, vitae commodo tortor ultrices quis. Fusce id aliquet purus, ac gravida nulla.`,
      slug: 'post-4',
      img: 'https://loremflickr.com/750/310',
      postDate: new Date(2010, 7, 5),
      comments: [],
      author: 'Brandon Gray',
      category: 'Movies',
    },
  ]);
  console.log(`DB prepopulated with ${result.insertedCount} posts`);
  // db.add("posts", {
  //   title: "Technology in a nutshell",
  //   content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus, erat quis porta euismod, quam justo blandit lectus, eu vulputate tortor felis sit amet magna. Phasellus porta orci vel mollis posuere. Donec vitae ullamcorper est, at interdum nisi. Etiam massa quam, pellentesque vel blandit non, laoreet sed urna. Donec fermentum nulla libero, ac viverra erat interdum vitae. Vivamus vulputate nec ex a fringilla. Suspendisse potenti. Sed finibus, nibh nec blandit rutrum, purus massa ornare dui, a scelerisque mauris sapien quis tortor.

  //   Donec sodales purus ac odio imperdiet, eu sagittis erat scelerisque. Suspendisse sit amet sapien laoreet, rhoncus lorem id, luctus massa. Proin vitae tempor mi. Nunc est est, volutpat id tellus et, euismod suscipit tellus. Proin eleifend sollicitudin est vitae gravida. Curabitur faucibus, sem vitae feugiat aliquet, velit lacus interdum augue, eleifend bibendum metus mauris ut dolor. Suspendisse fringilla maximus venenatis. Aliquam at tortor facilisis, sagittis nibh non, tristique orci. Nullam pretium lectus eget odio venenatis pretium. Fusce tempor ut quam a facilisis. Phasellus ut faucibus nibh. Sed vitae mattis enim.

  //   Maecenas quis viverra ipsum. Duis venenatis augue sit amet lorem dapibus, et efficitur est tincidunt. Morbi pretium vehicula tempus. Donec bibendum neque eu purus malesuada, sed tempus dui dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non metus eu ex consectetur fermentum nec tincidunt justo. Nam gravida dolor enim, eget tincidunt enim blandit eu. Ut dignissim hendrerit dui, pellentesque volutpat diam iaculis nec. Nunc in dictum lacus, a varius purus. Proin rhoncus tellus vel purus malesuada feugiat a nec ante. Vestibulum vitae suscipit lectus, vitae molestie augue. Cras viverra euismod enim, ac eleifend velit tempor id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
  //   slug: "post-1",
  //   img: "https://picsum.photos/750/310",
  //   postDate: new Date(2020, 11, 25),
  //   comments: [],
  //   author: "Joe Doe",
  //   category: "Technology",
  // });
  // db.add("posts", {
  //   title: "Good bocks to read!",
  //   content: `Sed vulputate, sem sit amet placerat feugiat, diam odio consequat odio, id ullamcorper leo enim ac tortor. Nullam vel pretium nulla, eleifend sodales justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vulputate finibus dui, facilisis vulputate ligula elementum eu. Aenean sollicitudin ut ex sit amet suscipit. Praesent id diam, ipsum. Integer a tincidunt magna. Donec tempor id justo ac tempor. Fusce dignissim lorem in pretium feugiat. Nunc et pellentesque arcu. Maecenas auctor justo at metus porta, ut ultricies magna mollis. Praesent suscipit congue metus vel condimentum. Suspendisse ut congue leo. Etiam scelerisque laoreet cursus.

  //   Suspendisse potenti. Suspendisse ipsum turpis, scelerisque eu tortor vehicula, hendrerit convallis mi. Ut eget magna at diam condimentum pulvinar nec eu nibh. Integer eros elit, scelerisque malesuada elementum sed, ultricies eget urna. Nullam at tellus ac nibh facilisis suscipit. Nam sit amet dui augue. Proin aliquet, enim quis consectetur eleifend, felis augue fermentum sem, nec eleifend tortor ipsum vel tellus. Cras ut purus imperdiet, lobortis libero ut, euismod orci. Nam cursus metus eget tellus elementum lacinia eget auctor odio.

  //   Duis at ligula tristique, varius magna a, porta urna. Curabitur aliquam purus vitae consectetur varius. Donec imperdiet aliquet ipsum eu consectetur. Praesent tempor risus nulla, at ornare tortor finibus varius. Cras efficitur dapibus ornare. Morbi tincidunt vel purus quis venenatis. Ut blandit sem nec neque eleifend volutpat. Nullam nec magna tellus.

  //   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et commodo eros. Donec quis purus ac mi molestie vehicula id vitae nisi. Sed nec feugiat velit. Maecenas convallis felis sem, non interdum lectus eleifend sed. Proin egestas tortor leo, nec posuere dui consectetur eget. Sed non nulla metus. Sed congue dolor massa, id luctus tortor auctor a. Duis diam diam, malesuada sit amet elit quis, luctus faucibus sapien. Duis a arcu ornare dolor pulvinar hendrerit sit amet a nunc. Curabitur condimentum consequat efficitur. Phasellus eget consequat ipsum. Cras porttitor metus quis leo sodales, sit amet molestie est finibus. Donec auctor neque eu blandit lobortis.

  //   Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis a tristique erat. Donec a vehicula augue. Aliquam volutpat, purus sit amet ultrices finibus, massa erat auctor massa, non rhoncus ligula tellus nec lorem. Morbi faucibus felis in vestibulum blandit. Proin eu tortor ut ante tincidunt egestas. Proin lobortis ac nisl nec convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas non massa at diam mattis pharetra. Mauris volutpat congue neque, at ullamcorper ligula ornare quis. Vestibulum vel purus quis velit hendrerit fermentum et ac tortor. Nunc id semper tortor, eget tincidunt neque. Vestibulum quis condimentum orci. Duis bibendum facilisis dapibus.`,
  //   slug: "good-bocks-to-read",
  //   img: "http://placeimg.com/750/310/any",
  //   postDate: new Date(2015, 3, 15),
  //   comments: [],
  //   author: "Nick Frasier",
  //   category: "Books",
  // });
  // db.add("posts", {
  //   title: "Poetry",
  //   content: `In in nulla ut turpis tristique facilisis ac vel neque. Sed ornare cursus massa, a cursus lacus sagittis vitae. Nulla in est leo. Maecenas mollis, ligula et interdum interdum, arcu sapien iaculis ex, in luctus leo metus vitae quam. Proin fringilla tempus fermentum. Curabitur porttitor consectetur congue. Sed ultricies justo sed aliquet iaculis. Phasellus facilisis sapien vehicula sem dignissim, laoreet luctus magna vehicula. Vivamus blandit aliquam accumsan. Donec at dolor ex. Nullam pulvinar dictum neque id ornare.

  //   Sed quis nibh vel quam pharetra dictum vitae vitae ipsum. Nunc lobortis vel est eu pellentesque. Aenean posuere lectus turpis, ut elementum sem pulvinar sed. Etiam nec pretium erat. Suspendisse vitae fermentum metus, nec facilisis libero. Mauris commodo orci nec enim pellentesque, vel volutpat ipsum ultricies. Praesent cursus tellus vitae dolor imperdiet aliquet. Maecenas pellentesque sed sem mollis tincidunt. Donec porta ipsum arcu, a congue risus placerat sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vitae maximus metus. Pellentesque lobortis luctus dui id scelerisque. Suspendisse potenti. Fusce nec feugiat leo. In malesuada orci velit, ac pulvinar turpis mattis non.

  //   Phasellus nec ullamcorper lorem. Pellentesque viverra nulla quis lectus ornare vestibulum. Suspendisse leo orci, dictum et quam et, dignissim fermentum ante. Morbi sit amet eros vitae ipsum efficitur ultricies. Nam in eleifend augue, nec congue felis. Donec non ipsum at purus egestas auctor. Etiam lorem metus, porta eget elementum a, blandit sit amet est. Sed sagittis velit vel congue feugiat. Phasellus efficitur pretium interdum. Pellentesque nec tellus massa. Ut non urna non metus posuere dignissim et nec ligula. Pellentesque rhoncus risus ipsum, eu pretium magna molestie non.

  //   Proin at finibus est. Nulla ut sagittis mi. Integer ultricies lorem nec erat suscipit, at condimentum turpis imperdiet. Quisque eget quam mattis, dapibus nibh a, posuere risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec molestie risus sit amet tempor lacinia. Quisque eget posuere libero. Fusce auctor, diam sit amet porttitor iaculis, felis arcu imperdiet sem, id congue eros metus quis purus. Praesent erat nisl, dapibus non condimentum sed, vulputate in nisi. Vivamus dolor metus, venenatis in dictum ac, aliquam eu odio. Aliquam eu nibh venenatis, varius mi ut, hendrerit elit. Nulla sed dapibus urna. In auctor dignissim commodo.

  //   Mauris tincidunt ex nec cursus luctus. Phasellus vel arcu aliquam, consequat dolor quis, laoreet enim. Aliquam pretium libero sed vulputate pretium. Etiam auctor lorem nec eros eleifend, eu feugiat ante aliquam. Ut elit orci, consectetur vel malesuada in, pretium in ante. Mauris a vehicula risus. Cras pharetra magna at dui ultricies accumsan. Nulla mattis dictum libero id rutrum. Suspendisse ac odio sollicitudin, maximus justo in, pretium ipsum. Praesent vehicula molestie quam, non sollicitudin ante malesuada eu. Mauris malesuada turpis lectus, vitae commodo tortor ultrices quis. Fusce id aliquet purus, ac gravida nulla.`,
  //   slug: "post-3",
  //   img: "https://loremflickr.com/750/310",
  //   postDate: new Date(2010, 7, 5),
  //   comments: [],
  //   author: "Brandon Gray",
  //   category: "Books",
  // });
  // db.add("posts", {
  //   title: "Enough already with the superhero movies",
  //   content: `In in nulla ut turpis tristique facilisis ac vel neque. Sed ornare cursus massa, a cursus lacus sagittis vitae. Nulla in est leo. Maecenas mollis, ligula et interdum interdum, arcu sapien iaculis ex, in luctus leo metus vitae quam. Proin fringilla tempus fermentum. Curabitur porttitor consectetur congue. Sed ultricies justo sed aliquet iaculis. Phasellus facilisis sapien vehicula sem dignissim, laoreet luctus magna vehicula. Vivamus blandit aliquam accumsan. Donec at dolor ex. Nullam pulvinar dictum neque id ornare.

  //   Sed quis nibh vel quam pharetra dictum vitae vitae ipsum. Nunc lobortis vel est eu pellentesque. Aenean posuere lectus turpis, ut elementum sem pulvinar sed. Etiam nec pretium erat. Suspendisse vitae fermentum metus, nec facilisis libero. Mauris commodo orci nec enim pellentesque, vel volutpat ipsum ultricies. Praesent cursus tellus vitae dolor imperdiet aliquet. Maecenas pellentesque sed sem mollis tincidunt. Donec porta ipsum arcu, a congue risus placerat sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vitae maximus metus. Pellentesque lobortis luctus dui id scelerisque. Suspendisse potenti. Fusce nec feugiat leo. In malesuada orci velit, ac pulvinar turpis mattis non.

  //   Phasellus nec ullamcorper lorem. Pellentesque viverra nulla quis lectus ornare vestibulum. Suspendisse leo orci, dictum et quam et, dignissim fermentum ante. Morbi sit amet eros vitae ipsum efficitur ultricies. Nam in eleifend augue, nec congue felis. Donec non ipsum at purus egestas auctor. Etiam lorem metus, porta eget elementum a, blandit sit amet est. Sed sagittis velit vel congue feugiat. Phasellus efficitur pretium interdum. Pellentesque nec tellus massa. Ut non urna non metus posuere dignissim et nec ligula. Pellentesque rhoncus risus ipsum, eu pretium magna molestie non.

  //   Proin at finibus est. Nulla ut sagittis mi. Integer ultricies lorem nec erat suscipit, at condimentum turpis imperdiet. Quisque eget quam mattis, dapibus nibh a, posuere risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec molestie risus sit amet tempor lacinia. Quisque eget posuere libero. Fusce auctor, diam sit amet porttitor iaculis, felis arcu imperdiet sem, id congue eros metus quis purus. Praesent erat nisl, dapibus non condimentum sed, vulputate in nisi. Vivamus dolor metus, venenatis in dictum ac, aliquam eu odio. Aliquam eu nibh venenatis, varius mi ut, hendrerit elit. Nulla sed dapibus urna. In auctor dignissim commodo.

  //   Mauris tincidunt ex nec cursus luctus. Phasellus vel arcu aliquam, consequat dolor quis, laoreet enim. Aliquam pretium libero sed vulputate pretium. Etiam auctor lorem nec eros eleifend, eu feugiat ante aliquam. Ut elit orci, consectetur vel malesuada in, pretium in ante. Mauris a vehicula risus. Cras pharetra magna at dui ultricies accumsan. Nulla mattis dictum libero id rutrum. Suspendisse ac odio sollicitudin, maximus justo in, pretium ipsum. Praesent vehicula molestie quam, non sollicitudin ante malesuada eu. Mauris malesuada turpis lectus, vitae commodo tortor ultrices quis. Fusce id aliquet purus, ac gravida nulla.`,
  //   slug: "post-3",
  //   img: "https://loremflickr.com/750/310",
  //   postDate: new Date(2010, 7, 5),
  //   comments: [],
  //   author: "Brandon Gray",
  //   category: "Movies",
  // });
};

module.exports = populate;
