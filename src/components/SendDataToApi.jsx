import React, { useState } from 'react'

export const SendDataToApi = () => {
    const[ userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
    });


  function handleChange(e) {
    const { name, value } = e.target;
    const user = {
      ...userData,
      [name]: value,
      id: new Date().getTime(),
    }
        
        setUserData(user);
    }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);

    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(userData),
      });
      const result = await response.json();
      console.log("✅ Data sent successfully:", result);
      setUserData({
        username: "",
        email: "",
        password: "",
      });
    }
    catch(err){
       console.error("Error occured", err);
    }

  }


  return (
    <>
    <div>SendDataToApi</div>
    <form onSubmit={handleSubmit}>
        <input type="text" name='username' value={userData.username} placeholder='Enter Name' onChange={handleChange} />
        <input type="text" name='email' value={userData.email} placeholder='Enter Email id' onChange={handleChange}/>
        <input type="password" name='password' value={userData.password} placeholder='password' onChange={handleChange}/>
        <button type='submit'>Send</button>
    </form>
    </>
  )
}
