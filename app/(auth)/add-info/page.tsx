import AccountProfile from "@/components/forms/AccountProfile";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  return (
    <main className="mx-auto flex max-w-3xl flex-col  px-10 py-20 bg-purple-800 text-white">
      <div className="text-center  ">
        <Link href="/">
          <Image
            className="rounded-full ml-72 mb-10 "
            src="/assets/logo.jpg"
            alt="لوگو وب سایت"
            width={60}
            height={50}
          />
        </Link>
        <h1 className="head-text">اضافه کردن اطلاعات</h1>
        <p className="mt-3 text-base-regular">
          !برای استفاده از این برنامه، اطلاعات حساب خود را کامل کنید{" "}
        </p>
      </div>

      <section className="mt-9 p-10 bg-purple-500">
        
      </section>
    </main>
  );
};
export default page;
