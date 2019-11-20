import React, { useEffect, useState } from "react";
import styled from "styled-components";

import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import ProfileCard from './ProfileCard';
import ConvoCard from './ConvoCard';


const ProfileListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: auto;
`;

const ProfileList = () => {
    const [profile, setProfile] = useState({});

    const [convos, setConvo] = useState([]);

    // TODO: Add useState to track data from useEffect
    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

        axios
            .get('https://empoweredconversations.herokuapp.com/api/users/1',{headers:{authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc0Mjc1MzU2LCJleHAiOjE1NzQ4ODAxNTZ9.3udQ81qmvKFYvmE5A51U_0Vjlae9KPel4gynVzCDFWs"}})
            .then(response => {
                console.log(response)
                setProfile(response.data)
            })
            .catch(error => {
                console.error('Server Error', error);
            });
        
        

    }, []);

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

        axios
            .get('https://empoweredconversations.herokuapp.com/api/users/1/conversations',{headers:{authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc0Mjc1MzU2LCJleHAiOjE1NzQ4ODAxNTZ9.3udQ81qmvKFYvmE5A51U_0Vjlae9KPel4gynVzCDFWs"}})
            .then(response => {
                console.log(response)
                setConvo(response.data)
            })
            .catch(error => {
                console.error('Server Error', error);
            });

    }, []);



    return (

        <div>
            <ProfileListDiv>
                <ProfileCard prof={profile}/>
                {convos.map((item, index) => (
                <ConvoCard conv={item} key={index}/>    
                ))}
            </ProfileListDiv>
        </div>
    );
}




export default ProfileList;