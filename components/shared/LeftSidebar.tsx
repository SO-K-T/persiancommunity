"use client";
import { leftbarlinks } from "@/const/index";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-1 px-5 align-middle ">
        {leftbarlinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={18}
                height={20}
                
              />
              <p className="text-light-1 max-lg:hidden mt-1 text-small-regular  ">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="mt-9 px-8  ">
        <SignedIn>
          <SignOutButton>
            <div className="flex cursor-pointer justify-between max-lg:justify-center border-t-2 pt-3">
              <Image
                src="/assets/logout.svg"
                alt="خروج"
                width={20}
                height={20}
              />

              <p className="text-light-1 text-small-medium max-lg:hidden ">
                خروج
              </p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};
export default LeftSidebar;
