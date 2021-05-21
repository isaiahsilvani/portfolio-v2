import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
import avatar from '../images/avatar.png'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto', height: '100%'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={avatar}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Isaiah Silvani</h1>
              <h3>Full Stack Web Developer</h3>
            <hr/>

          <p>Bootstrap | JavaScript | React | NodeJS | Express | MongoDB | Python | Django | Postgresql </p>
          <Link to="/projects"><button className="button-three">View Projects</button></Link>
        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/isaiah-silvani" rel="noopener noreferrer" target="_blank">
            <i 
              className="fa fa-linkedin-square" 
              aria-hidden="true"
              id="linkedin"
            />
          </a>

          {/* Github */}
          <a href="https://github.com/isaiahsilvani" rel="noopener noreferrer" target="_blank">
            <i 
              className="fa fa-github-square" 
              aria-hidden="true" 
              id="github"
            />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
