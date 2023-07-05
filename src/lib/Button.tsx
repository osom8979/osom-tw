import * as React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  caption?: string;
}

export class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    caption: '',
  };

  render() {
    return (
      <div className={styles.root} data-testid="root">
        <span data-testid="caption">{this.props.caption}</span>
      </div>
    );
  }
}

export default Button;
