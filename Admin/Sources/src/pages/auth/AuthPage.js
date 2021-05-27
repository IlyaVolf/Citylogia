import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AuthPage.scss'
import Input from '@bit/reactstrap.reactstrap.input'
import Checkbox from '@bit/ans.base-ui.checkbox'
import Button from '@material-ui/core/Button'

export class AuthPage extends Component {
    static propTypes = {}

    render() {
        return (
            <div className="auth-page">
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
                />
                <div className="auth-page__form">
                    <h1>Авторизация</h1>
                    <p>Для получения аккаунта свяжитесь с администратором</p>
                    <Input
                        id="login-input"
                        placeholder="Логин"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                    ></Input>

                    <Input
                        id="password-input"
                        placeholder="Пароль"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                    ></Input>

                    <Checkbox>
                        Я ознакомился с политикой конфиденциальности
                    </Checkbox>

                    <Button variant="outlined">Авторизоваться</Button>
                </div>
            </div>
        )
    }
}

export default AuthPage
