import styled from "styled-components";
import { Button as ImpButton } from "@navbar/shared-components";

const NavButton = styled.button`
  cursor: pointer;
  background: blue;
  outline: none;
  border: none;
  color: #fff;
  padding: 10px 50px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const NavBar = styled.section`
  height: 60px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

const Root = (props) => {
  return (
    <>
      <NavBar>
        <span>{props.name} Vorseek app &#169;</span>
        <NavButton
          type="button"
          onClick={() => {
            props.singleSpa.navigateToUrl("/app");
          }}
        >
          Go to URL 'APP'
        </NavButton>
        <ImpButton>Кнопка из другого приложения</ImpButton>
      </NavBar>
    </>
  );
};

export default Root;
