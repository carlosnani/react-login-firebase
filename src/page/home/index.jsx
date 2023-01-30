import { Link } from 'react-router-dom'

export function Home() {      
    return (
      <div className="container">
         <h1>Home</h1>       
         <Link to='/signin'><button className='btn'>Login</button></Link>
         <Link to='/signup'><button className='btn'>SingUp</button></Link>
      </div>
    )
}