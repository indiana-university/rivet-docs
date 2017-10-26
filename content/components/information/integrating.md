---
title: Integrating Rivet
description: Rivet can be integrated with any frontend Javascript framework, including React, Angular and VueJS.
---

## Frontend JavaScript frameworks

Rivet comes with a vanilla Javascript file to handle opening/closing modals, dismissing alerts, opening drop-down
menus and toggling the drawer. If you are using a frontend JavaScript framework, you may need adapt Rivet to suit the needs of your application.

In this article we'll look at the [Alert](/components/overlays/alerts/) component and how you might go about translating it's functionality to a frontend JavaScript framework. For our example we'll be using [React](https://reactjs.org), but the same concepts could be applied to [Angular](https://angularjs.org/) and [VueJS](https://vuejs.org/).

## Rivet's included JavaScript
Rivet's JavaScript takes traditional DOM manipulation approach to interactivity using browser APIs like `querySelectorAll()` to get DOM elements and manipulate their attributes. In frameworks like React, interactivity is managed by binding those attributes to data or [state](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class). These are two different approaches for handling the interactive aspects of a component, but the goal we are trying to accomplish remains the same, adding a class or removing an element from the DOM, for example.

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
In some cases, it's a better user experience to allow the user to dismiss the alert message. We can add a close button to remove it from the DOM.

{{< example lang="html" >}}<div class="rvt-alert rvt-alert--success rvt-m-bottom-md m-top-sm" role="alertdialog" aria-labelledby="success-alert-title">
<h1 class="rvt-alert__title" id="success-alert-title">Thank you!</h1>
<p class="rvt-alert__message">We have received your application. Check your email in a few weeks to find out if you’ve been admitted.</p>
<button class="rvt-alert__dismiss">
    <span class="v-hide">Dismiss this alert</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path d="M10,8l5.63-5.63a1.39,1.39,0,0,0-2-2L8,6,2.37.41a1.39,1.39,0,0,0-2,2L6,8,.41,13.63a1.39,1.39,0,1,0,2,2L8,10l5.63,5.63a1.39,1.39,0,0,0,2-2Z" style="fill: #333"/>
    </svg>
</button>
</div>
{{< /example >}}

## Breaking it down
Let's first look at how the dismiss functionality is implemented in the Rivet JS. Then we will look at how to take the same rules and apply them to React.

In Rivet's JS we use `querySelectorAll()` to get all of the `.rvt-alert__dismiss` buttons on the page.

{{< code lang="javascript" >}}var dismissButtons = document.querySelectorAll('.rvt-alert__dismiss, .alert__dismiss');
{{< /code >}}

Next, we use a function called `dismissAlert` that will find the parent element of the dismiss button, which is the `.rvt-alert` itself.

{{< code lang="javascript" >}}var dismissAlert = function(context) {
    var elToDismiss = context.parentNode;
    elToDismiss.parentNode.removeChild(elToDismiss);
}
{{< /code >}}

Finally, we loop through all the alert dismiss buttons on the page and attach an event listener that will remove the alert when clicked.

{{< code lang="javascript" >}}for (var i = 0; i < els.length; i++) {
    els[i].addEventListener('click', function() {
        dismissAlert(this);
    });
}
{{< /code >}}

## Translating to React
Rather than selecting an element from the DOM and using that as state, React components manage their own state.

```javascript
constructor(props) {
    super(props)
    this.state = { closed: false }
}
```

Next we want to define a method for handling when the button is clicked.

```javascript
closeAlert() {
    this.setState({
        closed: true
    });
}
```

Finally we want to bind the click event to the button and call the method for closing the alert.

```html
<button onClick={this.closeAlert} className="rvt-alert__dismiss">...</button>
```

You can see similarities with the approach vanilla Javascript and React take to dismiss an alert. The main difference, however, is how you are managing state: with vanilla JS, the DOM is the state, and with React each component has its own state object which the (virtual) DOM updates based on.

## React Alert example
{{< code >}}import React from 'react'

export default class Alert extends React.Component {
    constructor(props) {
        super(props)
        this.state = { closed: false }
        this.closeAlert = this.closeAlert.bind(this)
    }

    closeAlert() {
        this.setState({
            closed: true
        });
    }

    render() {
        const {children, title, type} = this.props;

        return (
            <div>
                { !this.state.closed &&
                    <div className={`rvt-alert rvt-alert--${ type ? type : 'info' } rvt-m-bottom-md`} role="alertdialog" aria-labelledby={`${btoa(title)}-alert-title`}>
                        <h1 className="rvt-alert__title" id={`${btoa(title)}-alert-title`}>{ title }</h1>
                        <p className="rvt-alert__message">{ children }</p>
                        <button className="rvt-alert__dismiss" onClick={this.closeAlert}>
                            <span className="v-hide">Dismiss this alert</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M10,8l5.63-5.63a1.39,1.39,0,0,0-2-2L8,6,2.37.41a1.39,1.39,0,0,0-2,2L6,8,.41,13.63a1.39,1.39,0,1,0,2,2L8,10l5.63,5.63a1.39,1.39,0,0,0,2-2Z" />
                            </svg>
                        </button>
                    </div>
                }
            </div>
        );
    }
}
{{< /code >}}

### React example usage:

{{< code >}}import Alert from "Alert"

<Alert title="Scheduled System Maintenance">This system will be unavailable on August 1st due to scheduled system maintenance. Please check back on August 2nd.</Alert>
<Alert type="message" title="Unsaved Changes">Your changes have not been saved. To save your changes, click "Save my changes" or click "Cancel" to exit without saving.</Alert>
<Alert type="success" title="Thank you!">We have received your application. Check your email in a few weeks to find out if you?ve been admitted.</Alert>
<Alert type="error" title="Incorrect User ID or Password">The user ID and password you entered do not match. Please check your entries and try again. <a href="#0">Forgot your user ID or password?</a></Alert>
{{< /code >}}

___
# Below is old stuff that we may or may not use.

#### Properties:

**type**

The Alert component can be passed a property `type` which can be:

 - success
 - message
 - error
 - base (default if no type property passed)

_Property usage:_

```
className={`rvt-alert rvt-alert--${ type ? type : 'info' }`}
```

**title**

The alert component should be passed a title that appears as an h1 in the alert

_Property usage:_

`<h1 className="rvt-alert__title" id="alert-title">{ title }</h1>`

#### Children

The Alert component can contain children as plain text, which is the message of the alert.

`<p className="rvt-alert__message">{ children }</p>`

#### State:

`{ closed: false }`

_State usage:_

Add `.display-none` class to the `.rvt-alert` div if the closed state becomes true

`{ this.state.closed ? 'display-none' : '' }`

#### Methods:  

`closeAlert() // sets closed to true `

_Method usage:_

`<button className="rvt-alert__dismiss" onClick={this.closeAlert}>`

---
