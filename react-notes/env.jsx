// access env var in webpack
process.env.WEB_LINK
// create var in webpack
REACT_APP_WEB_LINK='www.abc.com';

// access env var in vite
import.meta.env.WEB_LINK

// create var in vite
VITE_WEB_LINK='www.abc.com';

// how to use diff env file for production dev and qa

"scripts": {
    "dev": "vite",
    "qa": "vite --mode qa",
    "prod": "vite --mode prod",
  }

