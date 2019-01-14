---
title: "Panels"
description: "Use panels to help group content visually or call attention to parts of your application."
requiresJs: false
status: "Deprecated"
---
{{< alert variant="danger" title="The Panel component is deprecated" >}}
The _panel_ component will be removed in the next major version of Rivet in favor of the new box component. See [the box component documentation]({{< ref "/components/layout/box" >}}) for more information.
{{< /alert >}}

## Default panel
The default panel in Rivet has light gray background that can be used to help call out content against the default white stage area.

{{< example lang="html" >}}<div class="rvt-panel">
    <p class="rvt-m-all-remove">Voluptates quas voluptas a est est ut nisi. Laborum debitis perferendis voluptatem. Ut nemo sint itaque qui harum. Id unde qui architecto praesentium quo adipisci vero. Eaque deserunt voluptatum delectus eveniet quas aut modi quo. Exercitationem non voluptatem temporibus.</p>
</div>
{{< /example >}}

## Light modifier
You can also create a panel with a white background by adding the `rvt-panel--light` modifier. The light panel can be used when your application has a light gray background.

{{< example lang="html" background="#f7f7f7" >}}
<div class="rvt-panel rvt-panel--light">
    <p class="rvt-m-all-remove">Voluptates quas voluptas a est est ut nisi. Laborum debitis perferendis voluptatem. Ut nemo sint itaque qui harum. Id unde qui architecto praesentium quo adipisci vero. Eaque deserunt voluptatum delectus eveniet quas aut modi quo. Exercitationem non voluptatem temporibus.</p>
</div>
{{< /example >}}
