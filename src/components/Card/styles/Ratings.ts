import styled from "styled-components";

const Ratings = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;

  > button {
    background-color: rgb(255 255 255 / 0.05);
    border: none;
    border-radius: 50%;
    color: rgb(255 255 255 / 0.5);
    display: flex;
    font-family: var(--font-main);
    font-size: var(--fz-md);
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin-bottom: 2rem;
    transition: var(--transition);

    &.active {
      background-color: rgb(255 255 255 / 0.5);
      color: var(--white);
    }

    &:hover {
      background-color: var(--primary);
      color: var(--white);
      cursor: pointer;
    }
  }
`;

export default Ratings;
