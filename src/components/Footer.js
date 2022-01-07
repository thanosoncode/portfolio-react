import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 50px 0;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy;&nbsp; 2021 &nbsp; Thanos Chrysanthopoulos</p>
    </StyledFooter>
  );
};

export default Footer;
