import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import WorldMap from './world-countries-sans-antarctica.json';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const geoUrl = WorldMap;

export default function MapChart() {
  const [content, setContent] = useState('');
  const renderTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      {content && `${content}`}
    </Tooltip>
  );

  return (
    <>
      <ComposableMap
        projection='geoMercator'
        projectionConfig={{
          center: [0, 0],
          scale: 120,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <OverlayTrigger
                  key={geo.rsmKey}
                  placement='right'
                  // delay={{ hide: 100 }}
                  overlay={renderTooltip}
                >
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setContent(`${geo.properties.name}`);
                    }}
                    onMouseLeave={() => {
                      setContent('');
                    }}
                    stroke='#003a4d'
                    strokeWidth={0.2}
                    style={{
                      default: {
                        fill: '#EEE',
                        outline: 'none',
                      },
                      hover: {
                        fill: '#07814a',
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#07814a',
                        outline: 'none',
                      },
                    }}
                    onClick={() => console.log(geo.properties)}
                  />
                </OverlayTrigger>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
}
