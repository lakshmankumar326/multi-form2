import React from "react";
import { useNavigate } from "react-router-dom";

function NextP({ closeModal }) {
  const navigate = useNavigate();

  const navigateToHome = ()=>{
    navigate('/home');
  }
  return (
    <div className="nextpbg">
      <div className="nextp-container">
        <div className="nextptitleBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="nextp-title">PLEASE CLICK <b><u> FINISH </u></b> TO SUBMIT THE FORM</div>
        <div className="nextp-footer">
          <button onClick={navigateToHome}>Finish</button>
        </div>
      </div>
    </div>
  );
}

export default NextP;