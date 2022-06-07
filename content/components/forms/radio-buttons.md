---
title: "Radio buttons"
asOf: 1.0.0
description: "Radio buttons allow users to select a single value out of a set number of choices."
status: "Ready"
---
{{< alert variant="warning" title="Migrating to Rivet 2" >}}
This version of Rivet is deprecated. [View the radio input documentation on the Rivet 2 website](https://v2.rivet.iu.edu/docs/components/radio-input/).
{{< /alert >}}

## Inline radios example
{{< example lang="html" >}}<form>
    <fieldset>
        <legend class="sr-only">Radio inputs inline</legend>
        <ul class="rvt-inline-list">
            <li>
                <input type="radio" name="radio-demo" id="radio-1">
                <label for="radio-1" class="rvt-m-right-md">Option one</label>
            </li>
            <li>
                <input type="radio" name="radio-demo" id="radio-2">
                <label for="radio-2">Option two</label>
            </li>
        </ul>
    </fieldset>
</form>
{{< /example >}}

## Radio list example
{{< example lang="html" >}}<form>
    <fieldset>
        <legend class="sr-only">Radio list</legend>
        <ul class="rvt-plain-list">
            <li>
                <input type="radio" name="radio-demo-2" id="radio-3">
                <label for="radio-3" class="rvt-m-right-sm">Option one</label>
            </li>
            <li>
                <input type="radio" name="radio-demo-2" id="radio-4">
                <label for="radio-4">Option two</label>
            </li>
            <li>
                <input type="radio" name="radio-demo-2" id="radio-4-disabled" disabled>
                <label for="radio-4-disabled">Option three disabled</label>
            </li>
            <li>
                <input type="radio" name="radio-demo-2" id="radio-5" disabled checked>
                <label for="radio-5">Option four checked and disabled</label>
            </li>
        </ul>
    </fieldset>
</form>
{{< /example >}}

## Alternate markup with hidden fields
This example includes a hidden input in the markup, as some frameworks require. It requires that the input and label be wrapped in a `.rvt-radio-wrapper`. Here we are using the wrapper class on a `<li>`, but it will also work with generic elements like a `<div>` and `<span>`.

{{< example lang="html" >}}<fieldset>
    <legend class="rvt-ts-23 rvt-m-bottom-lg">Radio inputs inline</legend>
    <ul class="rvt-inline-list">
        <li class="rvt-radio-wrapper">
            <input type="radio" name="radio-demo" id="radio-6">
            <input type="hidden">
            <label for="radio-6">Option one</label>
        </li>
        <li class="rvt-radio-wrapper">
            <input type="radio" name="radio-demo" id="radio-7">
            <input type="hidden">
            <label for="radio-7">Option two</label>
        </li>
    </ul>
</fieldset>
{{< /example >}}

## When to use
Use radio button when you need to present users with a few mutually exclusive choices and they can only select one option.

## When to consider something else
When you have a longer list of mutually exclusive options (for example, a list of 50 states), consider using a [select input]({{< relref "select-input.md" >}}).


## Radio button labels
- Write the label as a phrase, not as a sentence, and use no ending punctuation
- Use parallel phrasing between related radio inputs, and try to keep the length about the same for all labels
- Focus the label text on the differences among the options. If all the options have the same introductory text, move that text to the group label.
- Describe just the option with the label. Keep labels brief so it's easy to refer to them in messages and documentation. If the option requires further explanation, provide the explanation in a static text control using complete sentences and ending punctuation.
- Use sentence-style capitalization

## Radio button group labels
- Use the group label to explain the purpose of the group, not how to make the selection. Assume that users know how to use radio buttons.
- All radio button groups need labels. Write the label as a word or phrase, not as a sentence, ending with a colon using static text or a ``` <legend> ```, when using a fieldset to group radios.

## Resources
- [Checkboxes vs. Radio Buttons](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)
- [Mozilla Developer Network Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
- [MSDN Design Documentation](https://msdn.microsoft.com/en-us/library/windows/desktop/dn742436.aspx)
