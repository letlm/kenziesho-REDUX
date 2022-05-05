import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h2 {
    height: 60px;
    display: flex;
    align-items: center;
    color: var(--caramelloTwo);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 50px;

  button {
    width: 900px;
    height: 50px;
    font-size: large;
    font-family: "Roboto Mono", monospace;
    text-transform: uppercase;
    background-color: var(--vanilla);
    color: var(--black);
    border: transparent;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;
    overflow: hidden;
    position: relative;
  }

  button:hover {
    background-color: var(--vanilla);
    opacity: 0.7;
    color: var(--white);
  }

  button:after {
    content: "";
    background: var(--caramelloTwo);
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
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
