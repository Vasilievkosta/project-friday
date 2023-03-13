import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Test/Test.module.css';

export const RecPassword = () => {
    return (
        <>
            <nav className={s.nav}>
                <ul>
                    <li>
                        <NavLink className={s.link} to={'/'}>Home</NavLink>
                    </li>

                </ul>
            </nav>
            <h1>Password recovery page</h1>
        </>

    )
}