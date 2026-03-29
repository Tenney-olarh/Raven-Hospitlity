import React, { useState, useRef } from "react";
import "./styles/home/otp.css";

export default function PasscodeAuthPage() {
  const [passcode, setPasscode] = useState(Array(6).fill(""));
  const [confirmPasscode, setConfirmPasscode] = useState(Array(6).fill(""));

  const passcodeRefs = useRef([]);
  const confirmRefs = useRef([]);

  const handleChange = (index, value, type) => {
    if (!/^[0-9]?$/.test(value)) return;

    const setter = type === "passcode" ? setPasscode : setConfirmPasscode;
    const state = type === "passcode" ? passcode : confirmPasscode;
    const refs = type === "passcode" ? passcodeRefs : confirmRefs;

    const newCode = [...state];
    newCode[index] = value;
    setter(newCode);

    if (value && index < 5) {
      refs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e, type) => {
    const refs = type === "passcode" ? passcodeRefs : confirmRefs;

    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      refs.current[index - 1].focus();
    }
  };

  const renderInputs = (state, refs, type, autoFocusFirst = false) => (
    <div className="input-group">
      {state.map((digit, index) => (
        <input
          key={index}
          type="password"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          ref={(el) => (refs.current[index] = el)}
          autoFocus={autoFocusFirst && index === 0}
          onChange={(e) => handleChange(index, e.target.value, type)}
          onKeyDown={(e) => handleKeyDown(index, e, type)}
          className="input-box"
        />
      ))}
    </div>
  );

  const handleSubmit = () => {
    const code = passcode.join("");
    const confirm = confirmPasscode.join("");

    if (code.length < 6 || confirm.length < 6) return;
    if (code !== confirm) return;

    alert("Passcode set successfully!");
  };

  return (
    <div className="screen">
      <div className="wrapper">
        <h1 className="heading">Set your Passcode</h1>
        <p className="subtext">Set your 6 digit passcode to enable sign-in</p>

        {renderInputs(passcode, passcodeRefs, "passcode", true)}

        <h2 className="heading secondary">Confirm your Passcode</h2>
        <p className="subtext">Confirm your 6 digit passcode</p>

        {renderInputs(confirmPasscode, confirmRefs, "confirm")}

        <button className="cta" onClick={handleSubmit}>
          Get Started
        </button>
      </div>
    </div>
  );
}
