import * as React from 'react';
import styles from './Button.module.scss';

export class Button extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <span>Button</span>
      </div>
    );
  }
}

export default Button;
