import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './schemaTypes/event'
import { albumType } from './schemaTypes/album'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, albumType],
}
