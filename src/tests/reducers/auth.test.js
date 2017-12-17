import authReducer from '../../reducers/auth';

test('should setup default auth values', () => {
  const state = authReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({});
});

test('should set login state', () => {
  const uid = 'abc123';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer(undefined, action);

  expect(state).toEqual({
    uid
  });
});

test('should set logout state', () => {
  const uid = 'abc123';
  const currentState = {
    uid
  };
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer(currentState, action);

  expect(state).toEqual({});
});
