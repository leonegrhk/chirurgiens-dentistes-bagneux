var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CommunedeBagneux_1 = new ol.format.GeoJSON();
var features_CommunedeBagneux_1 = format_CommunedeBagneux_1.readFeatures(json_CommunedeBagneux_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunedeBagneux_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunedeBagneux_1.addFeatures(features_CommunedeBagneux_1);
var lyr_CommunedeBagneux_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunedeBagneux_1, 
                style: style_CommunedeBagneux_1,
                popuplayertitle: 'Commune de Bagneux',
                interactive: false,
                title: '<img src="styles/legend/CommunedeBagneux_1.png" /> Commune de Bagneux'
            });
var format_Chirurgiensdentistesindividuels_2 = new ol.format.GeoJSON();
var features_Chirurgiensdentistesindividuels_2 = format_Chirurgiensdentistesindividuels_2.readFeatures(json_Chirurgiensdentistesindividuels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chirurgiensdentistesindividuels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chirurgiensdentistesindividuels_2.addFeatures(features_Chirurgiensdentistesindividuels_2);
var lyr_Chirurgiensdentistesindividuels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chirurgiensdentistesindividuels_2, 
                style: style_Chirurgiensdentistesindividuels_2,
                popuplayertitle: 'Chirurgiens-dentistes individuels',
                interactive: true,
                title: '<img src="styles/legend/Chirurgiensdentistesindividuels_2.png" /> Chirurgiens-dentistes individuels'
            });
var format_CentreMunicipaldeSantCMS_3 = new ol.format.GeoJSON();
var features_CentreMunicipaldeSantCMS_3 = format_CentreMunicipaldeSantCMS_3.readFeatures(json_CentreMunicipaldeSantCMS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentreMunicipaldeSantCMS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentreMunicipaldeSantCMS_3.addFeatures(features_CentreMunicipaldeSantCMS_3);
var lyr_CentreMunicipaldeSantCMS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentreMunicipaldeSantCMS_3, 
                style: style_CentreMunicipaldeSantCMS_3,
                popuplayertitle: 'Centre Municipal de Santé (CMS)',
                interactive: true,
                title: '<img src="styles/legend/CentreMunicipaldeSantCMS_3.png" /> Centre Municipal de Santé (CMS)'
            });
var format_Exercicecollectif_4 = new ol.format.GeoJSON();
var features_Exercicecollectif_4 = format_Exercicecollectif_4.readFeatures(json_Exercicecollectif_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Exercicecollectif_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exercicecollectif_4.addFeatures(features_Exercicecollectif_4);
var lyr_Exercicecollectif_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exercicecollectif_4, 
                style: style_Exercicecollectif_4,
                popuplayertitle: 'Exercice collectif',
                interactive: true,
    title: 'Exercice collectif<br />\
    <img src="styles/legend/Exercicecollectif_4_0.png" /> 3<br />\
    <img src="styles/legend/Exercicecollectif_4_1.png" /> 5<br />\
    <img src="styles/legend/Exercicecollectif_4_2.png" /> 7<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_CommunedeBagneux_1.setVisible(true);lyr_Chirurgiensdentistesindividuels_2.setVisible(true);lyr_CentreMunicipaldeSantCMS_3.setVisible(true);lyr_Exercicecollectif_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CommunedeBagneux_1,lyr_Chirurgiensdentistesindividuels_2,lyr_CentreMunicipaldeSantCMS_3,lyr_Exercicecollectif_4];
lyr_CommunedeBagneux_1.set('fieldAliases', {'dep': 'dep', 'insee_com': 'insee_com', 'nom_com': 'nom_com', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'typ_iris': 'typ_iris', 'POP65P': 'POP65P', 'part pop65': 'part pop65', });
lyr_Chirurgiensdentistesindividuels_2.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Etablissement': 'Etablissement', 'Prise en charge d\'enfants :': 'Prise en charge d\'enfants :', 'Adresse :': 'Adresse :', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CentreMunicipaldeSantCMS_3.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Etablissement :': 'Etablissement :', 'Adresse :': 'Adresse :', 'Nombre de chirurgiens-dentistes :': 'Nombre de chirurgiens-dentistes :', 'Prise en charge d\'enfants :': 'Prise en charge d\'enfants :', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Exercicecollectif_4.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Etablissement :': 'Etablissement :', 'Adresse :': 'Adresse :', 'Nombre de chirurgiens-dentistes :': 'Nombre de chirurgiens-dentistes :', 'Prise en charge d\'enfants :': 'Prise en charge d\'enfants :', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CommunedeBagneux_1.set('fieldImages', {'dep': 'TextEdit', 'insee_com': 'TextEdit', 'nom_com': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'typ_iris': 'TextEdit', 'POP65P': 'TextEdit', 'part pop65': 'TextEdit', });
lyr_Chirurgiensdentistesindividuels_2.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Etablissement': 'TextEdit', 'Prise en charge d\'enfants :': 'TextEdit', 'Adresse :': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CentreMunicipaldeSantCMS_3.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Etablissement :': 'TextEdit', 'Adresse :': 'TextEdit', 'Nombre de chirurgiens-dentistes :': 'Range', 'Prise en charge d\'enfants :': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Exercicecollectif_4.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Etablissement :': 'TextEdit', 'Adresse :': 'TextEdit', 'Nombre de chirurgiens-dentistes :': 'Range', 'Prise en charge d\'enfants :': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CommunedeBagneux_1.set('fieldLabels', {'dep': 'no label', 'insee_com': 'no label', 'nom_com': 'no label', 'iris': 'no label', 'code_iris': 'no label', 'nom_iris': 'no label', 'typ_iris': 'no label', 'POP65P': 'no label', 'part pop65': 'no label', });
lyr_Chirurgiensdentistesindividuels_2.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'hidden field', 'Nom': 'hidden field', 'Etablissement': 'hidden field', 'Prise en charge d\'enfants :': 'inline label - always visible', 'Adresse :': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_CentreMunicipaldeSantCMS_3.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Etablissement :': 'inline label - always visible', 'Adresse :': 'inline label - always visible', 'Nombre de chirurgiens-dentistes :': 'inline label - always visible', 'Prise en charge d\'enfants :': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Exercicecollectif_4.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Etablissement :': 'inline label - always visible', 'Adresse :': 'inline label - always visible', 'Nombre de chirurgiens-dentistes :': 'inline label - always visible', 'Prise en charge d\'enfants :': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Exercicecollectif_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});