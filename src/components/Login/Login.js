import Userfront from "@userfront/react";



const LoginForm = Userfront.build({
    toolId: "alnkkd",
  });


  function Login() {
    return (
        <div>
    
    <h2>Login</h2>

    <LoginForm/>

        </div>

    )

  }

  export default Login