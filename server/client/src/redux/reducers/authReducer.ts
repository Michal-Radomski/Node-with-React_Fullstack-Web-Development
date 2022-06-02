const initialState: State = {};

const authReducer = function (state = initialState, action: Dispatch) {
  console.log({action});
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
