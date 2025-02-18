

import { ComposableMap, Geographies, Geography, Graticule } from "react-simple-maps";
const geoUrl = "https://unpkg.com/world-atlas@2/countries-50m.json";
export default function AttackLocationMap() {
  return (
        <ComposableMap
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 147,
          }}
          style={{ width: "100%", height: "auto" }}
        >
          <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
  );
}
