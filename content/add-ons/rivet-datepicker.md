---
title: "Datepicker"
description: Date entry patterns for Rivet including a calendar datepicker
thumbnail: "switch-thumbnail.png"
packageName: rivet-datepicker
npm: true
repo: https://github.com/indiana-university/rivet-datepicker
demo: https://indiana-university.github.io/rivet-datepicker/
status: Alpha
addOnTags:
  - All
  - Forms
---
## Basic date input
Using three inputs inputs is the quickest, most reliable way for users to enter dates into forms.

If you are only asking a user to enter one or two dates, especially memorable ones like birthdays, use this pattern.

The basic date input uses the HTML5 `<input type="number">` element along with the min and max attributes to constrain the numbers a user is able to enter.

{{< code lang="html" >}}<fieldset aria-describedby="grad-date-hint">
  <legend class="rvt-ts-18 rvt-text-bold">When will you graduate?</legend>
  <span class="rvt-ts-14" id="grad-date-hint">For example: 05 21 2019</span>
  <div class="rvt-date-input rvt-m-top-md">
    <div class="rvt-date-input__item">
      <label for="month">Month</label>
      <input type="number" min="1" max="12" id="month">
    </div>
    <div class="rvt-date-input__item">
      <label for="day">Day</label>
      <input type="number" min="1" max="31" id="day">
    </div>
    <div class="rvt-date-input__item rvt-date-input__item--year">
      <label for="year">Year</label>
      <input type="number" min="1900" max="2000" id="year">
    </div>
  </div>
</fieldset>
{{< /code >}}

## Calendar datepicker
In applications where users are required to frequently enter multiple dates, or dates that are in the near future or past, a datepicker calendar widget can be useful.

The Rivet datepicker add-on uses the `aria-describedby` attribute to associate format instructions with datepicker fields.

{{< code lang="html" >}}<fieldset aria-describedby="hs-date-hint">
  <legend class="rvt-ts-18 rvt-text-bold">When did you attend highschool?</legend>
  <span class="rvt-ts-14" id="hs-date-hint">Type dates in the format: mm-dd-yyyy</span>
  <div class="rvt-grid rvt-m-top-xl">
    <div class="rvt-grid__item-4-md-up">
      <div class="rvt-datepicker rvt-m-bottom-sm">
        <label for="start">Start date</label>
        <div class="rvt-datepicker__input" aria-hidden="true">
          <input autocomplete="off" type="text" id="start" aria-describedby="hs-date-hint">
          <div class="rvt-datepicker__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path fill="currentColor" d="M12.29,2H12V1a1,1,0,0,0-2,0V2H6V1A1,1,0,0,0,4,1V2H3.71A2.78,2.78,0,0,0,1,4.83v7.33A2.78,2.78,0,0,0,3.71,15h8.57A2.78,2.78,0,0,0,15,12.17V4.83A2.78,2.78,0,0,0,12.29,2ZM3.71,4H4V5H6V4h4V5h2V4h.29a.78.78,0,0,1,.71.83V7H3V4.83A.78.78,0,0,1,3.71,4Zm8.57,9H3.71A.78.78,0,0,1,3,12.17V9H13v3.17A.78.78,0,0,1,12.29,13Z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="rvt-grid__item-4-md-up">
      <div class="rvt-datepicker">
        <label for="end">End date</label>
        <div class="rvt-datepicker__input" aria-hidden="true">
          <input autocomplete="off" type="text" id="end" aria-describedby="hs-date-hint">
          <div class="rvt-datepicker__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path fill="currentColor" d="M12.29,2H12V1a1,1,0,0,0-2,0V2H6V1A1,1,0,0,0,4,1V2H3.71A2.78,2.78,0,0,0,1,4.83v7.33A2.78,2.78,0,0,0,3.71,15h8.57A2.78,2.78,0,0,0,15,12.17V4.83A2.78,2.78,0,0,0,12.29,2ZM3.71,4H4V5H6V4h4V5h2V4h.29a.78.78,0,0,1,.71.83V7H3V4.83A.78.78,0,0,1,3.71,4Zm8.57,9H3.71A.78.78,0,0,1,3,12.17V9H13v3.17A.78.78,0,0,1,12.29,13Z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</fieldset>
{{< /code >}}

{{< alert variant="warning" title="Allowing manual date entry" >}}
It's important to note that if you are using a calendar date picker, make sure that you also provide instructions that let users know the format in which they should type the date manually in to the input.
{{< /alert >}}

### Initializing a calendar datepicker
1. Include rivet-datepicker.js in your page via a `<script>` tag or your build process.
2. Include the rivet-datepicker.css file in your app.
3. Create a new instance of RivetDatepicker for each calendar datepicker input field that appears on your page.

For example, if your page contains the following input:

{{< code lang="html" >}}
<div class="rvt-date-picker">
  <label for="start">Start date</label>
  <div class="rvt-date-picker__input">
    <input type="text" id="start-date" aria-describedby="start-format">
    <div class="rvt-date-picker__icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path fill="currentColor" d="M12.29,2H12V1a1,1,0,0,0-2,0V2H6V1A1,1,0,0,0,4,1V2H3.71A2.78,2.78,0,0,0,1,4.83v7.33A2.78,2.78,0,0,0,3.71,15h8.57A2.78,2.78,0,0,0,15,12.17V4.83A2.78,2.78,0,0,0,12.29,2ZM3.71,4H4V5H6V4h4V5h2V4h.29a.78.78,0,0,1,.71.83V7H3V4.83A.78.78,0,0,1,3.71,4Zm8.57,9H3.71A.78.78,0,0,1,3,12.17V9H13v3.17A.78.78,0,0,1,12.29,13Z"/>
      </svg>
    </div>
  </div>
</div>
{{< /code >}}

You would initialize the calendar datepicker widget by passing the `id` of the text input to the `RivetDatepicker` constructor as an option called `field`:

{{< code lang="js" >}}
const startDate = new RivetDatepicker({
  field: document.getElementById('start-date'),
});
{{< /code >}}

## Default options
The Rivet calendar datepicker is built on top of [Pikaday](https://github.com/Pikaday/Pikaday), a lightweight JavaScript calendar widget with [several configuration options](https://github.com/Pikaday/Pikaday#configuration). The `RivetDatepicker` constructor acts as a wrapper around Pikaday that includes the Rivet CSS theme for the calendar widget and a few other default options.

The [Pikaday options](https://github.com/Pikaday/Pikaday#configuration) that the Rivet datepicker sets by default are:

* `theme` - A CSS namespace for the Rivet datepicker theme
* `blurFieldOnSelect` - Set to `false` so that focus stays on the input field after the user selects a date
* `ariaLabel` - Sets the text for an `aria-label` attribute for each datepicker. This option helps to give screen reader users some additional instructions on using the datepicker.

{{< alert variant="warning" title="Changing theme, focus blurring, and ARIA labels" >}}
While it's possible to overwrite these defaults when you create a new datepicker instance, doing so will create UX and accessibility issues. **Please do not overwrite these default configurations.**
{{< /alert >}}

## Advanced options
You can pass any of the other [available Pikaday options](https://github.com/Pikaday/Pikaday#configuration) to the `RivetDatepicker` instance.

{{< code lang="js" >}}
const startDate = new RivetDatepicker({
  field: document.getElementById('start-date'),
  disableWeekends: true
});
{{< /code >}}

In addition, all [Pikaday methods](https://github.com/Pikaday/Pikaday#methods) are available on the `RivetDatepicker.picker` property:

{{< code lang="js" >}}
const startDate = new RivetDatepicker(options);

// Destroys the "startDate" instance and removes all event listeners
startDate.picker.destroy();
{{< /code >}}

## Date formatting options
Pikaday has a number of options you can use to format dates. The Pikaday `toString` option can be passed a function that accepts the `Date` object and returns a String in the format you'd like. In the examples on this page, we are using a function called `formatRivetDate`:

{{< code lang="js" >}}
function formatRivetDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return month + '-' + day + '-' + year;
}
{{< /code >}}

You can then pass your custom date format function to the `toString` options:

{{< code lang="js" >}}
const startDate = new RivetDatepicker({
  field: document.getElementById('start-date'),
  toString: function(date, format) {
    return formatRivetDate(date);
  }
});
{{< /code >}}

### Using Moment.js
The Rivet datepicker add-on supports the use of the date formatting library [Moment.js](http://momentjs.com/). See more about [using Moment to format dates](https://github.com/Pikaday/Pikaday#formatting) in the [Pikaday documentation](https://github.com/Pikaday/Pikaday#formatting).

{{< alert variant="warning" title="Moment.js file size" >}}
While Moment.js is a powerful and useful library, it is quite large and can add significant overhead to your application. If you are only using Moment.js to format dates with the Rivet datepicker, you might consider writing your own formatting function instead rather than importing the entire Moment.js library.
{{< /alert >}}

## Date and time input
The Rivet calendar datepicker does not support a time picker option.

If you are asking users to input date and time, we recommend using separate inputs to capture the time value and concatenating the date and time on the client or server.

The example below uses an `<input type="time">` element. In [browsers that support time inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time#Handling_browser_support), users will see a field specially-formatted for entering a time.

### 2. Add the markup to your HTML
The Rivet switch markup uses a HTML `<button>` element. To use the switch add the following markup to your page.

{{< code lang="html" >}}<button class="rvt-switch" data-switch="email-switch" role="switch" aria-checked="false">
  <span class="rvt-switch__on">On</span>
  <span class="rvt-switch__off">Off</span>
</button>
{{< /code >}}

{{< code lang="html" >}}<div class="rvt-m-top-md rvt-p-all-md rvt-border-all rvt-border-radius">
    <fieldset aria-describedby="maintenance-window-hint">
      <legend class="rvt-ts-18 rvt-text-bold">Schedule maintenance period</legend>
      <span class="rvt-ts-14" id="maintenance-window-hint">Type dates in the format: mm-dd-yyyy using dashes</span>
      <div class="rvt-grid rvt-m-top-xl">
        <div class="rvt-grid__item-3-md-up">
          <div class="rvt-datepicker">
            <label for="time-demo-start-day">Start day</label>
            <div class="rvt-datepicker__input">
              <input autocomplete="off" type="text" id="time-demo-start-day" aria-describedby="maintenance-window-hint">
              <div class="rvt-datepicker__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path fill="currentColor" d="M12.29,2H12V1a1,1,0,0,0-2,0V2H6V1A1,1,0,0,0,4,1V2H3.71A2.78,2.78,0,0,0,1,4.83v7.33A2.78,2.78,0,0,0,3.71,15h8.57A2.78,2.78,0,0,0,15,12.17V4.83A2.78,2.78,0,0,0,12.29,2ZM3.71,4H4V5H6V4h4V5h2V4h.29a.78.78,0,0,1,.71.83V7H3V4.83A.78.78,0,0,1,3.71,4Zm8.57,9H3.71A.78.78,0,0,1,3,12.17V9H13v3.17A.78.78,0,0,1,12.29,13Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="rvt-grid__item-3-md-up">
          <label for="start-time">Start time</label>
          <input type="time" id="start-time">
        </div>
      </div>
      <div class="rvt-grid rvt-m-top-sm">
        <div class="rvt-grid__item-3-md-up">
          <div class="rvt-datepicker">
            <label for="time-demo-end-day">End day</label>
            <div class="rvt-datepicker__input">
              <input autocomplete="off" type="text" id="time-demo-end-day" aria-describedby="maintenance-window-hint">
              <div class="rvt-datepicker__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path fill="currentColor" d="M12.29,2H12V1a1,1,0,0,0-2,0V2H6V1A1,1,0,0,0,4,1V2H3.71A2.78,2.78,0,0,0,1,4.83v7.33A2.78,2.78,0,0,0,3.71,15h8.57A2.78,2.78,0,0,0,15,12.17V4.83A2.78,2.78,0,0,0,12.29,2ZM3.71,4H4V5H6V4h4V5h2V4h.29a.78.78,0,0,1,.71.83V7H3V4.83A.78.78,0,0,1,3.71,4Zm8.57,9H3.71A.78.78,0,0,1,3,12.17V9H13v3.17A.78.78,0,0,1,12.29,13Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="rvt-grid__item-3-md-up">
          <label for="end-time">End time</label>
          <input type="time" id="end-time">
        </div>
      </div>
    </fieldset>
</div>
{{< /code >}}