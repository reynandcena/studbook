"use client";

import Footer from "@/components/frontend/Footer";
import Header from "@/components/frontend/Header";
import horses from "@/data/horse";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { SquareMinus } from "lucide-react";

interface HorseEditPageProps {
  params: {
    id: string;
  };
}

const SearchDetailsPage = ({ params }: HorseEditPageProps) => {
  const horse = horses.find((horse) => horse.id === params.id);
  return (
    <>
      <Header />
      <section className="py-16 xl:py-16 xl:pt-16 min-h-screen">
        <div className="container mx-auto p-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Search Result</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary">
                  {horse?.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Card className="mt-8">
            <CardContent className="pt-4">
              <div className="w-full">
                <div className="mb-4 space-y-2">
                  <p className="text-xl font-semibold">{horse?.name}</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <p className="font-light border-0 sm:border-r sm:pr-4">
                      <span className="font-semibold text-base mr-2">
                        Date of Birth:
                      </span>
                      {horse?.dob}
                    </p>
                    <p className="font-light border-0 sm:border-r sm:pr-4">
                      <span className="font-semibold text-base mr-2">Age:</span>
                      {horse?.age}
                    </p>
                    <p className="font-light border-0 sm:border-r sm:pr-4">
                      <span className="font-semibold text-base mr-2">
                        Sire:
                      </span>
                      {horse?.sire}
                    </p>
                    <p className="font-light border-0 sm:border-r sm:pr-4">
                      <span className="font-semibold text-base mr-2">Dam:</span>
                      {horse?.dam}
                    </p>
                    <p className="font-light border-0 capitalize">
                      <span className="font-semibold text-base mr-2">
                        Colour and Sex:
                      </span>
                      {horse?.colour} {horse?.sex}
                    </p>
                  </div>
                </div>

                <div className="mb-4 space-y-2">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="flex w-full rounded-md border bg-transparent overflow-x-auto overflow-y-hidden whitespace-nowrap justify-start h-14">
                      <TabsTrigger
                        value="overview"
                        className="flex-none text-center px-4"
                      >
                        Overview
                      </TabsTrigger>
                      <TabsTrigger
                        value="pedigree"
                        className="flex-none text-center px-4"
                      >
                        Pedigree
                      </TabsTrigger>
                      <TabsTrigger
                        value="broodmare-daughters"
                        className="flex-none text-center px-4"
                      >
                        Broodmare Daughters
                      </TabsTrigger>
                      <TabsTrigger
                        value="sire-sons"
                        className="flex-none text-center px-4"
                      >
                        Sire Sons
                      </TabsTrigger>
                      <TabsTrigger
                        value="dam-line"
                        className="flex-none text-center px-4"
                      >
                        Dam Line
                      </TabsTrigger>
                      <TabsTrigger
                        value="sire-line"
                        className="flex-none text-center px-4"
                      >
                        Sire Line
                      </TabsTrigger>
                      <TabsTrigger
                        value="stallion-produce"
                        className="flex-none text-center px-4"
                      >
                        Stallion Produce
                      </TabsTrigger>
                      <TabsTrigger
                        value="stallion-fertility"
                        className="flex-none text-center px-4"
                      >
                        Stallion Fertility
                      </TabsTrigger>
                      <TabsTrigger
                        value="service-fee"
                        className="flex-none text-center px-4"
                      >
                        Service Fee
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent
                      value="overview"
                      className="border px-4 rounded-md"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 border-b">
                        <div className="flex items-center">
                          <p className="text-sm font-semibold">
                            Foaling Date:
                            <span className="font-light ml-2">
                              {horse?.foalingdate}
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm font-semibold">
                            Death:
                            <span className="font-light ml-2">
                              {horse?.death}
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm font-semibold">
                            Family:
                            <span className="font-light ml-2">
                              {horse?.family}
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm font-semibold">
                            DNA Typed:
                            <span className="font-light ml-2">
                              {horse?.dnatype}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 border-b">
                        <div className="flex items-center">
                          <p className="text-sm font-semibold">
                            PV:
                            <span className="font-light ml-2">{horse?.pv}</span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm font-semibold">
                            BT:
                            <span className="font-light ml-2">{horse?.bt}</span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm font-semibold">
                            Microchip:
                            <span className="font-light ml-2">
                              {horse?.microchip}
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm font-semibold">
                            Life No.:
                            <span className="font-light ml-2">
                              {horse?.lifeno}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                        <div className="flex items-center">
                          <p className="text-sm font-semibold">
                            Left shoulder:
                            <span className="font-light ml-2">
                              {horse?.leftshoulder}
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm font-semibold">
                            Right shoulder:
                            <span className="font-light ml-2">
                              {horse?.rightshoulder}
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm font-semibold">
                            Breeder:
                            <span className="font-light ml-2">
                              {horse?.breeder}
                            </span>
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent
                      value="pedigree"
                      className="border p-4 rounded-md"
                    >
                      <div className="xl:flex gap-4 w-full justify-center">
                        <div className=" xl:flex flex-col justify-center items-center gap-4">
                          <div className="xl:flex gap-4">
                            <div className=" xl:flex flex-col justify-center items-center gap-4">
                              <div className=" xl:flex gap-4">
                                <Card className="text-center p-4 text-primary text-xs mt-4">
                                  Sir Gaylord (USA) 1959
                                  <div className="flex items-center gap-1 pt-2 border-t mt-2">
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                  </div>
                                </Card>
                                <Card className="text-center p-4 text-primary text-xs mt-4">
                                  Attica (USA) 1953
                                  <div className="flex items-center gap-1 pt-2 border-t mt-2">
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                  </div>
                                </Card>
                              </div>
                              <Card className="text-center p-4 text-primary text-xs mt-4">
                                Attica (USA) 1953
                                <div className="flex items-center gap-1 pt-2 border-t mt-2">
                                  <SquareMinus
                                    size={14}
                                    className=" text-slate-500"
                                  />
                                  <SquareMinus
                                    size={14}
                                    className=" text-slate-500"
                                  />
                                  <SquareMinus
                                    size={14}
                                    className=" text-slate-500"
                                  />
                                </div>
                              </Card>
                            </div>

                            <div className=" xl:flex flex-col justify-center items-center gap-4">
                              <div className=" xl:flex gap-4">
                                <Card className="text-center p-4 text-primary text-xs mt-4">
                                  Saint Crespin III (GB) 1956
                                  <div className="flex items-center gap-1 pt-2 border-t mt-2">
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                  </div>
                                </Card>
                                <Card className="text-center p-4 text-primary text-xs mt-4">
                                  Dominica III (FR) 1957
                                  <div className="flex items-center gap-1 pt-2 border-t mt-2">
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                  </div>
                                </Card>
                              </div>
                              <Card className="text-center p-4 text-primary text-xs mt-4">
                                Dolina (IRE) 1964
                                <div className="flex items-center gap-1 pt-2 border-t mt-2">
                                  <SquareMinus
                                    size={14}
                                    className=" text-slate-500"
                                  />
                                  <SquareMinus
                                    size={14}
                                    className=" text-slate-500"
                                  />
                                  <SquareMinus
                                    size={14}
                                    className=" text-slate-500"
                                  />
                                </div>
                              </Card>
                            </div>
                          </div>
                          <Card className="text-center p-4 text-primary text-xs mt-4">
                            Majesty (IRE) 1971
                            <div className="flex items-center gap-1 pt-2 border-t mt-2">
                              <SquareMinus
                                size={14}
                                className=" text-slate-500"
                              />
                              <SquareMinus
                                size={14}
                                className=" text-slate-500"
                              />
                              <SquareMinus
                                size={14}
                                className=" text-slate-500"
                              />
                            </div>
                          </Card>
                        </div>

                        <div className=" xl:flex flex-col justify-center items-center gap-4">
                          <div className="xl:flex gap-4">
                            <div className=" xl:flex flex-col justify-center items-center gap-4">
                              <div className=" xl:flex gap-4">
                                <Card className="text-center p-4 text-primary text-xs mt-4">
                                  Worden (FR) 1949
                                  <div className="flex items-center gap-1 pt-2 border-t mt-2">
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                  </div>
                                </Card>
                                <Card className="text-center p-4 text-primary text-xs mt-4">
                                  Mabiba (GB) 1954
                                  <div className="flex items-center gap-1 pt-2 border-t mt-2">
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                  </div>
                                </Card>
                              </div>
                              <Card className="text-center p-4 text-primary text-xs mt-4">
                                Mahbub Aly (GB) 1961
                                <div className="flex items-center gap-1 pt-2 border-t mt-2">
                                  <SquareMinus
                                    size={14}
                                    className=" text-slate-500"
                                  />
                                  <SquareMinus
                                    size={14}
                                    className=" text-slate-500"
                                  />
                                  <SquareMinus
                                    size={14}
                                    className=" text-slate-500"
                                  />
                                </div>
                              </Card>
                            </div>

                            <div className=" xl:flex flex-col justify-center items-center gap-4">
                              <div className=" xl:flex gap-4">
                                <Card className="text-center p-4 text-primary text-xs mt-4">
                                  Amber (FR) 1942
                                  <div className="flex items-center gap-1 pt-2 border-t mt-2">
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                  </div>
                                </Card>
                                <Card className="text-center p-4 text-primary text-xs mt-4">
                                  Good Manners 1946
                                  <div className="flex items-center gap-1 pt-2 border-t mt-2">
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                    <SquareMinus
                                      size={14}
                                      className=" text-slate-500"
                                    />
                                  </div>
                                </Card>
                              </div>
                              <Card className="text-center p-4 text-primary text-xs mt-4">
                                Eulyth 1951
                                <div className="flex items-center gap-1 pt-2 border-t mt-2">
                                  <SquareMinus
                                    size={14}
                                    className=" text-slate-500"
                                  />
                                  <SquareMinus
                                    size={14}
                                    className=" text-slate-500"
                                  />
                                  <SquareMinus
                                    size={14}
                                    className=" text-slate-500"
                                  />
                                </div>
                              </Card>
                            </div>
                          </div>
                          <Card className="text-center p-4 text-primary text-xs  mt-4">
                            Star Ruby 1971
                            <div className="flex items-center gap-1 pt-2 border-t mt-2">
                              <SquareMinus
                                size={14}
                                className=" text-slate-500"
                              />
                              <SquareMinus
                                size={14}
                                className=" text-slate-500"
                              />
                              <SquareMinus
                                size={14}
                                className=" text-slate-500"
                              />
                            </div>
                          </Card>
                        </div>
                      </div>

                      <div className="xl:flex justify-center mt-4">
                        <Card className="text-center p-4 text-primary text-xs">
                          {horse?.name}
                          <div className="flex items-center gap-1 pt-2 border-t mt-2">
                            <SquareMinus
                              size={14}
                              className=" text-slate-500"
                            />
                            <SquareMinus
                              size={14}
                              className=" text-slate-500"
                            />
                            <SquareMinus
                              size={14}
                              className=" text-slate-500"
                            />
                          </div>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent
                      value="broodmare-daughters"
                      className="border px-4 rounded-md"
                    >
                      <div className="p-4 text-center italic text-sm">
                        No Records Found!
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="sire-sons"
                      className="border px-4 rounded-md"
                    >
                      <div className="p-4 text-center italic text-sm">
                        No Records Found!
                      </div>
                    </TabsContent>
                    <TabsContent value="dam-line">
                      Information about Dam Line here.
                    </TabsContent>
                    <TabsContent value="sire-line">
                      Information about Sire Line here.
                    </TabsContent>
                    <TabsContent value="stallion-produce">
                      Information about Stallion Produce here.
                    </TabsContent>
                    <TabsContent value="stallion-fertility">
                      Information about Stallion Fertility here.
                    </TabsContent>
                    <TabsContent value="service-fee">
                      Information about Service Fee here.
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SearchDetailsPage;
