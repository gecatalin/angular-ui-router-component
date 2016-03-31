![angular-express-header](https://cloud.githubusercontent.com/assets/1859381/8266502/d94e93ce-1731-11e5-9b9d-9b9e58c5369f.png)

## Angular ui-router component

[AngularJS Express](https://github.com/angular-express/angular-express) to add a sample ui-router component with state configuration.

## Installation

To install the component:

```bash
$ ngx install angular-ui-router-component
```

To install multiple angular-ui-router-component instances in the same app:

```bash
$ ngx install angular-ui-router-component homepage
$ ngx install angular-ui-router-component about
$ ngx install angular-ui-router-component contact
```

No clue what the `ngx` command line tool is? Learn more about [AngularJS Express](https://github.com/angular-express/angular-express).

## How to use

After installing the component:

- edit state configuration in `_build/configure-states.js`

and import the component in your Angular application:

```javascript
// Angular main module
var ngModule = angular.module('app', []);

// Import angular-ui-router-component homepage component
import c from 'components/homepage/_build/index';

// Instantiate component
c(ngModule, { baseUrl: 'components/homepage' });
```

## Component options

- `baseUrl`: Base URL that component can use to construct links

## License

[MIT](LICENSE)

## Change log

### v0.1.0

- Initial version
