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
        
        this.marker = ko.isObservable(args.marker) ? args.marker : ko.observable(args.marker || cnf.marker || []);
        this.zoom = ko.isObservable(args.zoom) ? args.zoom : ko.observable(args.zoom || cnf.zoom || 17);
        this.popup = ko.isObservable(args.popup) ? args.popup : ko.observable(args.popup || cnf.popup || "");
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
            .setView(this.marker(), this.zoom());
        map.scrollWheelZoom.disable();

        // Add layer
        leaflet.tileLayer("https://b.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(map);  

        // Add marker
        leaflet.marker(this.marker(), {
                icon: L.icon({
                    iconUrl: "img/leaflet/marker-icon.png",
                    iconSize: [25, 41],
                    iconAnchor: [0, 20],
                    popupAnchor: [13, -20]
                })
            })
            .addTo(map)
            .bindPopup(this.popup())
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