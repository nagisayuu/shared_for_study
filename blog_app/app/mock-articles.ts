import Article from './article';

export var ARTICLES: Article[] = [
  {
    "id": "introduction",
    "title": "Introduction",
    "content": `
<p>This is a practical guide to Angular for experienced programmers who are building client applications in HTML and TypeScript.</p>
<p>We are on a journey together to understand how Angular works and, more importantly, how to make it work for us. This overview begins the journey. </p>
<p><a href="https://angular.io/docs/ts/latest/guide/">Documentation Overview - ts</a></p>
    `
  },
  {
    "id": "architecture",
    "title": "Architecture",
    "content": `
<p>Angular 2 is a framework to help us build client applications in HTML and JavaScript.</p>
<p>The framework consists of several cooperating libraries, some of them core and some optional.</p>
<p><a href="https://angular.io/docs/ts/latest/guide/architecture.html">Architecture Overview - ts</a></p>
    `
  },
  {
    "id": "displaying-data",
    "title": "Displaying Data",
    "content": `
<p>We typically display data in Angular by binding controls in an HTML template to properties of an Angular component.</p>
<p>In this chapter, well create a component with a list of heroes. Each hero has a name. Well display the list of hero names and conditionally show a selected hero in a detail area below the list.</p>
<p><a href="https://angular.io/docs/ts/latest/guide/displaying-data.html">Displaying Data - ts</a></p>
    `
  },
  {
    "id": "user-input",
    "title": "User Input",
    "content": `
<p>When the user clicks a link, pushes a button, or enters text we want to know about it. These user actions all raise DOM events. In this chapter we learn to bind to those events using the Angular event binding syntax.</p>
<p><a href="https://angular.io/docs/ts/latest/guide/user-input.html">User Input - ts</a></p>
    `
  },
];
