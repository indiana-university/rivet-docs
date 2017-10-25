---
title: Rivet is framework agnostic
description: We decided to not release any frontend Javascript framework implementations of Rivet so that it would be agnostic.
---

## Framework agnostic
There are a few different javascript frameworks being used at IU including:

 - React
 - Angular
 - VueJS

This tutorial will show you how to integrate each component into your frontend Javascript framework and what variations and state each component will need to include.

### Alert

The alert component contains state to manage whether it's open or closed.

#### Properties:

**type**

The Alert component can be passed a property `type` which can be: 

 - success
 - message
 - error
 - base (default if no type property passed)

_Property usage:_

`class="rvt-alert rvt-alert--{ type ? type : 'info' }"`

**title**

The alert component should be passed a title that appears as an h1 in the alert

_Property usage:_

`<h1 class="rvt-alert__title" id="alert-title">{ title }</h1>`

#### Children

The Alert component can contain children as plain text, which is the message of the alert.

`<p class="rvt-alert__message">{ children }</p>`

#### State: 

`{ closed: false }`

_State usage:_

Add `.display-none` class to the `.rvt-alert` div if the closed state becomes true

`{ this.state.closed ? 'display-none' : '' }`

#### Methods:  

`closeAlert() // sets closed to true `

_Method usage:_

`<button class="rvt-alert__dismiss" onclick="closeAlert()">`




### Badge
State:

### Breadcrumb
State: stateless

### Button
State: stateless

### Checkboxes
State: stateless

### Footer
State: stateless

### Header
State: 

### Grid
State: stateless

### Modal
State: 

### Pagination
State: stateless

### Panel
State: stateless

### Radio Buttons
State: stateless