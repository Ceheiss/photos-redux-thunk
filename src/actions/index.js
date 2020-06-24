export const getPhotos = () => async (dispatch) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/photos?albumId=1'
  );
  const data = await response.json();
  dispatch({
    type: 'FETCH_PHOTOS',
    payload: data,
  });
};
