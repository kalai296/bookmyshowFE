import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

class LoginCustomer extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            email: this.email,
            password: this.password
        }

        
        axios.post('http://localhost:8080/bookMyShowServices/api/login', data).then( (res) => {
            if (res.status === 200){
                console.log("response", res);
                toast("Customer logged in successfully!", {autoclose:2000, position: toast.POSITION.BOTTOM_CENTER})
            }
            else
            toast("Customer logged in failed!", {autoclose:2000, position: toast.POSITION.BOTTOM_CENTER})
        })
    }
    

    render() {
        return (<div>
            <h2>Login Customer</h2>
            <form>  
                email: <input type="text" name="email" onChange={(event => this.email = event.target.value)}/>
                password: <input type="text" name="password" onChange={(event => this.password = event.target.value)}/>
                <button onClick={this.handleSubmit.bind(this)}> Login </button>
            </form>
            <Link to={'/customer/getMovies'}>Get movies list:</Link>
        </div>)
    }
}



export default LoginCustomer
