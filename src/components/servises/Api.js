const API_KEY = '34494219-18836f66a27c5c5fdb378157c';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = (filter, page = 1) => {
  const url = `${BASE_URL}?q=${filter}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Nothing was found');
    })
    .then(data => {
      if (data.hits.length > 0) {
        return data;
      } else {
        throw new Error('Nothing was found');
      }
    });
};
