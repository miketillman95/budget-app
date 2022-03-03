import Userfront from "@userfront/react";


function Dashboard() {
    const userData = JSON.stringify(Userfront.user, null, 2);

    if(!Userfront.tokens.accessToken){
        return <div classname='warning'> 
                <h1>
                Must log in to see your Budget data
                </h1>

            </div>
    }else {
  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{userData}</pre>
      <button onClick={Userfront.logout}>Logout</button>
    </div>
  )}

  }

  export default Dashboard