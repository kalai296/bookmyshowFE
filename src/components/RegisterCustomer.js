import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'

toast.configure();

class RegisterCustomer extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            username: this.username,
            email: this.email,
            status: this.status,
            mobileNo: this.mobileNo,
            password: this.password
        }

        axios.post('http://localhost:8080/bookMyShowServices/api/registerUser', data).then( (res) => {
            if (res.status === 200)
                toast("Customer registered successfully!", {autoclose:2000, position: toast.POSITION.BOTTOM_CENTER})
            else
            toast("Customer registration failed!", {autoclose:2000, position: toast.POSITION.BOTTOM_CENTER})
        })
    }


    render() {
        return (<div>
            <h2>Register Customer</h2>
            <form>
                username: <input type="text" name="username" onChange={(event => this.username = event.target.value)}/>
                email: <input type="text" name="email" onChange={(event => this.email = event.target.value)}/>
                status: <input type="text" name="status" onChange={(event => this.status = event.target.value)}/>
                mobileNo: <input type="text" name="mobileNo" onChange={(event => this.mobileNo = event.target.value)}/>
                password: <input type="text" name="password" onChange={(event => this.password = event.target.value)}/>
                <button onClick={this.handleSubmit.bind(this)}> Confirm </button>
            </form>
            <Link to={'/customer/login'}>Login Customer </Link>
             </div>)
    }
}

export default RegisterCustomer
