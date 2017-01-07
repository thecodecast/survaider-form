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


  fetch('data2.json')
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
      data['feedback_title'] = json['aspect_question_positive'];
      data['choose_aspect_title'] = json['aspect_question_negative'];
      data['rating_threshold'] = json['rating_threshold'];



      data['aspects_names'] = json['aspect_options'].map((aspect) => {
        let name = aspect.aspect;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        return name;
      });
      data['aspects_options'] = {};
      data['question_positive'] = {};
      data['question_negative'] = {};

      data['units_question'] = json['units_question'];
      data['units_placeholder_text'] = json['units_placeholder_text'];
      data['units'] = json['units'];

      json['aspect_options'].forEach((aspect) => {
        let aspect_name = aspect.aspect.toLowerCase().split(' ').join('-');
        let aspect_options = Object.keys(aspect.options).map((key) => {
          return aspect.options[key];
        });
        data['aspects_options'][aspect_name] = aspect_options;
        data['question_positive'][aspect_name] = aspect['question_positive'];
        data['question_negative'][aspect_name] = aspect['question_negative'];
      });

      store.dispatch(actions.dataLoaded(data));

      render(<Provider store={store}>
              <App isParent={json['is_parent']} />
            </Provider>,
      document.getElementById('mainApp'));

    })
    .catch( (err) => { return console.log(err); } )



}, 1);


render(<Loading />,
document.getElementById('mainApp'));
