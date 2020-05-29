import React from 'react';


const CardsList = (props) => {

	return(
		<div className="container ma4 bg-green dib p7 tc grow">
			<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="aziz" />
			<h1 className="ma3">{props.name}</h1>
			<p className="pb3">{props.work}</p>
		</div>

	)
}

export default CardsList;