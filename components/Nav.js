import Image from 'next/image';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.logo}>
        <Image src="/images/logo.jpg" alt="Revan" width={296} height={74}/>
      </div>
    </nav>
  );
};

export default Nav;