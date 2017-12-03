'use strict';
import {functionValidation, numberValidation} from "../helpers/index";

export default class Timer {

    constructor(){
        this.currentState = Timer.TimerStates.UNINITIALIZED;
        this.timerProcessId = null;
        this.currentSpeed = null;
        this.seconds = 0;

    }

    _getCurrentFrequency (){
        return 1000 / this.currentSpeed;
    };

    _getTimeObject(){
        return{
            minutes: Math.floor(this.seconds / 60),
            seconds: this.seconds % 60
        }
    };

    init (startFrom, callback){
        numberValidation(startFrom);
        functionValidation(callback);

        if(this.currentState === Timer.TimerStates.UNINITIALIZED){
            this.currentState = Timer.TimerStates.INITIALIZED;
            this.seconds = startFrom;
            callback();
        }else{
            throw new Error("Timer already configured");
        }
    };

    start (speed, callback){
        numberValidation(speed);
        functionValidation(callback);
        if(speed <= 0){
            throw new Error("Speed cannot be less or equals then 0");

        }
        switch(this.currentState){
            case Timer.TimerStates.STARTED:
                throw new Error("Timer already started");
            case Timer.TimerStates.UNINITIALIZED:
                throw new Error("Timer has not been initialized");
            default:
                this.currentState = Timer.TimerStates.STARTED;
                this.currentSpeed = speed;
                // first time start immediately
                callback(this._getTimeObject());
                this.timerProcessId = setInterval(() =>{
                    this.seconds++;
                    callback(this._getTimeObject());
                }, this._getCurrentFrequency());
        }

    };

    pause (callback){
        functionValidation(callback);
        if(this.currentState === Timer.TimerStates.STARTED){
            this.currentState = Timer.TimerStates.PAUSED;
            clearInterval(this.timerProcessId);
            callback(this._getTimeObject())
        }else{
            throw new Error("Timer has not been started");
        }
    };

    stop (callback){
        functionValidation(callback);
        if(this.currentState === Timer.TimerStates.STARTED || this.currentState === Timer.TimerStates.PAUSED){
            this.currentState = Timer.TimerStates.STOPPED;
            clearInterval(this.timerProcessId);
            callback(this._getTimeObject());
        }else {
            throw new Error("Timer has not been started or paused");
        }
    };

};

Timer.TimerStates = {
    UNINITIALIZED: 0,
    INITIALIZED: 1,
    STARTED: 2,
    PAUSED: 3,
    STOPPED: 4
};



