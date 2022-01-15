import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getBreedByName } from "../store/actions";

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const navigate= useNavigate()
    function onSubmit(e){
        e.preventDefault();
        navigate('/home')
        dispatch(getBreedByName(name));
        setName('')
    }

    function onInputChange(e){
        e.preventDefault();
        setName(e.target.value)
        
    }

    return <div>
        <form onSubmit= {onSubmit} >
            <input type= 'text' onChange={onInputChange} value={name} />
            <input type='submit' value='Search'/>
        </form>
    </div>
}