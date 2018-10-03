# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Notes
* [Pipes](https://angular.io/guide/pipes) are a good way to format strings, currency amounts, dates and other display data. Angular ships with several built-in pipes and you can create your own.
`<h2>{{ hero.name | uppercase }} Details</h2>`

* [(ngModel)] is Angular's two-way data binding syntax. It lives in the FormsModule which, by default, is not included in a project. To add it, perform [these](https://angular.io/tutorial/toh-pt1#import-formsmodule) steps.

* *ngFor is Angular's repeater directive. It repeats the host element for each element in a list
    `<li *ngFor="let hero of heroes">`

* *ngIf is another Angular directive
    `<div *ngIf="selectedHero">`

## Aside
* On hover, moving an element slightly to the left gives the impression of the element being pushed down. See said effect when hovering over heroes.
