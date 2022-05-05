import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
`;

export const Context = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BagEmpty = styled.div`
  margin-top: 100px;
  width: 500px;
  height: 450px;
  border: 1px solid var(--caramelloTwo);
  box-shadow: 2px 2px 19px 2px rgba(186, 143, 78, 0.47);
  display: flex;
  align-items: center;
  justify-content: space-around;

  .bagEmpty {
    font-size: 25px;
    width: 450px;
    text-align: center;
  }

  .subTitle {
    font-size: 17px;
  }

  img {
    width: 300px;
  }
`;

export const Testando = styled.div`
  margin-top: 10px;
  width: 900px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .productsBag {
    width: 500px;
    height: 650px;
    display: flex;
    flex-direction: row !important;
    flex-wrap: wrap !important;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar-track {
      background-color: var(--vanilla);
    }

    ::-webkit-scrollbar {
      width: 1px;
      background: var(--caramelloTwo);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--caramelloTwo);
    }
  }

  .items {
    position: absolute;
    margin-top: 160px;
    right: 100px;
    width: 350px;
    display: flex;
    justify-content: space-around;
    border: 2px solid black;
    height: 300px;
    display: flex;
    align-items: center;
    border-radius: 1px;
    border: 1px solid var(--caramelloTwo);
    box-shadow: 2px 2px 19px 2px rgba(186, 143, 78, 0.47);

    span {
      font-size: 25px;
    }

    button {
      width: 200px;
      height: 40px;
      border: none;
      color: var(--white);
      font-size: 18px;
      background-color: var(--caramelloTwo);
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
      background: var(--vanilla);
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
  }
`;
