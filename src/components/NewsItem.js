export default function NewsItem( { work }) {
    return (
      <section className="col-md-6 col-lg-4 pt-4 p-md-2 p-lg-3">
        {/* <div className="border border-warning border-secondary border-1 rounded overflow-hidden"> */}
        <div className="">
          <div className="NewsItem">
                <img className="w-100" src={work.image}  alt={work.image}/>
            
                <div className="p-4">
                    <h5 >{work.name}</h5>
                    <p>{work.description}</p>
                </div>

            </div>
        </div>
      </section>
    );
  }