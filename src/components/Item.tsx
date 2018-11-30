import * as React from 'react';
import '../css/materialize.css';

interface IProps { naam : string; potmaat : string; hoogte : string; fotos : string;}

class Item extends React.Component<IProps> {

  public render() {
	const { naam, potmaat, hoogte, fotos } = this.props;
    return (
		<>
			<div className="card-image">
				<img src={fotos}/>
			</div>
			<div className="card-content">
				<a className="btn-floating halfway-fab waves-effect waves-light red">
					<i className="material-icons">info_outline</i>
				</a>
				<span className="card-title">{naam}</span>
				<p>Potmaat : {potmaat}  Hoogte : {hoogte} </p>					
			</div>
		</>
    )
  }
}

export default Item;
