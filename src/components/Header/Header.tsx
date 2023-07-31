import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Link to={'/task1'}>Task 1</Link>
      <Link to={'/task2'}>Task 2</Link>
    </header>
  );
};
