/* This file contains references to the vendor libraries
we're using in this project. This is used by webpack
in the *produciton build only*  A separate bundle for vendor
code is useful since  it's unlikely to change as often
as the applicaiton code. So all the libraries we reference
her will be written to the vendor.js so they can be cached
until one of them change. So basically, this avoids customer
having to download a huge JS file anytime a line of code changes.
They onlyhave to download vendor.js when a vendor library
changes which should be less frequent. Any files that aren't
referenced here will be bundled into main.js for the production build.

*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
