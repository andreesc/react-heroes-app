import {useContext} from 'react';
import {AuthContext} from "../../auth/AuthContext";
import {types} from "../../types/types";

function LoginScreen ({history}) {

	const {dispatch} = useContext(AuthContext);

	const handleClick = () => {

		const lastPath = localStorage.getItem('lastPath') || '/';


		dispatch({
			type: types.LOGIN,
			payload: {name: 'Andres'}
		});

		history.replace(lastPath);
	}

	return (
		<div className="container mt-5">
			<h1>Login</h1>
			<hr/>
			<button
				className="btn btn-primary"
				onClick={handleClick}
			>
				Ingresar
			</button>
		</div>
	)
}
export default LoginScreen;