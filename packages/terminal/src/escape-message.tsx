import React from 'react';
import { ReactWidget } from '@jupyterlab/ui-components';

const TERMINAL_ESCAPE_MESSAGE_CLASS = 'jp-Terminal-escapeMessage';

/**
 * A help message to display in the MainAreaWidget toolbar area above the
 * Terminal widget, which is placed below in the content area.
 */
export class EscapeMessage extends ReactWidget {
  render() {
    return (
      <span className={TERMINAL_ESCAPE_MESSAGE_CLASS}>
        To close the terminal, type <code>exit</code>, then press{' '}
        <kbd>enter</kbd>, or press <kbd>Control + D</kbd>.
      </span>
    );
  }
}
