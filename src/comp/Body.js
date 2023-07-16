import React, { useState } from "react";
import SondLoti from './SondLoti'
const Body = ({
    array,
    handleReReplace,
    anserid,
    flagNext,
    theDatas,
    dataQuastion,
    audioRef,
  playSound,
    
}) => {
    const [ sondflag,setsondflag]=useState(true)
  return (
    <div className="bodyheight  ">
      <div className="d-flex justify-content-center">
        <h1>{dataQuastion.questionText}</h1>
      </div>
      {dataQuastion.sound !== "" && (
        <div className="d-flex justify-content-center">
                  {sondflag ? <img src="/img/Sound.svg" alt="sound" onClick={() => {
                  setsondflag(false)
                      playSound()
                  }} />
                  :<SondLoti/>}
          <audio ref={audioRef} type="audio/mpeg" onEnded={() => {setsondflag(true)}}>
            <source />
          </audio>
        </div>
      )}
      <div
        className="d-flex justify-content-center align-items-center   "
        dir="rtl"
      >
        <div>
          {array.map((item, id) =>
            item.text !== null ? (
              (item.correct || item.solved) && (
                <button
                  key={id}
                  className={` ${item.solved ? "futerbox" : "bodyboxs"}
                        ${anserid === id && !item.solved && "bordercolor"} ${
                    !flagNext &&
                    `${item.text === theDatas[id].text ? "true" : "flase"}`
                  }`}
                  onClick={() => {
                    handleReReplace(item, id);
                  }}
                >
                  {item.text}{" "}
                </button>
              )
            ) : (
              <div key={id} className=""></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default Body
