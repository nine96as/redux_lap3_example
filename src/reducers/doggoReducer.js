const initState = {
  doggos: [
    { id: 1, img: '', liked: true },
    { id: 1, img: '', liked: false }
  ],
  loading: true
};

const doggoReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default doggoReducer;
