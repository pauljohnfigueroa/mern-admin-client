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

const navItems = [
  {
    text: 'Dashboard',
    icon: <HomeOutlined />
  },
  {
    text: 'Client',
    icon: null
  },
  {
    text: 'Products',
    icon: <ShoppingCartOutlined />
  },
  {
    text: 'Customers',
    icon: <Groups2Outlined />
  },
  {
    text: 'Transactions',
    icon: <ReceiptLongOutlined />
  },
  {
    text: 'Geography',
    icon: <PublicOutlined />
  },
  {
    text: 'Sales',
    icon: null
  },
  {
    text: 'Overview',
    icon: <PointOfSaleOutlined />
  },
  {
    text: 'Daily',
    icon: <TodayOutlined />
  },
  {
    text: 'Monthly',
    icon: <CalendarMonthOutlined />
  },
  {
    text: 'Breakdown',
    icon: <PieChartOutlined />
  },
  {
    text: 'Management',
    icon: null
  },
  {
    text: 'Admin',
    icon: <AdminPanelSettingsOutlined />
  },
  {
    text: 'Performance',
    icon: <TrendingUpOutlined />
  }
]
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
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: '2.25rem 0 1rem 3rem' }}>
                      {text}
                    </Typography>
                  )
                }
                const lcText = text.toLowerCase()

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`)
                        setActivePath(lcText)
                      }}
                      // change backgroundColor when selected
                      sx={{
                        backgroundColor:
                          activePath === lcText ? theme.palette.secondary[300] : 'transparent',
                        color:
                          activePath === lcText
                            ? theme.palette.primary[200]
                            : theme.palette.secondary[200]
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: '2rem',
                          color:
                            activePath === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200]
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text}>
                        {activePath === lcText && <ChevronRightOutlined sx={{ ml: 'auto' }} />}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  )
}

export default Sidebar
