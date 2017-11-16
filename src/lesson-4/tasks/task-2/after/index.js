'use strict';
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
    let timerProcessId = null;
    let currentSpeed = null;
    let currentTime = 0; //in ms

    const getCurrentFrequency = () => {
        const freq = 1000 / currentSpeed;
        return  freq === 0 ? 1 : freq;
    };

    const getTimeObject = () =>{
        let currentTimeObj = new Date(currentTime);
        return{
            minutes: currentTimeObj.getMinutes(),
            seconds: currentTimeObj.getSeconds()
        }
    };



    this.init = (startFrom, callback) =>{
        numberValidation(startFrom);
        functionValidation(callback);

        if(currentState === TimerStates.UNINITIALIZED){
            currentState = TimerStates.INITIALIZED;
            currentTime = startFrom * 1000;
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
                currentSpeed = speed;
                // first time start immediately
                callback(getTimeObject());
                timerProcessId = setInterval(() =>{
                    currentTime += getCurrentFrequency();
                    callback(getTimeObject());
                }, getCurrentFrequency());

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
        }else {
            console.log("Timer has not been started or paused")
        }
    };

};




