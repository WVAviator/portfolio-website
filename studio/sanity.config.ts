import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { codeInput } from "@sanity/code-input";
import {schemaTypes} from './schemas'


export default defineConfig({
  name: 'default',
  title: 'Portfolio Website',
  basePath: "/studio",

  projectId: 'ax88gqp7',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput(),],

  schema: {
    types: schemaTypes,
  },
})
