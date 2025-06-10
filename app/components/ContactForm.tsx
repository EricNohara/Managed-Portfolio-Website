import styled from "styled-components";

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
  return (
    <ContactFormContainer>
      <ContactTextInput
        type="text"
        placeholder="Your Name Here"
      ></ContactTextInput>
      <ContactTextInput
        type="text"
        placeholder="Your Email Here"
      ></ContactTextInput>
      <ContactTextArea placeholder="Your Message Here"></ContactTextArea>
      <ContactButton>Send Email</ContactButton>
    </ContactFormContainer>
  );
}
