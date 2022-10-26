import Header from "../components/Header";
import NewsList from '../components/NewsList';
import ProcessList from "../components/ProcessList";
import ToppictureList from "../components/ToppictureList";



function Home() {
  return (

    <div>
      <Header />
      <div className="fea">
        <h1><br />———&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FEATURES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;———</h1>
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
        <h1 className=""><br />———&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LATEST NEWS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;———</h1>
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
        <h1 className=""><br />———&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RESERVATION PROCESS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;———<br />
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
