import React, { useRef, useState } from "react";
import AddWorkers from "./Components/AddWorkers/AddWorkers";
import ModalScreen from "./Components/ModalScreen/ModalScreen";
import { BsPersonBoundingBox } from "react-icons/bs";

import { GiOfficeChair } from "react-icons/gi";
import { AiOutlineLaptop } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { GiDesk } from "react-icons/gi";
import { AiOutlineBarcode } from "react-icons/ai";

import "./Workers.css";

function Workers() {
  const [show, setShow] = useState(false);
  return (
    <div className="workers">
      <div className="worker-create-button" onClick={() => setShow(true)}>
        <div className="worker-create-button-title">CREATE NEW WORKER</div>
      </div>
      <div className="worker-container">
        <div className="worker-name">
          <div className="worker-name-icon">
            <BsPersonBoundingBox />
          </div>
          <div className="worker-name-title">Alex Urbanskyi</div>
        </div>
        <div className="worker-items-holder">
          <div className="worker-item">
            <div className="worker-item-icon">
              <GiOfficeChair />
            </div>
            <div className="worker-item-barcode">
              <div className="worker-item-barcode-icon">
                <AiOutlineBarcode />
              </div>
              <div className="worker-item-barcode-title">CH2022002</div>
            </div>
          </div>
          <div className="worker-item">
            <div className="worker-item-icon">
              <AiOutlineLaptop />
            </div>
            <div className="worker-item-barcode">
              <div className="worker-item-barcode-icon">
                <AiOutlineBarcode />
              </div>
              <div className="worker-item-barcode-title">LT2022001</div>
            </div>
          </div>
          <div className="worker-item">
            <div className="worker-item-icon">
              <FiMonitor />
            </div>
            <div className="worker-item-barcode">
              <div className="worker-item-barcode-icon">
                <AiOutlineBarcode />
              </div>
              <div className="worker-item-barcode-title">DT2022001</div>
            </div>
          </div>
          <div className="worker-item">
            <div className="worker-item-icon">
              <GiDesk />
            </div>
            <div className="worker-item-barcode">
              <div className="worker-item-barcode-icon">
                <AiOutlineBarcode />
              </div>
              <div className="worker-item-barcode-title">
                <div>MO2022001</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <ModalScreen show={show}>{<AddWorkers setShow={setShow} />}</ModalScreen>
    </div>
  );
}

export default Workers;
