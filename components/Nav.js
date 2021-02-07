import Link from 'next/link';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.logo}>
        <Link href="/">
          <Image src="/images/logo.jpg" alt="Revan" width={296} height={74}/>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;