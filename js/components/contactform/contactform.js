define([
    "text!./contactform.html",
    "css!./contactform.css",
    "module",
    "knockout",
    "material-components-web"
], (view, css, module, ko, mdc) => {
    //#region [ Fields ]
    
    const global = (function() { return this; })();
    const cnf = module.config();
    
    //#endregion


    //#region [ Constructor ]

    /**
	 * Constructor.
	 *
	 * @param {object} args Arguments.
	 */
    let ContactForm = function (args = {}) {
        console.debug("ContactForm()");
        
        this.title = ko.isObservable(args.title) ? args.title : ko.observable(args.title || cnf.title || "");
        this.target = ko.isObservable(args.target) ? args.target : ko.observable(args.target || cnf.target || "");
        this.name = ko.observable("");
        this.email = ko.observable("");
        this.message = ko.observable("");
    };

    //#endregion


    //#region [ Methods : Public ]

    /**
     * Sends the contact form.
     */
    ContactForm.prototype.send = function() {
        const name = this.name();
        const email = this.email();
        const message = this.message();
        const target = this.target();

        const href = [
            "mailto:" + target + "?",
            "subject=" + encodeURIComponent("Contact from " + name + " <" + email + ">"),
            "&body=" + encodeURIComponent(message)
        ].join("");

        global.location.href = href;
    };


    /**
     * Direct method to receive a descendantsComplete notification.
     * Knockout will call it with the component’s node once all descendants are bound.
     * 
     * @param {element} node Html element. 
     */
    ContactForm.prototype.koDescendantsComplete = function (node) {
        node.firstElementChild
            .querySelectorAll(".mdc-text-field")
            .forEach((n) => mdc.textField.MDCTextField.attachTo(n));
        node.replaceWith(node.firstElementChild);
    };


    /**
     * Dispose.
     */
    ContactForm.prototype.dispose = function () {
        console.debug("~ContactForm()");
    };

    //#endregion


    //#region [ Methods : Static ]

    /**
     * Factory method.
     *
     * @param {object} params Parameters.
     * @param {object} componentInfo Component into.
     * @returns {object} Instance of the model.
     */
    ContactForm.createViewModel = function (params, componentInfo) {
        params = params || {};
        params.element = componentInfo.element.querySelector ? componentInfo.element : componentInfo.element.parentElement || componentInfo.element.parentNode;

        return new ContactForm(params);
    };

    //#endregion

    return {
        viewModel: { 
            createViewModel: ContactForm.createViewModel 
        },
        template: view
    };
});