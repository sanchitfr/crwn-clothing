import styled, { css } from 'styled-components';

const buttonStyles = css`
    color: white;
    background-color: black;
    border: none;

    &:hover{
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`

const setCustomButtonStyles = props => {
    if(props.isGoogleSignIn){
        return GoogleSignInStyles;
    }

    return props.inverted ? InvertedStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    outline: none;
    cursor: pointer;
    ${setCustomButtonStyles}
`

const GoogleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover{
     background-color: #357ae8;
     border:none;
    }
`

const InvertedStyles = css`
    background-color: white;
    color: black;
    border: 1px solid bla   ck;

    &:hover{
     background-color: black;
     color: white;
     border: none;
    }
`

