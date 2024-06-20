var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_dd_1 = new ol.format.GeoJSON();
var features_dd_1 = format_dd_1.readFeatures(json_dd_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dd_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dd_1.addFeatures(features_dd_1);
var lyr_dd_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dd_1, 
                style: style_dd_1,
                popuplayertitle: "dd",
                interactive: true,
    title: 'dd<br />\
    <img src="styles/legend/dd_1_0.png" /> Kawatuna<br />\
    <img src="styles/legend/dd_1_1.png" /> Lasoani<br />\
    <img src="styles/legend/dd_1_2.png" /> Layana Indah<br />\
    <img src="styles/legend/dd_1_3.png" /> Poboya<br />\
    <img src="styles/legend/dd_1_4.png" /> Talise<br />\
    <img src="styles/legend/dd_1_5.png" /> Talise Valangguni<br />\
    <img src="styles/legend/dd_1_6.png" /> Tanamodindi<br />\
    <img src="styles/legend/dd_1_7.png" /> Tondo<br />\
    <img src="styles/legend/dd_1_8.png" /> <br />'
        });
var format_JL_2 = new ol.format.GeoJSON();
var features_JL_2 = format_JL_2.readFeatures(json_JL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JL_2.addFeatures(features_JL_2);
var lyr_JL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JL_2, 
                style: style_JL_2,
                popuplayertitle: "JL",
                interactive: true,
    title: 'JL<br />\
    <img src="styles/legend/JL_2_0.png" /> <br />\
    <img src="styles/legend/JL_2_1.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JL_2_2.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JL_2_3.png" /> Jalan Lain<br />\
    <img src="styles/legend/JL_2_4.png" /> Jalan Lokal<br />'
        });
var format_RM_3 = new ol.format.GeoJSON();
var features_RM_3 = format_RM_3.readFeatures(json_RM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RM_3.addFeatures(features_RM_3);
var lyr_RM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RM_3, 
                style: style_RM_3,
                popuplayertitle: "RM",
                interactive: true,
    title: 'RM<br />\
    <img src="styles/legend/RM_3_0.png" /> RM. Cafe Sebelah<br />\
    <img src="styles/legend/RM_3_1.png" /> RM. Chikenbim<br />\
    <img src="styles/legend/RM_3_2.png" /> RM. Coto Makasar<br />\
    <img src="styles/legend/RM_3_3.png" /> RM. Hutan Kota<br />\
    <img src="styles/legend/RM_3_4.png" /> RM. Kaledo<br />\
    <img src="styles/legend/RM_3_5.png" /> RM. Kampoeng Nelayan<br />\
    <img src="styles/legend/RM_3_6.png" /> RM. Nyiur Gorontalo<br />\
    <img src="styles/legend/RM_3_7.png" /> RM. Padang<br />\
    <img src="styles/legend/RM_3_8.png" /> RM. Pariangan Bandung<br />\
    <img src="styles/legend/RM_3_9.png" /> RM. Radja Penyet<br />\
    <img src="styles/legend/RM_3_10.png" /> RM. Raja Mujair Palu<br />\
    <img src="styles/legend/RM_3_11.png" /> RM. Simpang Empat Maleo<br />\
    <img src="styles/legend/RM_3_12.png" /> RM. Sinar Minang<br />\
    <img src="styles/legend/RM_3_13.png" /> RM.Santai<br />\
    <img src="styles/legend/RM_3_14.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_dd_1.setVisible(true);lyr_JL_2.setVisible(true);lyr_RM_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_dd_1,lyr_JL_2,lyr_RM_3];
lyr_dd_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_JL_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_RM_3.set('fieldAliases', {'Id': 'Id', 'RM': 'RM', });
lyr_dd_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_JL_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_RM_3.set('fieldImages', {'Id': 'Range', 'RM': 'TextEdit', });
lyr_dd_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_JL_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_RM_3.set('fieldLabels', {'Id': 'no label', 'RM': 'inline label - always visible', });
lyr_RM_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});