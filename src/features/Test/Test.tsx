import React from 'react';
import { NavLink } from 'react-router-dom';
import SuperButton from '../../components/SuperButton/SuperButton';
import SuperCheckbox from '../../components/SuperCheckbox/SuperCheckbox';
import SuperInputText from '../../components/SuperInputText/SuperInputText';
import s from './Test.module.css';

export const Test = () => {
    const [stateForAllInputs, setValue] = React.useState<string>('')
    const [error, setError] = React.useState<string>('')

    const [stateForAllCheckboxes, setChecked] = React.useState<boolean>(false)
    return (
        <>
            <nav className={s.nav}>
                <ul >
                    <li>
                        <NavLink className={s.link} to={'/login'}>login</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.link} to={'/register'}>register</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.link} to={'/rec-password'}>recover password</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.link} to={'/new-password'}>new password</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.link} to={'/profile'}>profile</NavLink>
                    </li>
                </ul>
            </nav>
            <h1>Test page</h1>

            <div className={s.test}>
                <div>
                    <SuperInputText
                        value={stateForAllInputs}
                        onChangeText={setValue}
                        error={error}
                        onEnter={() => {
                            setError(
                                stateForAllInputs.trim()
                                    ? ''
                                    : 'Error'
                            )
                            setValue('')
                        }}
                    />
                </div>

                <div className={s.buttons}>
                    <div>
                        <SuperButton
                            xType={'secondary'}
                        >
                            secondary
                        </SuperButton>
                    </div>
                </div>

                <div className={s.checkboxes}>
                    <SuperCheckbox
                        checked={stateForAllCheckboxes}
                        onChangeChecked={setChecked}
                    >
                        remember me
                    </SuperCheckbox>
                </div>
            </div>


        </>

    )
}