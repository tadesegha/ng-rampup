## Input Decorator
* A one-way bind from parent component ts to child component html

```html
<!-- parent component -->
<event>
  <event-thumbnail [event]='someEvent'></event-thumbnail>
</event>
```

```javascript
// parent component
...
someEvent = { title: 'the title for some event' };
...
```

```html
<!-- child component -->
<p>{{ event.title }}</p>
```
