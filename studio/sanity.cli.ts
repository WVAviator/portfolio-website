import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ax88gqp7',
    dataset: 'production'
  },
  project: {
    basePath: '/studio',
  },
})
