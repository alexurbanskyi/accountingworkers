import React from "react";
import { mokWarehouse } from "../mokData.js";
import { AiOutlineBarcode } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsPersonDashFill } from "react-icons/bs";
import "./Chair.css";

function Chair() {
  const chairData = mokWarehouse.filter((item) => {
    return item.type === "chair";
  });

  console.log("CHAIR --->", chairData);
  return (
    <div className="chair">
      {chairData.map((item) => (
        <div className="chair_list">
          <div className="chair_item">
            <div className="chair_icon">
              <AiOutlineBarcode />
            </div>
            <div className="chair_description">
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
    </div>
  );
}

export default Chair;
