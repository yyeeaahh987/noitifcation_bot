import React from "react";
import styled from "styled-components";
import { ICONS } from "../../constants";
import Button from "./Button";
// import { useGrinderyNexus } from "use-grindery-nexus";
import { useGrinderyNexus } from "../../use-grindery-nexus/index";
import AlertBox from "./AlertBox";

declare global {
  interface Window {
    ethereum: any;
  }
}

const FlowConnectButtonWrapper = styled.div`
  .MuiButton-root {
    margin-top: 0 !important;
  }
`;

type Props = {};

const ConnectButton = (props: Props) => {
  const { connect, user, connectFlow } = useGrinderyNexus();

  return user ? null : (
    <>
      {"ethereum" in window ? (
        <Button
          onClick={() => {
            connect();
          }}
          icon={ICONS.METAMASK_LOGO}
          value="Connect MetaMask"
          hideIconBorder
        />
      ) : (
        <div style={{ maxWidth: "450px", margin: "0 auto 20px" }}>
          <AlertBox
            color="error"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2152_696)">
                  <path
                    d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433286 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34872 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0V0ZM10 18.3333C8.35183 18.3333 6.74066 17.8446 5.37025 16.9289C3.99984 16.0132 2.93174 14.7117 2.30101 13.189C1.67028 11.6663 1.50525 9.99076 1.82679 8.37425C2.14834 6.75774 2.94201 5.27288 4.10745 4.10744C5.27289 2.94201 6.75774 2.14833 8.37425 1.82679C9.99076 1.50525 11.6663 1.67027 13.189 2.301C14.7118 2.93173 16.0132 3.99984 16.9289 5.37025C17.8446 6.74066 18.3333 8.35182 18.3333 10C18.3309 12.2094 17.4522 14.3276 15.8899 15.8899C14.3276 17.4522 12.2094 18.3309 10 18.3333Z"
                    fill="#FF5858"
                  />
                  <path
                    d="M10 4.16667C9.77899 4.16667 9.56703 4.25447 9.41075 4.41075C9.25447 4.56703 9.16667 4.77899 9.16667 5.00001V11.6667C9.16667 11.8877 9.25447 12.0996 9.41075 12.2559C9.56703 12.4122 9.77899 12.5 10 12.5C10.221 12.5 10.433 12.4122 10.5893 12.2559C10.7455 12.0996 10.8333 11.8877 10.8333 11.6667V5.00001C10.8333 4.77899 10.7455 4.56703 10.5893 4.41075C10.433 4.25447 10.221 4.16667 10 4.16667Z"
                    fill="#FF5858"
                  />
                  <path
                    d="M10.8333 15C10.8333 14.5398 10.4602 14.1667 10 14.1667C9.53977 14.1667 9.16667 14.5398 9.16667 15C9.16667 15.4602 9.53977 15.8333 10 15.8333C10.4602 15.8333 10.8333 15.4602 10.8333 15Z"
                    fill="#FF5858"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2152_696">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          >
            <p>
              The app is unable to detect{" "}
              <a href="https://metamask.io/" target="_blank" rel="noreferrer">
                MetaMask
              </a>{" "}
              extension. Make sure you have it installed in this browser.
            </p>
          </AlertBox>
        </div>
      )}
      {/*<FlowConnectButtonWrapper>
        <Button
          onClick={() => {
            connectFlow();
          }}
          icon={ICONS.FLOW_LOGO}
          value="Connect Flow Wallet"
          hideIconBorder
        />
        </FlowConnectButtonWrapper>*/}
    </>
  );
};

export default ConnectButton;
