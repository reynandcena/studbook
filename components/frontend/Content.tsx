import React from "react";
import SectionTitle from "./SectionTitle";
import news from "@/data/news";
import { EventsProps } from "@/types/events.type";
import { NewsProps } from "@/types/news.type";
import ItemCard from "./ItemCard";
import events from "@/data/events";

const Content = () => {
  const sortedNews: NewsProps[] = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const newsLimit = 6;

  const filteredNews = newsLimit ? sortedNews.slice(0, newsLimit) : sortedNews;

  const sortedEvents: EventsProps[] = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const eventsLimit = 8;

  const filteredEvents = eventsLimit
    ? sortedEvents.slice(0, eventsLimit)
    : sortedEvents;

  return (
    <section className="py-16 xl:py-16 xl:pt-16">
      <div className="container mx-auto">
        <SectionTitle title="Latest Racing News" />
        <div className="text-lg mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {filteredNews.map((item) => (
            <ItemCard key={item.id} news={item} link="/news/details/" />
          ))}
        </div>
        <SectionTitle title="Key Events" />
        <div className="text-lg mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {filteredEvents.map((item) => (
            <ItemCard key={item.id} news={item} link="/events/details/" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
