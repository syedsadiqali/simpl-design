import React from "react";
import simplLogo from "../../icons/simpl-logo.svg";
import simplLogoColor from "../../icons/simpl-logo-color.svg";
import iciciLogo from "../../icons/icici-logo.svg";
import PaymentAccount from "../paymentAccount/index";

import "./style.css";

export default function HeroArea(props) {
  return (
    <div className="section first">
      <div className="hero-area">
        <div className="welcome-text">
          Welcome to
          <img className="simpl-logo" src={simplLogo} alt="" />
        </div>
        <h2 className="sub-head">2 Active Accounts</h2>
        <div className="payment-account-boxes">
          <PaymentAccount
            logo={simplLogoColor}
            dueAmount={"₹1800"}
            payAmount={"₹1500"}
            dueDate={"15 Aug"}
            billOverdue={true}
            simplAccount={true}
          />
          <PaymentAccount
            logo={iciciLogo}
            dueAmount={"₹1150"}
            billOverdue={false}
            simplAccount={false}
          />
          <EmptySpace width="10px"/>
        </div>
      </div>
    </div>
  );
}

function EmptySpace(props){
  return <div style={{minWidth:`${props.width}`}}></div>
}
