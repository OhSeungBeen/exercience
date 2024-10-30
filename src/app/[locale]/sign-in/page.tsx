import { useTranslations } from 'next-intl';
import { FcGoogle } from 'react-icons/fc';

import { signIn } from '@/server/auth';

export default function SignIn() {
  const t = useTranslations('signIn');
  return (
    <div className="flex h-screen items-center justify-center">
      <form
        action={async () => {
          'use server';
          await signIn('google');
        }}
      >
        <button
          type="submit"
          className="flex h-10 items-center gap-2 rounded-md border border-gray-300 px-4 shadow-sm hover:bg-gray-50"
        >
          <FcGoogle className="h-[18px] w-[18px]" />
          <div className="text-sm font-medium text-gray-700">
            {t.raw('google')}
          </div>
        </button>
      </form>
    </div>
  );
}
