import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 70rem;
      @media (max-width: 768px) {
        width: 55rem;
      }
      @media (max-width: 600px) {
        width: 35rem;
      }
      @media (max-width: 480px) {
        width: 20rem;
      }
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
  @media (max-width: 680px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
