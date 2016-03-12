import expect from 'expect';
import { dogs } from './reducers';
import deepFreeze from 'deep-freeze';

describe('dogs reducer', () => {
  it('should handle initial state', () => {
    const initialState = undefined;
    const action = {};
    const finalState = [];
    expect(
      dogs(initialState, action)
    ).toEqual(finalState)
  })

  it('should handle ADD_DOG', () => {
    const initialState = [];
    const action = {
      type: 'ADD_DOG',
      description: 'Run the tests',
      name: 'test dog',
      id: 0
    };
    const finalState = [{
        description: 'Run the tests',
        name: 'test dog',
        id: 0
    }];

    expect(
      dogs(initialState, action)
    ).toEqual(finalState)
  })
});
