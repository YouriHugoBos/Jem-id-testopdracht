
import * as React from 'react'

import Filter from './Filter';
import Item from './Item';

interface IState { currentFilter?: string; items?: [];};

class ItemRenderer extends React.Component<IState> {

	public state: IState = {
		currentFilter : "",
		items: [],
	}

	constructor(props: Readonly<IState>) {
		super(props);
		this.state = {};
	}

	public componentWillMount() {
		this.setState({
			currentFilter : "alle",
			items: this.props.items,
		})
	}


	public handleChange = (potmaat : [string]) => {
		this.setState({
			currentFilter : potmaat
		});
	};

	public render() {
		const { items, currentFilter } = this.state;
		return (
			<div>
				<Filter onChange={this.handleChange} />
				{		
					items !== undefined && items.length > 0 && items.map((item : any) =>   {
						if(currentFilter !== null && currentFilter !== undefined){
							if(item.Potmaat.indexOf(currentFilter) < 0 && currentFilter !== "alle") {
								return null;
							} else {
								return (
									<div key={item.ID} className="col s4">
										<div className="card medium hoverable">
											<Item Eigenschappen={item.Eigenschappen} naam={item.Naam} potmaat={item.Potmaat} hoogte={item.Hoogte} fotos={item.Fotos[0].UrlThumb360} />
										</div>
									</div>
								)
							}
						}
						else {
							return null;
						}
					})
				}
			</div>
		)
	}
}

export default ItemRenderer