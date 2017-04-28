const {createReducer} = require('./reducer');

const {
  ACTION_ADD_HISTORY,
} = require('../actions/InterpreterActions');

// Array of:
// {
//   currentInstructionIndex: 0,
//   instruction: '>',
//   currentPointer: 0,
//   memory: [0],
// }
module.exports = createReducer([], {
  [ACTION_ADD_HISTORY](state, {record}) {
    return [...state, record];
  },
});
