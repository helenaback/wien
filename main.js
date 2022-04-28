/* OGD Wien Beispiel */

let stephansdom = {
    lat: 48.208493, 
    lng: 16.373118,
    title: "Stephansdom"

};

let starLayer = L.tileLayer.provider("BasemapAT.grau");

/*Verweis auf div im html*/
let map = L.map("map", {
    center: [ stephansdom.lat, stephansdom.lng],
    zoom: 12, 
    layers: [starLayer
    ],

});

let layerControl = L.control.layers({
    "BasemapAT Grau": startLayer, 
}).addTo(map);