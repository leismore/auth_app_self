# auth_app_self

A NodeJS application providing authentication and authorization services for all LMOS NodeJS applications.

## Donation

[![PayPal Donation](https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=SPPJPYRY4D6WC&item_name=Give+people+an+option+to+support+my+open+source+software.&currency_code=AUD&source=url)

## Prerequisites

* The CouchDB Configuration for *LMOS Authenticator and Authorizer* v2.0.0 <https://github.com/leismore/auth_app_self_couchdb>

## Deployment

1. Configure `src/config.json`
2. Configure `src/corsOrigin.ts`
3. Configure `src/credential/couchdb.json`

## Test

1. Configure `test/config.json`

`npm test`

## Dependencies

* LMOS Database 1.0.0

## License

GNU Affero General Public License v3.0

## Authors

* [Kyle Chine](https://www.kylechine.name) (Initial Author at Nov 13, 2019)
