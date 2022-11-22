import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loadingSpinner from "../assets/spinner.gif";

/* Import Your Files Below This Line*/
import { StyledSection } from "../components/styled/Section.styled";
import { StyledForm } from "../components/styled/Form.styled";
import { StyledButton } from "../components/styled/Button.styled";
import { toast } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

function FakeLogin() {
  const navigate = useNavigate();

  /* useState To Toggle Loading Spinner */
  const [loading, setLoading] = useState(false);

  /* Fake handleSubmit Function */
  const fakeLogin = () => {
    setLoading(true);
    setTimeout(() => {
      notify();
      setLoading(false);
      navigate("/");
    }, 3000);
  };

  const notify = () => {
    toast.success("Login successful!", {
      position: toast.POSITION.TOP_CENTER,
      icon: "✅",
      transition: Zoom,
    });
  };

  return (
    <StyledSection>
      <div>
        {/* Loading Spinner */}
        {loading && (
          <img
            src={loadingSpinner}
            alt="loading spinner"
            style={{
              width: 170,
              height: 170,
              "margin-top": 11.5,
              "margin-bottom": 11.5,
            }}
          />
        )}

        {/* Login From */}
        {!loading && (
          <StyledForm>
            <label htmlFor="username">username</label>
            <input type="text" name="username" />

            <label htmlFor="password">password</label>
            <input type="password" name="password" />

            <StyledButton type="submit" onClick={() => fakeLogin()}>
              <h3>Login</h3>
            </StyledButton>
          </StyledForm>
        )}
      </div>
    </StyledSection>
  );
}

export default FakeLogin;
