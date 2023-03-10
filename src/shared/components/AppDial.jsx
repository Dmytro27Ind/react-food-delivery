import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function AppDial() {
  return (
    <SpeedDial
        ariaLabel="SpeedDial basic"
        sx={{ position: 'fixed', bottom: {xs: 64, md: 16}, right: 16 }}
        icon={<SpeedDialIcon />}
    >
    {actions.map((action) => (
        <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        />
    ))}
    </SpeedDial>
  );
}