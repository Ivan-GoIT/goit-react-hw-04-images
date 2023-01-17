import axios from 'axios';

export const fetchPichureData = (searchQuery, page = 1, per_page = 12) => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '31151048-14715764b2774648f52159790',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      q: searchQuery,
      per_page,
    },
  });
};
