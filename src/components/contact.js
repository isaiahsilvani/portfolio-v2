import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from '../images/avatar.png'

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Isaiah Silvani</h2>
            <img
              src={avatar}
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>From serving cars to serving web pages, I have always been passionate about helping others and learning new things. As a Full Stack Web Developer, these passions have driven me to build bigger and better things every day. As a result of my previous experience in customer service and sales, I understand the importance of showing courtesy and respect to everyone, and strive to be an ideal canidate for any development team.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <a className="contact-link" href='#'  target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    <span className='contact-text phone'>(609) 464-6560</span>
                  </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <a className="contact-link" href='mailto: developersilvani@gmail.com'>
                      <i className="fa fa-envelope-square" aria-hidden="true"/>
                      <span className='contact-text email'>developersilvani@gmail.com</span>
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <a className="contact-link" href='https://www.linkedin.com/in/isaiah-silvani' target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin" aria-hidden="true"/>
                      <span className='contact-text linked'>@ Isaiah-Silvani</span>
                    </a>
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
