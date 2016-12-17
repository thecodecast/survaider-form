import {merge, append, without, indexOf} from 'ramda';

export const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'app/dataLoaded':
      return payload.data;
      break;
    case 'app/questionRated':
      return merge(state, { rating: payload.rating })
      break;
    case 'app/choseAspect':
      let aspect = payload.aspect.toLowerCase().split(' ').join('-');
      if (state.choosen_aspects) {
        var indexOfAspect =  indexOf(payload.aspect, state.choosen_aspects);
      }
      if (indexOfAspect === -1) {
        return merge(state, { choosen_aspects: append(aspect, state.choosen_aspects) })
      }
      else{
        return merge(state, { choosen_aspects: without(aspect, state.choosen_aspects) })
      }
      break;
    case 'app/selectAspectOption':
      return merge(state, { choosen_aspects_options: { [payload.aspect]: payload.optionId } })
      break;
    case 'app/giveFeedback':
      return merge(state, { ['feedback']: payload.feedback })
      break;
    case 'app/submitContactForm':
      return merge(state, { ['contact']: { ['name']: payload.name, ['email']: payload.email, ['mobile']: payload.mobile } })
      break;
    default:
      return state;
  }
}
