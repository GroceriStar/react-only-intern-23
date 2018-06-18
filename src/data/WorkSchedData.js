import React, { Component } from 'react';
import { Table, Container, Row, Col, ListGroup, ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const timeLine = () => {
    return (
            <div>
                <ListGroup>
                    <ListGroupItem>9:00</ListGroupItem>
                    <ListGroupItem>9:30</ListGroupItem>
                    <ListGroupItem>10:00</ListGroupItem>
                    <ListGroupItem>10:30</ListGroupItem>
                    <ListGroupItem>11:00</ListGroupItem>
                    <ListGroupItem>11:30</ListGroupItem>
                    <ListGroupItem>12:00</ListGroupItem>
                    <ListGroupItem>12:30</ListGroupItem>
                    <ListGroupItem>13:00</ListGroupItem>
                    <ListGroupItem>13:30</ListGroupItem>
                    <ListGroupItem>14:00</ListGroupItem>
                    <ListGroupItem>14:30</ListGroupItem>
                    <ListGroupItem>15:00</ListGroupItem>
                    <ListGroupItem>15:30</ListGroupItem>
                    <ListGroupItem>16:00</ListGroupItem>
                    <ListGroupItem>16:30</ListGroupItem>
                    <ListGroupItem>17:00</ListGroupItem>
                    <ListGroupItem>17:30</ListGroupItem>
                    <ListGroupItem>18:00</ListGroupItem>
                </ListGroup>
            </div>
    );
}

class Monday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render() {
        return(
            <div>
                <ListGroup>
                    <ListGroupItem>Monday</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem className='oneHour abs' onClick={this.toggle}><div>9:30-10:30</div>Abs Circuit</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem className='oneHourHalf rowing' onClick={this.toggle}><div>11:00-12:30</div>Rowing Workout</ListGroupItem>
                    <ListGroupItem ></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem className='oneHourQuarter yoga' onClick={this.toggle}><div>14:00-15:15</div>Yoga Level 1</ListGroupItem>
                    <ListGroupItem className='short0'></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                </ListGroup>
               
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
            </Modal>
            </div>
        );
    }
}

class Tuesday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render() {
        return(
            <div>
                <ListGroup>
                    <ListGroupItem>Tuesday</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem className='oneHour rowing' onClick={this.toggle}><div>10:00-11:00</div>Rowing Workout</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem className='oneHourHalf restorive' onClick={this.toggle}><div>11:30-13:00</div>Restoration Yoga</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem className='oneHourHalf abs' onClick={this.toggle}><div>13:30-15:00</div>Abs Circuit</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem className='short0'></ListGroupItem>
                    <ListGroupItem className='oneHour yoga' onClick={this.toggle}><div>15:45-16:45</div>Yoga Level 1</ListGroupItem>
                    <ListGroupItem className='short0'></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                </ListGroup>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
            </Modal>
            </div>
        );
    }
}


class Wednesday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render() {
        return(
            <div>
                <ListGroup>
                    <ListGroupItem>Wednesday</ListGroupItem>
                    <ListGroupItem className='oneHourQuarter restorive' onClick={this.toggle}><div>09:00-10:15</div>Restorative Yoga</ListGroupItem>
                    <ListGroupItem className='short0'></ListGroupItem>
                    <ListGroupItem className='short0'></ListGroupItem>
                    <ListGroupItem className='oneHour yoga' onClick={this.toggle}><div>10:45-11:45</div>Yoga Level 1</ListGroupItem>
                    <ListGroupItem className='short0'></ListGroupItem>
                    <ListGroupItem className='twoHourToQuarter rowing' onClick={this.toggle}><div>12:00-13:45</div>Rowing Workout</ListGroupItem>
                    <ListGroupItem className='oneHourQuarter yoga' onClick={this.toggle}><div>13:45-15:00</div>Yoga Level 1</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                </ListGroup>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
            </Modal>
            </div>
        );
    }
}


class Thursday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render() {
        return(
            <div>
                <ListGroup>
                    <ListGroupItem>Thursday</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem className='oneHour abs' onClick={this.toggle}><div>09:30-10:30</div>Abs Circuit</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem className='twoHourToQuarter restorive' onClick={this.toggle}><div>12:00-13:45</div>Restorive Yoga</ListGroupItem>
                    <ListGroupItem className='short0'></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem className='oneHour abs' onClick={this.toggle}><div>15:30-16:30</div>Abs Circuit</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem className='oneHourHalf rowing' onClick={this.toggle}><div>17:00-18:30</div>Rowing Workout</ListGroupItem>
                </ListGroup>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
            </Modal>
            </div>
        );
    }
}


class Friday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render() {
        return(
            <div>
                 <ListGroup>
                    <ListGroupItem>Friday</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem className='oneHour rowing' onClick={this.toggle}><div>10:00-11:00</div>Rowing Workout</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem className='oneHourHalf abs' onClick={this.toggle}><div>12:30-14:00</div>Abs Circuit</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem className='short0'></ListGroupItem>
                    <ListGroupItem className='oneHour yoga' onClick={this.toggle}><div>15:45-16:45</div>Yoga Level 1</ListGroupItem>
                    <ListGroupItem className='short0'></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                </ListGroup>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
            </Modal>
            </div>
        );
    }
}



export { timeLine, Monday, Tuesday, Wednesday, Thursday, Friday }