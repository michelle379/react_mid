import NewsItem from "./NewsItem";
import works from "../json/news.json";

export default function NewsList() {
  return (
    <div className="row">
      {works.map(work => (
        <NewsItem key={work.id} work={work}/>
      ))}
    </div>
  );
}