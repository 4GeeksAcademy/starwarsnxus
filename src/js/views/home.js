import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {

	const {store} = useContext(Context)

	return <div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<div className="d-flex card-title">
		{store.characters.map(people=> <div className="card" style={{width: "18rem"}}>
			<img src="..." className="card-img-top" alt="..."/>
			<div className="card-body">
			<h5 className="card-title">{people.name}</h5>
			<p className="card-text"> hghghghgghg</p>
			<a href="a" className="btn btn-primary"> Go somewhere</a>
		</div>
		</div>
	
)}

</div>
</div>}
