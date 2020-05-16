import React from "react";
import "./style.css";
import {processing, check} from "../../icons/index";

export default function TransactionRow(props) {
  return (
    <div className="transaction-row">
      <div className="transaction-details">
        <img src={props.icon} alt="" />
        <div className="details">
          <div className="name">{props.name} {props.processing && <div className="autopay"><img src={check} alt=""/>AUTOPAY</div>}</div>
          <div>
            <p className="date">
              {props.date}
              <span className="time">
                {", "}
                {props.time}
                 {getPayee(props.payee)}
              </span>
            </p>
          </div>
          {props.offer ? (
            <p className="offer">
              <span>{props.offer[0]}</span> {props.offer[1]}
            </p>
          ) : (
            <p className="extra-detail">{props.extraDetail}</p>
          )}
        </div>
      </div>
      <div className="transaction-amount">{props.amount}{props.processing && <div className="payment-processing"><img src={processing} alt=""/>PROCESSING</div>}</div>
    </div>
  );
}

function getPayee(payee){
  return payee ? " | " + payee : "";
}