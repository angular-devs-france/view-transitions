# View Transitions with Angular 17+

Starting with [Angular 17.0.0-next.4](https://github.com/angular/angular/commit/73e4bf2ed2471faf44a49b591e19a390d5867449), Angular provides a built-in support for the View Transitions API.

## Add View Transitions API

### Update the route configuration

Update your route configuration by adding the `withViewTransition()` provider:

```js
import {withViewTransitions} from '@angular/router';

provideRouter(routes, withViewTransitions())
```

### Customize the transition animation

By default, the transitions will operate a quick fade-out/fade-in animation.

You can customize it by using the view transition pair `::view-transition-old` `::view-transition-new` to generate animations on view transitions.

```css
::view-transition-old(<selector>) {
  // TODO animation definition for leaving page
}

::view-transition-new(<selector>) {
  // TODO animation definition for new page
}
```

### Identify target elements

Use the new `view-transition-name` css rule to identify pairs of elements for finer animations.
A given **view-transition-name** value cannot be used several times on the same page.

```css
.my-element {
  view-transition-name: myElement;
}
```

This project use a custom directive to do so.

### Allows animation deactivation

Use `prefers-reduced-motion` media query to deactivate view transitions animations if the user wants to.

```css
@media (prefers-reduced-motion) {
  ::view-transition-group(*),
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation: none !important;
  }
}
```

## Development

### Install dependencies

Run `npm install` to install dependencies.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

