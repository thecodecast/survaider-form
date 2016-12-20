import {createStore} from 'redux';

import {reducer} from './reducers';

export const store = createStore(reducer);

// let throttle = (f, t) => {
//   if (!throttle.lastTime) {
//     throttle.lastTime = (new Date).getTime();
//     console.log(throttle.lastTime);
//
//   }
//   let currentTime = (new Date).getTime();
//
//   if (currentTime >= throttle.lastTime + t) {
//     return f;
//     throttle.lastTime = currentTime;
//   }
//   else{
//     return throttle(f, t);
//   }
// }
// 
// store.subscribe(() => {
//   let stateString = JSON.stringify(store.getState());
//   window.localStorage.setItem('state', stateString);
// });
