import styled from "styled-components";

const Login = ({func}) => {

	const print_creds = () => {
		var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;
		console.log(username);
		console.log(password);
	}

	return (
		<div>
			<LoginStyle0>
				<DivStyle>Please login to continue</DivStyle>
				<LoginStyle1>
					<Blocker>
						<label>Username</label>
						<label>Password</label>
					</Blocker>
					<Blocker>
						<input/>
						<input/>
					</Blocker>
				</LoginStyle1>
				<DivStyle><ButtonStyle onClick={func}>Login</ButtonStyle></DivStyle>
			</LoginStyle0>
		</div>
	)
}

export default Login;

const LoginStyle0 = styled.div `
	margin: auto;
	margin-top: 8vh;
	display: flex;
	flex-direction: column;
	width: 40vw;
`

const LoginStyle1 = styled.div `
	margin: auto;
	margin-top: 3vh;
	display: flex;
`
const Blocker = styled.div `
	display: flex;
	flex-direction: column;
	height: 15vh;
	width: 15vw;
	justify-content: space-around;
`

const DivStyle = styled.h1 `
	margin: auto;
	margin-top: 0px;
`

const ButtonStyle = styled.button `
	width: 30vw;
	height: 5vh;
	margin-top: 5vh;
`




