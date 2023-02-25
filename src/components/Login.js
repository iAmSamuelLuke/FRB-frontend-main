import styled from "styled-components";

const Login = ({func}) => {

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
		 				func(data[key].lesson_id);
		 				return;
					}
		 		}
		 	}
		 })
		// func is called with data[key].lesson_id in the fetch above, 1 is a placeholder
		
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
						<input id='username'/>
						<input id='password'/>
					</Blocker>
				</LoginStyle1>
				<DivStyle><ButtonStyle onClick={() => checkUser()}>Login</ButtonStyle></DivStyle>
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





