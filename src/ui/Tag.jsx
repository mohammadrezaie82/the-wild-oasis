import styled from "styled-components";

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);

  @media (max-width: 850px) {
    width: 10rem;
  }
  @media (max-width: 850px) {
    font-size: 0.9rem;
    width: 8rem;
    padding: 0.4rem 0.5rem;
  }
`;

export default Tag;
