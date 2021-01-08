function LoginScreen ({history}) {

	const handleClick = () => {

		history.push('/');
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