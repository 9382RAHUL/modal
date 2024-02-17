import React from 'react'
// import "./git.css"
const User = ({user}) => {
const {avatar_url,followers,following,public_repos,name,login,created_at}=user
const createdate=new Date(created_at);
  return (
   <>
    <div className="user">
        <div className="ava">
            <img src={avatar_url} alt="img" className='avatar' />
        </div>
        <div>
            <a href={`https://github.com/${login}`}>{ name||login}</a><br/>
            <p className='p_tag'>Joined on: {`${createdate.getDate()} ${createdate.toLocaleString('en-us',{
                month:'short'
            })} ${createdate.getFullYear()}`}</p>
        </div>
        <div className='pop'>
            <p className='pop_p'>Public Repos :---</p>
            <p>{public_repos}</p>
        </div>
        <div className='pop'>
            <p className='pop_p'>Followers :---</p>
            <p>{followers}</p>
        </div>
        <div className='pop'>
            <p className='pop_p'>Following :---</p>
            <p>{following}</p>

        </div>
    </div>
   </>
  )
}

export default User