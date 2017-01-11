import React, {PropTypes} from 'react'

const question = {
	id: "slopes",
	text: "What is the greatest angle of slopes you will be skiing?",
	type: "radio",
	options: [
		// {
		// 	id: "<30",
		// 	text: "All < 30 degrees",
		// 	result: "Avalanches are rare, but still possible in unstable conditions.",
		// 	resultLevel: "success"
		// },
		{
			id: "31-35",
			text: "31-35 degrees",
			result: "Warning: slopes from 31 – 45 degrees are the most prone to avalanches.",
			resultLevel: "warning"
		}, {
			id: "36-45",
			text: "36-45 degrees",
			result: "Warning: slopes from 31 – 45 degrees are the most prone to avalanches.",
			resultLevel: "warning"
		}, {
			id: "46-55",
			text: "46-55 degrees",
			result: "Sloughs are frequent and should be expected. Slabs are possible but less frequent.",
			resultLevel: "warning"
		}, {
			id: "55+",
			text: "55+ degrees",
			result: "Sloughs extremely likely, slough management necessary especially above terrain traps.",
			resultLevel: "warning"
		}
	]
}

class SlopeAngleQuestion extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			lessThan30: null,
			selectedSlopes: []
		}
	}
	render() {
		let slopeOptions;
		if (this.state.lessThan30 == false) {
			slopeOptions = (
				<li>
					<ul>
						{question.options.map((option) => {
							return (
								<li key={option.id}>
									<label>
										<input type="checkbox" checked={this.state.selectedSlopes.includes(option.id)} onChange={(e) => {
											if (!this.state.selectedSlopes.includes(option.id)) {
												let newSelectedSlopes = this.state.selectedSlopes.slice();
												newSelectedSlopes.push(option.id);
												this.setState({selectedSlopes: newSelectedSlopes});
											} else {
												let newSelectedSlopes = this.state.selectedSlopes.slice();
												newSelectedSlopes.splice(newSelectedSlopes.indexOf(option.id), 1);
												this.setState({selectedSlopes: newSelectedSlopes});
											}
										}}></input>
										{option.text}
									</label>
								</li>
							)
						})}
					</ul>
				</li>
			)
		}

		let results = []

		if (this.state.lessThan30) {
			results.push((
				<div key={"<30"} className="success">{"Avalanches are rare, but still possible in unstable conditions."}</div>
			))
		} else {
			for (let option of question.options) {
				if (this.state.selectedSlopes.includes(option.id)) {
					results.push((
						<div key={option.id} className="warning">{option.result}</div>
					))
				}
			}
		}

		return (
			<div>
				<p>{"Approximate angles of the slopes you will be skiing?"}</p>
				<ul>
					<li>
						<label>
							<input type="radio" checked={this.state.lessThan30 == true} onChange={(e) => {
								this.setState({lessThan30: true});
							}}></input>
							{"All <30 degrees"}
						</label>
					</li>
					<li>
						<label>
							<input type="radio" checked={this.state.lessThan30 == false} onChange={(e) => {
								this.setState({lessThan30: false});
							}}></input>
							{"Some terrain will be greater than 30 degrees"}
						</label>
					</li>
					{slopeOptions}
				</ul>
				<div className="resultSection">{results.map((result) => {
						return result
					})}</div>
				<img src="avalanche-slope.jpeg"></img>
			</div>
		)
	}
}

// {this.props.question.options.map((option) => {
// 	if (this.props.question.type == "radio") {
// 		return (
// 			<li key={option.id}>
// 				<label>
// 					<input type={this.props.question.type} checked={this.state.selected == option.id} onChange={(e) => {
// 						this.setState({selected: option.id});
// 					}}></input>{option.text}
// 				</label>
// 			</li>
// 		)
// 	}
// })}
// </ul>

export default SlopeAngleQuestion;
