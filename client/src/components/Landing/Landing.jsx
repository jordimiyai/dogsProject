import React from "react";
import {Link} from 'react-router-dom';

export default function Landing(){
    return (
    <div>
    <h1>DoggoLand</h1>
    <Link to='/home'>
        <button>Let's go</button>
    </Link>
    </div>
    )
}