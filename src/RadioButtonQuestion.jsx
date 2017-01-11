import React, {PropTypes} from 'react'

class RadioButtonQuestion extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: null
		}
	}
	render() {
		return (
			<div>
				<p>{this.props.question.text}</p>
				<ul>
					{this.props.question.options.map((option) => {
						if (this.props.question.type == "radio") {
							return (
								<li key={option.id}>
									<label>
										<input type={this.props.question.type} checked={this.state.selected == option.id} onChange={(e) => {
											this.setState({selected: option.id});
										}}></input>{option.text}
									</label>
								</li>
							)
						}
					})}
				</ul>
				<div className="resultSection">{this.props.question.options.map((option) => {
						if (option.id == this.state.selected) {
							return (
								<div key={option.id} className={option.resultLevel}>{option.result}</div>
							)
						} else {
							return null
						}
					})}</div>
			</div>
		)
	}
}

RadioButtonQuestion.propTypes = {
	question: PropTypes.object.isRequired
}

export default RadioButtonQuestion;
