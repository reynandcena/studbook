import events from "@/data/events";
import React from "react";
import Image from "next/image";
import BackButton from "@/components/frontend/BackButton";
import Header from "@/components/frontend/Header";
import Footer from "@/components/frontend/Footer";

interface EventsDetailsPageProps {
  params: {
    id: string;
  };
}

const EventsDetailsPage = ({ params }: EventsDetailsPageProps) => {
  const item = events.find((item) => item.id === params.id);

  if (!item) {
    return <div>Event item not found</div>;
  }

  return (
    <>
      <Header />
      <section className="py-16 xl:py-16 xl:pt-20">
        <div className="container mx-auto p-4">
          <BackButton text="See All Events" link="/" />
          <h1 className="text-5xl font-semibold mb-8">{item.title}</h1>
          <Image
            src={item.coverImg}
            alt={item.title}
            width={800}
            height={400}
            className="w-full h-auto bg-contain rounded-lg mb-4"
          />
          <div className="text-sm text-slate-500 justify-between flex border-t border-b py-4">
            <p>Author: {item.author}</p>
            <p>Date: {item.date}</p>
          </div>
          <div
            className="text-lg text-slate-700 mb-4"
            dangerouslySetInnerHTML={{ __html: item.body }}
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default EventsDetailsPage;
