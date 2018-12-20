import * as React from 'react';

interface IProps { Eigenschappen: []; naam : string; potmaat : string; hoogte : string; fotos : string;}

class Item extends React.Component<IProps> {

  public render() {

	const { Eigenschappen, naam, potmaat, hoogte, fotos } = this.props;
	const eigenschapItems : any[] = [];

	if(Eigenschappen !== undefined && Eigenschappen.length !== 0){
		Eigenschappen.map(eigenschapItem =>{
			if(eigenschapItem != null){
				return eigenschapItems.push(eigenschapItem);
			}
			else{
				return false;
			}
		});
	}

	function renderDetails(){
		const detailsArray : any[] = [];

		if(eigenschapItems.length !== 0){
			for(let i = 1; eigenschapItems.length > i; i++) {
				detailsArray.push(
					<div key={eigenschapItems[i].ID}>
						<p>{eigenschapItems[i].EigenschapNaam + " : " + eigenschapItems[i].Waarde}</p>
					</div>
				)
			}
		}
		return detailsArray;
	}

    return (
		<>
			<div className="card-image waves-effect waves-block waves-light">
				<img className="activator" src={fotos}/>
			</div>
			<div className="card-content">
				<span className="card-title activator grey-text text-darken-4">{naam}<i className="material-icons right">more_vert</i></span>
				<p>Potmaat: {potmaat !== "" ? potmaat : " onbekend "} - Hoogte: {hoogte !== "" ? hoogte : " onbekend "} </p>
			</div>
			<div className="card-reveal">
				<span className="card-title grey-text text-darken-4">{naam}<i className="material-icons right">close</i></span>
				<h5>Details</h5>
				{renderDetails()}
			</div> 
		</> 
    )
  }
}

export default Item;
