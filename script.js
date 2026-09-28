const contenido = document.querySelector(".contenido");

if (contenido) {
	const botonDescargar = document.createElement("button");
	botonDescargar.type = "button";
	botonDescargar.textContent = "Descargar texto";
	botonDescargar.addEventListener("click", () => {
		const archivo = new Blob([contenido.innerText], {
			type: "text/plain;charset=utf-8",
		});
		const enlace = document.createElement("a");
		const url = URL.createObjectURL(archivo);

		enlace.href = url;
		enlace.download = "practica.txt";
		enlace.click();
		URL.revokeObjectURL(url);
	});

	contenido.append(botonDescargar);
}
