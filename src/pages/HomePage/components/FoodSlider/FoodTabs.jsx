import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import allActions from "./store/actions"
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';


const StyledTab = styled(Tab)(({ theme }) => ({
  '&.Mui-selected': {
    color: theme.palette.activeTab,
  },
}))

export default function FoodTabs() {
  const value = useSelector(state => state.tabs.value)
  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    dispatch(allActions.changeTabsValue(newValue));
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ mb: 1, maxWidth: {xs: '90%', sm: 600} }}>
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
        >
            <StyledTab label="Burgers" />
            <StyledTab label="Chicken" />
            <StyledTab label="French Potato" />
            <StyledTab label="Drinks" />
        </Tabs>
      </Box>
    </Box>
  );
}
