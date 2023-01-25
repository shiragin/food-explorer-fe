import MapChart from '../Components/Homepage/MapChart';
import '../scss/Home.scss';

function Home() {
  const countrySwitch = {
    US: 'American',
    GB: 'British',
    CA: 'Canadian',
    CN: 'Chinese',
    HR: 'Croatian',
    NL: 'Dutch',
    EG: 'Egyptian',
    FR: 'French',
    GR: 'Greek',
    IN: 'Indian',
    IE: 'Irish',
    IT: 'Italian',
    JM: 'Jamaican',
    JP: 'Japanese',
    KE: 'Kenyan',
    MY: 'Malaysian',
    MX: 'Mexican',
    MA: 'Moroccan',
    PL: 'Polish',
    PT: 'Portuguese',
    RU: 'Russian',
    ES: 'Spanish',
    TH: 'Thai',
    TN: 'Tunisian',
    TR: 'Turkish',
    VN: 'Vietnamese',
  };

  return (
    <div className='main-container'>
      <MapChart />
      <div className='container'>
        <h1 className='title'>Explore the world through food.</h1>
      </div>
    </div>
  );
}

export default Home;
