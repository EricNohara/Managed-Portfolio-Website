import { SectionContainer } from "../components/Containers";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";

export default function ContactSection() {
  return (
    <SectionContainer
      id="contact"
      style={{
        paddingTop: "60px",
        background: "linear-gradient(to top, var(--mblue), var(--black))",
      }}
    >
      <SectionTitle subtitle="send me a message and i'll get back to you as soon as possible">
        Contact Me
      </SectionTitle>
      <ContactForm />
    </SectionContainer>
  );
}
