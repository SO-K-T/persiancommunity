import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";

const Navbar = () => {
  return (
    <nav className="navbar flex flex-row-reverse">
      <Link href="/" className="flex flex-row-reverse items-center gap-4">
        <Image
          className="rounded-full "
          src="/assets/logo.jpg"
          alt="لوگو وب سایت"
          width={48}
          height={48}
        />
        <div className="flex flex-col">
          <p className="text-heading3-bold text-light-1 max-sm:hidden">
            Persian Community
          </p>
          <p className="text-light-1 text-body-bold max-sm:hidden self-center">
            جامعه پارسی{" "}
          </p>
        </div>
      </Link>

      <div className="flex items-center gap-1 ">
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: { organizationSwitcherTrigger: "py-2 px-4" },
          }}
        />
      </div>
    </nav>
  );
};
export default Navbar;
