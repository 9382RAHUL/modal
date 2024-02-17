import React, { useEffect, useState } from 'react'
import User from './User';
import "./git.css"
const GithubProFinder = () => {
    const [username,setusername]=useState("9382RAHUL")
    const [userdata,setuserdata]=useState(null);
    const [loading,setloading]=useState(false);
    const handlesubmit=()=>{
            fetchdata();
    }
    const fetchdata=async()=>{
        setloading(true);
        const res=await fetch(`https://api.github.com/users/${username}`);
        // const res=await fetch(`https://docs.github.com/rest/users/${username}`);
        const data= await res.json();
        if(data){
            setuserdata(data);
            setloading(false);
            setusername('')
            
        }
        console.log(data);
    }
    useEffect(()=>{
        fetchdata()
    },[])

    if(loading){
        return <h1>Loading ! please wait</h1>
    }
  return (
    <>
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input type="text" name="search-by-username" value={username} onChange={(e)=>setusername(e.target.value)} placeholder='Enter your name' />
                <button onClick={handlesubmit}>Search</button>
            </div>
            {
                userdata !==null ?<User user={userdata}/>:null
            }
        </div>
    </>
  )
}

export default GithubProFinder