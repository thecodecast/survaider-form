import React, {Component} from 'react';

class TitleView extends Component{
  render(){
    return (
        <div className="question-view">
          <h1>
            {this.props.title}
          </h1>
        </div>
    );
  }
}

export default TitleView;
