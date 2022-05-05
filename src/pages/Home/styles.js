import styled from "styled-components";

export const Container = styled.div`
  margin-top: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 600px;
  background-image: url("https://images.pexels.com/photos/7670759/pexels-photo-7670759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: contain;
  border-radius: 16px;

  h2 {
    width: 400px;
    text-align: center;
    color: var(--white);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  background-color: var(--caramello);
  border-radius: 1px;
  color: var(--black);
  width: 100px;
  height: 35px;
  border: none;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.47);

  :hover {
    background-color: var(--caramelloTwo);
  }
`;
