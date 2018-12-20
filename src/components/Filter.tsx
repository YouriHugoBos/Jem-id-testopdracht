import { any } from 'prop-types';
import  * as React from 'react'

interface IState {currentFilter? : string; onChange : any;};

class Filter extends  React.Component<IState>  {

	public state : IState = {
		currentFilter : "",
		onChange : any,
	}
	constructor(props: Readonly<IState>) {
		super(props)
		this.state = {
			currentFilter : "alle",
			onChange : any,
		}

		this.change = this.change.bind(this);
	}
	
	public change(event: React.FormEvent<HTMLSelectElement>) { 
        // No longer need to cast to any - hooray for react!
		const filterValue: string = event.currentTarget.value;

		this.props.onChange(filterValue);
	}
	
	public render() {
		return (
			<div>
				<h5 className="center">Filter op potmaat</h5>
				<div className="input-field col s12">
					<select defaultValue="alle" onChange = {this.change}>
						<option value="alle">Alle</option>
						<option value="9 cm">9 cm</option>
						<option value="10 cm">10 cm</option>
						<option value="11 cm">11 cm</option>
						<option value="12 cm">12 cm</option>
						<option value="13 cm">13 cm</option>
					</select>
				</div>
			</div>
		)
	}
}

export default Filter