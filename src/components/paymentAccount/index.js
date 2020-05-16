import React from "react";
import "./style.css";
import helpLogo from "../../icons/help.svg";
import infoIcon from "../../icons/info-icon.svg";
import lockFill from "../../icons/lock-fill.svg";

function PaymentAccount(props) {
  return (
    <div className="box">
      <div className="row">
        <img src={props.logo} alt="" />
        {props.billOverdue && <div className="bill-overdue">bill overdue</div>}
      </div>
      <div className="row">
        <div className="limit-remain">
          <div>
            {props.simplAccount ? "Spent Till Now" : "Spent This Month"}
          </div>
          <div>{props.dueAmount}</div>
        </div>
        {props.dueDate ? (
          <div className="due-date">
            <div>Due Date</div>
            <div>{props.dueDate}</div>
          </div>
        ) : (
          <p className="faq-link">
            <img src={helpLogo} alt="" /> FAQs
          </p>
        )}
      </div>
      <div className="row">
        {props.simplAccount ? (
          <button className="largeButton">
            <img src={lockFill} alt="" />
            PAY {props.payAmount}
          </button>
        ) : (
          <div className="info-div">
            <img src={infoIcon} alt="" />
            <p>
              Clear last month’s dues with ICICI bank on/before 15th to avoid
              {/* eslint-disable-next-line */}
              late payment fees. <a href="#">Manage account</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentAccount;
