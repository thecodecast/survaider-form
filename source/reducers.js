import {merge, append, without, indexOf} from 'ramda';

let initialState = {
  business_name: '',
  logo_link: '',
  aspects_names: [],
  aspects_options: [],
  choosen_aspects: [],
  choosen_aspects_options: {},
  rating: 0,
  selectedUnit: {
    unit_name: '',
    survey_id: ''
  }
};

// let cachedState = window.localStorage.getItem('state');
//
// if (cachedState && cachedState !== '') {
//   try {
//     cachedState = JSON.parse(cachedState);
//   } catch (e) {
//     console.log(e);
//   }
// }
//
// initialState = merge({}, initialState, cachedState);

export const reducer = (state = initialState, { type, payload }) => {
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
        var indexOfAspect =  indexOf(aspect, state.choosen_aspects);
      }
      if (indexOfAspect === -1) {
        return merge(state, { choosen_aspects: append(aspect, state.choosen_aspects) })
      }
      else{
        return merge(state, { choosen_aspects: without([aspect], state.choosen_aspects) })
      }
      break;
    case 'app/selectAspectOption':
      if (state.choosen_aspects_options) {
        if (!state.choosen_aspects_options[payload.aspect]) state.choosen_aspects_options[payload.aspect] = [];
        var indexOfOption =  indexOf(payload.optionId, state.choosen_aspects_options[payload.aspect]);
      }
      if (indexOfOption === -1) {
        return merge(state, { choosen_aspects_options: merge( state.choosen_aspects_options, { [payload.aspect]: append(payload.optionId, state.choosen_aspects_options[payload.aspect]) } )});
      }
      else{
        return merge(state, { choosen_aspects_options: merge( state.choosen_aspects_options, { [payload.aspect]: without([payload.optionId], state.choosen_aspects_options[payload.aspect]) } )});
      }
      break;
    case 'app/giveFeedback':
      return merge(state, { ['feedback']: payload.feedback })
      break;
    case 'app/selectUnit':
      return merge(state, { ['selectedUnit']: payload.selectedUnit })
      break;
    case 'app/onContactNameChange':
      return merge(state, { ['contact']: merge( state.contact, { name: payload.name } ) } );
      break;
    case 'app/onContactEmailChange':
      return merge(state, { ['contact']: merge( state.contact, { email: payload.email } ) } );
      break;
    case 'app/onContactMobileChange':
      return merge(state, { ['contact']: merge( state.contact, { mobile: payload.mobile } ) } );
      break;
    default:
      return state;
  }
}
