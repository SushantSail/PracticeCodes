
import React ,{ useState} from "react";

export const Send_Receive_Api = () => {
  const [data, setData] = useState({ email:'' , password:'' })

  async function sendData(){
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method :'POST',
        headers :{"Content-type":"application/json"},
        body:JSON.stringify({
          email: data.email,
          password: data.password
        })
      })
      const result = await response.json();
      console.log(response.status);
      console.log("API Response:", result);
      alert("Data sent successfully!");
    } catch(err){
      console.log('Error occured',err)
    }
  }
 
  function handleSubmit(e){
    e.preventDefault();
  if (!data.email || !data.password ) return;
  sendData();
    console.log('DATA :',data);
    setData({ email:'' , password:'' });
  }

  function handleChange(e){
    const {name , value} = e.target;
    setData(prev => ({
      ...prev, [name]:value
    }))
  }

  return (
    <div>
      <h1>Form DATA</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Enter Email ID'
        name='email' value={data.email}
        onChange={handleChange}/>
        <br></br><br></br>
        <input placeholder='Enter Password'
         name='password' value={data.password}
         onChange={handleChange}/>
        <br></br><br></br>
        <button>Sign IN</button>
      </form>
     
    </div>
  );
}
