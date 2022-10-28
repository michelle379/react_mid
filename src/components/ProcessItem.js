export default function ProcessItem( { process }) {
    return (
      <section className=" col-md-6 col-lg-3 pt-4 p-md-2 p-lg-3">
        <div>
          <img className="w-100"  src={process.image} alt={process.image}/>
            <div className="p-4 process_text">
                <h5 >{process.name}</h5>
                <p>{process.description}</p>
            </div>
        </div>
      </section>
    );
  }