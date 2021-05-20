import React, { Component } from 'react';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import html5 from '../components/../images/html5.png'
import bootstrap from '../components/../images/bootstrap.png'
import css3 from '../components/../images/css3.png'
import django from '../components/../images/django.png'
import git from '../components/../images/git.png'
import github from '../components/../images/github.png'
import javascript from '../components/../images/javascript.png'
import mongodb from '../components/../images/mongodb.png'
import postgresql from '../components/../images/postgresql.png'
import python from '../components/../images/python.png'
import react from '../components/../images/react.png'
import nodejs from '../components/../images/nodejs.png'


class Resume extends Component {
  render() {
    return(
      <div className="resume-grid">
          <div className='resume-left-col'>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://i.imgur.com/Vnf5IES.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '0.4em'}}>Isaiah Silvani</h2>
            <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>From serving cars to serving web pages, I have always been passionate about helping others and learning new things. As a Full Stack Web Developer, these passions have driven me to build bigger and better things every day. As a result of my previous experience in customer service and sales, I understand the importance of showing courtesy and respect to everyone, and strive to be an ideal canidate for any development team.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Location</h5>
            <p>Philadelphia, PA</p>
            <h5>Phone</h5>
            <p>(609) 464-6560</p>
            <h5>Email</h5>
            <p>isilvani@hotmail.com</p>
            <h5>Web</h5>
            <p>www.isaiahsilvani.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </div>

          <div className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={'Feb 2021'}
              endYear={'May 2021'}
              schoolName="General Assembly"
              schoolDescription="Completed 500 hours of Software Development training using latest technologies and best practices"
               />
            <Education
              startYear={'Sept 2016'}
              endYear={'Jun 2017'}
              schoolName="Rowan College of Burlington Country"
              schoolDescription="Completed courses in Computer Science"
               />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={'Feb 2021'}
              endYear={'May 2021'}
              jobName="General Assembly"
              jobDescription="Design, develop and deploy 3 real world full stack applications, and 1 front end application. Collaborate in a team environment using Slack and Zoom."
              />

              <Experience
                startYear={'Apr 2021'}
                endYear={'Dec 2021'}
                jobName="Patriot Chevrolet of Warminster"
                jobDescription="Guide customers to the vehicle of their dreams by using proven sales techniques and being knowledgeable of all Chevrolet products. Maintain social media presence for marketing outreach  purposes."
                />

              <Experience
                startYear={'Aug 2018'}
                endYear={'Dec 2020'}
                jobName="Cracker Barrel"
                jobDescription="Provide exceptional customer service and dining experience. Train new servers and provide support for continued growth of new hires."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
                <h2>Skills</h2>
                <div className='skills'>
                  <img alt='react' src={react}/>
                  <img alt='bootstrap' src={bootstrap}/>
                  <img alt='css3' src={css3}/>
                  <img id='nodejs' alt='nodejs' src={nodejs}/>
                  <img alt='html5' src={html5}/>
                  <img alt='javascript' src={javascript}/>
                  <img alt='python' src={python}/>
                  <img alt='mongodb' src={mongodb}/>
                  <img alt='postgresql' src={postgresql}/>
                  <img alt='git' src={git}/>
                  <img alt='github' src={github}/>
                  <img id='django' alt='django' src={django}/>
                </div>
          </div>
      </div>
    )
  }
}

export default Resume;
