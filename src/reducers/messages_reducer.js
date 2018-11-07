export default function(state = null, action) {

  switch(action.type) {

    case 'SET_MESSAGES':
      return action.payload.messages;

    case 'CREATE_MESSAGE': {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    };
    
    default:
      return state;
  }
}