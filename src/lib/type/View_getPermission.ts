// The view (get_permission) query result of CouchDB

interface View_getPermission
{
  readonly offset:     number,
  readonly total_rows: number,
  readonly rows:       [boolean] | [],
}

export {View_getPermission};
