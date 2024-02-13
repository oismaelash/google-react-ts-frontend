import React, { Fragment, useState } from "react";
import "./index.css";
import Button from "../../components/Button/index.tsx";
import { PasswordFormProps } from "../../@types";

export default function PasswordForm(props: PasswordFormProps) {

    const [password, setPassword] = useState<string>('')

    return (
        <Fragment>
            <div className="login-header">
                <h1>Olá!</h1>
                <div className="login-header--email">{props.email}</div>
            </div>

            <div className="login-form">
                <div className="login-form--password">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Digite sua senha"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <div className="login-form--checkbox">
                        <input type="checkbox" id="checkbox" name="checkbox" />
                        <label htmlFor="checkbox">Mostrar senha</label>
                    </div>
                </div>
            </div>

            <div className="login-button">
                <Button title="Tente de outro jeito" classNameType="button-white" />
                <Button
                    title="Avançar"
                    classNameType="button-blue"
                    onClickProp={() => props.handleConfirm(props.email, password)}
                />
            </div>
        </Fragment>
    );
}
