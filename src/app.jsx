import React, {PropTypes} from 'react'
import ReactDOM from "react-dom";

import Question from "./Question.jsx";

const questions = [
	{
		id: "shovelbeaconprobe",
		text: "Does everyone have a shovel, beacon, probe, and knowledge on how to use all three?",
		type: "radio",
		options: [
			{
				id: "yes",
				text: "Yes"
			}, {
				id: "no",
				text: "No",
				result: "You are not prepared.",
				resultLevel: "error"
			}
		]
	},
	{
		id: "trained",
		text: "Is everyone trained to make decisions in avalanche terrain?",
		type: "radio",
		options: [
			{
				id: "yes",
				text: "Yes"
			}, {
				id: "no",
				text: "No",
				result: "Some people don't have training - they shouldn't go.",
				resultLevel: "warning"
			}
		]
	}

]

class App extends React.Component {
	render() {
		return (
			<div>
				{questions.map((question) => {
					return (
						<Question key={question.id} question={question}></Question>
					)
				})}
			</div>
		)
	}
}

ReactDOM.render((
	<App></App>
), document.getElementById("app"));
