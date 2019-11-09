// The data structure of get_token view value (DB: private_app_authentication).

type ViewValue_getToken = {
  token:     string,
  generated: number,
  expiry:    number | null
};

export { ViewValue_getToken };
