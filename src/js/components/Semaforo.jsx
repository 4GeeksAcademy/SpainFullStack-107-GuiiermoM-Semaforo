import React, { useState } from "react";

const Semaforo = () => {
	const [Selected, setSelected] = useState("");

	const ChangeColor = (color) => {
		setSelected(color);
	};

	return (
		<main>
			<div className="poste"></div>
			<div className="caja-de-luces">
				<div
					className={`rojo ${Selected === "rojo" ? "light-on" : ""}`}
					onClick={() => ChangeColor("rojo")}
				></div>

				<div
					className={`ambar ${Selected === "ambar" ? "light-on" : ""}`}
					onClick={() => ChangeColor("ambar")}
				></div>

				<div
					className={`verde ${Selected === "verde" ? "light-on" : ""}`}
					onClick={() => ChangeColor("verde")}
				></div>
			</div>
		</main>
	);
};

export default Semaforo;