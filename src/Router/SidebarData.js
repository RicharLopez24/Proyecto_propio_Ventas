import React from "react";
//import HomeIcon from "@mui/icons-material/Home";
//import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
//import TimelineIcon from '@mui/icons-material/Timeline';
//import CheckIcon from '@mui/icons-material/Check';GrConfigure

export const SidebarData = [

  {
    title: 'Ventas',
    icon: <AttachMoneyIcon />,
    link: '/ventas',
    cName: 'nav-text'
  },
  {
    title: 'registro productos',
    icon: <InventoryIcon />,
    link: '/stock',
    cName: 'nav-text'
  },

  {
    title: "Estadisticas",
    icon: <DataSaverOffIcon />,
    link: '/estadisticas',
    cName: 'nav-text'
  },
  {
    title: 'Configuración',
    icon: <SettingsIcon />,
    link: '/configuracion',
    cName: 'nav-text'
  },


];
