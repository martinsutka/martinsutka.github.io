define([
    "text!./menu.html",
    "css!./menu.css",
    "module",
    "knockout",
    "material-components-web"
], (view, css, module, ko, mdc) => {
    //#region [ Fields ]
    
    const cnf = module.config();
    const global = (function() { return this; })();
    const doc = global.document;
    
    //#endregion


    //#region [ Constructor ]

    /**
	 * Constructor.
	 *
	 * @param {object} args Arguments.
	 */
    let Menu = function (args = {}) {
        console.debug("Menu()");

        this.drawer = null;
        this.items = ko.isObservableArray(args.items) ? args.items : ko.observableArray(args.items || cnf.items || []);
    };

    //#endregion


    //#region [ Methods : Public ]

    /**
     * Scrolls the target block into view .
     *  
     * @param {object} model Current view model.
     * @param {object} e Event arguments. 
     */
    Menu.prototype.show = function (model, e) {
        e.preventDefault();
        const target = doc.querySelector(e.target.getAttribute("href"));

        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }

        return false;
    };


    /**
     * Direct method to receive a descendantsComplete notification.
     * Knockout will call it with the component’s node once all descendants are bound.
     * 
     * @param {element} node Html element. 
     */
    Menu.prototype.koDescendantsComplete = function (node) {
        const root = node.firstElementChild;
        this.drawer = mdc.drawer.MDCDrawer.attachTo(root.querySelector(".mdc-drawer"));

        node.replaceWith(root);
    };


    /**
     * Dispose.
     */
    Menu.prototype.dispose = function () {
        console.debug("~Menu()");
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
    Menu.createViewModel = function (params, componentInfo) {
        params = params || {};
        params.element = componentInfo.element.querySelector ? componentInfo.element : componentInfo.element.parentElement || componentInfo.element.parentNode;

        return new Menu(params);
    };

    //#endregion

    return {
        viewModel: { 
            createViewModel: Menu.createViewModel 
        },
        template: view
    };
});