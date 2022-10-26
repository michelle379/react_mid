import ProcessItem from "./ProcessItem";
import processes from "../json/process.json";

export default function ProcessList() {
  return (
    <div className="row">
      {processes.map(process => (
        <ProcessItem key={process.id} process={process}/>
      ))}
    </div>
  );
}