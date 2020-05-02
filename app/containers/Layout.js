import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Logo from '../assets/images/logo.png';
import PermDataSetting from '@material-ui/icons/PermDataSetting'
import SettingsApplications from '@material-ui/icons/SettingsApplications'
import Dashboard from '@material-ui/icons/Dashboard'
import SettingsInputComponent from '@material-ui/icons/SettingsInputComponent'
import SystemUpdateAlt from '@material-ui/icons/SystemUpdateAlt'
import CardGiftcard from '@material-ui/icons/CardGiftcard'
import Whatshot from '@material-ui/icons/Whatshot'

export default (props) => {
  const links = [{
      title: 'Dashboard',
      icon: <Dashboard />,
      route: '/',
    }, {
      title: 'Products',
      icon: <SystemUpdateAlt />,
      route: '/products',
    }, {
      title: 'Packages',
      icon: <PermDataSetting />,
      route: '/packages',
    }, {
      title: 'Categories',
      icon: <Whatshot />,
      route: '/categories',
    }, {
      title: 'Brands',
      icon: <CardGiftcard />,
      route: '/brands',
    }, {
      title: 'Settings',
      fa: 'cog',
      icon: <SettingsApplications />,
      route: '/settings',
    }, {
      title: 'Settingsinput',
      fa: 'cog',
      icon: <SettingsInputComponent />,
      route: '/settingsinput',
    },
  ];

  return (
    <div className="wrapper d-flex align-items-stretch">
      <nav
        className="active py-2 sidebar shadow"
      >
        <h2>
          <img src={Logo} />
        </h2>
        <ul className="list-unstyled components mb-5 sidebar-list">
          {links.map((link, idx) => (
            <li className={`sidebar-list-item ${idx == 0 ? 'active' : ''}`}>
              <Link to={link.route}>
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div id="main-content">
        <div className="container-fluid">
          <NavBar />
          {props.children}
        </div>
      </div>
      <div className="right-aside">
        <div className="right-aside__container">
            <div className="right-aside__container-title">
              <h4 className="mb-0 pb-0">Hi Martin</h4>
              <p className="text-muted">AMCP CORP</p>
            </div>
        </div>  
        <div className="right-aside__bottom-content">
          <button className="btn btn-block btn-primary">
            Action button
            </button>
        </div>
      </div>
    </div>
  );
}
