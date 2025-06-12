import type { Block } from 'payload'


export const ProjectsBlock: Block = {
  slug: 'projects',
  interfaceName: 'ProjectsBlock',
  fields: [
    {
      name: 'title',
      type: 'text'
    }
  ],
}
