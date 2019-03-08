import React from "react";
import { Table } from "reactstrap";
import PreloadTable from "./LoadTable";
import Smurf from "./Smurf";
import Skeleton from "react-loading-skeleton";

import { connect } from "react-redux";

const Smurfs = props => {
  if (props.fetchingSmurfs) {
    return <PreloadTable />;
  }
  console.log(props)
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Height</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {props.smurfs.map(smurf => (
          <Smurf
            key={smurf.id}
            smurf={smurf}
          />
        ))}
        {props.isAdding ? (
          <tr>
            <th>
              <Skeleton />
            </th>
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
        ) : null}
      </tbody>
    </Table>
  );
};

const stateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
});

export default connect(stateToProps)(Smurfs);