import React, { Component } from 'react';

class StoryBox extends Component {
  render() {
      const now = new Date();
      const topic = ['HTML', 'CSS', 'Javascript'];
      return (
          <div>
              <h2>Stories</h2>
              <p className="lead">
                  Current Time : {now.toTimeString()}
              </p>
              <ul>
                  {topic.map(item => <li>{item}</li>)}
              </ul>
          </div>
      );
  }
}

export default StoryBox;
