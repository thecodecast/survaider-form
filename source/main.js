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


  fetch('http://35.154.105.198/survey/JKz3VDg1wgw2kKe7DaL')
    .then( (res) => { return res.json() } )
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

      data['aspects_names'] = json['aspect_options'].map((aspect) => {
        let name = aspect.aspect;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        return name;
      });
      data['aspects_options'] = {};

      json['aspect_options'].forEach((aspect) => {
        let aspect_name = aspect.aspect.toLowerCase().split(' ').join('-');
        let aspect_options = aspect.options.map((option, index) => {
          let optionKey = Object.keys(option)[0];
          return option[optionKey];
        });
        data['aspects_options'][aspect_name] = aspect_options;
      });

      store.dispatch(actions.dataLoaded(data));

      render(<Provider store={store}>
              <App />
            </Provider>,
      document.getElementById('mainApp'));

    })
    .catch( (err) => { return console.log(err); } )



}, 1);


render(<Loading />,
document.getElementById('mainApp'));
