// import logo from './logo.svg';
// import './App.css';
import Pdf from './Pdf';
import { PDFDownloadLink} from '@react-pdf/renderer';
function App () {
  return (
    <div className="App">
      <PDFDownloadLink document={<Pdf />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  );
}

export default App;
