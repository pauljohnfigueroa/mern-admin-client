import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from '@mui/material'

import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined
} from '@mui/icons-material'

import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import FlexBetween from 'components/FlexBetween'
import profileImage from 'assets/paul.jpg'

const Sidebar = ({ isNonMobile, drawerWidth, isSidebarOpen, setIsSidebarOpen }) => {
  const { pathname } = useLocation() // the current path
  const [activePath, setActivePath] = useState('')
  const navigate = useNavigate()
  const theme = useTheme() // from the ThemeProvider

  useEffect(() => {
    setActivePath(pathname.substring(1))
  }, [pathname])

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: 'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              width: drawerWidth
            }
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    Simplify
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton
                    onClick={() => {
                      setIsSidebarOpen(!isSidebarOpen)
                    }}
                  >
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  )
}

export default Sidebar
