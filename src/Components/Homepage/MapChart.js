import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
// import WorldMap from './world-countries-sans-antarctica.json';
import { useRecipesContext } from '../../Context/RecipesContext';
import ContMap from './world-continents.json';
// import Africa from './africa.json';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const geoUrl = ContMap;

export default function MapChart() {
  const [content, setContent] = useState('');
  // const [geoUrl, setGeoUrl] = useState(ContMap);

  const { getRecipesByCode } = useRecipesContext();

  function getCountryCodes(continent) {
    switch (continent) {
      case 'North America':
        return ['US', 'CA', 'JM', 'MX'];
      case 'Europe':
        return ['GB', 'HR', 'NL', 'FR', 'GR', 'IE', 'IT', 'PT'];
      case 'Asia':
        return [
          'CN',
          'EG',
          'IN',
          'JP',
          'MY',
          'MA',
          'RU',
          'TH',
          'TN',
          'TR',
          'VN',
        ];
      case 'Africa':
        return ['KE'];
      default:
        return 'Invalid continent';
    }
  }

  async function MapClickHandler(continent) {
    const countries = getCountryCodes(continent);
    const res = await getRecipesByCode(countries);
    console.log(res);
  }

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
                      setContent(`${geo.properties.continent}`);
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
                    onClick={(e) => MapClickHandler(geo.properties.continent)}
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
