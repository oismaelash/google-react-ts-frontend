import React, { Fragment, useState } from "react";
import "./index.css";
import Button from "../../components/Button/index.tsx";
import { Link } from "react-router-dom";
import { EmailFormProps } from "../../@types";

export default function EmailForm(props: EmailFormProps) {

    const [email, setEmail] = useState<string>('')

    return (
        <Fragment>
            <header className="login-header">
                <h1>Fazer Login</h1>
                <p>Use sua conta do Google</p>
            </header>

            <main className="login-form">
                <div className="login-form--email">
                    <input
                        type="text"
                        placeholder="E-mail e Telefone"
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <Link title="Esqueceu seu e-mail?" to="#" />
                </div>

                <div className="login-infos">
                    <p>
                        Não está no seu computador? Use o modo visitante para fazer login
                        com privacidade.
                    </p>
                    <Link title="Saiba mais sobre como usar o Modo visitante" to={""} />
                </div>
            </main>

            <footer className="login-button">
                <Button title="Criar conta" classNameType="button-white" />
                <Button
                    title="Avançar"
                    classNameType="button-blue"
                    onClickProp={() => props.handleConfirm(email)}
                />
            </footer>
        </Fragment>
    );
}
