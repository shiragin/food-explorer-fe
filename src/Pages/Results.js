import Search from '../Components/Search/Search';
import ResultsList from '../Components/Search/ResultsList';

function Results() {
  return (
    <div className='container search-container'>
      <Search />
      <ResultsList />
    </div>
  );
}

export default Results;
