define([
    "text!./intro.html",
    "css!./intro.css",
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
    let Intro = function (args = {}) {
        console.debug("Intro()");

        this.title = ko.isObservable(args.title) ? args.title : ko.observable(args.title || cnf.title || "");
        this.description = ko.isObservable(args.description) ? args.description : ko.observable(args.description || cnf.description || "");
        this.image = ko.isObservable(args.image) ? args.image : ko.observable(args.image || cnf.image || "");
    };

    //#endregion


    //#region [ Methods : Public ]

    /**
     * Direct method to receive a descendantsComplete notification.
     * Knockout will call it with the component’s node once all descendants are bound.
     * 
     * @param {element} node Html element. 
     */
    Intro.prototype.koDescendantsComplete = function (node) {
        node.replaceWith(node.firstElementChild);
    };


    /**
     * Dispose.
     */
    Intro.prototype.dispose = function () {
        console.log("~Intro()");
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
    Intro.createViewModel = function (params, componentInfo) {
        params = params || {};
        params.element = componentInfo.element.querySelector ? componentInfo.element : componentInfo.element.parentElement || componentInfo.element.parentNode;

        return new Intro(params);
    };

    //#endregion

    return {
        viewModel: { 
            createViewModel: Intro.createViewModel 
        },
        template: view
    };
});