import Header from "../components/Header";
import NewsList from '../components/NewsList';
import ProcessList from "../components/ProcessList";
import ToppictureList from "../components/ToppictureList";



function Home() {
  return (

    <div>
      <Header />
      <div className="fea">
        <h1 className=""><br />--- FEATURES ---</h1>
      </div>

      <div className="fea">
        <div className="container" >
          <ToppictureList />
          </div>
      </div>

      <div className="fea">
        <h1></h1>
      </div>

      <div className="news">
        <h1 className=""><br />---LATEST NEWS---</h1>
      </div>
      <div className="news">
        <div className="container" >
        <NewsList />
        </div>
      </div>
      <div className="news">
        <h1><br /></h1>
      </div>
            
      <div className="rp">
        <h1 className=""><br />---RESERVATION PROCESS---<br />
        </h1>
      </div>
      <div className="rp">
        <div className="container" >
          <ProcessList />
        </div>
      </div>
    </div>

  );
}

export default Home;
