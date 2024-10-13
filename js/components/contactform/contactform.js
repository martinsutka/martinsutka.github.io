define([
    "text!./contactform.html",
    "css!./contactform.css",
    "module",
    "knockout"
], (view, css, module, ko) => {
    //#region [ Fields ]
    
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
    };

    //#endregion


    //#region [ Methods : Public ]

    /**
     * Direct method to receive a descendantsComplete notification.
     * Knockout will call it with the component’s node once all descendants are bound.
     * 
     * @param {element} node Html element. 
     */
    ContactForm.prototype.koDescendantsComplete = function (node) {
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