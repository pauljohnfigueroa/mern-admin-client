import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined
} from '@mui/icons-material'

import FlexBetween from 'components/FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'
import profileImage from 'assets/paul.jpg'
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material'

function Navbar() {
  const dispatch = useDispatch()
  const theme = useTheme() // from <ThemeProvider>

  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left */}
        <FlexBetween>
          <IconButton onClick={() => console.log('open/close sidebar.')}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.5rem 1.5rem"
          >
            <InputBase placeholder="Find" />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
