import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  defaultLocale: "en",
  locales: ["en", "ko"],
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
