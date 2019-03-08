import React, { Component } from "react";
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
import { addSmurf, toggleEditor, deleteSmurf } from "../actions";

class AddSmurf extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputs: {
        name: "",
        age: "",
        height: ""
      }
    };
  }
  
	toggle = () => {
    this.props.toggleEditor();
		this.setState({
			inputs: {
				name: "",
				age: "",
				height: ""
			}
		});
	};

	changeHandler = e => {
		e.persist();
		let value = "";
		if (e.target.type === "number") {
			value = Number(e.target.value);
		} else {
			value = e.target.value;
		}
		this.setState(prevState => ({
			inputs: {
				...prevState.inputs,
				[e.target.name]: value
			}
		}));
	};

	submitHandler = e => {
		e.preventDefault();
		this.props.addSmurf(this.state.inputs);
		this.setState({	
			collapse: false,
			inputs: {
				name: "",
				age: "",
				height: ""
			}
		});
	};

	render() {
		return (
			<div>
				<Row>
					<Col className='text-right'>
						{this.props.showEditor ? (
							<Button
								color='primary'
								onClick={this.toggle}
								outline
								style={{ marginBottom: "1rem" }}
								className=''
							>
								Close
							</Button>
						) : (
							<Button
								color='primary'
								onClick={this.toggle}
								style={{ marginBottom: "1rem" }}
								className=''
							>
								Add A Friend
							</Button>
						)}
					</Col>
				</Row>
				<Collapse isOpen={this.props.showEditor}>
					<Card>
						<CardBody>
							<h5>
								{this.props.updatingSmurf !== null
									? `Updating ${this.props.currentSmurf.name}`
									: "Add A Friend"}
							</h5>
							<form
								onSubmit={this.props.updatingSmurf !== null ? this.updateHandler : this.submitHandler}
							>
								<Row>
									<Col xs='8'>
										<InputGroup>
											<Input
												placeholder='Name'
												type='text'
												name='name'
												value={this.state.inputs.name}
												onChange={this.changeHandler}
												required
											/>
										</InputGroup>
									</Col>
									<Col>
										<Input
											placeholder='Age'
											type='number'
											name='age'
											value={this.state.inputs.age}
											onChange={this.changeHandler}
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
										value={this.state.inputs.height}
										onChange={this.changeHandler}
										required
									/>
								</InputGroup>
								<br />
								<Button type='Submit' color='success' outline>
									{this.props.updatingSmurf !== null ? "Update" : "Create"}
								</Button>
								{this.props.updatingSmurf !== null ? (
									<Button
										className='ml-3'
										color='danger'
										onClick={() => this.props.deleteSmurf(this.props.updatingSmurf)}
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
	}
}

const stateToProps = state => ({
  showEditor: state.showEditor,
  updatingSmurf: state.updatingSmurf,
  currentSmurf: state.smurfs[state.updatingSmurf],
})

export default connect(stateToProps, {addSmurf,toggleEditor, deleteSmurf})(AddSmurf);