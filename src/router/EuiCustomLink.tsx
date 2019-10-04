import React from 'react';
import { EuiLink, EuiLinkButtonProps } from '@elastic/eui';
import { useHistory } from 'react-router';

interface EuiCustomLinkProps extends EuiLinkButtonProps {
  to: string;
}

// Most of the content of this files are from https://github.com/elastic/eui/pull/1976.
const isModifiedEvent = (event: any) =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const isLeftClickEvent = (event: any) => event.button === 0;

export default function EuiCustomLink({ to, ...props }: EuiCustomLinkProps) {
  const history = useHistory();

  function onClick(event: any) {
    if (event.defaultPrevented) {
      return;
    }

    // If target prop is set (e.g. to "_blank"), let browser handle link.
    if (event.target.getAttribute('target')) {
      return;
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    // Prevent regular link behavior, which causes a browser refresh.
    event.preventDefault();
    history.push(to);
  }

  return <EuiLink {...props} href={to} onClick={onClick} />;
}
