import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import ideahubio_thumb from '../images/ideahubio_thumb.png'
import hot_escape_thumb from '../images/hot_escape_thumb.png'
import tech_hunters_thumb from '../images/tech_hunters_thumb.png'
import connect4_thumb from '../images/connect4_thumb.png'
import quiz_app_thumb from '../images/quiz_app_thumb.png'


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <img 
              src={ideahubio_thumb}
              style={{color: '#fff', height: '210px'}}/>
            <CardText>
              <p className='card-title'>IdeaHub.IO</p>
              <span className="project-text">A social application for innovators to create and share their own groundbreaking startup ideas with other users. Features conditionally rendered controls for different levels of user authentication and real time chat with Django Channels.</span>
              <br/><br/>
              <p className='card-tech' style={{marginBottom: '0'}}>Python, Django, Postgresql, Bootstrap</p>
            </CardText>
            <CardActions border>
              <a href="https://github.com/isaiahsilvani/ideahubio" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
              <a href="https://www.ideahubio.com/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <img 
              src={hot_escape_thumb}
              style={{color: '#fff', height: '210px'}} 
              />
            <CardText>
              <p className='card-title'>Hot Escape (Group Project)</p>
              <span className="project-text">
              A travel and itinerary application which utilizes a 3rd party API to get flight data based on user query. Users can plan out their trips by inputting hotel, flight and rental car information. I was responsible for API integration and building the chatroom with Socket.IO
              </span>
              <br/><br/>
              <p className='card-tech' style={{marginBottom: '0'}}>NodeJS, React, Express, MongoDB, Socket.IO</p>
            </CardText>
            <CardActions border>
            <a href="https://github.com/isaiahsilvani/hot-escape" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
            <a href="https://www.hotescape.co/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <img 
              src={tech_hunters_thumb}
              style={{color: '#fff', height: '210px'}} />
            <CardText>
              <p className='card-title'>Tech Hunters</p>
              <span className="project-text">
              A job hunting application which consumes a 3rd party API to get job list data based on user query fields. User can track the application process of each individual job a user finds. Also features a message board for users to share their job hunting experience with others
              </span>
              <br/><br/>
              <p className='card-tech' style={{marginBottom: '0'}}>NodeJS, Express, MongoDB, Bootstrap</p>
            </CardText>
            <CardActions border>
            <a href="https://github.com/isaiahsilvani/tech-job-tracker" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
            <a href="https://www.techhunters.info" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <img 
              src={connect4_thumb}
              style={{color: '#fff', height: '210px'}} />
            <CardText>
              <p className='card-title'>Connect Four Browser Game</p>
              <span className="project-text">
              A recreation of the popular board game Connect Four using JavaScript, HTML and CSS. Features toggle sound button, custom player names, randomizing who goes first, mobile responsiveness, and win or tie messages. Also used WebAim Contrast Checker for accessibility.
              </span>
              <br/><br/>
              <p className='card-tech' style={{marginBottom: '0'}}>Javascript, HTML5, CSS3</p>
            </CardText>
            <CardActions border>
            <a href="https://github.com/isaiahsilvani/connect4-browser-game" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
            <a href="https://www.connect4-game.com/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

                    {/* Project 5 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <img 
              src={quiz_app_thumb}
              style={{color: '#fff', height: '210px'}}/>
            <CardText>
              <p className='card-title'>Unlimited Quiz App</p>
              <span className="project-text">A full-stack quiz app that allows users to choose how many questions are served, and the difficulty of those questions. Also has the option to save user scores to the database for bragging rights. Made using the TriviaDB API.</span>
              <br/><br/>
              <p className='card-tech' style={{marginBottom: '0'}}>TypeScript, React+Redux, NodeJS, Express, MongoDB</p>
            </CardText>
            <CardActions border>
              <a href="https://github.com/isaiahsilvani/projects-argus/tree/main/quiz-app" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
              <a href="https://unlimited-quiz-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
        </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <img 
              src={ideahubio_thumb}
              style={{color: '#fff', height: '210px'}}/>
            <CardText>
              <p className='card-title'>IdeaHub.IO</p>
              <span className="project-text">A social application for innovators to create and share their own groundbreaking startup ideas with other users. Features conditionally rendered controls for different levels of user authentication and real time chat with Django Channels.</span>
              <br/><br/>
              <p className='card-tech' style={{marginBottom: '0'}}>Python, Django, Postgresql, Bootstrap</p>
            </CardText>
            <CardActions border>
              <a href="https://github.com/isaiahsilvani/ideahubio" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
              <a href="https://www.ideahubio.com/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <img 
              src={hot_escape_thumb}
              style={{color: '#fff', height: '210px'}} 
              />
            <CardText>
              <p className='card-title'>Hot Escape (Group Project)</p>
              <span className="project-text">
              A travel and itinerary application which utilizes a 3rd party API to get flight data based on user query. Users can plan out their trips by inputting hotel, flight and rental car information. I was responsible for API integration and building the chatroom with Socket.IO
              </span>
              <br/><br/>
              <p className='card-tech' style={{marginBottom: '0'}}>NodeJS, React, Express, MongoDB, Socket.IO</p>
            </CardText>
            <CardActions border>
            <a href="https://github.com/isaiahsilvani/hot-escape" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
            <a href="https://www.hotescape.co/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <img 
              src={tech_hunters_thumb}
              style={{color: '#fff', height: '210px'}} />
            <CardText>
              <p className='card-title'>Tech Hunters</p>
              <span className="project-text">
              A job hunting application which consumes a 3rd party API to get job list data based on user query fields. User can track the application process of each individual job a user finds. Also features a message board for users to share their job hunting experience with others
              </span>
              <br/><br/>
              <p className='card-tech' style={{marginBottom: '0'}}>NodeJS, Express, MongoDB, Bootstrap</p>
            </CardText>
            <CardActions border>
            <a href="https://github.com/isaiahsilvani/tech-job-tracker" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
            <a href="https://www.techhunters.info" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <img 
              src={quiz_app_thumb}
              style={{color: '#fff', height: '210px'}} />
            <CardText>
              <p className='card-title'>Unlimited Quiz App</p>
              <span className="project-text">
                A full-stack quiz app that allows users to choose how many random questions are served, the difficulty of those questions, and the option to save your score to the database for bragging rights
              </span>
              <br/><br/>
              <p className='card-tech' style={{marginBottom: '0'}}>Javascript, HTML5, CSS3</p>
            </CardText>
            <CardActions border>
            <a href="https://github.com/isaiahsilvani/connect4-browser-game" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
            <a href="https://www.connect4-game.com/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>All</Tab>
          <Tab>Django</Tab>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
