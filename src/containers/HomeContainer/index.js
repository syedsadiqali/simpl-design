import React from "react";
import HeroArea from "../../components/heroArea/index";
import TransactionRow from "../../components/transactionsRow/index";
import Section from "../../components/section/index";
import {
  rechargesAndBillPayments,
  appsYouCanUse,
  zomato,
  bigBasket,
  bescom,
} from "../../icons";
import { IconElements } from "../../Utils/iconUtil";

import "./style.css";

function HomeContainer() {
  return (
    <div className="app-container">
      <HeroArea />
      <Section header="Recharges and pay bills">
        <IconElements
          iconsArray={rechargesAndBillPayments}
          horizontalScroll={false}
        />
      </Section>
      <Section header="You can also use Simpl on">
        <IconElements iconsArray={appsYouCanUse} horizontalScroll={true} />
      </Section>
      <Section header="Recent transactions">
        <TransactionRow
          icon={zomato}
          name={"Zomato"}
          date={"May 24"}
          time={"06:12 PM"}
          payee={"Simpl Pay later"}
          amount={"₹250"}
        />
        <TransactionRow
          icon={bescom}
          name={"Bescom"}
          date={"12 July"}
          time={"06:10"}
          amount={"₹250"}
          extraDetail={"Home - 0090887667"}
          processing={true}
        />
        <TransactionRow
          icon={bigBasket}
          name={"Big basket"}
          date={"May 23"}
          time={"06:10 PM"}
          amount={"₹300"}
          offer={["₹100 Cashback!", "Will be credited after repayment"]}
        />
      </Section>
      <EmptySpace />
    </div>
  );
}


function EmptySpace() {
    return <div className="empty-space"></div>;
  }

export default HomeContainer;