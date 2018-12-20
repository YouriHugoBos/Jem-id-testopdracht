import * as React from 'react';

import ItemRenderer from './ItemRenderer';

interface IState {isLoaded? : boolean; items? : [];};

class FloridayData extends React.Component<IState> {

	public state : IState = {
		isLoaded : false,
		items : [] 
	}
	
	constructor(props : Readonly<IState>){
		super(props);
		this.state = {};
	}

	public componentDidMount() {
		fetch('https://api.floraxchange.nl/artikel?relatieid=215')
			.then(res => res.json())
			.then(res => {
				this.setState({
					isLoaded : true,
					items : res,
				});
			})
	}
	
  	public render() {

		const { isLoaded } = this.state;

		if(!isLoaded)
		{
			return (
				<div className="progress">
					<p><div className="indeterminate"/></p>
				</div>
			)
		}
		else 
		{
			return (
				<div className={"row"}>
					<ItemRenderer items={this.state.items} />
				</div>
			);
		}
  	}
}
export default FloridayData;
