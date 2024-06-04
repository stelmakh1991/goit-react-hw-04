import axios from "axios";

const URL =
  "https://api.unsplash.com/search/photos/";

export const requestPhotos = async ({ queryValue = '', page = 1 }) => {
  const { data } = await axios.get(URL, {
    params: {
    client_id: 'XlhamTcBfw1C3XzSRruT_ys2JUUQtmyYn6f_Sn2Gezc',
    query: queryValue,
    page,
    orientation: 'landscape'
    }
  });

  return data;
};