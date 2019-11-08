// The view (get_token) query result of CouchDB

interface Token_getToken
{
  readonly token:     string,
  readonly generated: number,
  readonly expiry:    number | null
}

interface View_getToken
{
  readonly offset:     number,
  readonly total_rows: number,
  readonly rows:       [Token_getToken] | [],
}

export {View_getToken};
