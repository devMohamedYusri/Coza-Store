import LoginInput from "./designs/LoginInput"
import LoginTitle from './designs/LoginTitle';
import Button from './designs/Button';
import { useLogin } from "./context/LoginContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const {login}=useLogin();
  const [user,setUser]=useState({name: '', email:'', password:"", confirmPassword: ""});
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password || !user.confirmPassword) {
      setError('Please fill in all fields');
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      setError('Please enter a valid email address');
    } else if (user.password.length < 8 || user.password.length > 12) {
      setError('Password must be between 8 and 12 characters');
    } else if (user.password !== user.confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      login(user);
      navigate("/");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
    setError(''); // Clear error when user starts typing
  }

  return (
    <div className="w-96 pt-40 mx-auto" >
      <LoginTitle text="Create an account"/>
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <LoginInput 
          name="name" 
          label="Name" 
          type="text" 
          onChange={handleChange} 
          value={user.name}
          required
        />
        <LoginInput 
          name="email" 
          label="Email" 
          type="email" 
          onChange={handleChange} 
          value={user.email}
          required
        />
        <LoginInput 
          name="password" 
          label="Password" 
          type="password" 
          onChange={handleChange} 
          value={user.password}
          required
        />
        <LoginInput 
          name="confirmPassword" 
          label="Confirm Password" 
          type="password" 
          onChange={handleChange} 
          value={user.confirmPassword}
          required
        />
        <Button type="submit" text="Register" className="mt-10" />
      </form>
    </div>
  )
}

export default Register;
