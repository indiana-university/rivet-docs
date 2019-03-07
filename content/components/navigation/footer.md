---
title: "Footer"
description: "The base footer provides consistent branding in a condensed space below all of your application content."
requiresJs: false
status: "Ready"
---

## About the footer

The Rivet footer contains and provides styles for the IU trident, copyright notice, and any supplemental links needed by your application, such as a privacy notice.

{{< alert variant="warning" title="Lockup change" >}}
The previous version of the footer wrapped the IU trident and copyright in a `div` with the class `.rivet-footer__copyright-lockup`. Due to the change in placement of the copyright details, this `div` and class are no longer necessary. 

We have deprecated the `.rivet-footer__copyright-lockup` class. We recommend updating your application to use the latest version of the footer.
{{< /alert >}}

{{< example lang="html" >}}<footer class="rvt-footer" role="contentinfo">
    <div class="rvt-footer__trident">
        <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25">
            <polygon points="13.33 3.32 13.33 5.21 14.76 5.21 14.76 15.64 11.9 15.64 11.9 1.9 13.33 1.9 13.33 0 6.67 0 6.67 1.9 8.09 1.9 8.09 15.64 5.24 15.64 5.24 5.21 6.67 5.21 6.67 3.32 0 3.32 0 5.21 1.43 5.21 1.43 17.47 3.7 19.91 8.09 19.91 8.09 22.76 6.67 22.76 6.67 25.13 13.33 25.13 13.33 22.76 11.9 22.76 11.9 19.91 16.1 19.91 18.56 17.47 18.56 5.21 20 5.21 20 3.32 13.33 3.32" fill="#900"/>
        </svg>
    </div>
    <ul class="rvt-footer__aux-links">
        <li class="rvt-footer__aux-item">
            <a href="https://accessibility.iu.edu/assistance/">Accessibility</a>
        </li>
        <li class="rvt-footer__aux-item">
            <!-- You can learn more about privacy policies and generate one
                 for your site here:
                 https://protect.iu.edu/online-safety/tools/privacy-notice/index.html -->
            <a href="#0">Privacy Notice</a>
        </li>
        <li class="rvt-footer__aux-item">
            <a href="https://www.iu.edu/copyright/index.html">Copyright</a> &copy; 2019 The Trustees of <a href="https://www.iu.edu/">Indiana University</a>
        </li>
    </ul>
</footer>
{{< /example >}}