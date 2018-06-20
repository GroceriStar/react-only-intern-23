import React, { Component } from 'react';

import { ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

let dummyText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let modalHeading = ["Abs Circuit", "Rowing Workout", "Yoga Level 1", "Resorative Yoga"];

class DataModalAbs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        
        this.toggle = this.toggle.bind(this);
    }
    
    toggle = function() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render() {
        return(
            <div>
               <ListGroupItem className={this.props.heightInd} onClick={this.toggle}><div>{this.props.timeRange}</div>{modalHeading[0]}</ListGroupItem>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>{modalHeading[0]}</ModalHeader>
                  <ModalBody>
                    {dummyText}
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


class DataModalRowing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        
        this.toggle = this.toggle.bind(this);
    }
    
    toggle = function() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render() {
        return(
            <div>
               <ListGroupItem className={this.props.heightInd} onClick={this.toggle}><div>{this.props.timeRange}</div>{modalHeading[1]}</ListGroupItem>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>{modalHeading[1]}</ModalHeader>
                  <ModalBody>
                    {dummyText}
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

class DataModalYoga extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        
        this.toggle = this.toggle.bind(this);
    }
    
    toggle = function() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render() {
        return(
            <div>
               <ListGroupItem className={this.props.heightInd} onClick={this.toggle}><div>{this.props.timeRange}</div>{modalHeading[2]}</ListGroupItem>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>{modalHeading[2]}</ModalHeader>
                  <ModalBody>
                    {dummyText}
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

class DataModalRestorive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        
        this.toggle = this.toggle.bind(this);
    }
    
    toggle = function() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render() {
        return(
            <div>
               <ListGroupItem className={this.props.heightInd} onClick={this.toggle}><div>{this.props.timeRange}</div>{modalHeading[3]}</ListGroupItem>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>{modalHeading[3]}</ModalHeader>
                  <ModalBody>
                    {dummyText}
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


export { DataModalAbs, DataModalRowing, DataModalYoga, DataModalRestorive }