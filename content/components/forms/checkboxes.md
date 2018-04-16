---
title: "Checkboxes"
description: "Checkboxes allow users to select one or more options from a list of choices."
status: "Ready"
---
## Inline checkboxes example
{{< example lang="html" >}}<form>
    <fieldset>
        <legend class="sr-only">Checkboxes inline</legend>
        <ul class="rvt-inline-list">
            <li>
                <input type="checkbox" name="checkbox-demo" id="checkbox-1">
                <label for="checkbox-1" class="rvt-m-right-sm">Option one</label>
            </li>
            <li>
                <input type="checkbox" name="checkbox-demo" id="checkbox-2">
                <label for="checkbox-2">Option two</label>
            </li>
        </ul>
    </fieldset>
</form>
{{< /example >}}

## Checkbox list example
{{< example lang="html" >}}<form>
    <fieldset>
        <legend class="sr-only">Checkbox list</legend>
        <ul class="rvt-plain-list">
            <li>
                <input type="checkbox" name="checkbox-demo" id="checkbox-3">
                <label for="checkbox-3" class="rvt-m-right-sm">Option one</label>
            </li>
            <li>
                <input type="checkbox" name="checkbox-demo" id="checkbox-4">
                <label for="checkbox-4">Option two</label>
            </li>
            <li>
                <input type="checkbox" name="checkbox-demo" id="checkbox-4-disable" disabled>
                <label for="checkbox-4-disable">Option three disabled</label>
            </li>
            <li>
                <input type="checkbox" name="checkbox-demo" id="checkbox-5" disabled checked>
                <label for="checkbox-5">Option four checked and disabled</label>
            </li>
        </ul>
    </fieldset>
</form>
{{< /example >}}

## Indeterminate state
The indeterminate state is a checkbox attribute that is accessible by JavaScript only. It can be used to indicate a partially checked state. A typical use case would be nested checkboxes/selections like the following example. [This article](https://css-tricks.com/indeterminate-checkboxes/) explains the indeterminate state in greater detail.

{{< example lang="html" >}}<fieldset>
    <legend class="rvt-sr-only">Indeterminate state</legend>
    <ul class="rvt-plain-list">
        <li>
            <input type="checkbox" name="checkbox-demo" id="checkbox-indeterminate">
            <label for="checkbox-indeterminate">Parent option one</label>
            <ul class="rvt-plain-list rvt-p-left-lg">
                <li>
                    <input type="checkbox" name="checkbox-demo" id="checkbox-6-1" checked>
                    <label for="checkbox-6-1">Child option one</label>
                </li>
                <li>
                    <input type="checkbox" name="checkbox-demo" id="checkbox-6-2">
                    <label for="checkbox-6-2">Child option two</label>
                </li>
            </ul>
        </li>
        <li>
            <input type="checkbox" name="checkbox-demo" id="checkbox-7">
            <label for="checkbox-7">Parent option two</label>
        </li>
        <li>
            <input type="checkbox" name="checkbox-demo" id="checkbox-8">
            <label for="checkbox-8">Parent option three</label>
        </li>
    </ul>
</fieldset>
{{< /example >}}

## Alternate markup with hidden fields
This example includes a hidden input in the markup, as some frameworks require. It requires that the input and label be wrapped in a `.rvt-checkbox-wrapper`. Here we are using the wrapper class on a `<li>`, but it will also work with generic elements like a `<div>` and `<span>`.

{{< example lang="html" >}}<fieldset>
    <legend class="rvt-ts-23 rvt-m-bottom-lg">Alternate markup (visually identical)</legend>
    <ul class="rvt-inline-list">
        <li class="rvt-checkbox-wrapper">
            <input type="checkbox" name="checkbox-demo" id="checkbox-9">
            <input type="hidden">
            <label for="checkbox-9">Option one</label>
        </li>
        <li class="rvt-checkbox-wrapper">
            <input type="checkbox" name="checkbox-demo" id="checkbox-10">
            <input type="hidden">
            <label for="checkbox-10">Option two</label>
        </li>
    </ul>
</fieldset>
{{< /example >}}

## When to use
Use checkboxes to allow users to pick zero, one, or many options from a list of values. A checkbox is a good choice when you need to present users a single option that they can turn on or off.

## When to consider something else
When you need to present users with a list of mutually exclusive options and they can select only one option, consider using a list of [radio buttons]({{< ref "components/forms/radio-buttons.md" >}}) or a [select input]({{< ref "components/forms/select-input.md" >}}).

## Checkbox labels
- Write the label so that it describes the selected state of the checkbox
- Write the label as a phrase or an imperative sentence, and use no ending punctuation
  - **Exception:** If a checkbox label also labels a subordinate control that follows it, end the label with a colon
- Use sentence-style capitalization
- For a group of checkboxes, use parallel phrasing and try to keep the length about the same for all labels
- For a group of checkboxes, focus the label text on the differences among the options. If all the options have the same introductory text, move that text to the group label.
- Use positive phrasing. Don't phrase a label so that selecting a checkbox means not to perform an action.
  - **Exception: Don't show this again** checkboxes.

## Checkbox group labels
- Use the group label to explain the purpose of the group, not how to make the selection. Assume that users know how to use checkboxes. For example, don't say, "Select any of the following choices."
- End each label with a colon
- For a selection of one or more dependent choices, explain the requirement on the label
  - Example: Pizza toppings (select one or more)

## Resources
- [Checkboxes vs. Radio Buttons](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)
- [Mozilla Developer Network Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
- [MSDN Design Documentation](https://msdn.microsoft.com/en-us/library/windows/desktop/dn742401.aspx)
- [Indeterminate Checkboxes](https://css-tricks.com/indeterminate-checkboxes/)
