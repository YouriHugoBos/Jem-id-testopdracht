import * as React from 'react';

import '../css/materialize.css';

import Item from './Item';

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

		const { isLoaded , items } = this.state;
		const data : any[] = [];
		
		// load items and put in data array.
		if(items !== undefined && items.length !== 0){
			items.map(item =>{
				if(item != null)
				{
					return data.push(item);
				}
				else
				{
					return false;
				}
			});
		}

		function renderItems()
		{
			const item : any[] = [];
			if(data.length !== 0){
				for(let i = 0; data.length > i; i++)
				{
					item.push(
						<div className="col s4">
							<div className="card medium">
								<Item naam = {data[i].Naam} potmaat = {data[i].Potmaat} hoogte = {data[i].Hoogte} fotos = {data[i].Fotos[0].UrlThumb360}/>
							</div>
						</div>
					)
				}
				return item;
			}
			else {
				return false;
			}
		}

		if(!isLoaded)
		{
			return <div> Loading... </div>
		}
		else 
		{
			return (
				<div className={"row"}>
					{renderItems()}
				</div>
			);
		}
  	}
}

export default FloridayData;
