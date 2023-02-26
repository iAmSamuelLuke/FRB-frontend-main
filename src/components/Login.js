import styled from "styled-components";
import css from "/Users/samluke/Desktop/FRB-frontend-main 2/src/css/login.css"

const Login = ({func, setUserXP, setUserCoins}) => {

  const print_creds = () => {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
  }

	let valid = false

	async function checkUser(){
		// Yeah I don't have SQL set up so I just comment out this part and call func regardless
		 let username = document.getElementById('username').value;
		 let password = document.getElementById('password').value;

		 console.log(username)
		 console.log(password)

		 const userInfo = username

		 let response = await fetch("http://localhost:8080/users/check1", {
		 	method: 'GET',
		 	headers: {"Content-Type" : "application/json"}
		 })

		 let data = await response.json();
		 console.log(data);

		 Object.keys(data).some(function (key){
		 	if(data[key].username === username){
		 		if(data[key].password === password){
		 			console.log("you did it")
		 			valid = true
					if (valid === true){
		 				console.log(data[key].lesson_id)
		 				func(data[key].lesson_id, data[key].username);
						 setUserXP(data[key].xp);
		 				return;
					}
		 		}
		 	}
		 })
	}

  	return (
		<div>
			<LoginStyle0> 
				<DivStyle>Please log in</DivStyle>
				<LoginStyle1>

					<Blocker>
						<input id='username' placeholder='Username' style={{paddingLeft:"7px"}}/>

						<input id='password' placeholder='Password'style={{paddingLeft:"7px"}} />
					</Blocker>
				</LoginStyle1>
				<DivStyle><ButtonStyle onClick={() => checkUser()}>LOG IN</ButtonStyle></DivStyle>
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
	height: 18vh;
	width: 15vw;
	justify-content: space-around;
	row-gap: 20px;
	margin-top: 13px;
	margin-right: 80px;
	
`

const DivStyle = styled.h1 `
  	margin: auto;
	margin-top: 0px;
`

const ButtonStyle = styled.button `
	width: 23vw;
	height: 7vh;
	margin-top: 4vh;
	background-color: rgb(48, 48, 218);
	border: none;
	border-radius: 2vh;
	color: white;
	font-size: 2vh;
	font-weight: bold;
	font-family: sans-serif;
	box-shadow: 0 7px rgb(25, 25, 180);
	cursor: pointer;
	:hover {
		background-color: rgb(68, 68, 248);
	}
	:active {
		box-shadow: none;
		transform: translateY(7px);
	}
`





