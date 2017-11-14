import {functionValidation, numberValidation} from "../helpers/index";

export default () => new function () {
    const TimerStates = {
        UNINITIALIZED: 0,
        INITIALIZED: 1,
        STARTED: 2,
        PAUSED: 3,
        STOPPED: 4
    };
    let currentState = TimerStates.UNINITIALIZED;
    let counter = 0;
    let timerProcessId = null;

    const getTimeObject = () =>{
        let currentTime = new Date();
        return{
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds()
        }
    };

    this.init = (startFrom, callback) =>{
        numberValidation(startFrom);
        functionValidation(callback);

        if(currentState === TimerStates.UNINITIALIZED){
            currentState = TimerStates.INITIALIZED;
            counter = startFrom;
            callback();
        }else{
            console.log("Timer already configured");
        }
    };

    this.start = (speed, callback) => {
        numberValidation(speed);
        functionValidation(callback);
        if(speed <= 0){
            console.log("Speed cannot be less or equals then 0");
            return;
        }
        switch(currentState){
            case TimerStates.STARTED:
                console.log("Timer already started");
                break;
            case TimerStates.UNINITIALIZED:
                console.log("Timer has not been initialized");
                break;
            default:
                currentState = TimerStates.STARTED;
                let frequency = Math.round(1000 / speed);
                // for not copping and pasting the same code
                const start = () =>{
                    counter++;
                    callback(getTimeObject());
                };
                // first time start immediately
                start();
                timerProcessId = setInterval(() =>{
                    start();
                }, frequency === 0 ? 1 : frequency);

        }

    };

    this.pause = callback => {
        functionValidation(callback);
        if(currentState === TimerStates.STARTED){
            currentState = TimerStates.PAUSED;
            clearInterval(timerProcessId);
            callback(getTimeObject())
        }else{
            console.log("Timer has not been started");
        }
    };

    this.stop = callback => {
        functionValidation(callback);
        if(currentState === TimerStates.STARTED || currentState === TimerStates.PAUSED){
            currentState = TimerStates.STOPPED;
            clearInterval(timerProcessId);
            callback(getTimeObject());
            counter = 0;
        }else {
            console.log("Timer has not been started or paused")
        }
    };

    this.getCurrentCountTicks = () => {
        return counter;
    }

};




