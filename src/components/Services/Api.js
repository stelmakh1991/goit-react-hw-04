import axios from "axios";

const URL =
  "https://api.unsplash.com/search/photos/";

export const requestPhotos = async ({ queryValue = '', page = 1 }) => {
  const { data } = await axios.get(URL, {
    params: {
    client_id: 'e77Hr-FoiXBvzM7RsBeoRwnsRtcgFhtTGod32LzI62k',
    query: queryValue,
    page,
    orientation: 'landscape'
    }
  });

  return data;
};