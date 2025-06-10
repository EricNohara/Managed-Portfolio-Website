import styled from "styled-components";
import { useUserDataContext } from "../context/UserDataProvider";
import { IUserData } from "../interfaces/IUserData";
import formatPhoneNumber from "@/utils/FormatPhoneNumber";

const FooterText = styled.p`
  color: grey;
  font-style: italic;
  text-align: center;
  padding-bottom: 1rem;
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
