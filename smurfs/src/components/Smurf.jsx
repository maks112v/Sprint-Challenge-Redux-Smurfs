import React from "react";
import PropTypes from "prop-types";

const Smurf = ({ smurf }) => {
	return (
		<tr onClick={() => (smurf.id)}>
			<th scope='row'>{smurf.id}</th>
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

export default Smurf;