import Orders from "../components/Orders";
import { connect } from "react-redux";
import { apiSelector } from "../actions/apiSlice";

const mapStateToProps = (state) => ({
  api: apiSelector(state),
});

export default connect(mapStateToProps)(Orders);
