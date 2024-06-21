import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PublicLayout from '../../layouts/public/PublicLayout'
import PreviewTimer from '../../containers/timer/PreviewTimer'
import BaseTimer from '../../containers/timer/BaseTimer'
import {useGlobalContext} from '../../store/GlobalStore';
import { TIMER_ACTIONS } from '../../store/TimerStore'
import { Link } from 'react-router-dom'
import RoundButton from '../../components/buttons/round-button/RoundButton'
import alarmBeep from './../../assets/alarm_beep.mp3';
import oneplus from './../../assets/oneplus_notification.mp3';

function Start(props) {

  const {timer: timerStore} = useGlobalContext();

  const timers = timerStore.state.timers;

  const currentTimerIndex = timerStore.state.currentTimerIndex;

  const currentTimer = timers[currentTimerIndex];

  const [hasStopped, setHasStopped] = useState(false);

  const alarm = new Audio(alarmBeep);
  const transitionNotification = new Audio(oneplus);

  function onStart(){
    setHasStopped(false);
  }
  function onFinish(){
    setTimeout(() => {
      transitionNotification.play();
      // check if at the end
      const atTheEnd = currentTimerIndex === timers.length -1;
  
      // change current timer to next timer
      if(!atTheEnd){
        return timerStore.dispatch({
          type: TIMER_ACTIONS.SET_TIMER_CURRENT_INDEX,
          payload: currentTimerIndex + 1,
        })
      }
  
      // if non left, then stop
      if(!timerStore.state.isInfinite){
        transitionNotification.pause();
        alarm.play();
        setHasStopped(true)
      }
      return timerStore.dispatch({
        type: TIMER_ACTIONS.SET_TIMER_CURRENT_INDEX,
        payload: 0
      });
      // check if isInfinite === true
      // if yes, reset index = 0
  
      // if no, reset index = 0
      // stop the loop
    })

  }
  function onStop(){
    alarm.pause();
    transitionNotification.pause();
    setHasStopped(true);
    timerStore.dispatch({
      type: TIMER_ACTIONS.SET_TIMER_CURRENT_INDEX,
      payload: 0
    });
  }


  function nextTimer(){
    if(currentTimerIndex === timers.length - 1){
      return timerStore.state.isInfinite ? timers[0] : null;
    }
    return timers[currentTimerIndex + 1];
  }

  const previewTimer = nextTimer();

  return (
    <PublicLayout>
      <div className='flex justify-center items-center' style={{height: '80vh'}}>
        {!hasStopped && (
          <div className='flex flex-col'>
            {/* preview */}
            {previewTimer && <PreviewTimer timer={previewTimer}></PreviewTimer>}
            
      
            {/* base timer */}
            <BaseTimer
              autoplay={true}
              key={currentTimerIndex}
              onStart={onStart}
              onFinish={onFinish}
              onStop={onStop}
              timeout={currentTimer.duration}
              title={currentTimer.title}
            />
          </div>
        )}

        {hasStopped && (
          <div className='flex justify-center flex-col items-center'>
            <h1 className='text-6xl'>All Done!</h1>
            <Link to="/timer">
              <RoundButton>Back</RoundButton>
            </Link>
          </div>
        )}
      </div>
      

    </PublicLayout>
  )
}

Start.propTypes = {}

export default Start
