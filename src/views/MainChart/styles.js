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

  .controlUnit {
    margin-right: 15px;
    .ant-radio-button-wrapper {
      .anticon {
        vertical-align: 0;
        font-size: 18px;
        margin-right: 5px;
      }
    }
    .ui.button > .icon {
      color: #fff;
      font-size: 16px;
      margin-right: 4px;
    }
    .MuiRadio-root {
      padding: 4px;
    }
    .MuiFormControlLabel-root {
      margin-bottom: 0px;
    }
    > label {
      margin-bottom: 0px;
    }
    .ui.radio.checkbox {
      margin-top: 7px;
    }
    .ak-select,
    .ant-select,
    .ui.search.dropdown {
      width: 100px;
      min-width: 100px;
    }
    .MuiSelect-select {
      width: 70px;
    }
  }
`;

export { ControlPanelWrapper };
