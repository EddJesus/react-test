import React from 'react';

import api from "../../services/Api"

import Filter from "../../assets/filter.svg"
import Translation from "../../assets/translation.svg"
import Globe from "../../assets/globe.svg"
import User from "../../assets/user.svg"


import "./styles.css"

const Main = () => {
    
    return (
        <>
            <containter className="flex-box container-box">
                <div className="header">
                    <h1>REACT TEST</h1>
                    <form action="">
                        <div className="form-header">
                            <div className="input-header">
                                <input type="text" name="input_search" placeholder="search..." id="input_search"/>
                            </div>

                            <div className="buttons-header">
                                <button><img src={Filter} alt="" srcset=""/></button>
                                <button><img src={Translation} alt="" srcset=""/></button>
                                <button><img src={Globe} alt="" srcset=""/></button>
                            </div>

                            <div className="profile-header">
                                <a href="/localhost:3000/getAuthorizationCode"><img src={User} alt="Logue-se"/></a>
                            </div>
                        </div>
                    </form>

                    <div className="container">

                        <ul>
                            <li>
                                <img src={Translation} alt=""/>
                                <p>Teste</p>
                            </li>
                            <li>
                                <img src={Translation} alt=""/>
                                <p>Teste</p>
                            </li>
                            <li>
                                <img src={Translation} alt=""/>
                                <p>Teste</p>
                            </li>
                            <li>
                                <img src={Translation} alt=""/>
                                <p>Teste</p>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </containter>
        </>
    );

}

export default Main;