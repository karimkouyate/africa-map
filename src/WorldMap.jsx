import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { africaMill } from '@react-jvectormap/africa';
import React from "react";
import { colorScale, countries, missingCountries } from "./Countries";

function WorldMap() {
  return (
    <div style={{ margin: "auto", width: "700px", height: "600px", paddingTop : "4rem" }}>

      <h1 style={{ color : "#154D5C", backgroundColor : "white", margin : "auto"}}>Aguima digital Test Map 🗺️</h1>
      <br />
      <VectorMap
        map={africaMill}
        containerStyle={{
          width: "700px",
          height: "600px",
        }}
        backgroundColor="#282c34"
        markers={missingCountries}
        markerStyle={{
          initial: {
            fill: "red",
          },
        }}
        series={{
          regions: [
            {
              scale: colorScale,
              values: countries,
              min: 0,
              max: 100,
            },
          ],
        }}
        onRegionTipShow={function reginalTip(event, label, code) {
          return label.html(`
                  <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
                    <p>
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    <p>
                    ${countries[code]}
                    </p>
                    </div>`);
        }}
        onMarkerTipShow={function markerTip(event, label, code) {
          return label.html(`
                  <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px>
                    <p style="color: black !important;">
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    </div>`);
        }}
      />
    </div>
  );
}

export default WorldMap;
