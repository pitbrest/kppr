import { Container } from "../components/Container";
import { Ognetushitel, newsItem } from "../appData/news";

const news = [{ author: "admin", date: "23.06.2024", elem: Ognetushitel }];

function News() {
  return <Container>{news.map((i) => newsItem(i))}</Container>;
}

export default News;
