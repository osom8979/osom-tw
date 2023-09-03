import {Component, ReactElement} from 'react';
import styles from './Header.module.scss';

export interface HeaderProps {
  caption?: string;
  icon?: ReactElement;
  left?: Array<ReactElement>;
  right?: Array<ReactElement>;
}

export class Header extends Component<HeaderProps> {
  static defaultProps = {
    caption: '',
  };

  render() {
    return (
      <header className={styles.root} data-testid="root">
        <div className="container flex justify-between mx-auto h-header">
          <div className="flex">
            {this.props.icon}
            <ul className="items-stretch hidden space-x-3 lg:flex">
              {this.props.left &&
                this.props.left.map(elem => {
                  return <li className="flex">{elem}</li>;
                })}
            </ul>
          </div>

          <ul className="items-center flex-shrink-0 hidden lg:flex">
            {this.props.right &&
              this.props.right.map(elem => {
                return <li className="flex">{elem}</li>;
              })}
          </ul>

          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
