export default (state = {  squares: Array(9).fill(null),
   xIsNext: true}, action) => {
  switch (action.type) {
case 'MARK_SQUARE':
  const { squares, xIsNext} = action;
  let newState = Object.assign({}, state, {

    })

  return newState;
default:
  return state;
  }
};
