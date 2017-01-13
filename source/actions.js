//These are the actions in the form
//1. Data Received from the server
//2. User Rated the question
//3. User chose aspect
//4. User unchose aspect
//5. User select aspect option
//6. User give feedback
//7. User give contact details


export const setNextLink = (nextLink = '') => {
  return {
    type: 'app/setNextLink',
    payload: {
      nextLink
    }
  }
};

export const dataLoaded = (data) => {
  return {
    type: 'app/dataLoaded',
    payload: {
      data
    }
  }
};

export const activateFooter = () => {
  return {
    type: 'app/activateFooter'
  }
};

export const deactivateFooter = () => {
  return {
    type: 'app/deactivateFooter'
  }
};

export const removeFooter = () => {
  return {
    type: 'app/removeFooter'
  }
};

export const showFooter = () => {
  return {
    type: 'app/showFooter'
  }
};

export const questionRated = (rating = 0) => {
  return {
    type: 'app/questionRated',
    payload: {
      rating
    }
  }
};

export const choseAspect = (aspect) => {
  return {
    type: 'app/choseAspect',
    payload: {
      aspect
    }
  }
};

export const selectAspectOption = (aspect, optionId) => {
  return {
    type: 'app/selectAspectOption',
    payload: {
      aspect,
      optionId
    }
  }
};

export const giveFeedback = (feedback = '') => {
  return {
    type: 'app/giveFeedback',
    payload: {
      feedback
    }
  }
};

export const selectUnit = (selectedUnit = '') => {
  return {
    type: 'app/selectUnit',
    payload: {
      selectedUnit
    }
  }
};

export const onContactNameChange = (name = '') => {
  return {
    type: 'app/onContactNameChange',
    payload: {
      name
    }
  }
};

export const onContactEmailChange = (email = '') => {
  return {
    type: 'app/onContactEmailChange',
    payload: {
      email
    }
  }
};

export const onContactPhoneChange = (phone = '') => {
  return {
    type: 'app/onContactPhoneChange',
    payload: {
      phone
    }
  }
};
