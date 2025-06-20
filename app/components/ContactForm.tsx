import styled from "styled-components";
import React, { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dblue2);
  border-radius: 10px;
  width: 80%;
  height: 500px;
  margin-bottom: 60px;
  padding: 10%;
  gap: 2rem;
`;

const ContactTextInput = styled.input`
  padding: 1rem;
  font-size: 1.1rem;
  background-color: var(--dblue);
  color: var(--txtgrey); // Use 'color' instead of 'text-color'
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--lblue);
  outline: none;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid var(--secondary);
  }
`;

const ContactTextArea = styled.textarea`
  padding: 1rem;
  font-size: 1.1rem;
  background-color: var(--dblue);
  color: var(--txtgrey); // Use 'color' instead of 'text-color'
  width: 100%;
  min-height: 200px;
  border-radius: 5px;
  border: 1px solid var(--lblue);
  resize: none; // Prevents resizing
  outline: none;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid var(--secondary);
  }
`;

const ContactButton = styled.button`
  font-size: 1.1rem;
  padding: 1rem;
  border: 2px solid var(--secondary);
  color: var(--secondary);
  border-radius: 5px;
  width: 100%;
  text-transform: uppercase;
  transition: 0.2s ease;

  &:hover {
    background-color: var(--secondary);
    color: white;
    transition: 0.2s ease;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setOpen(true);
      } else {
        setStatus("error");
        setOpen(true);
      }
    } catch {
      setStatus("error");
      setOpen(true);
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setStatus("idle");
  };

  return (
    <>
      <ContactFormContainer onSubmit={handleSubmit}>
        <ContactTextInput
          type="text"
          placeholder="Your Name Here"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <ContactTextInput
          type="text"
          placeholder="Your Email Here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <ContactTextArea
          placeholder="Your Message Here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <ContactButton type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Email"}
        </ContactButton>
      </ContactFormContainer>
      <Snackbar
        open={open && status === "success"}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Message sent!
        </Alert>
      </Snackbar>
      <Snackbar
        open={open && status === "error"}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Failed to send. Please try again.
        </Alert>
      </Snackbar>
    </>
  );
}
