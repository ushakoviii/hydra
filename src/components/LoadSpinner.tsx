import { styled } from "styled-components";
import { Theme } from "./Theme";
import { Logo } from "./Logo";

export function LoadSpinner() {
  return (
    <LoaderWrapper>
      <Logo id="logo" width="18" height="18" fill={Theme.colors.accentColor}/>
      <Spinner />
    </LoaderWrapper>
  );
}
const LoaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid ${Theme.colors.accentColor};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;





