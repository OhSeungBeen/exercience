import { getMessages } from 'next-intl/server';
import schema from 'prisma/json-schema/json-schema.json';
import { NextAdmin, type PageProps } from '@premieroctet/next-admin';
import { getNextAdminProps } from '@premieroctet/next-admin/appRouter';

import { getSession, signOut } from '@/server/auth';
import { db } from '@/server/db';

export default async function AdminPage({ params, searchParams }: PageProps) {
  const session = await getSession();

  const props = await getNextAdminProps({
    params: params.nextadmin,
    searchParams,
    basePath: '/admin',
    apiBasePath: '/api/admin',
    prisma: db,
    schema,
    locale: params.locale as string,
    getMessages: (locale) =>
      getMessages({ locale }).then(
        (messages) => messages.admin as Record<string, string>,
      ),
    options: {
      title: '⚡️ Exercience Admin',
      pages: {},
      model: {
        User: {},
        Review: {
          edit: {
            fields: {
              content: {
                format: 'richtext-html',
              },
            },
          },
        },
      },
      defaultColorScheme: 'light',
    },
  });

  return (
    <NextAdmin
      {...props}
      user={{
        data: {
          name: session?.user.name ?? '',
          picture: session?.user.image ?? '',
        },
        logout: async () => {
          'use server';
          await signOut();
        },
      }}
    />
  );
}
