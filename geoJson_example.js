geoJsonPoint = {
    "type": "FeatureCollection",
    "totalFeatures": 63,
    "features": [{
        "type": "Feature",
        "id": "SEHENSWUERDIGOGD.411107",
        "geometry": {
            "type": "Point",
            "coordinates": [16.372965687537953, 48.19925219338192]
        },
        "geometry_name": "SHAPE",
        "properties": {
            "OBJECTID": 411107,
            "NAME": "Wien Museum Karlsplatz",
            "ADRESSE": "Karlsplatz 8",
            "WEITERE_INF": "http://www.wienmuseum.at",
            "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/wienmuseum.jpg",
            "SE_ANNO_CAD_DATA": null
        }
    }

// Koordinaten ansprechen 
geoJsonPoint.geometry.coordinates;
// X Koordinate 
geoJsonPoint.geometry.coordinates[0];
geoJsonPoint.geometry.coordinates[1];

geoJsonPoint.properties.NAME;
geoJsonPoint.properties.ADRESSE;
geoJsonPoint.properties.WEITERE_INF;
geoJsonPoint.properties.THUMBNAIL;
