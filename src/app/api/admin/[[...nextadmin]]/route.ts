import schema from 'prisma/json-schema/json-schema.json';
import { createHandler } from '@premieroctet/next-admin/appHandler';

import { db } from '@/server/db';

const { run } = createHandler({
  apiBasePath: '/api/admin',
  prisma: db,
  schema,
});

export { run as DELETE, run as GET, run as POST };
