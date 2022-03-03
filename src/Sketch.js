import React, { useState, useEffect } from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import useWindowSize from './hooks/useWindowSize';
const sketch = (p5) => {
    
    let minutes = 0;
    let seconds = 0;
    let hours = 0;
    let width = 0;
    let height = 0;

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        // p5.textFont('Helvetica');
        p5.angleMode(p5.DEGREES);
        
    }
    p5.updateWithProps = props => {
        if (props.height && props.width) {
            height = props.height;
            width = props.width;
            p5.resizeCanvas(width, height);
        }
        if (props.seconds) {
            seconds = props.seconds;
        }
        if (props.minutes) {
            minutes = props.minutes;
        }
        if (props.hours) {
            hours = props.hours;
        }
    }
    
    p5.draw = () => {
        p5.translate(p5.width/2, p5.height/2);
        p5.rotate(-90);
        // p5.background(26,27, 30);
        // p5.normalMaterial();
        // p5.noStroke();
        // p5.fill(255);
        
        
        p5.strokeWeight(15);
        p5.stroke(255, 100, 150);
        p5.noFill();
        let secondEnd = p5.map(seconds, 0, 60, 0, 360);
        p5.arc(0, 0, 500, 500, 0, secondEnd);

        p5.strokeWeight(15);
        p5.stroke(150, 100, 255);
        p5.noFill();
        let minuteEnd = p5.map(minutes, 0, 60, 0, 360);
        p5.arc(0, 0, 450, 450, 0, minuteEnd);

        p5.strokeWeight(15);
        p5.stroke(150, 255, 100);
        p5.noFill();
        let hourEnd = p5.map(hours, 0, 12, 0, 360);
        p5.arc(0, 0, 400, 400, 0, hourEnd);


        // p5.noStroke();
        // p5.textSize(100);
        // p5.fill(255,140,0);
        // p5.text(`${hours}:${minutes}:${seconds}`, 0, 0);
    };
}

const Sketch = () => {
    const time = new Date();
    const { width, height } = useWindowSize();
    // const [width, setWidth] = useState(wt);
    // const [height, setHeight] = useState(ht);
    const [second, setSecond] = useState(time.getSeconds()%60);
    const [minutes, setMinutes] = useState(time.getMinutes()%60);
    const [hours, setHours] = useState(time.getHours()%12);

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date();
            setSecond(time.getSeconds()%60);
            setMinutes(time.getMinutes()%60);
            setHours(time.getHours()%12);
        }, 500);

        return () => clearInterval(interval);
    }, [second, minutes, hours]);



    return (
        <ReactP5Wrapper sketch={sketch} seconds={second} minutes={minutes} hours={hours} height={height} width={width}/>
    );
}
 
export default Sketch;