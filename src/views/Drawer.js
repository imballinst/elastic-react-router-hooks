// This file is not a .tsx because we don't have the definition for these components.
import React from 'react';
import {
  EuiNavDrawer,
  EuiNavDrawerGroup,
  EuiHorizontalRule
} from '@elastic/eui';
import { homePath, aboutPath } from '../links';
import { useHistory } from 'react-router';

export default function Drawer() {
  // An alternative way to navigate, with EuiNavDrawerGroup.
  // Because we don't have access to `history` outside of a React component, we need to define the links inside the component.
  const history = useHistory();

  function onHrefClick(e) {
    // Prevent reload navigation.
    e.preventDefault();

    let nextPathname;

    if (e.target.localName === 'span') {
      // Sometimes, it's a bit weird, we click on a `span` instead of the link.
      // As such, we need to get the parentNode (the `a` tag).
      nextPathname = e.target.parentNode.href;
    } else {
      // Else, the click is on the `a` tag and we can safely push.
      nextPathname = e.target.pathname;
    }

    history.push(nextPathname);
  }

  const topLinks = [
    {
      label: 'Recently viewed',
      iconType: 'clock',
      flyoutMenu: {
        title: 'Recent items',
        listItems: [
          // See https://github.com/elastic/eui/blob/master/src/components/list_group/list_group_item.tsx
          // to learn what props are available to be passed to the list group item.
          {
            label: 'Home',
            href: homePath,
            iconType: 'dashboardApp',
            onClick: onHrefClick
          },
          {
            label: 'About',
            href: aboutPath,
            iconType: 'canvasApp',
            onClick: onHrefClick
          }
        ]
      }
    }
  ];

  return (
    <EuiNavDrawer>
      <EuiNavDrawerGroup listItems={topLinks} />
      <EuiHorizontalRule margin="none" />
    </EuiNavDrawer>
  );
}
