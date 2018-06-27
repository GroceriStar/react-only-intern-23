import React, { Component } from 'react';
import { data } from './Data';
import { Modals } from './ModalWork';
import { ListGroupItem, ListGroup } from 'reactstrap';

class ColumnRender extends Component {
    
    getOffset(obj) {
        var someObject;
        let timeDiff;
        let timeArray;
        let startLocation;
        let inter = obj.reduce((offsetArray, item, index ) => {
                        timeArray = item.time.split('-', 2).map(index => index.split(':', 2));
                        timeDiff = (timeArray[1][0]*60 - timeArray[0][0]*60) + (timeArray[1][1] - timeArray[0][1]);
                        timeDiff *= (100/60);
                        startLocation = (timeArray[0][0]*100) + (timeArray[0][1]*(100/60)) - 900;
                        offsetArray[index] = {};
                        offsetArray[index].tag = item.tag;
                        offsetArray[index].start = startLocation;
                        offsetArray[index].height = timeDiff;
                        offsetArray[index].text = item.text;
                        offsetArray[index].time = item.time;
                        return offsetArray
                    }, []).sort((a, b) => a.start - b.start);
        return inter;
    }
    
    rendererFunc(daySchedule) {
        let buffer = this.getOffset(daySchedule);
        console.log(buffer);
        let topToDown = [];
        let i = 0;
        for(var traverse = 0; traverse <= 1000; traverse +=25) {
            topToDown.push(traverse);
            if(buffer[i].start === traverse ) {
                traverse += buffer[i].height - 25;
                if(i < buffer.length - 1){
                i++;
                }
            }   
        }
        i = 0;
        let j = 0;
        console.log(topToDown);
    return topToDown.map((item, index) => {
        if(item === buffer[i].start) {
            (i < buffer.length - 1) ? i++ : null;
            (j < buffer.length) ? j++ : null;
            return (<div>
            <Modals data={buffer[j-1]} key={item} /></div> 
            );
        }
        
        if(item === (buffer[i].start + buffer[i].height) && (item%50 !== 0) ) {
            return (<div><ListGroupItem style={{height: '25px'}} key={item}></ListGroupItem></div>);
        }
        
        if(item%50 === 0) {
            if(topToDown[index+1] === buffer[i].start) {
                console.log('Special');
                return (
                <ListGroupItem style={{height: '25px'}} key={item}></ListGroupItem>
                );
            }
            console.log('General');
            return (
            <div><ListGroupItem style={{height: '50px'}} key={item}></ListGroupItem></div>
            );
        }
        
        
    })    
    }
    
    render() {
        return(<div><ListGroup>
               {this.rendererFunc(data[0])}</ListGroup></div>
                );
    }
}
    
    
export { ColumnRender }