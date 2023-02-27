// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, Skills, Interests } = initSchema(schema);

export {
  Users,
  Skills,
  Interests
};