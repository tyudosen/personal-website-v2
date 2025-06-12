import type { Block } from 'payload'


export const AboutBlock: Block = {
  slug: 'about',
  interfaceName: 'AboutBlock',
  fields: [
    {
      name: 'title',
      type: 'text'
    }
  ],
}
