import React from "react";
import styled from "styled-components";
import { Alert } from "grindery-ui";

const Wrapper = styled.div`
  margin: 20px 0 0;

  & .MuiAlert-root {
    padding: 20px;
    border-radius: 5px;
  }

  & .MuiAlert-message {
    padding: 0;
  }

  & .MuiAlert-icon {
    padding: 0;

    & svg {
      margin-top: 2px;
    }
  }

  & .MuiAlert-message p {
    text-align: left;
    padding: 0;
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #6d6f78;

    & a {
      color: #170b10;
      text-decoration: underline;

      &:hover {
        color: #170b10;
        text-decoration: none;
      }
    }
  }
`;

type Props = {
  children: React.ReactNode;
  color?: string;
  icon?: React.ReactNode;
};

const AlertBox = (props: Props) => {
  const { children, color, icon } = props;
  return (
    <Wrapper>
      <Alert color={color} icon={icon} elevation={0}>
        {children}
      </Alert>
    </Wrapper>
  );
};

export default AlertBox;
