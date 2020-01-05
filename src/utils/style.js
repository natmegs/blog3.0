import styled from "@emotion/styled";

export const Container = styled("div")`
  width: 100%;
  padding: 10px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    margin: 0 10px;
  }

  @media (max-width: 800px) { 
    flex-direction: column;
  }
`;

export const ContentContainer = styled("div")`
  padding: 10px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

export const ImageContainer = styled("div")`
  width: 100%;
  max-width: 400px;
  img {
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 800px) { 
    height: 400px;
    overflow: hidden;
  }
`;

export const designTokens = {
  colours: {
    accent: "#FF34B3"
  },
  text: {
    size: {
      small: "12px",
      standard: "14px",
      medium: "18px",
      large: "24px",
      xlarge: "30px"
    }
  }
};



export const Header = styled("div")`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

export const HeaderLink = styled("div")`
  margin-left: 24px;
  font-size: ${designTokens.text.size.medium};

  a {
    color: black;
    text-decoration: none;
    border-bottom: 3px solid ${designTokens.colours.accent};
  }

  a:visited {
    color: black;
  }

  a:hover, a:active {
    color: ${designTokens.colours.accent};
  }
`;
