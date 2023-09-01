const images = [
  {
    gap: 16,
    width: 400,
    height: 250,
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    width: 400,
    height: 250,
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    width: 400,
    height: 250,
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');

const galleryItems = images.map(({ url, alt, width, height, gap }) => {
  return `
    <li>
      <img src="${url}" alt="${alt}" width="${width}" height="${height}" gap="${gap}"/>
    </li>
  `;
});

gallery.insertAdjacentHTML('afterbegin', galleryItems.join(''));
