import type { Block } from 'payload'


export const ContactBlock: Block = {
  slug: 'contact',
  interfaceName: 'ContactBlock',
  fields: [
    {
      name: 'title',
      type: 'text'
    }
  ],
}
