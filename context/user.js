import axios from 'axios';
import React, { useState, useEffect, createContext, useContext } from 'react';
import { parseCookies } from 'nookies';

export const UserContext = createContext({});

const UserProv = ({ children }) => {

    const [ loading, setLoading ] = useState(false);
    const [ info, setInfo ] = useState({});

    const cookies = parseCookies();
    const token = cookies.tk;

    useEffect(() => {
        const Dados = async () => {
            setLoading(true);
            try {
                const resp = await axios.get(`/api/users/${token}`);
                setInfo(resp.data);
                setLoading(false);
            } catch (error) {
                console.log('erro', error);
            }
        };
        Dados();
    },[token]);

    return (
        <>
            <UserContext.Provider value={{ info, setInfo}}>
                {children}    
            </UserContext.Provider>      
        </>
    )
};

export const UseUserData = () => {
    return useContext(UserContext);
};

export default UserProv;