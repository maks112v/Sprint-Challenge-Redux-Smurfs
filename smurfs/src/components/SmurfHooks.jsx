import React, { useState } from "react";
import {
  Row,
  Col,
  Collapse,
  Button,
  CardBody,
  Card,
  InputGroup,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addSmurf, toggleEditor } from "../actions";

const SmurfForm = props => {
  const name = useInput();
  const age = useInput();
  const height = useInput();

  const submitHandler = e => {
    e.preventDefault();
    name.updateInput('');
    // age.updateInput('');
    // height.updateInput('');
  }

  return (
    <div>
      <Row>
        <Col className="text-right">
          {props.showEditor ? (
            <Button
              color="primary"
              onClick={props.toggleEditor}
              outline
              style={{ marginBottom: "1rem" }}
              className=""
            >
              Close
            </Button>
          ) : (
            <Button
              color="primary"
              onClick={props.toggleEditor}
              style={{ marginBottom: "1rem" }}
              className=""
            >
              Add A Friend
            </Button>
          )}
        </Col>
      </Row>
      <Collapse isOpen={props.showEditor}>
					<Card>
						<CardBody>
							<h5>
								{props.updatingSmurf
									? `Updating ${props.currentSmurf.name}`
									: "Add A Friend"}
							</h5>
							<form
								 onSubmit={props.updatingSmurf ? null : submitHandler}
							>
								<Row>
									<Col xs='8'>
										<InputGroup>
											<Input
												placeholder='Name'
												type='text'
												name='name'
												value={name.input}
												onChange={name.inputHandler}
												required
											/>
										</InputGroup>
									</Col>
									<Col>
										<Input
											placeholder='Age'
											type='number'
											name='age'
											value={age.input}
											onChange={age.inputHandler}
											required
										/>
									</Col>
								</Row>
								<br />
								<InputGroup>
									<Input
										placeholder='Height'
										name='height'
										type='text'
										value={height.input}
										onChange={height.inputHandler}
										required
									/>
								</InputGroup>
								<br />
								<Button type='Submit' color='success' outline>
									{props.updatingSmurf ? "Update" : "Create"}
								</Button>
								{props.updatingSmurf ? (
									<Button
										type='Submit'
										className='ml-3'
										color='danger'
										onClick={() => props.deleteSmurf(props.smurf)}
										outline
									>
										Delete
									</Button>
								) : null}
							</form>
						</CardBody>
					</Card>
				</Collapse>
    </div>
  );
};

const useInput = () => {
  const [input, setInput] = useState('');

  const inputHandler = e => {
    setInput(e.target.value);
  }

  const updateInput = newValue => {
    setInput(newValue)
  }

  return [
    input,
    inputHandler,
    updateInput
  ]
}

const stateToProps = state => ({
  showEditor: state.showEditor,
  updatingSmurf: state.updatingSmurf,
  currentSmurf: state.smurfs[state.updatingSmurf],
})

export default connect(stateToProps, {addSmurf,toggleEditor})(SmurfForm);
