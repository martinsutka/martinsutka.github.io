define([
    "text!./footer.html",
    "css!./footer.css",
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
    let Footer = function (args = {}) {
        console.debug("Footer()");
    };

    //#endregion


    //#region [ Methods : Public ]

    /**
     * Direct method to receive a descendantsComplete notification.
     * Knockout will call it with the component’s node once all descendants are bound.
     * 
     * @param {element} node Html element. 
     */
    Footer.prototype.koDescendantsComplete = function (node) {
        node.replaceWith(node.firstElementChild);
    };


    /**
     * Dispose.
     */
    Footer.prototype.dispose = function () {
        console.debug("~Footer()");
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
    Footer.createViewModel = function (params, componentInfo) {
        params = params || {};
        params.element = componentInfo.element.querySelector ? componentInfo.element : componentInfo.element.parentElement || componentInfo.element.parentNode;

        return new Footer(params);
    };

    //#endregion

    return {
        viewModel: { 
            createViewModel: Footer.createViewModel 
        },
        template: view
    };
});