import styled from "styled-components";

export const Wrapper = styled.div`
  .items {
    color: #3d3d3d;
    display: flex;
    width: 98%;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 15px;
    justify-content: space-between;
    line-height: 0.2;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .imgDiv {
    width: 30%;
    padding: 15px 5px 10px 15px;
  }
  .items p {
    color: #8f8f8f;
  }
  .priceDiv {
    padding-top: 15px;
  }
  .priceDiv > span {
    padding-left: 15px;
    color: #8587c0;
  }
  .detailsDiv {
    padding-left: 10px;
  }
  .header {
    padding-left: 10px;
  }
  .header > p {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }
  .header span {
    color: #c8464d;
    padding-right: 15px;
  }
  .header > button {
    background-color: #8587c0;
    height: 40px;
    color: #ffffff;
    text-align: center;
    width: 98%;
    margin: auto;
    border: none;
    font-weight: bold;
  }
`;
