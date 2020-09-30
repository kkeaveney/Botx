import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

export const showOrders = (api) => {
  return (
    <tbody>
      {api
        .slice()
        .reverse()
        .map((record) => {
          const maker = record.order.makerAddress;
          console.log(maker);
        })}
    </tbody>
  );
};
class Orders extends Component {
  render() {
    return (
      <div className="vertical">
        <div className="card bg-dark text-white">
          <div className="card-header">API</div>
          <div className="card-body">
            <table className="table table-dark table-sm small">
              <thead>
                <tr>
                  <th>API</th>

                  {/* <th>DAPP</th>
                <th>DAPP/ETH</th> */}
                </tr>
              </thead>
              {showOrders(this.props.api)}
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Orders.defaultProps = {
  api: [],
};

Orders.propTypes = {
  api: PropTypes.array.isRequired,
};

export default Orders;
