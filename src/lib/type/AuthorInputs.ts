// Input data for authorization.

import { AuthenInputs } from './AuthenInputs';

type AuthorInputs = {
  credential:   AuthenInputs,
  data:
  {
    clientID:   string,
    hostID:     string,
    permission: string
  }
};

type AuthorInputs_noCredential = {
  clientID:   string,
  hostID:     string,
  permission: string
};

export { AuthorInputs, AuthorInputs_noCredential };
