import styled from "styled-components";

const ControlPanelWrapper = styled.div`
  height: 60px;
  width: 100%;
  margin: 20px 0;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  border: 1px solid silver;
  > div {
    margin-right: 15px;
  }

  .ant-radio-wrapper {
    display: block;
  }

  .antd-grid-container {
    overflow: auto;
  }
`;

export { ControlPanelWrapper };
