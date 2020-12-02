import './App.css';
import React from 'react'

function Followers(props){

    return(
    <>
        {props.followers.map(follower=>(
            <div key={follower.id}>
                <h1>Name:{follower.name}</h1>
       Company:{follower.company}{"\n"}
       Email:{follower.email}{"\n"}
       Blog:{follower.blog}{"\n"}
       Followers:{follower.followers}{"\n"}
            </div>
        ))}

        
    </>
    )
}

export default Followers;