import {useState} from 'react'
import axios from "axios"

const User = () => {
    const [user, setUser] = useState([])
    const url = 'https://randomuser.me/api/'

    const getUser = () => {
    axios(url)
    .then((res) => setUser(res.data.results[0]))
    .catch((err) => console.log(err))
}
console.log(user);

  return (
    <div>
        <img src="" alt="" />
        <p>Hi, My name is</p>
        <h1>name</h1>
        <h3>email</h3>
        <h5>dob</h5>
        <h5>location</h5>
        <h5>phone</h5>
        <button className='btn btn-success' onClick={getUser}>Get User</button>
    </div>
  )
}

export default User