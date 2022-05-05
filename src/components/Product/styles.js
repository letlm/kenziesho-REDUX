import styled from "styled-components";

export const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  height: 310px;
  border: 1px solid var(--vanillaTwo);
  overflow: hidden;

  :hover {
    box-shadow: 10px 10px 69px -2px rgba(186, 143, 78, 0.8);
  }

  span {
    text-align: center;
    font-size: 15px;
  }

  .price {
    font-size: 15px;
    font-weight: bold;
  }

  .img-container {
    width: 180px;
    height: 180px;
    overflow: hidden;
  }
  .img-container img {
    width: 100%;
    height: 100%;
    -webkit-transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
  }

  .img-container:hover img {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  div {
    width: 180px;
  }
  button {
    width: 180px;
    height: 25px;
    background-color: var(--caramelloTwo);
    border: none;
    color: var(--vanilla);
    z-index: 1;
    overflow: hidden;
    position: relative;
  }

  button:hover {
    background-color: var(--caramello);
    color: var(--black);
    border: 1px solid var(--black);
  }

  button:after {
    content: "";
    background: var(--white);
    position: absolute;
    z-index: -1;
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
    transition: all 0.5s;
  }

  button:hover:after {
    transform: skewX(-45deg) scale(1, 1);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
`;
