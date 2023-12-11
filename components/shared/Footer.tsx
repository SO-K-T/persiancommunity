"use client";
import { leftbarlinks } from "@/const";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="footer flex justify-between md:hidden">
      <div className="footer_container ">
        <SignedIn>
          <SignOutButton>
            <div className=" ">
              <Image
                src="/assets/logout.svg"
                alt="خروج"
                width={20}
                height={20}
              />

              <p className="text-light-1 text-subtle-medium max-sm:hidden  ">
                خروج
              </p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
      <div className="bottombar_container flex justify-center gap-4 ml-20">
        {leftbarlinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`footer_link  ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
              />
              <p className="text-light-1 max-sm:hidden text-small-regular   ">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Footer;
