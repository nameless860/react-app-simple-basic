import { FLASH_ACTION } from '../actions/flashesAction'

export const flashesReducer = (state=[], action) => {
  const payload = action.payload;

  switch(action.type) {
    case FLASH_ACTION.CREATE_FLASH:
      return [...state, payload.flash]
    case FLASH_ACTION.DELETE_FLASH:
      return state.filter(flash => flash.id !== payload.flash_id)
    default:
      return state
  }
}

export default flashesReducer;