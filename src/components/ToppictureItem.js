export default function ToppictureItem( { toppic }) {
    return (
      <section className=" col-md-6 col-lg-4 pt-4 p-md-2 p-lg-3">
        <div>
            <img className="w-100" src={toppic.image} />
        </div>
      </section>
    );
  }