﻿define([
    "text!./timeline.html",
    "css!./timeline.css",
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
    let Timeline = function (args = {}) {
        console.debug("Timeline()");
        
        this.title = ko.isObservable(args.title) ? args.title : ko.observable(args.title || cnf.title || "");
        this.items = ko.isObservableArray(args.items) ? args.items : ko.observableArray(args.items || cnf.items || []);
    };

    //#endregion


    //#region [ Methods : Public ]

    /**
     * Direct method to receive a descendantsComplete notification.
     * Knockout will call it with the component’s node once all descendants are bound.
     * 
     * @param {element} node Html element. 
     */
    Timeline.prototype.koDescendantsComplete = function (node) {
        node.replaceWith(node.firstElementChild);
    };


    /**
     * Dispose.
     */
    Timeline.prototype.dispose = function () {
        console.debug("~Timeline()");
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
    Timeline.createViewModel = function (params, componentInfo) {
        params = params || {};
        params.element = componentInfo.element.querySelector ? componentInfo.element : componentInfo.element.parentElement || componentInfo.element.parentNode;

        return new Timeline(params);
    };

    //#endregion

    return {
        viewModel: { 
            createViewModel: Timeline.createViewModel 
        },
        template: view
    };
});