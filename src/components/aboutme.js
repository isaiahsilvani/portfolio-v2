import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <div className="aboutpage">
        <div className='col1'>
          <h2>About Me</h2>
          <p className='abouttext'>
            My name is Isaiah Silvani. I believe that in life, if you're going to do anything, you might as well do it the best you can. What I love most about software development is that since no one can ever take your knowledge away, your development skills will only improve over time with hard work. I strive to always push myself and produce amazing results when a task is at hand. When I'm not englufed in a coding hole, you can find myeplaying games on my Playstation or going on walks at night. 
          </p>
        </div>
        <div className='col2'>
          <img src="https://i.imgur.com/o1tytDJ.png" alt="Web Dev Photo"/>
        </div>
      </div>
    )
  }
}

export default About;
