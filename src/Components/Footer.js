import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';



 

function Footer(props) {
    // const history = Navigate();
   const handle = () => {
    //  props.setPage((currentPage) => currentPage + 1);

        // history(-1);
     
   };
   
    
  return (
    <div>
      <div className="footer">
        <button
          className="footer-button"
          disabled={props.headerlen === 0}
          // onClick={() => {
          //   setPage((currentPage) => currentPage + 1);
          // }}

          onClick={handle}
          
        >
          Finish
        </button>
      </div>
    </div>
  );
}

export default Footer
