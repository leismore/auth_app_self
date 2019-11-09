// The document structure of private_app_authorization database.

type AuthorDoc = {
  clientID:   string,
  hostID:     string,
  permission: string,
  value:      boolean
};

export { AuthorDoc };
