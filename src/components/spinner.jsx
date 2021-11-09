import React from "react";
import styled, {keyframes} from "styled-components";

const rotation = keyframes`
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg)
    }
`;

const SpinnerContainer = styled.div`
    margin: 0;
    height: 4vw;
    width: 4vw;
    border: 0.2vw solid ${p => p.theme.spinnerColor};
    border-radius: 50%;
    border-top: none;
    border-right: none;
    margin: 16px auto;
    animation: ${rotation} 1s linear infinite;
`

const Spinner = () => (
        <SpinnerContainer />
)

export default Spinner;