import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,

} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  TruckIcon
} from "@heroicons/react/24/solid";
 
const SideNavBar: React.FC = () => {
    return (
    
          <Card className="h-[calc(100vh-2rem)] w-full max-w-[30rem] p-4 shadow-xl shadow-blue-gray-900/5 mt-[1rem]">
            <div className="mb-2 p-4">
              <Typography variant="h5" color="blue-gray">
                Sidebar
              </Typography>
            </div>
            <List>
              <ListItem>
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Link to="/">
                Dashboard
                </Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <TruckIcon className="h-5 w-5" />
                </ListItemPrefix>
               <Link to="/addVehicle"> Add Another Car </Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Profile
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
              </ListItem>
            </List>
          </Card>
        );
      };
export default SideNavBar;
