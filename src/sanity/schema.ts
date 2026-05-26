import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './schemaTypes/event'
import { galleryType } from './schemaTypes/gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, galleryType],
}
