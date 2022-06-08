import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ConnectWallet from './ConnectWallet';
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)`
  background-color: #12344c;
  box-shadow: none;
`;

const ResponsiveAppBar = () => {

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 5,
              display: { xs: 'flex', md: 'flex' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'text.secondary',
              textDecoration: 'none',
            }}
          >
            NFTs
          </Typography>
          <Box sx={{ flexGrow: 0, py: 3 }}>
            <ConnectWallet />
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
export default ResponsiveAppBar;
