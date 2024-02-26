import type {ColumnType, GeneratedAlways} from "kysely";

export interface Token {
  id: GeneratedAlways<number>;
  type: string;
  client_id: string;
  client_secret: string;
  access_token: string;
  refresh_token: string;
  expires_at: number;
  created_at: ColumnType<Date, never, never>;
  updated_at: ColumnType<Date, Date, Date>;
}
