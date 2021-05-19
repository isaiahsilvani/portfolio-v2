import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
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
            <p>From serving cars to serving web pages, I have always been passionate about helping others and learning new things. As a Full Stack Web Developer, these passions have driven me to build bigger and better things every day. As a result of my previous experience in customer service and sales, I understand the importance of showing courteousy and respect to everyone, and strive to be an ideal canidate for any development team.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Location</h5>
            <p>Philadelphia, PA</p>
            <h5>Phone</h5>
            <p>(609) 464-6560</p>
            <h5>Email</h5>
            <p>isaiahsilvani@outlook.com</p>
            <h5>Web</h5>
            <p>www.isaiahsilvani.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={'Sept 2016'}
              endYear={'Jun 2017'}
              schoolName="Rowan College of Burlington Country"
              schoolDescription="Completed courses towards Associates in Computer Science"
               />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={'Feb 2021'}
              endYear={'May 2021'}
              jobName="General Assembly"
              jobDescription="Complete 500 hours of Software Development training using latest technologies and best practices. Build 3 real world full stack projects, and 1 front end project. Collaborate in a team environment."
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
              <Skills
                skill="Javascript"
                progress={95}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={100}
                />
                <Skills
                  skill="Bootstrap"
                  progress={100}
                />
                <Skills
                  skill="NodeJS"
                  progress={93}
                />
                <Skills
                  skill="React"
                  progress={94}
                />
                <Skills
                  skill="Express"
                  progress={95}
                />
                <Skills
                  skill="MongoDB"
                  progress={100}
                />
                <Skills
                  skill="Postgresql"
                  progress={90}
                />
                <Skills
                  skill="Python"
                  progress={90}
                />
                <Skills
                  skill="Django"
                  progress={89}
                />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
