"use client";
import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "اسم  شما حداق باید دارای 3 کارکتر باشد" })
    .max(15, { message: "اسم  شما حداکثر باید دارای 15 کارکتر باشد" }),
  username: z
    .string()
    .min(3, { message: "اسم حساب شما حداق باید دارای 3 کارکتر باشد" })
    .max(15, { message: "اسم حساب شما حداکثر باید دارای 15 کارکتر باشد" }),
  bio: z
    .string()
    .min(3, { message: "بایو شما باید حداقل 3 کارکتر باشد" })
    .max(15, { message: "بایو شما باید حداکثر 800 کارکتر باشد" }),
});
