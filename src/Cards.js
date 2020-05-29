import React from 'react';
import './CardsStyle.css';
import CardsList from './CardsList';
import 'tachyons'
const Cards = (props) => {
 
	const CardsArray=[
		{
			id:1, name:"Aziz Maredia", work:"Developer"
		},
		{
			id:2, name:"Jheshan Maredia", work:"Web Developer"
		},
		{
			id:3, name:"Kiran Maredia", work:"Database Developer"
		},
		{
			id:4, name:"Asim Maredia", work:"Back end Developer"
		}
	]

	const varCardArray = CardsArray.map((CardListArray,i) => {
		return <CardsList key={i} id ={CardsArray[i].id} name={CardsArray[i].name} work={CardsArray[i].work} />	
		}
	)

	return(
		<div className="main tc">
			<h1 className=" head tc">Welcome to Avatar World </h1>
			{varCardArray}
			<button className="bg-green grow">   Subscribe   </button>
		</div>

	)
}

export default Cards;