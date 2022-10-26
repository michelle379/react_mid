import ToppictureItem from "./ToppictureItem";
import toppics from "../json/toppic.json";

export default function ToppictureList() {
  return (
    <div className="row">
      {toppics.map(toppic => (
        <ToppictureItem key={toppic.id} toppic={toppic}/>
      ))}
    </div>
  );
}