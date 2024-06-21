import Dashboard from './../pages/admin/Dashboard';
import SettingIndex from './../pages/admin/settings/SettingIndex';
import SettingGeneral from './../pages/admin/settings/SettingGeneral';
import SettingSite from './../pages/admin/settings/SettingSite';
import SettingTheme from './../pages/admin/settings/SettingTheme';
import UserDetails from './../pages/admin/UserDetails';
import React from 'react';

export const adminRoutes = [
  {
    path: '/admin',
    children: [
      { path: 'dashboard', element: React.createElement(Dashboard) },
      { path: 'manage', element: React.createElement(Dashboard) },
      {
        path: 'manage/user/:userId',
        element: React.createElement(UserDetails),
        loader({ params, request }) {
          // console.log({params})
          // console.log({request})
          console.log('abc');

          // fetch user
          // return result
          // return fetch('/api/users/' + params.userId);
          // return {
          //   hey: 'abc',
          // }
          // return new Response(JSON.stringify({
          //   hey: 'abc'
          // }));
          return json({
            hey: 'abc',
          })
        },
        async action({ params, request }) {
          console.log('actionnn');
          const formData = await request.formData();
          console.log('formdata is ', Object.fromEntries(formData));

          return {
            errors: "The email is wronggg!"
          }
        }
      },
      {
        path: 'settings',
        element: React.createElement(SettingIndex),
        children: [
          { path: 'general', element: React.createElement(SettingGeneral) },
          { path: 'site', element: React.createElement(SettingSite) },
          { path: 'theme', element: React.createElement(SettingTheme) },
        ]
      },
    ]
  }

]