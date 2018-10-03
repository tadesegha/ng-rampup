## Input Decorator
* A one-way bind from parent component ts to child component html
```html
<event>
  <event-thumbnail [event]='someEvent'></event-thumbnail>
</event>
```

```javascript
...
someEvent = { title: 'the title for some event' };
...
```

```html
<p>{{ event.title }}</p>
```
