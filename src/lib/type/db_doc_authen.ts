// The document structure of private_app_authentication database.

type AuthenDoc = {
  appID:     string,
  active:    boolean,
  token:     string,
  generated: number,
  expiry:    number | null
};

export { AuthenDoc };
