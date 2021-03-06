import {propEq, find} from 'ramda';

export const getWholeState = (state) => {
  return state;
};

export const getAspects = (state) => {
  return state['aspects_names'];
};

export const getAspectOptions = (state, aspect) => {
  return state['aspects_options'][aspect];
};

export const getChoosenAspects = (state) => {
  return state['choosen_aspects'];
};

export const getChoosenAspectOptions = (state, aspect) => {
  return state['choosen_aspects_options'][aspect];
};

export const getChoosenAspectQuestionPositive = (state, aspect) => {
  return state['question_positive'][aspect];
};

export const getChoosenAspectQuestionNegative = (state, aspect) => {
  return state['question_negative'][aspect];
};
