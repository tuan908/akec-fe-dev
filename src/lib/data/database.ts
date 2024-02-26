import {createKysely} from "@vercel/postgres-kysely";
import type {Token} from "./tables";

interface Database {
  token: Token;
}

const database = createKysely<Database>();

export {database};
