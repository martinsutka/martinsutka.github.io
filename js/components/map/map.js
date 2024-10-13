define([
    "text!./map.html",
    "css!./map.css",
    "module",
    "knockout",
    "leaflet"
], (view, css, module, ko, leaflet) => {
    //#region [ Fields ]
    
    const cnf = module.config();
    
    //#endregion


    //#region [ Constructor ]

    /**
	 * Constructor.
	 *
	 * @param {object} args Arguments.
	 */
    let Map = function (args = {}) {
        console.debug("Map()");
        
        //this.title = ko.isObservable(args.title) ? args.title : ko.observable(args.title || cnf.title || "");
    };

    //#endregion


    //#region [ Methods : Public ]

    /**
     * Direct method to receive a descendantsComplete notification.
     * Knockout will call it with the component’s node once all descendants are bound.
     * 
     * @param {element} node Html element. 
     */
    Map.prototype.koDescendantsComplete = function (node) {
        // Create map
        const map = leaflet
            .map(node.firstElementChild)
            .setView([48.156220, 17.141770], 17);
        map.scrollWheelZoom.disable();

        // Add layer
        leaflet.tileLayer("https://b.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(map);  

        // Add marker
        leaflet.marker([48.156220, 17.141770], {
                icon: L.icon({
                    iconUrl: "img/leaflet/marker-icon.png",
                    iconSize: [25, 41],
                    iconAnchor: [0, 20],
                    popupAnchor: [13, -20]
                })
            })
            .addTo(map)
            .bindPopup("<strong>EmaIT s.r.o.</strong><br>Líščie Nivy 25, 821 08 Ružinov")
            .openPopup();

        node.replaceWith(node.firstElementChild);
    };


    /**
     * Dispose.
     */
    Map.prototype.dispose = function () {
        console.debug("~Map()");
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
    Map.createViewModel = function (params, componentInfo) {
        params = params || {};
        params.element = componentInfo.element.querySelector ? componentInfo.element : componentInfo.element.parentElement || componentInfo.element.parentNode;

        return new Map(params);
    };

    //#endregion

    return {
        viewModel: { 
            createViewModel: Map.createViewModel 
        },
        template: view
    };
});