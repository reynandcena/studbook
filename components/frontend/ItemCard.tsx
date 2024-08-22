import React from "react";
import { NewsProps } from "@/types/news.type";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ItemCard = ({ news, link }: any) => {
  return (
    <Link href={`${link}${news.id}`}>
      <Card className="relative">
        <CardHeader className="p-0">
          <Image
            src={news.coverImg}
            alt={news.title}
            width={300}
            height={200}
            className="w-full xl:h-[275px] rounded-lg"
          />
        </CardHeader>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 rounded-b-lg">
          <p className="text-white">{news.title}</p>
          <p className="text-sm text-slate-400">{news.date}</p>
        </div>
      </Card>
    </Link>
  );
};

export default ItemCard;
