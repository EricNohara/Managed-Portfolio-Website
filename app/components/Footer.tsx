import styled from "styled-components";
import { useUserDataContext } from "../context/UserDataProvider";
import { IUserData } from "../interfaces/IUserData";
import formatPhoneNumber from "@/utils/FormatPhoneNumber";

const FooterText = styled.p`
  color: var(--txtdarkgrey);
  font-style: italic;
  text-align: center;
  padding: 1rem;
  background: radial-gradient(circle at center, var(--dblue2), var(--black));
  border-top: 2px solid var(--lblue);
`;

export default function Footer() {
  const userData: IUserData | null = useUserDataContext();

  return (
    <footer>
      <FooterText>
        &copy; {new Date().getFullYear()} {userData && userData.name}{" "}
        &nbsp;|&nbsp;{" "}
        {userData && (
          <a
            href={`mailto:${userData.email}`}
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            Contact:
          </a>
        )}{" "}
        {userData &&
          userData.phone_number &&
          formatPhoneNumber(userData.phone_number)}
      </FooterText>
    </footer>
  );
}
