import React, {PropTypes} from 'react'
import ReactDOM from "react-dom";

import RadioButtonQuestion from "./RadioButtonQuestion.jsx";
import SlopeAngleQuestion from "./SlopeAngleQuestion.jsx";

const radioButtonQuestions = [
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
	}, {
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
	}, {
		id: "plans",
		text: "Have you aligned on a plan, specific ascent and descent route, distances and expected start/finish times, & route contingencies if plans change?",
		type: "radio",
		options: [
			{
				id: "yes",
				text: "Yes"
			}, {
				id: "no",
				text: "No",
				result: "It is recommended that you do that.",
				resultLevel: "warning"
			}
		]
	}, {
		id: "forecast",
		text: "Have you checked the weather forecast for BEFORE, DURING, and AFTER the time you plan to be in the backcountry? (Precipitation, wind speeds/direction, and solar radiation)",
		type: "radio",
		options: [
			{
				id: "yes",
				text: "Yes"
			}, {
				id: "no",
				text: "No",
				result: "Stop. It is advised that you do not continue until you have checked the weather forecast.",
				resultLevel: "warning"
			}
		]
	}, {
		id: "terrain",
		text: "Are you aware of all possible terrain traps on both your ascent and descent? (Terrain traps include: Cliffs, Trees, Crevasses, Rocks, Cross loading, Cornices, and anything else you wouldn’t want to hit head first.)",
		type: "radio",
		options: [
			{
				id: "yes",
				text: "Yes"
			}, {
				id: "no",
				text: "No",
				result: "look at the map.",
				resultLevel: "warning"
			}
		]
	}

]

class App extends React.Component {
	render() {
		return (
			<div>
				{radioButtonQuestions.map((question) => {
					return (
						<RadioButtonQuestion key={question.id} question={question}></RadioButtonQuestion>
					)
				})}
				<SlopeAngleQuestion></SlopeAngleQuestion>
			</div>
		)
	}
}

ReactDOM.render((
	<App></App>
), document.getElementById("app"));
