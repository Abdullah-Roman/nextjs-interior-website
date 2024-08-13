import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div>
          <Image src={logo} width={160} height={55} alt="pic" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
