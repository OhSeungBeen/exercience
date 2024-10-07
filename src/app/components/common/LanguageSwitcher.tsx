import { Link, usePathname } from "@/i18n/routing";

export function LanguageSwitcher() {
  const pathName = usePathname();
  return (
    <div>
      <h1>{}</h1>
      <Link href={pathName} locale="ko">
        한국어
      </Link>
      <Link href={pathName} locale="en">
        English
      </Link>
    </div>
  );
}
