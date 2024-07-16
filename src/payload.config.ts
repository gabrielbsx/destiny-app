import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import { viteBundler } from '@payloadcms/bundler-vite'

import Users from './collections/Users'
import GameAccounts from './collections/GameAccounts'

export default buildConfig({
  localization: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
  },
  admin: {
    user: Users.slug,
    bundler: viteBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, GameAccounts],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
