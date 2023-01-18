import React, { useState } from "react";
import { mokWarehouse } from "../mokData.js";
import { AiOutlineBarcode } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsPersonDashFill } from "react-icons/bs";
import "./Chair.css";

function Chair() {
  const [chairInfo, setChairInfo] = useState(null)
  const [show, setShow] = useState(false)
  
  const chairData = mokWarehouse.filter((item) => {
    return item.type === "chair";
  });
  


  function ModalScreen({show, setShow, chairInfo}){
   console.log("chairInfo -->", chairInfo)

    return(
     <div className={show ? 'modal' : 'hiden'}>
      <div>
       {chairInfo.barCode}
      </div>
      <button onClick={() => setShow(false)}>CLOSE</button>
     </div>
    );
  }

  console.log("CHAIR --->", chairData);
  return (
    <div className="chair">
      {chairData.map((item) => (
        <div className="chair_list">
          <div className="chair_item">
            <div className="chair_icon">
              <AiOutlineBarcode />
            </div>
            <div className="chair_description" 
              onClick={() => {
                setChairInfo(item)
                setShow(true)
              }}>
              {item.barCode}
            </div>
          </div>
          <div className="chair_item">
            <div className="chair_icon">
              {
                item.master ?  <BsFillPersonPlusFill /> : <BsPersonDashFill/>
              }
             
            </div>
            <div className="chair_description">
              {
                item.master ? item.master : <p style={{color:'green'}}>CHAIR FREE</p> 
              }
            </div>
          </div>
        </div>
      ))}
      <ModalScreen show={show} setShow={setShow} chairInfo={chairInfo}/>
    </div>
  );
}

export default Chair;
