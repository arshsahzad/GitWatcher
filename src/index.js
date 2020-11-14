import React from "react";
import ReactDOM from "react-dom";
import Routers from "./router/Routers.jsx";
import GlobalStyle from "./pages/globalStyle.jsx";

ReactDOM.render(
	<React.StrictMode>
		<Routers />
		<GlobalStyle/>
	</React.StrictMode>,
	document.getElementById("root"),
);
