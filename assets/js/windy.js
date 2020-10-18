const options = {
    // Required: API key
    key: 'xUyE8hZvN7f9qto211mWFdWN345I0O0S', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: -23.627,
    lon: -46.635,
    zoom: 5,

    timestamp: Date.now() + 3 * 24 * 60 * 60 * 1000,

    hourFormat: '24h',
};

// Initialize Windy API
windyInit(options, windyAPI => {
    const { overlays, broadcast } = windyAPI;

    // Wind velocity unit
    overlays.wind.setMetric('m/s');
    //overlays.wind.setMetric('km/h');

    // Pressure unit
    

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([-23.627, -46.635])
        .setContent('São Paulo')
        .openOn(map);

});



