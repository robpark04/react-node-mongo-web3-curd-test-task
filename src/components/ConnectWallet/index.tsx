import { useState, useEffect } from 'react'

import { Box, Modal, Typography } from '@mui/material';
import { useWeb3React } from '@web3-react/core'
import {
  connectorsByName,
} from 'utils/connectors'
import useAuth from 'hooks/useAuth'
import MetamaskIcon from '../Icons/MetaMaskIcon';
import { 
  StyledAccountWrapper, 
  StyledAccountContainer,
  StyledAccount,
  StyledAccountLogoWrapper,
  StyledJazzicon, 
  StyledConnectWalletButton
} from "styles/styleds"

const modalStyles = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(21, 43, 57)',
  border: '1px solid rgb(21, 43, 57)',
  borderRadius: 2,
  boxShadow: 24,
  px: 4,
  py: 3,  
  display: 'flex',
  flexDirection: 'column'
};

const ConnectWallet = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [settingOpen, setSettingOpen] = useState(false);
  const handleSettingOpen = () => setSettingOpen(true);
  const handleSettingClose = () => setSettingOpen(false);

  const {connector, account } = useWeb3React()
  const { login, logout, isAuth } = useAuth();
  const isAuthCheck = isAuth();
  console.log(isAuthCheck)
  console.log(account)
  const handleLogout = () => {
    logout();
    handleSettingClose();
  }

  useEffect(() => {
    if (account) {
      handleClose()
    }
    if (isAuthCheck) {
      login(isAuthCheck)
    }
  }, [account, isAuthCheck, connector])


  return (
    <Box sx={{ flexGrow: 0 }}>
      {!account &&
        <StyledConnectWalletButton variant="contained" onClick={handleOpen}>Connect Wallet</StyledConnectWalletButton>
      }
  
      {account &&
        <>
          <StyledAccountWrapper>
            <StyledAccountLogoWrapper>
                <StyledJazzicon address={account} />
            </StyledAccountLogoWrapper>
            <StyledAccountContainer>
              <StyledAccount
                onClick={handleSettingOpen}
              >
                  {account.charAt(0).toUpperCase() + account.slice(1, 4).concat('...') + account.slice(-4)}
              </StyledAccount>
            </StyledAccountContainer>
          </StyledAccountWrapper>

          <Modal
            open={settingOpen}
            onClose={handleSettingClose}
          >
            <Box sx={modalStyles}>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 700,
                  color: 'text.primary',
                  pb: 3,
                }}
              >
                Setting
              </Typography>
              
              <StyledConnectWalletButton
                onClick={handleLogout}
              > 
               Log Out
              </StyledConnectWalletButton>
            </Box>
          </Modal>
        </>
      }

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={modalStyles}>
          <Typography
            variant="h6"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 700,
              color: 'text.primary',
              pb: 3,
            }}
          >
            Connect Wallet
          </Typography>

          {Object.keys(connectorsByName).map(name => {

            return (
              <StyledConnectWalletButton key={name} variant="outlined" 
                onClick={() => {
                  login(name)
                }}
              >
                {name === "Metamask" &&
                  <MetamaskIcon />
                }
              </StyledConnectWalletButton>
            )
          })}
        </Box>
      </Modal>
    </Box>

  );
};
export default ConnectWallet;
