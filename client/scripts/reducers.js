import { createStore } from 'redux';

export function dogs(state = [], action) {
  switch (action.type) {
  case 'ADD_DOG':
    return [...state, {name:action.name, description: action.description, id: action.id}]
  default:
    return state
  }
}
