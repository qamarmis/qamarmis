// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"Miles",acronym:"mi"},kilometers:{displayText:"Kilometer",acronym:"km"},feet:{displayText:"Fod",acronym:"fod"},meters:{displayText:"Meter",acronym:"m"}},searchSourceSetting:{searchSourceSettingTabTitle:"S\u00f8gekildeindstillinger",searchSourceSettingTitle:"S\u00f8gekildeindstillinger",searchSourceSettingTitleHintText:"Tilf\u00f8j og konfigur\u00e9r geokodningstjenester eller vektorlag som s\u00f8gekilder. Disse specificerede kilder bestemmer, hvad der kan s\u00f8ges efter i s\u00f8geboksen.",
addSearchSourceLabel:"Tilf\u00f8j s\u00f8gekilde",featureLayerLabel:"Vektorlag",geocoderLabel:"Geokoder",nameTitle:"Navn",generalSettingLabel:"Generel indstilling",allPlaceholderLabel:"Pladsholdertekst for s\u00f8gning efter alle:",allPlaceholderHintText:"Tip: Indtast den tekst, der skal vises som pladsholder, mens der s\u00f8ges i alle lag og geokoder",generalSettingCheckboxLabel:"Vis pop-up for det fundne objekt eller den fundne position",countryCode:"Lande- eller regionskode(r)",countryCodeEg:"f.eks. ",
countryCodeHint:"Hvis denne v\u00e6rdi er tom, bliver der s\u00f8gt efter alle lande og regioner",questionMark:"?",searchInCurrentMapExtent:"S\u00f8g kun inden for den aktuelle kortudstr\u00e6kning",zoomScale:"Zoom-skala",locatorUrl:"Geokodnings-URL",locatorName:"Navn p\u00e5 geokodningsfunktion",locatorExample:"Eksempel",locatorWarning:"Denne version af geokodningstjenesten underst\u00f8ttes ikke. Widget'en underst\u00f8tter Geokodningstjeneste version 10.0 og nyere.",locatorTips:"Forslag er ikke tilg\u00e6ngelige, fordi geokodningstjenesten ikke underst\u00f8tter forslagsfunktionen.",
layerSource:"Lagkilde",setLayerSource:"Angiv lagkilde",setGeocoderURL:"Angiv geokodnings-URL",searchLayerTips:"Forslag er ikke tilg\u00e6ngelige, fordi featuretjenesten ikke underst\u00f8tter forslagsfunktionen.",placeholder:"Pladsholdertekst",searchFields:"S\u00f8gefelter",displayField:"Visningsfelt:",exactMatch:"N\u00f8jagtigt match",maxSuggestions:"Maksimalt antal forslag",maxResults:"Maksimalt antal resultater",enableLocalSearch:"Aktiv\u00e9r lokal s\u00f8gning",minScale:"Min. m\u00e5lestok",
minScaleHint:"N\u00e5r kortm\u00e5lestokken er st\u00f8rre end denne m\u00e5lstok, anvendes lokal s\u00f8gning",radius:"Radius",radiusHint:"Angiver radius for et omr\u00e5de omkring det aktuelle kortcentrum, der benyttes til at booste rangordningen af geokodningsforslag, s\u00e5 de forslag, der ligger t\u00e6ttest p\u00e5 placeringen, returneres f\u00f8rst",meters:"Meter",setSearchFields:"Indstil s\u00f8gefelter",set:"Angiv",fieldName:"Navn",invalidUrlTip:"URL\u2019en ${URL} er ugyldig eller utilg\u00e6ngelig."},
searchSetting:{searchSettingTabTitle:"S\u00f8geindstillinger",defaultBufferDistanceLabel:"Angiv standardbufferafstand",maxResultCountLabel:"Begr\u00e6ns antallet af resultater",maxResultCountHintLabel:"Tip: Angiv det maksimale antal synlige resultater. V\u00e6rdien 1 vil returnere det n\u00e6rmeste objekt",maxBufferDistanceLabel:"Angiv maksimal bufferafstand",bufferDistanceUnitLabel:"Bufferafstandsenheder",defaultBufferHintLabel:"Tip: Angiv standardv\u00e6rdi for bufferskyder",maxBufferHintLabel:"Tip: Angiv maksimal v\u00e6rdi for bufferskyder",
bufferUnitLabel:"Tip: Defin\u00e9r enhed for oprettelse af en buffer",selectGraphicLocationSymbol:"Adresse- eller positionssymbol",graphicLocationSymbolHintText:"Tip: Symbol for s\u00f8gt adresse eller klikket position",fontColorLabel:"V\u00e6lg skrifttypefarve for s\u00f8geresultater",fontColorHintText:"Tip: Skrifttypefarve for s\u00f8geresultater",zoomToSelectedFeature:"Zoom til det valgte objekt",zoomToSelectedFeatureHintText:"Tip: Zoom til det valgte objekt i stedet for til bufferen",intersectSearchLocation:"Return\u00e9r polygon(er), der gennemsk\u00e6rer hinanden",
intersectSearchLocationHintText:"Tip: Return\u00e9r polygon(er), der indeholder den s\u00f8gte position frem for polygoner inden for bufferen",bufferVisibilityLabel:"Indstil buffersynlighed",bufferVisibilityHintText:"Tip: Bufferen vil blive vist p\u00e5 kortet",bufferColorLabel:"Indstil buffersymbol",bufferColorHintText:"Tip: V\u00e6lg bufferens farve og gennemsigtighed",searchLayerResultLabel:"Tegn kun resultater fra valgte lag",searchLayerResultHint:"Tip: Kun de valgte lag i s\u00f8geresultaterne vil blive tegnet p\u00e5 kortet",
showToolToSelectLabel:"Knap til angivelse af placering",showToolToSelectHintText:"Tip: Opretter en knap til angivelse af placering p\u00e5 kortet i stedet for altid at skulle angive placeringen, n\u00e5r der klikkes p\u00e5 kortet",geoDesicParamLabel:"Brug geod\u00e6tisk buffer",geoDesicParamHintText:"Tip: Brug geod\u00e6tisk buffer i stedet for euklidisk buffer (planar)"},layerSelector:{selectLayerLabel:"V\u00e6lg s\u00f8gelag",layerSelectionHint:"Tip: Brug indstillingsknappen til at v\u00e6lge lag(ene)",
addLayerButton:"Indstil"},routeSetting:{routeSettingTabTitle:"Indstillinger for k\u00f8rselsvejledninger",routeServiceUrl:"Rutetjeneste",buttonSet:"Indstil",routeServiceUrlHintText:"Tip: Klik p\u00e5 Indstil for at g\u00e5 til og v\u00e6lge en rutetjeneste",directionLengthUnit:"L\u00e6ngdeenheder for k\u00f8rselsvejledning",unitsForRouteHintText:"Tip: Bruges til at vise enheder for ruten",selectRouteSymbol:"V\u00e6lg symbol for visning af rute",routeSymbolHintText:"Tip: Brug visningslinjesymbolet for ruten",
routingDisabledMsg:"For at aktivere k\u00f8rselsvejledninger skal du s\u00f8rge for, at ruteplanl\u00e6gning er aktiveret i ArcGIS Online-elementet."},networkServiceChooser:{arcgislabel:"Tilf\u00f8j fra ArcGIS Online",serviceURLabel:"Tilf\u00f8j tjeneste-URL",routeURL:"Rute-URL",validateRouteURL:"Bekr\u00e6ft",exampleText:"Eksempel",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",
invalidRouteServiceURL:"Angiv en gyldig rutetjeneste.",rateLimitExceeded:"Begr\u00e6nsning overskredet. Pr\u00f8v igen senere.",errorInvokingService:"Brugernavn eller adgangskode er forkert."},errorStrings:{bufferErrorString:"Angiv en gyldig numerisk v\u00e6rdi.",selectLayerErrorString:"V\u00e6lg de lag, der skal s\u00f8ges i.",invalidDefaultValue:"Standardbufferafstand kan ikke v\u00e6re tom. Angiv bufferafstanden",invalidMaximumValue:"Maksimumbufferafstand kan ikke v\u00e6re tom. Angiv bufferafstanden",
defaultValueLessThanMax:"Angiv standardbufferafstand inden for maksimumgr\u00e6nsen",defaultBufferValueGreaterThanOne:"Standardbufferafstanden kan ikke v\u00e6re mindre end 1",maximumBufferValueGreaterThanOne:"Angiv en maksimumbufferafstand, der er st\u00f8rre end 1",invalidMaximumResultCountValue:"Angiv en gyldig v\u00e6rdi for det maksimale antal resultater",invalidSearchSources:"Ugyldige s\u00f8gekildeindstillinger"},symbolPickerPreviewText:"Forh\u00e5ndsvisning:",_localized:{}}});