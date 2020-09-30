import React from "react";
import AccountList from "../containers/AccountList";
import ProviderList from "../containers/ProviderList";
import TransactionBlockList from "../containers/TransactionBlockList";
import OrdersList from "../containers/OrdersList";

const Content = () => {
  return (
    <div className="content">
      <div className="vertical-split">
        <AccountList />
        <ProviderList />
      </div>
      <TransactionBlockList />
      <div className="vertical-split"></div>
      <OrdersList />
    </div>
  );
};

export default Content;
