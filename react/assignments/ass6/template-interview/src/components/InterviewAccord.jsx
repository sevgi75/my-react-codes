import Ouestion from "./Question";
import data from "../helper/data";
import { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";

const InterviewAccord = () => {
  // const [show, setShow] = useState(false);
  const [seciliId, setSeciliId] = useState("");

  console.log("first");
  return (
    <div className="row">
      {/* <Ouestion/> */}
      {/* {data.map((item) => (
        <Ouestion key={item.id} item={item}/>
      ))} */}
      {/* {data.map((item) => (
        <div className="card-group">
          <div className="card">
            <div className="ques-answer">
              <h5>{item.question}</h5>
              <button className="btn-minus" onClick={() => setShow(!show)}>
                {show ? arrowup : arrowdown}
              </button>
            </div>
            <p>{show && item.answer}</p>
          </div>
        </div>
      ))} */}
      {/* {data.map((item) => (
        <details className="card">
          <summary className="ques">
            <h5>{item.question}</h5>
            {arrowup} {arrowdown}
          </summary>
          <p>{item.answer}</p>
        </details>
      ))} */}

      {data.map((item) => (
        <div key={item.id} className="card-group">
          <div className="card">
            <div className="ques-answer">
              <h5>{item.question}</h5>
              <button
                className="btn-minus"
                onClick={() => setSeciliId(item.id)}
                onDoubleClick={() => setSeciliId("")}
              >
                {seciliId == item.id ? arrowup : arrowdown}
              </button>
            </div>
            <p>{seciliId == item.id && item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InterviewAccord;
