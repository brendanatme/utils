# Utils

JS/TS functional helper methods, no external dependencies.

## Usage

### Import Package

Import the entire package:

```javascript
import * as utils from '@brendanatme/utils';
```

or import individual methods:

### camelCase

```javascript
import camelCase from '@brendanatme/utils/camel-case';

camelCase('my-utils'); // 'myUtils'
```

### capitalize

```javascript
import capitalize from '@brendanatme/utils/capitalize';

capitalize('my utils'); // 'My Utils'
```

### classCase

```javascript
import classCase from '@brendanatme/utils/class-case';

classCase('my-utils'); // 'MyUtils'
```

### contains

```javascript
import contains from '@brendanatme/utils/contains';

contains('dank')(['dank', 'memes']); // true

// or

const containsDank = contains('dank');

containsDank(['dank', 'memes']); // true
```

### containsAny

```javascript
import containsAny from '@brendanatme/utils/contains-any';

containsAny('dank', 'bank', 'jank', 'plank')(['dank', 'memes']); // true

// or

const containsRhymesWithDank = contains('dank', 'bank', 'jank', 'plank');

containsRhymesWithDank(['dank', 'memes']); // true
```

### decorate

```javascript
import decorate from '@brendanatme/utils/decorate';

const decorated = decorate(
  myHoc1,
  myHoc2,
  myHoc3,
)(MyComponent); // DecoratedComponent
```

### doOnce

```javascript
import doOnce from '@brendanatme/utils/do-once';

let i = 0;
const once = doOnce((n) => { i = i + n; });
[1, 2, 3].map((_i) => once(_i)); // i === 1

```

### handleize

```javascript
import handleize from '@brendanatme/utils/handleize';

handleize('No_$strange_Chars ALLOWED'); // 'no-strange-chars-allowed'

```

### invertObject

```javascript
import invertObject from '@brendanatme/utils/invert-object';

invertObject({ foo: 'bar' }); // { bar: 'foo' }

```

### mapArrayToObject

```javascript
import mapArrayToObject from '@brendanatme/utils/map-array-to-object';

mapArrayToObject('name')([
  { name: "Ryu", rank: 1 },
  { name: "Zangief", rank: "Too powerful to rank" },
]); // { Ryu: { name, rank }, Zangief: { name, rank } }

```

### mapStringToObject

```javascript
import mapStringToObject from '@brendanatme/utils/map-string-to-object';

mapStringToObject()('foo:bar,a:b'); // { foo: 'bar', a: 'b' }

// or

const customMap = mapStringToObject(';', '=');

customMap('foo=bar;a=b'); // { foo: 'bar', a: 'b' }

```

### mergeArrays

```javascript
import mergeArrays from '@brendanatme/utils/merge-arrays';

mergeArrays(['how', 'do'], ['you'], ['do', '?']); // ['how', 'do', 'you' 'do', '?']

```

### singularize

```javascript
import singularize from '@brendanatme/utils/singularize';

singularize('MurderousParakeets'); // 'MurderousParakeet'

```

### splitArray

```javascript
import splitArray from '@brendanatme/utils/split-array';

const catalog = [
  {
    category: 'Books',
    title: 'Pillars of the Earth',
  },
  {
    category: 'Movies',
    title: 'The Prestige',
  },
]

splitArray((item) => item.category)(catalog); // { Movies: [...], Books: [...] }

// or

const splitByCategory = splitArray((item) => item.category);

splitByCategory(catalog); // { Movies: [...], Books: [...] }

```

### timer

```javascript
import * as timer from '@brendanatme/utils/timer';

const myJobId = 'The Job Im Running';

// optional: set log function (defaults to console.log)
timer.setLogFn((...msgs) => console.warn(...msgs));

// begins timer and logs message
timer.start(myJobId); // --> "Timer: begin execution of 'The Job Im Running'"

// ... perform task ...

// logs length of execution time in MS:
timer.stop(myJobId); // --> "Timer: execution of 'The Job Im Running' took 5146ms"

```

### transformKeys

```javascript
import transformKeys from '@brendanatme/utils/transform-keys';

const input = { foo: 'bar' };

transformKeys((key) => `test_${key}`)(input); // { test_foo: 'bar' }

// or 

const makeTestProps = transformKeys((key) => `test_${key}`);

makeTestProps(input); // { test_foo: 'bar' }

//

```

### wait

```javascript
import wait from '@brendanatme/utils/wait';

wait(2) // waits 2 seconds
  .then(() => {}); // ... do stuff ...

// or

const init = async () => {
  const proceed = await wait(10); // waits 10 seconds

  if (proceed) {
    // ... do stuff ...
  }
};

```
