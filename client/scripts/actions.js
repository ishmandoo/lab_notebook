import * as ActionTypes from '../constants/constants';

function getChores(chores) {
  return {
    type: types.GET_CHORES,
    chores: chores
  }
}

export function getAllChores() {
  return dispatch => {
    shop.getProducts(products => {
      dispatch(receiveProducts(products))
    })
  }
}

export function addDog(dog) {
  return {
    type: ActionTypes.ADD_DOG,
    name: dog.name,
    description: dog.description,
    _id: dog._id,
  };
}
