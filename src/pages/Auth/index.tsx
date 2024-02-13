import React, { useState } from "react";
import "./index.css";
import EmailForm from "../../components/EmailForm/index.tsx";
import PasswordForm from "../../components/PasswordForm/index.tsx";
import { GOOGLE_LOGO_URL } from "../../utils/constants.ts";

export default function Auth() {

  const [enablePasswordForm, setEnablePasswordForm] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  function handlerEmailForm(email: string) {
    setEmail(email)
    setEnablePasswordForm(true)
  }

  function handlerPasswordForm(email: string, password: string) {
    alert(`Email: ${email}`)
    alert(`Password: ${password}`)
  }

  return (
    <div className="login">
      <div className="login-content">
        <img
          className="login-img"
          alt="Google"
          src={GOOGLE_LOGO_URL}
        />

        {enablePasswordForm ?
          <PasswordForm email={email} handleConfirm={handlerPasswordForm} /> :
          <EmailForm handleConfirm={handlerEmailForm} />}

      </div>
    </div>
  );
}
