# elastic-react-router-hooks

This repository is an example how to use [react-router](https://github.com/ReactTraining/react-router) in [@elastic-eui](https://github.com/elastic/eui/).

## Background

Currently, @elastic/eui has a great example about how to integrate its ecosystem to react-router. However, I feel the approach of using global router and having some functions to set up is not straightforward, especially with the existence of React Hooks. I have used some of the Hooks exposed from react-router's Context and it feels really good.

## How to Use

Set up a SINGLE file named, say, `EuiCustomLink.tsx` (or, if you are using plain Javascript, you can delete the TypeScript annotations). Then, you can just import this file and use them anywhere you want!

```ts
// EuiCustomLink.tsx.
import React from 'react';
import { EuiLink, EuiLinkButtonProps } from '@elastic/eui';
import { useHistory } from 'react-router';

interface EuiCustomLinkProps extends EuiLinkButtonProps {
  to: string;
}

const isModifiedEvent = (event: any) =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const isLeftClickEvent = (event: any) => event.button === 0;

export default function EuiCustomLink({ to, ...props }: EuiCustomLinkProps) {
  // This is the key!
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

    // Push the route to the history.
    history.push(to);
  }

  return <EuiLink {...props} href={to} onClick={onClick} />;
}
```

## Contributing

Feel free to submit a pull request if you feel like to add improvements to this sample repository.

## License

MIT
