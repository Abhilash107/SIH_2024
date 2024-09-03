import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import 'maplibre-gl/dist/maplibre-gl.css'; // Correct import for CSS
import './mapstyle.css'; // Custom styles
import { coordinates } from "@maptiler/sdk";

const MAPTILER_API_KEY = "AXZusuZamaFGsiRflWNp"; // Your MapTiler API key
const WEATHER_API_KEY = "715c0cf517b04c0087c105026242308"; // Your Weather API key

const baseMaps = {
  STREETS: {
    style: `https://api.maptiler.com/maps/streets/style.json?key=${MAPTILER_API_KEY}`,
    label: 'Streets',
  },
  WINTER: {
    style: `https://api.maptiler.com/maps/winter/style.json?key=${MAPTILER_API_KEY}`,
    label: 'Winter',
  },
  HYBRID: {
    style: `https://api.maptiler.com/maps/hybrid/style.json?key=${MAPTILER_API_KEY}`,
    label: 'Hybrid',
  },
};

const initialStyle = baseMaps.STREETS.style;

class LayerSwitcherControl {
  constructor(options) {
    this.options = { ...options };
    this.container = document.createElement("div");
    this.container.classList.add("maplibregl-ctrl");
    this.container.classList.add("maplibregl-ctrl-basemaps");
    this.container.classList.add("closed");
    this.container.id = "layer-switcher"; // Add an ID for styling

    switch (this.options.expandDirection || "right") {
      case "top":
        this.container.classList.add("reverse");
        // fall through
      case "down":
        this.container.classList.add("column");
        break;
      case "left":
        this.container.classList.add("reverse");
        // fall through
      case "right":
        this.container.classList.add("row");
        break;
    }

    this.container.addEventListener("mouseenter", () => {
      this.container.classList.remove("closed");
    });

    this.container.addEventListener("mouseleave", () => {
      this.container.classList.add("closed");
    });
  }

  onAdd(map) {
    this.map = map;
    const basemaps = this.options.basemaps;
    Object.keys(basemaps).forEach((layerId) => {
      const base = basemaps[layerId];
      const basemapButton = document.createElement("button");
      basemapButton.textContent = base.label;
      basemapButton.classList.add("basemap-button");
      basemapButton.dataset.id = layerId;
      basemapButton.addEventListener("click", () => {
        const activeElement = this.container.querySelector(".active");
        if (activeElement) {
          activeElement.classList.remove("active");
        }
        basemapButton.classList.add("active");
        map.setStyle(base.style);
      });
      this.container.appendChild(basemapButton);
      if (this.options.initialBasemap === layerId) {
        basemapButton.classList.add("active");
      }
    });
    return this.container;
  }

  onRemove() {
    this.container.parentNode?.removeChild(this.container);
    delete this.map;
  }
}

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: initialStyle,
      center: [78.9629, 20.5937], // Center the map on India
      zoom: 5, // Set a zoom level
      minZoom: 3.5, // Minimum zoom level
    });

    map.on('load', () => {
      // Adding the terrain and 3D buildings
      map.addSource('terrain', {
        type: 'raster-dem',
        url: `https://api.maptiler.com/tiles/terrain-rgb/tiles.json?key=${MAPTILER_API_KEY}`,
        tileSize: 256,
        maxzoom: 14,
      });

      map.setTerrain({ source: 'terrain', exaggeration: 1.5 });

      map.addLayer({
        id: 'india-borders',
        type: 'line',
        source: 'composite', // Assuming 'composite' is the source with your borders data
        'source-layer': 'admin', // Adjust this to the correct layer name containing borders
        paint: {
          'line-color': '#FF0000', // Border color (red in this case)
          'line-width': 45, // Increase the thickness of the border
          'line-opacity': 0.8 // Adjust opacity if needed
        },
        filter: ['==', 'name', 'India'] // Adjust this filter if needed to match the correct feature
      });

      map.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 10, // Changed from 15 to 10 to show buildings at a lower zoom level
        paint: {
          'fill-extrusion-color': '#8A2BE2', // Violet color for the buildings
          'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            6, // Start increasing building height at zoom level 10
            50, // Increase building height to 50 at zoom level 10
            15, 
            ['get', 'height'],
          ],
          'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            10, // Start increasing building base height at zoom level 10
            0,
            15,
            ['get', 'min_height'],
          ],
          'fill-extrusion-opacity': 0.7, // Slightly higher opacity to make buildings more visible
        },
      });

      // Add the LayerSwitcherControl
      const styleSwitcher = new LayerSwitcherControl({ basemaps: baseMaps, initialBasemap: 'STREETS' });
      map.addControl(styleSwitcher, 'bottom-left');

      const locationTags = [
        
        {//BASTAR DUSSEHRA
  name: 'Bastar Dussehra',
  coordinates: [81.9339, 19.2073],
  description: 'Bastar is a district in the state of Chhattisgarh, known for its rich cultural heritage and traditional Dussehra celebrations. <a href="https://heyzine.com/flip-book/d31fdd98cb.html#page/2" target="_blank">Read more</a>',
  imageUrl: 'src/assets/WhatsApp Image 2024-09-01 at 12.14.49 AM.jpeg', // URL of the image file
},
        
        {//	RAYALASEEMA DANCE AND FOOD FEST
          name: 'Rayalaseema Dance  and  Food  Festival',
          coordinates: [79.1003, 13.2172],
          description:'<a href="" target="https://heyzine.com/flip-book/d31fdd98cb.html#page/4">Know more</a>',
          imageUrl:'src/MapImages/rayalseema.jpg'

        },
        {//	KARAM PARAB
          name: 'Karam Parab',
          coordinates: [85.6846, 21.5151],
          description:'<a href="https://heyzine.com/flip-book/d31fdd98cb.html#page/3" target="">Know more</a>',
          imageUrl:'src/MapImages/karamparab.jpg'
        },
        {//KARAM PARAB
          name: 'Karam Parab',
          coordinates: [86.9974, 22.4550],
          
          description:'<a href="https://heyzine.com/flip-book/d31fdd98cb.html#page/3" target="">Read  more</a>',
          imageUrl:'src/MapImages/karamparab.jpg'
        },
        {//KARAM PARAB
          name: 'Karam Parab',
          coordinates: [85.3637, 23.9925],
          description:'<a href="https://heyzine.com/flip-book/d31fdd98cb.html#page/3" target="">Read  more</a>',
          imageUrl:'src/MapImages/karamparab.jpg'
        },
        {//SAMA CHAKEVA
          name: 'Sama Chakeva',
          coordinates: [85.8918, 26.1542],
          description:'<a href="https://heyzine.com/flip-book/1a2fcf3d4d.html#page/2" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/samachakeva.jpg'
        },
        {//THAI PUSAM
          name: 'Thai Pusam',
          coordinates: [80.2705, 13.0843],
         description:'<a href="https://heyzine.com/flip-book/1a2fcf3d4d.html#page/2" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/thaipusam.jpg'
        },
        {//DEHING PATKAI FESTIVAL
          name: 'Dehing Patkai Festival',
          coordinates: [95.3558, 27.4886],
          description:'<a href="https://heyzine.com/flip-book/1a2fcf3d4d.html#page/4" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/dehingpatkai.jpg'
        },
        {//NUMAISH FESTIVAL
          name: 'Numaish  Festival',
          coordinates: [78.4772, 17.4065],
         description:'<a href="https://heyzine.com/flip-book/1a2fcf3d4d.html#page/4" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/numaish.jpg'
        },
        {//PANGSAU PASS WINTER FESTIVAL
          name: 'Pangsau Pass winter Festival',
          coordinates: [96.1258, 27.2935],
         description:'<a href="https://heyzine.com/flip-book/1a2fcf3d4d.html#page/6" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/pangsua.jpg'
        },
        {//TUSU PARAB
          name: 'Tusu Parab',
          coordinates: [85.3096, 23.3441],
         description:'<a href="https://heyzine.com/flip-book/1a2fcf3d4d.html#page/6" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/tusuparab.jpg'
        },
        {//PACHMARHI UTSAV
          name: 'Pachmarhi Utsav',
          coordinates: [78.4346, 22.4674],
          description:'<a href="https://heyzine.com/flip-book/1a2fcf3d4d.html#page/8" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/pachmarhi.jpg'
        },
        {//LOKRANG FESTIVAL
          name: 'Lokrang Festival',
          coordinates: [77.4126, 23.2599],
         description:'<a href="https://heyzine.com/flip-book/1a2fcf3d4d.html#page/8" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/lokrang.jpg'
        },
        {//HORNBILL FESTIVAL
          name: 'Hornbill Festival',
          coordinates: [94.1086, 25.6751],
          description:'<a href="https://heyzine.com/flip-book/1a2fcf3d4d.html#page/10" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/hornbill.jpg'
        },
        { 
          //LATMAR HOLI
        name:'Latmar Holi',
        coordinates:[77.3768,27.6464],
      description:'<a href="https://heyzine.com/flip-book/8e8bedcd5e.html#page/2" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/latmarholi.jpg'



        },
        {//JHANDA FAIR
          name: 'Jhanda Fair',
          coordinates: [78.0322, 30.3165],
         description:'<a href="https://heyzine.com/flip-book/8e8bedcd5e.html#page/2" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/jhandafair.jpg'
        },
        // {
        //   name: 'Hill Miris',
        //   coordinates: [90.6667, 24.35],
        //   link: 'https://en.wikipedia.org/wiki/Hill_Miris',
        // },
     

{//SHIGMO
  name: 'Shigmo',
  coordinates: [73.9283, 15.6928],
  description:'<a href="https://heyzine.com/flip-book/8e8bedcd5e.html#page/4" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/shigmo.jpg'
},
{
  name: 'Shigmo',
  coordinates: [73.9517, 15.5553],
  description:'<a href="https://heyzine.com/flip-book/8e8bedcd5e.html#page/4" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/shigmo.jpg'
},
{
  name: 'Shigmo',
  coordinates: [74.0128, 15.5437],
  description:'<a href="https://heyzine.com/flip-book/8e8bedcd5e.html#page/4" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/shigmo.jpg'
},
{//LUI  NGAI NI
  name: 'Lui Ngai Ni',
  coordinates: [94.0007, 24.3320],
  description:'<a href="https://heyzine.com/flip-book/8e8bedcd5e.html#page/6" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/lungai.jpg'
},
{
  name: 'Lui Ngai Ni',
  coordinates: [93.5012, 24.9898],
  description:'<a href="https://heyzine.com/flip-book/8e8bedcd5e.html#page/6" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/lungai.jpg'
},
{
  name: 'Lui Ngai Ni',
  coordinates: [94.1514, 25.3203],
  description:'<a href="https://heyzine.com/flip-book/8e8bedcd5e.html#page/6" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/lungai.jpg'
},
{
  name: 'Lui Ngai Ni',
  coordinates: [94.3617, 25.0968],
  description:'<a href="https://heyzine.com/flip-book/8e8bedcd5e.html#page/6" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/lungai.jpg'
},
{ //CHAPCHAR KUT
  name: 'Chapchar Kut',
  coordinates: [92.7173, 23.7307],
 description:'<a href="https://heyzine.com/flip-book/8e8bedcd5e.html#page/6" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/chapcharkut.jpg'
},

{//KARAGA FESTIVAL
  name: 'Karaga Festival',
  coordinates: [77.5835, 12.9655],
  description:'<a href="https://heyzine.com/flip-book/e22e726dba.html#page/2" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/karaga.jpg'
},
{//CHANDAN YATRA
  name: 'Chandan Yatra,Puri',
  coordinates: [85.8179, 19.8049],
  description:'<a href="https://heyzine.com/flip-book/e22e726dba.html#page/2" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/chandanyatra.jpg'
},
{//AMBUBACHI MELA
  name: 'Ambubachi Mela',
  coordinates: [91.7055, 26.1664],
  description:'<a href="https://heyzine.com/flip-book/e22e726dba.html#page/4" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/ambubachi.jpg'
},
{//SAKEWA
  name: 'Sakewa',
  coordinates: [88.433, 27.300],
  description:'<a href="https://heyzine.com/flip-book/e22e726dba.html#page/4" target="_blank">Read  more</a>',
          imageUrl:''
},
{//KAVANT MELA
  name: 'Kavant Mela',
  coordinates: [74.0550, 22.0921],
  description:'<a href="https://heyzine.com/flip-book/e22e726dba.html#page/6" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/kavant.jpg'
},

{//PEDAGATTU JATRA
  name: 'Pedagattu Jatra',
  coordinates: [79.6288, 17.1350],
 description:'<a href="https://heyzine.com/flip-book/e22e726dba.html#page/6" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/pedagattu.jpg'
},

//MONSOON

{
  name: 'Tendong Hill',
  coordinates: [88.4081, 27.2061],
  location: 'Namchi',
 description:'<a href="https://heyzine.com/flip-book/d3ba0af3a6.html#page/2" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/tendonglhorumfaat.jpg'
},
{
  name: 'Narali Pournima',
  coordinates: [74.2167, 15.2667],
 description:'<a href="https://heyzine.com/flip-book/d3ba0af3a6.html#page/2" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/naralipournima.jpg'
},
{
  name: 'Raja Parab',
  coordinates: [84.2700, 20.2376],
 description:'<a href="https://heyzine.com/flip-book/d3ba0af3a6.html#page/4" target="_blank">Read  more</a>',
          imageUrl:'src/MapImages/rajaparab.jpg'
}






      ];

      locationTags.forEach((location) => {
        const marker = new maplibregl.Marker({
          color: 'rgba(255, 165, 0, 0.8)', // Orange with 80% opacity
          scale: 0.5, // Scale the marker to 0.5x
        })
          .setLngLat(location.coordinates)
          .setPopup(new maplibregl.Popup({ offset: 25 }) // Offset the popup by 25px
          .setHTML(`
            <h4>${location.name}</h4>
            <p>${location.description}</p>
            <img src="${location.imageUrl}" alt="${location.name} image" style="width: 100px; height: 100px;">
          `))
          .addTo(map);

        marker.getElement().addEventListener('mouseenter', () => {
          map.flyTo({
            center: location.coordinates,
            zoom: 10,
            speed: 0.5,
          });
        });

        marker.getElement().addEventListener('mouseleave', () => {
          map.flyTo({
            center: [78.9629, 20.5937],
            zoom: 5,
            speed: 0.5,
          });
        });
      });

      // Add event listener for weather data
      map.on('mousemove', (e) => {
        const latLng = e.lngLat;
        fetchWeatherData(latLng.lat, latLng.lng)
          .then((data) => setWeatherData(data))
          .catch((error) => console.error('Error fetching weather data:', error));
      });
    });

    return () => map.remove();
  }, []);

  const fetchWeatherData = (lat, lon) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${lat},${lon}`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data);
  };

  return (
    <div>
      <div ref={mapContainerRef} style={{ width: '100%', height: '500px' }} />
      {weatherData && (
        <div style={{ position: 'absolute', top: '10px', right: '10px', padding: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '5px' }}>
          <h4>Current Weather</h4>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};




export default MapComponent;
