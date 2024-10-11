define([
    "knockout", 
    "module"
], (ko, module) => {
    //#region [ Fields ]

    const global = (function () { return this; })();
    const doc = global.document;

    //#endregion


    //#region [ Component registration ]

    //ko.components.register("my-gantt-api", { require: "my/components/gantt/api/api" });
    //ko.components.register("my-gantt-hub", { require: "my/components/gantt/hub/hub" });

    //#endregion


    //#region [ Methods ]

    /**
     * Fires function when DOM is ready.
     *
     * @param {function} fn Function.
     */
    const ready = (fn) => {
        if (doc.attachEvent ? (doc.readyState === "complete") : (doc.readyState !== "loading")) {
            fn();
            return;
        }

        doc.addEventListener("DOMContentLoaded", fn);
    };

    //#endregion


    //#region [ Start ]

    ready(() => {
        console.warn("ready", module.config());
        // // Start knockout
        // ko.applyBindings({
        //     lang: i18n.language,
        //     router: router,
        //     query: query,
        //     hash: hash,
        //     projectId: vss.getWebContext().project.id,
        //     projectName: vss.getWebContext().project.name,
        //     collectionUri: webContext.collection.uri,
        //     witClient: WorkItemTrackingClient.getClient()                
        // }, doc.body, function (context) {
        //     context.router = router;

        //     // Notify about success
        //     vss.notifyLoadSucceeded();
        // });
    });

    //#endregion
});