import { fromJS } from 'immutable'

function changeDate(state: any, action: any) {
  const { id, value } = action;
  let newState = fromJS(state);
  newState = newState.setIn(['modules', id, 'time'], value);
  return newState.toJS();
}

export default {
  changeDate
}
