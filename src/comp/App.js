/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AlHeder from "../comp/AlHeder";
import Body from "./Body";
import Futer from "./Futer";
import data from "./data.json";
import "./Futer.css"; 

function App() {
  const [mmm, setmmm] = useState(0);
  const [idAnser, setIdAnser] = useState(0);
  const theDatas = data.body.questions[idAnser].data.answers;
  const theDatass = data.body.questions[idAnser].data.answers;
  const dataQuastion = data.body.questions[idAnser].data.question;
  const theDa = data.body.questions[mmm].data.answers;
  const [array, setArray] = useState(theDatass);
  const [theda, setTheda] = useState(theDatass);
  const [arraya, setArraya] = useState(0);
  const [anserid, setAnserid] = useState(0);
  const [numbers, setnumbers] = useState(0);
  const [flagNext, setFlagNext] = useState(true);
  const [mermermer, setmermermre] = useState(0);
  const trueCount = theDatas.reduce((count, obj) => {
    if (obj.correct && !obj.solved) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
  const onClickNext = () => {
    setIdAnser(idAnser + 1);
    setAnserid(0);
    setArray(array);
    setTheda(theda);
  };
  useEffect(() => {
    setArray(theDatass);
    setTheda(theDatass);
    setmermermre(mermermer + 1);
    setArraya(trueCount);
    setmmm(idAnser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idAnser]);
  useEffect(() => {
    const shuffledItems = [...theda];
    shuffledItems.sort(() => Math.random() - 0.5);
    setTheda(shuffledItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mermermer]);
  let i = 1;
  const handleReplace = (element, ids) => {
    if (array[anserid].text !== null) {
      if (numbers <= trueCount - 2) {
      
        // eslint-disable-next-line no-const-assign
        for (i; i < trueCount; i++) {
          if (array[anserid +i].solved === false) {
            setAnserid(anserid + i);
            break
          } else {
            setAnserid(anserid );
          }
        }
      } else {
        setAnserid(anserid + 1);
      }
      setnumbers(numbers + 1);
      const newtheData = theda.map((item, i) => {
        if (i === ids) {
          return { ...item, thecolor: true };
        }
        return item;
      });
      setTheda(newtheData);
      const newArray = array.map((item, id) => {
        if (id === anserid && item.correct && item.text !== null) {
          return { ...element, solved: true, order: ids, correct: true };
        }
        return item;
      });
      setArray(newArray);
    }
  };
  const [mera, setMera] = useState(25);
  const handleReReplace = (element, ids) => {
    if (mera >= ids) {
      setAnserid(ids);
      setMera(ids);
    }
    setnumbers(numbers - 1);
    if (element.text !== null) {
      const newtheData = theda.map((item, i) => {
        if (i === element.order) {
          return { ...item, thecolor: false };
        }
        return item;
      });
      setTheda(newtheData);
      const newArray = array.map((item, id) => {
        if (id === ids) {
          return { ...element, solved: false };
        }
        return item;
      });
      setArray(newArray);
    } else {
      const newtheData = theda.map((item, i) => {
        if (i === element.order) {
          return { ...item, thecolor: false };
        }
        return item;
      });
      setTheda(newtheData);
      const newArray = array.map((item, id) => {
        if (id === ids) {
          return { ...element, solved: false };
        }
        return item;
      });
      setArray(newArray);
    }
  };

  //
  //
  const audioRef = useRef(null);
  const playSound = () => {
    audioRef.current.src = dataQuastion.sound;
    audioRef.current.play();
  };

  return (
    <div
      className="container "
      onLoad={() => {
        setArraya(trueCount);
      }}
    >
      <AlHeder />
      <Body
        array={array}
        anserid={anserid}
        handleReReplace={handleReReplace}
        flagNext={flagNext}
        theDatas={theDa}
        dataQuastion={dataQuastion}
        playSound={playSound}
        audioRef={audioRef}
      />
      <Futer
        theData={theda}
        onClickNext={onClickNext}
        handleReplace={handleReplace}
        arraya={arraya}
        setnumbers={setnumbers}
        numbers={numbers}
        setMera={setMera}
        setFlagNext={setFlagNext}
        flagNext={flagNext}
      />
    </div>
  );
}

export default App;
