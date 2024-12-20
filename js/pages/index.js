define([
    "knockout", 
    "module"
], (ko, module) => {
    //#region [ Fields ]

    const global = (function () { return this; })();
    const doc = global.document;

    //#endregion


    //#region [ Component registration ]

    ko.components.register("msu-menu", { require: "msu/components/menu/menu" });
    ko.components.register("msu-intro", { require: "msu/components/intro/intro" });
    ko.components.register("msu-projects", { require: "msu/components/projects/projects" });
    ko.components.register("msu-timeline", { require: "msu/components/timeline/timeline" });
    ko.components.register("msu-skills", { require: "msu/components/skills/skills" });
    ko.components.register("msu-certifications", { require: "msu/components/certifications/certifications" });
    ko.components.register("msu-contactform", { require: "msu/components/contactform/contactform" });
    ko.components.register("msu-map", { require: "msu/components/map/map" });
    ko.components.register("msu-copyright", { require: "msu/components/copyright/copyright" });
    ko.components.register("msu-footer", { require: "msu/components/footer/footer" });

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
        ko.applyBindings(module.config(), doc.body, (context) => {
            //context.router = router;
        });
    });

    //#endregion
});