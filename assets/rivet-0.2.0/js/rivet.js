/*! Rivet - @version v0.2.0 */

var Alert = (function() {

    /**
     * Set up locally-scoped variables
     */
    var dismissButtons = document.querySelectorAll('.alert__dismiss');

    var init = function() {
        // Check to make sure there are dismissable alerts in the DOM.
        if(dismissButtons.length != 0) {
            _bindUiActions(dismissButtons);
        }
    }

    /**
     * @param {object} els - HTML elements to bind the actions to.
     */
    var _bindUiActions = function(els) {
        for (var i = 0; i < els.length; i++) {
            els[i].addEventListener('click', function() {
                dismissAlert(this);
            });
        }
    }

    /**
     * @param {object} context - the HTML element that was clicked to
     * to dimiss the alert
     */
    var dismissAlert = function(context) {
        var elToDismiss = context.parentNode;
        elToDismiss.parentNode.removeChild(elToDismiss);
    }

    // Expose public methods
    return {
        init: init,
        dismiss: dismissAlert
    }

})();

var Drawer = (function() {
    /**
     * Set everything up
     */
    var drawerTrigger = document.querySelector('[data-drawer-trigger]');
    var drawerSubnavTriggers = document.querySelectorAll('[data-subnav-trigger]');
    var drawerId = drawerTrigger ? drawerTrigger.getAttribute('data-drawer-trigger') : null;
    var drawerEl = document.querySelector('#' + drawerId);
    var drawerBottomClose = drawerEl ? drawerEl.querySelector('.rvt-drawer__bottom-close') : null;

    var init = function() {
        // Check to make sure the drawer is present in the DOM
        if(drawerTrigger) {
            _bindUiActions();
        }

    }

    var _bindUiActions = function() {
        drawerTrigger.addEventListener('click', function() {
            // Togle aria-exapnded state of the button
            toggleBtnState(this);
            // Toggle the aria-hidden state of the drawer
            toggleHiddenState(drawerEl);
            // Toggle button open class
            this.classList.toggle('is-open');
        });

        for(var i = 0; i < drawerSubnavTriggers.length; i++) {
            drawerSubnavTriggers[i].addEventListener('click', function() {
                var subnavID = this.getAttribute('data-subnav-trigger');
                var subnavEl = document.querySelector('#' + subnavID);
                // Toggle the aria-expanded state of the button
                toggleBtnState(this);
                // Toggle the aria-hidden attribute of the target subnav
                toggleHiddenState(subnavEl);
            });
        }
        
        // Make sure the extra close button is present in the DOM
        if (drawerBottomClose) {
            drawerBottomClose.addEventListener('click', function () {
                toggleHiddenState(drawerEl);
                drawerTrigger.classList.toggle('is-open');
            });
        }
    }

    var toggleBtnState = function(buttonEl) {
        var isExpanded = buttonEl.getAttribute('aria-expanded') === 'true' || false;
        buttonEl.setAttribute('aria-expanded', !isExpanded);
    }

    var toggleHiddenState = function(itemToToggle) {
        var itemState = itemToToggle.getAttribute('aria-hidden') === 'true' || false;
        itemToToggle.setAttribute('aria-hidden', !itemState);
    }

    return {
        init: init
    }
})();

/**
 * Same here. This is a start, but needs more work.
 */

var Dropdown = (function() {

    /**
     * This is the initial set up that caches selectors and properties
     * from the DOM
     */
    var btnTriggers = document.querySelectorAll('[data-dropdown-trigger]');
    var menus = document.querySelectorAll('.dropdown__menu');
    var expanded = 'aria-expanded';
    var hidden = 'aria-hidden';


    /**
     * The init checks to make sure that there are any dropdown buttons
     * on the page then kicks off all the event listeners.
     */
    var init = function() {
        // Check to make sure there are doropdown menus in the DOM.
        if(btnTriggers.length != 0 && menus.length != 0) {
            bindUiActions();
        }
    }


    /**
     * The bindUiActions function applys the event listeners and passes in
     * the other functions that actually handle the events.
     */
    var bindUiActions = function() {
        /**
         * Main toggle action
         */
        for( var i = 0; i < btnTriggers.length; i++) {
            btnTriggers[i].addEventListener('click', function(e) {
                // Stop the event from bubling up.
                e.stopPropagation();
                e.preventDefault();
                var dropdownTrigger = this;
                var dropdownID = dropdownTrigger.getAttribute('data-dropdown-trigger');
                var dropdownEl = document.querySelector('#' + dropdownID);

                // Close all of the menus except for this one
                closeAllMenus(dropdownEl);
                // Toggle the aria-expanded state of the button that was clicked.
                toggleBtnState(dropdownTrigger);
                // Toggle the aria-hidden state of the corresponding dropdown.
                toggleMenuState(dropdownEl);
            });
        }

        /**
         * Stop click on dropdown menus from bubling up
         */

        for (var i = 0; i < menus.length; i ++) {
            menus[i].addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }

        /**
         * Listen for clicks outside of the dropdown button and close all
         * opend dropdown menus.
         */

        document.addEventListener('click', function() {
            closeAllMenus();
        });
    }


    // Toggles the aria-expanded state of the target button

    var toggleBtnState = function(buttonEl) {
        var isExpanded = buttonEl.getAttribute(expanded) === 'true' || false;
        buttonEl.setAttribute(expanded, !isExpanded);
    }


    // Toggles the aria-hidden state of the dropdown menu

    var toggleMenuState = function(dropdownMenuEl) {
        var menuState = dropdownMenuEl.getAttribute(hidden) === 'true' || false;
        dropdownMenuEl.setAttribute(hidden, !menuState);
    }


    /**
     * Closes any open dropdown menus and sets the corresponding trigger's
     * aria-exapnded state back to "false"
     */

    var closeAllMenus = function(menuToLeaveOpen) {
        for(var i = 0; i < menus.length; i ++) {
            if(menuToLeaveOpen != menus[i]) {
                menus[i].setAttribute(hidden, 'true');
                var triggerElData = menus[i].getAttribute('id');
                var triggerEl = document.querySelector('[data-dropdown-trigger="' + triggerElData + '"]');
                triggerEl.setAttribute(expanded, 'false');
            }
        }
    }



    /**
     * This return statement exposes the functions that need to be availble
     * to initialize the everything and provide programatic access to the
     * closeAllMenus function if needed.
     */

    return {
        init: init,
        closeAll: closeAllMenus,
        toggleMenu: toggleMenuState
    }

})();

/**
 * A lot of this is largely based on the great work in this article:
 * https://bitsofco.de/accessible-modal-modal/
 */

var Modal = (function() {

    /**
     * Set up
     */

    var modals = document.querySelectorAll('.modal');
    var modalTriggers = document.querySelectorAll('[data-modal-trigger]');
    // Make modalTriggers an array
    modalTriggers = Array.prototype.slice.call(modalTriggers);
    var allFocusableEls = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';

    /**
     * We need these to pass around values that multiple
     * 'Modal' methods will need access to.
     */

    var isDialog;
    var focusedElBeforeOpen;
    var focusableEls;
    var firstFocusableEl;
    var lastFocusableEl;


    /**
     * Kick everything off here.
     */
    var init = function() {
        // Check to see if any modals exist on the page.
        if(modals.length != 0 && modalTriggers.length != 0) {
            _bindUiActions();
        }
    }


    var _bindUiActions = function() {
        modalTriggers.forEach(function(el) {

            el.addEventListener('click', function() {

                // Set up
                var modalID = el.getAttribute('data-modal-trigger');
                var modalEl = document.querySelector('#' + modalID);
                var modalElInner = modalEl.querySelector('.modal__inner');


                // Get all the close triggers for the current modal
                var modalCloseButtons = modalEl.querySelectorAll('[data-modal-close]');
                modalCloseButtons = Array.prototype.slice.call(modalCloseButtons);
                
                modalCloseButtons.forEach(function(el) {
                    el.addEventListener('click', function() {
                        closeModal(modalEl);
                    });
                });


                // Stops clicking on the actual modal stuff from bubbling up.
                modalElInner.addEventListener('click', function(e) {
                    e.stopPropagation();
                });


                // Get anything that's focusable
                focusableEls = modalEl.querySelectorAll(allFocusableEls);

                // Make focusableEls an Arry so we can do Array stuff with it.
                focusableEls = Array.prototype.slice.call(focusableEls);

                /**
                 * Find the first and last focusable element in the array and
                 * store them in variable where other methods can find them.
                 */
                firstFocusableEl = focusableEls[0];
                lastFocusableEl = focusableEls[focusableEls.length - 1];


                // Open the modal
                openModal(modalEl);


                // Listen for tab or escape keys and handle events.
                modalEl.addEventListener('keydown', function(e) {
                    _handleKeyDown(modalEl, e);
                });
            });
        });
    }

    /**
     * @param {object} modalToOpen - The current HTML modal element to open.
     */
    var openModal = function(modalToOpen) {
        // Is the modal a modal dialog i.e. clicking background doesn't close?
        isDialog = modalToOpen.getAttribute('data-modal-dialog');

        /**
         * Add a class to the body that we use as a hook to allow
         * the modal to scroll.
         */
        document.body.classList.add('modal-open');

        /**
         * Store a reference to modal trigger that was clicked so that
         * we can return focus to it later.
         */
        focusedElBeforeOpen = document.activeElement;

        // Remove aria-hidden attr to show the modal.
        modalToOpen.removeAttribute('aria-hidden');

        /**
         * If the modal isn't a modal dialog allow user to click
         * the background to close.
         */
        if(!isDialog) {
            // Hide the modal if use clicks on background.
            modalToOpen.addEventListener('click', function() {
                closeModal(this);
            });
        }

        // Add focus to the modal that just opened.
        modalToOpen.focus();

    }

    /**
     * @param {object} modalToHandle - The current HTML modal element to open.
     * @param {object} e - The event object
     */
    var _handleKeyDown = function(modalToHandle, e) {
        var KEY_TAB = 9;
        var KEY_ESC = 27;

        function handleBackwardTab() {
            if (document.activeElement === firstFocusableEl) {
                e.preventDefault();
                lastFocusableEl.focus();
            }
        }

        function handleForwardTab() {
            if (document.activeElement === lastFocusableEl) {
                e.preventDefault();
                firstFocusableEl.focus();
            }

        }


        switch (e.keyCode) {
            case KEY_TAB:
                if (focusableEls.length === 1) {
                    e.preventDefault();
                    break;
                }
                if (e.shiftKey) {
                    handleBackwardTab();
                } else {
                    handleForwardTab();
                }
                break;

            case KEY_ESC:
                if(!isDialog) {
                    closeModal(modalToHandle);
                }
                break;

            default:
                break;
        }
    }

    /**
     * @param {object} modalToClose - The HTML modal element to close.
     */
    var closeModal = function(modalToClose) {
        document.body.removeAttribute('class');
        modalToClose.setAttribute('aria-hidden', 'true');

        /**
         * Return focus to the modal trigger that originally
         * opened the modal.
         */
        if(focusedElBeforeOpen) {
            focusedElBeforeOpen.focus();
        }
    }


    return {
        init: init,
        open: openModal,
        close: closeModal
    }


})();

/* eslint-disable */
(function() {
    /**
     * Kick off all components
     */
    Alert.init();
    Drawer.init();
    Dropdown.init();
    Modal.init();
})();
/* eslint-enable */
