import React from "react";
const Futer = ({ theData, onClickNext, handleReplace, arraya, setnumbers, numbers, setMera, setFlagNext, flagNext, }) => {
    return (
        <div className="d-flex justify-content-between align-items-center " >
            <div className="">
                <button type="button" className=" futerbox ">!</button>
            </div>
            <div className="" dir="rtl">
                {theData.map((item, id) => {
                    return (
                        item.text !== null &&
                        <button key={id} className={`  ${item.thecolor ? "futer" : "futerbox"}`}
                            onClick={() => {
                                arraya > numbers && handleReplace(item, id)
                                setMera(25)
                            }}>{item.text}</button>
                    )
                })}
            </div>
            <div className="item3 ">{flagNext ?
                <div>
                    {arraya > numbers  ?
                        <button type="button" className="cheke with" >تحقق</button>
                        :
                        <button type="button" className=" futerbox with"
                            onClick={() => {
                                setFlagNext(false)
                            }}>تحقق</button>}
                </div>
                :
                <button type="button" className="futerbox with" onClick={() => {
                    setFlagNext(true)
                    setnumbers(0)
                    onClickNext()
                }}
                >التالي</button>}
            </div>
        </div>
    );
}
export default Futer