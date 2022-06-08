import style from 'styled-components'
import { styled } from "@mui/material/styles";
import { TextField, Button } from '@mui/material';
import { Jazzicon } from '@ukstv/jazzicon-react';
import { Link } from 'react-router-dom'

export const StyledTextField = styled(TextField)(
  {
    '& label.Mui-focused': {
      color: '#4afefd',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#4afefd',
    },
    '& .MuiOutlinedInput-root': {
      '& input': {
        color: '#f9fafb',
      },
      '& textarea': {
        color: '#f9fafb',
      },
      '& fieldset': {
        borderColor: '#4afefd',
      },
      '&:hover fieldset': {
        borderColor: '#4afefd',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4afefd',
      },
    },
  }
)

export const Input = styled('input')({
  display: 'none',
});

export const StyledButton = styled(Button)`
    position: relative;
    background: #1B435F;
    border: 1px solid #1B435F;
    box-shadow: none;
    border-radius: 10px;
    text-align: center;
    outline: none;
    justify-content: center;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    align-items: center;
    padding: 0.594rem;
    color: #4afefd;
    font-weight: 700;
  
    :hover {
      background: #27618b;
      box-shadow: none;
      border: 1px solid #27618b
    }
`

export const StyledAccountWrapper = style.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  border: none;
  color: #4afefd;
  align-items: center;
  font-weight: 600;
  position: relative;
`
export const StyledAccountContainer = style.div`
  padding:0;
  list-style: none;
  position: relative;
`
export const StyledAccount = styled(Button)`
  display: flex;
  flex-direction: row;
  height: 40px;
  border: none;
  background-color: #1B435F;
  padding: 0.15rem 1rem;
  border-radius: 0.5rem;
  color: #4afefd;
  align-items: center;
  font-weight: 600;
  position: relative;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    opacity: 1 !important;
    background-color: #27618b !important;
  }
`

export const StyledAccountLogoWrapper = style.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  border: none;
  background-color: rgb(27 67 95 / 50%);
  padding: 0.15rem 1.2rem 0.15rem 0.6rem;
  border-radius: 0.5rem;
  color: #4afefd;
  align-items: center;
  font-weight: 600;
  margin-right: -10px
`

export const StyledJazzicon = style(Jazzicon)`
  width: 20px;
  height: 20px;
`
export const StyledConnectWalletButton = styled(Button)`
  position: relative;
  background: #1B435F;
  border: 1px solid #1B435F;
  box-shadow: none;
  border-radius: 10px;
  text-align: center;
  outline: none;
  justify-content: center;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  align-items: center;
  padding: 0.594rem;
  color: #4afefd;
  font-weight: 700;

  :hover {
    background: #27618b;
    box-shadow: none;
    border: 1px solid #27618b;
  }
`

export const IconContainer = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const IconWrapper = style.div`
    width: 100%; 
`
export const IconName = style.span`
    color: '#1FC7D4';
    font-weight: 600;
`

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  color: #4afefd;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  border-radius: 10px;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;

  :hover {
    text-decoration: none;
    background-color: rgba(249, 250, 251, 0.04);
  }
`

export const StyledRemoveButton = styled(Button)`
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  color: #4afefd;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  border-radius: 10px;
`

export const StyledPrimaryButton = styled(Button)`
  position: relative;
  background: #1B435F;
  border: 1px solid #1B435F;
  box-shadow: none;
  border-radius: 10px;
  text-align: center;
  outline: none;
  justify-content: center;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  align-items: center;
  padding: 0.594rem;
  color: #4afefd;
  font-weight: 700;

  :hover {
    background: #27618b;
    box-shadow: none;
    border: 1px solid #27618b;
  }
`
export const StyledSecontaryButton = styled(Button)`
  position: relative;
  background: #1B435F;
  border: 1px solid #1B435F;
  box-shadow: none;
  border-radius: 10px;
  text-align: center;
  outline: none;
  justify-content: center;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  align-items: center;
  padding: 0.594rem;
  color: #4afefd;
  font-weight: 700;

  :hover {
    background: #27618b;
    box-shadow: none;
    border: 1px solid #27618b;
  }
`

