import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

function Finish() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const navigation = useNavigate();

  const navigate = () => {
    navigation("/home");
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("lists"));
    console.log(list);
    if (list) {
      setItems(list);
    }
  }, []);


  return (
    <div className="finish-main">
      <Header />

      <div className="finish-container">

        {items
          .filter((elem) => elem.name.fname.toLowerCase().includes(query))
          .map((elem) => {
            return (
              <div className="finish-card" key={elem.id}>
                <div className="finish-header"> 
                  <p className="fullname"> {elem.name.fname} {elem.name.lname} </p>
                  <p className="pId">{elem.id}</p>
                </div>
                <div className="finish-body">

                  <label0>Email ID</label0>
                  <p>{elem.name.mail}</p>

                  <label0>Phone number</label0>
                  <p>{elem.name.num}</p>

                  <label0>Notice Period</label0>
                  <p>{elem.name.notice}</p>

                  <label0>Current Company</label0>
                  <p>{elem.name.ccom}</p>

                  <label0>Currency Type</label0>
                  <p>{elem.name.ct}</p>

                  <label0>Current CTC</label0>
                  <p>{elem.name.cctc} </p>

                  <label0>Expected CTC</label0>
                  <p>{elem.name.ectc} </p>

                  <label0>Resume</label0>
                  <p>{elem.name.file.path}</p>

                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Finish;