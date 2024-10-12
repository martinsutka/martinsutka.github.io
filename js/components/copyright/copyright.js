define([
    "text!./copyright.html",
    "css!./copyright.css",
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
    let Copyright = function (args = {}) {
        console.debug("Copyright()");
    };

    //#endregion


    //#region [ Methods : Public ]

    /**
     * Direct method to receive a descendantsComplete notification.
     * Knockout will call it with the component’s node once all descendants are bound.
     * 
     * @param {element} node Html element. 
     */
    Copyright.prototype.koDescendantsComplete = function (node) {
        node.replaceWith(node.firstElementChild);
    };


    /**
     * Dispose.
     */
    Copyright.prototype.dispose = function () {
        console.log("~Copyright()");
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
    Copyright.createViewModel = function (params, componentInfo) {
        params = params || {};
        params.element = componentInfo.element.querySelector ? componentInfo.element : componentInfo.element.parentElement || componentInfo.element.parentNode;

        return new Copyright(params);
    };

    //#endregion

    return {
        viewModel: { 
            createViewModel: Copyright.createViewModel 
        },
        template: view
    };
});