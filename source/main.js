import React from 'react';
import 'whatwg-fetch';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {store} from './store';

import * as actions from './actions';
import App from './components/app';
import Loading from './components/loading';


//Imitating Loading Effect
setTimeout(() => {


  fetch('data.json')
    .then( (res) => { return res.json(); } )
    .then( (json) => {

      let data = {
        business_name: '',
        logo_link: '',
        aspects_names: [],
        aspects_options: [],
        choosen_aspects: [],
        choosen_aspects_options: {},
        rating: 0
      };

      data['business_name'] = json['business_name'];
      data['logo_link'] = json['logo_link'];

      data['aspects_names'] = json['aspect_options'].map((aspect) => { return aspect.aspect; });
      data['aspects_options'] = {};

      json['aspect_options'].forEach((aspect) => {
        let aspect_name = aspect.aspect.toLowerCase().split(' ').join('-');
        let aspect_options = aspect.options.map((option, index) => { return option[index+1] });
        data['aspects_options'][aspect_name] = aspect_options;
      });

      store.dispatch(actions.dataLoaded(data));

      render(<Provider store={store}>
              <App />
            </Provider>,
      document.getElementById('mainApp'));

    } )
    .catch((err) => { console.log(err); })



}, 5000);


render(<Loading />,
document.getElementById('mainApp'));
