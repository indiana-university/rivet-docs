---
title: Integrating Rivet
description: Rivet can be integrated with any frontend Javascript framework, including React, Angular and VueJS.
date: "2017-11-01"
aliases:
    - "/learn/integrating-rivet"
---

## Frontend JavaScript frameworks
Rivet comes with a vanilla JavaScript file to handle the following:

- opening and closing [modals](/components/overlays/modals)
- dismissing [alerts](/components/overlays/alerts)
- opening [drop-down menus in the header](/components/navigation/header#main-navigation-with-dropdowns)
- toggling the drawer in the [header](/components/navigation/header)

If you’re using a frontend JavaScript framework, you may need to adapt Rivet to suit the needs of your application.

In this article we'll look at the [alert](/components/overlays/alerts/) component and show how you can translate its functionality to a frontend JavaScript framework. We’ll use [React](https://reactjs.org) for our example, but you can apply the same concepts to [Angular](https://angularjs.org/) and [VueJS](https://vuejs.org/).

## Rivet's included JavaScript
Rivet's JavaScript takes a traditional DOM manipulation approach to interactivity using browser APIs like `querySelectorAll()` to get DOM elements and manipulate their attributes. Frameworks like React manage interactivity by binding those attributes to data or [state](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class).

These are two different approaches for handling the interactive aspects of a component, but we can use either approach to accomplish the same goal. (For example, we could add a class or remove an element from the DOM using either approach.)

## The Rivet Alert
Without any JavaScript involved, the base Alert component can still be used to display messages that cannot be dismissed, for example:

{{< example lang="html" >}}<div class="rvt-alert rvt-alert--info rvt-m-bottom-md"
     role="alertdialog"
     aria-labelledby="information-alert-title">
    <h1 class="rvt-alert__title" id="information-alert-title">
        Scheduled System Maintenance
    </h1>
    <p class="rvt-alert__message">This system will be unavailable on August 1st due to scheduled system maintenance. Please check back on August 2nd.</p>
</div>
{{< /example >}}

### Dismissible alert
In some cases, it’s a better user experience to allow the user to dismiss the alert message. We can add a close button to remove it from the DOM.

{{< example lang="html" >}}<div class="rvt-alert rvt-alert--success rvt-m-bottom-md m-top-sm" role="alertdialog" aria-labelledby="success-alert-title">
<h1 class="rvt-alert__title" id="success-alert-title">Thank you!</h1>
<p class="rvt-alert__message">We have received your application. Check your email in a few weeks to find out if you’ve been admitted.</p>
<button class="rvt-alert__dismiss">
    <span class="v-hide">Dismiss this alert</span>
    <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path d="M10,8l5.63-5.63a1.39,1.39,0,0,0-2-2L8,6,2.37.41a1.39,1.39,0,0,0-2,2L6,8,.41,13.63a1.39,1.39,0,1,0,2,2L8,10l5.63,5.63a1.39,1.39,0,0,0,2-2Z" style="fill: #333"/>
    </svg>
</button>
</div>
{{< /example >}}

## Breaking down Rivet’s JS
We’ll first look at how the dismiss functionality is implemented in Rivet’s JS. In the next section, we’ll review how to apply the same rules to React.

In Rivet's JS we use `querySelectorAll()` to get all of the `.rvt-alert__dismiss` buttons on the page.

{{< code lang="javascript" >}}var dismissButtons = document.querySelectorAll('.rvt-alert__dismiss, .alert__dismiss');
{{< /code >}}

Next, we use a function called `dismissAlert`. This will find the dismiss button’s parent element, which is`.rvt-alert`.

{{< code lang="javascript" >}}var dismissAlert = function(context) {
    var elToDismiss = context.parentNode;
    elToDismiss.parentNode.removeChild(elToDismiss);
}
{{< /code >}}

Finally, we loop through all the alert dismiss buttons on the page and attach an event listener. This event listener will remove the alert when clicked.

{{< code lang="javascript" >}}for (var i = 0; i < els.length; i++) {
    els[i].addEventListener('click', function() {
        dismissAlert(this);
    });
}
{{< /code >}}

## Translating to React
React takes a different approach where all of a component’s markup and methods are written together in a single component. Rather than manipulating it directly, React keeps a virtual copy of the DOM and (re)renders it based on some data that gets passed into a component.

This example shows the basic structure of how we might start to convert a Rivet alert.

{{< code >}}import React from 'react'

export default class Alert extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {children, title, type, id} = this.props;

        return (
            <div className={`rvt-alert rvt-alert--${ type ? type : 'info' }`}
                 role="alertdialog"
                 aria-labelledby={id}>
                <h1 className="rvt-alert__title" id={id}>{ title }</h1>
                <p className="rvt-alert__message">{ children }</p>
                <button className="rvt-alert__dismiss">
                    <span className="v-hide">Dismiss this alert</span>
                    <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M10,8l5.63-5.63a1.39,1.39,0,0,0-2-2L8,6,2.37.41a1.39,1.39,0,0,0-2,2L6,8,.41,13.63a1.39,1.39,0,1,0,2,2L8,10l5.63,5.63a1.39,1.39,0,0,0,2-2Z" />
                    </svg>
                </button>
            </div>
        );
    }
}
{{< /code >}}

In the example above we've done a few things.

1. We added the Rivet alert markup to our component's `return()` function.
2. Then, we converted our HTML to [JSX syntax](https://reactjs.org/docs/introducing-jsx.html), the syntax used in React. For example we converted any instance of `class` to `className`.
3. Lastly, we passed in our `title`, `type`, `id`, `props` along with React's special `children` `prop`.

### Dismissing the alert
At this point we have a functional React component, but we don’t have a way to use the dismiss button. Now we need to start managing our alert component’s state. To do that, we need to add a few lines of code to our component.

First, we'll add a `state` object to our `constructor()` function with a property called `isDismissed`. We’ll also set its initial value to `false`.

{{< code lang="javascript" >}}constructor(props) {
    super(props)
    // This is where we manage state
    this.state = { isDismissed: false }
}
{{< /code >}}

Next up, we'll write a method for our alert component that will update the `isDismissed` property using React's `setState()` method. We'll use this later to add dismiss functionality to the dismiss button.

{{< code lang="javascript" >}}dismissAlert() {
    this.setState({
        isDismissed: true
    });
}
{{< /code >}}

Finally, we'll add an `onClick` attribute to the alert dismiss button that uses the `dismissAlert()` method we created above.

{{< code lang="javascript" >}}<button className="rvt-alert__dismiss" onClick={this.dismissAlert}>
    ...
</button>
{{< /code >}}

Now our component should look something like the example below. We have converted our Rivet markup to JSX, passed in our `props`, added our state object, and written a method to dismiss our alert.

Note, how we have to `bind()` the context of the new `dismissAlert()` method inside our component's `constructor()` function. You can read more about why in the [React docs](https://reactjs.org/docs/hello-world.html).

{{< code >}}import React from 'react'

export default class Alert extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isDismissed: false }
        this.dismissAlert = this.dismissAlert.bind(this)
    }

    dismissAlert() {
        this.setState({
            isDismissed: true
        });
    }

    render() {
        const {children, title, type, id} = this.props;

        return (
            <div className={`rvt-alert rvt-alert--${ type ? type : 'info' }`}
                 role="alertdialog"
                 aria-labelledby={id}>
                <h1 className="rvt-alert__title" id={id}>{ title }</h1>
                <p className="rvt-alert__message">{ children }</p>
                <button className="rvt-alert__dismiss" onClick={this.dismissAlert}>
                    <span className="v-hide">Dismiss this alert</span>
                    <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M10,8l5.63-5.63a1.39,1.39,0,0,0-2-2L8,6,2.37.41a1.39,1.39,0,0,0-2,2L6,8,.41,13.63a1.39,1.39,0,1,0,2,2L8,10l5.63,5.63a1.39,1.39,0,0,0,2-2Z" />
                    </svg>
                </button>
            </div>
        );
    }
}
{{< /code >}}

## Putting it all together
The last step we need to add is conditionally showing the alert based on the state of of our `isDismissed` property. To do this we'll use a conditional (ternary) operator with the `return` statement. This will check the status of the  `isDismissed` variable and render the alert if it is false.

{{< code lang="javascript" >}}return this.state.isDismissed ? null : (
    <div className={`rvt-alert rvt-alert--${ type ? type : 'info' }`}
         role="alertdialog"
         aria-labelledby={id}>

         ... Alert JSX

    </div>
);
{{< /code >}}

## Wrapping up
Now we have a working Rivet alert component ready to use in React projects. We’ve purposefully kept this article simple, but you could do more interesting things that would make this component more flexible, like passing in a `prop` that would make a dismiss button optional.

Now we can use our alert component in our app like so:

{{< code lang="html" >}}<Alert
    type="success"
    title="Thank you!"
    id="001">
    We have received your application. Check your email in a few weeks to find out if you’ve been admitted.
</Alert>
{{< /code >}}

Just to recap, here's the code for our final React component:

{{< code lang="javascript" >}}class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isDismissed: false }
        this.dismissAlert = this.dismissAlert.bind(this);
    }

    dismissAlert() {
        this.setState({
            isDismissed: true
        });
    }

    render() {
        const {children, title, type, id} = this.props;

        return this.state.isDismissed ? null : (
            <div className={`rvt-alert rvt-alert--${ type ? type : 'info' }`}
                 role="alertdialog"
                 aria-labelledby={id}>
                <h1 className="rvt-alert__title" id={id}>{ title }</h1>
                <p className="rvt-alert__message">{ children }</p>
                <button className="rvt-alert__dismiss" onClick={this.dismissAlert}>
                    <span className="v-hide">Dismiss this alert</span>
                    <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M10,8l5.63-5.63a1.39,1.39,0,0,0-2-2L8,6,2.37.41a1.39,1.39,0,0,0-2,2L6,8,.41,13.63a1.39,1.39,0,1,0,2,2L8,10l5.63,5.63a1.39,1.39,0,0,0,2-2Z" />
                    </svg>
                </button>
            </div>
        );
    }
}
{{< /code >}}

## Example
You can have a look at the alert component we just created on Codepen. Do you have any ideas on how to improve it or make it more flexible? <a href="mailto:uxo@iu.edu?subject=Rivet React components">Let us know</a> or <a href="https://github.iu.edu/UITS/rivet-source/issues/new">open an issue on Rivet</a>!

<p data-height="300" data-theme-id="13463" data-slug-hash="rYBEXJ" data-default-tab="js,result" data-user="levimcg" data-embed-version="2" data-pen-title="Rivet React alert" class="codepen">See the Pen <a href="https://codepen.io/levimcg/pen/rYBEXJ/">Rivet React alert</a> by Levi McGranahan (<a href="https://codepen.io/levimcg">@levimcg</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
