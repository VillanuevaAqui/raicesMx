import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Person2Icon from '@mui/icons-material/Person2';
import { Link } from 'react-router-dom';

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Mi cuenta">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 3.7 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <AccountCircleIcon style={{ color: "var(--secondary)", fontSize: "35" }} />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            bgcolor: 'var(--tertiary)',
                            outline: '2px solid var(--secondary)',
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'var(--secondary)',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Link className="nav-account-item" to="/userpage">
                        <ListItemIcon>
                            <Person2Icon fontSize="large" style={{ color: "var(--secondary)"}} />
                        </ListItemIcon>
                        Mi cuenta
                    </Link>
                </MenuItem>
                <hr className="nav-profile-dropdown-divider"/>
                <MenuItem onClick={handleClose}>
                    <Link className="nav-account-item" to="/PanelAdministracion">
                        <ListItemIcon>
                            <AdminPanelSettingsIcon fontSize="large" style={{ color: "var(--secondary)"}} />
                        </ListItemIcon>
                        Administrador
                    </Link>
                </MenuItem>
                <hr className="nav-profile-dropdown-divider"/>
                <MenuItem onClick={handleClose}>
                    <div className='nav-account-item'>
                        <ListItemIcon>
                            <Logout fontSize="large" style={{ color: "var(--secondary)"}} />
                        </ListItemIcon>
                        Logout
                    </div>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
