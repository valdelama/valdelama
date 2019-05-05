---
title: Adding classes to react components
category: React
date: '2019-02-13'
---

_This is specific to React and CSS Modules and not relevant if you are using CSS-in-JS._

Lets say we have a 'panel' component that we want to create:

```javascript
import styles from './Panel.module.css'

export default () => (
  <div classname={styles.panel}>…</div>
)
```

The resultant HTML will look something like this depending on how you set things up with webpack:

```javascript
<div class="Panel_panel">…</div>
```

## Adding multiple classes:

Lets say we want to add another class to our `Panel`, this is what it would look like using the [classnames package](https://github.com/JedWatson/classnames)

```javascript
import cn from 'classnames'
import styles from './Panel.module.css'

export default () => (
  <div classname={cn(styles.panel, styles.primary)}>…</div>
)
```

HTML:

```javascript
<div class="Panel_panel Panel_primary">…</div>
```

This is not really very useful because we probably want to add the extra classes as and when they are needed when rendering the component ie. not every `Panel` component is going to be primary. For the sake of this demo there are two situations when we want to add a class to our panel component:

1. **Theming**: we have the default panel and now we want to be able to add predetermined classes to change its significance eg. `.info`, `.warning`, `.danger` and `.success`
2. **Context specific**: there's something special about this instance of the panel because of where it appears on the site/page. This is something you generally want to avoid in favour of flexible components that accept props, however sometimes, for truly exceptional situations, a one-off class is ok.

### Theming

First we want to tell our panel component to expect the `theme` prop and that it will be a class that appears in the associated stylesheet:

```javascript
import cn from 'classnames'
import styles from './Panel.module.css'

export default (theme) => (
  <div classname={cn(styles.panel, styles[theme])}>…</div>
)
```

This is how we would render the component on the homepage and apply a theme class of `.primary`:

```javascript
import Panel from '../Panel';

export default () => (
  <Panel theme="primary"} />
)
```

HTML:

```javascript
<div class="Panel_panel Panel_primary">…</div>
```

### Context specific

In our panel component:

```javascript
import cn from 'classnames'
import styles from './Panel.module.css'

export default (className) => (
  <div classname={cn(styles.panel, className)}>…</div>
)
```

Special instance of a panel on the homepage:

```javascript
import Panel from '../Panel'
import styles from './Home.module.css'

export default () => (
  <Panel className={styles.homePanel} />
)
```

HTML should look something like this:

```javascript
<div class="Panel_panel Home_homePanel">…</div>
```

### Putting it all together

Allowing for both a context specific class and theming.

In our panel component:

```javascript
import cn from 'classnames'
import styles from './Panel.module.css'

export default (className, theme) => (
  <div classname={cn(styles.panel, styles[theme], className)}>…</div>
)
```

Instance of the panel on the homepage with both a context specific class and a theme being applied:

```javascript
import Panel from '../Panel'
import styles from './Home.module.css'

export default () => (
  <Panel className={styles.homePanel} theme="primary" />
)
```

HTML should look something like this:

```javascript
<div class="Panel_panel Panel_primary Home_homePanel">…</div>
```
