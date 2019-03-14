import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
import { toggleUpdate } from "../actions";

const Smurf = ({ smurf, updatingSmurf, toggleUpdate }) => {
  if (smurf.id === updatingSmurf) {
    return (
      <tr>
        <th scope="row">{smurf.id}</th>
        <td>
          <Skeleton />
        </td>
        <td>
          <Skeleton />
        </td>
        <td>
          <Skeleton />
        </td>
      </tr>
    );
  }
  return (
    <tr onClick={() => toggleUpdate(smurf.id)}>
      <th scope="row">{smurf.id}</th>
      <td>{smurf.name}</td>
      <td>{smurf.height}</td>
      <td>{smurf.age}</td>
    </tr>
  );
};

Smurf.propTypes = {
  smurf: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.string,
    id: PropTypes.number
  })
};

const stateToProps = state => ({
  updatingSmurf: state.updatingSmurf
});

export default connect(
  stateToProps,
  { toggleUpdate }
)(Smurf);
