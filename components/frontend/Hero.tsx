"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";

// Define schema using Zod
const searchSchema = z.object({
  query: z.string().min(1, "Search query is required"),
});

const Hero = () => {
  const router = useRouter();
  // Initialize the form
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: "",
    },
  });

  const onSubmit = (data: { query: string }) => {
    console.log("Search query:", data.query);
    // Navigate to the search results page with the query parameter
    router.push(`/searchresult?query=${encodeURIComponent(data.query)}`);
  };

  return (
    <section className="py-16 xl:py-16 xl:pt-16">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Quick Search
            </div>
            <h1 className="xl:text-6xl mb-4 text-4xl font-bold">
              Digital Studbook
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Please use the search feature below to find breeding information
              on a specific horse, or choose one of the other available search
              options for more detailed inquiries.
            </p>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="query"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <div className="xl:flex items-center gap-2">
                          <FormControl>
                            <Input
                              className="bg-slate-50  border focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 xl:w-96 placeholder:text-slate-300 placeholder:font-normal"
                              placeholder={`"Smart Missile", "NZ1234567" or "12345678910234"`}
                              {...field}
                            />
                          </FormControl>
                          <Button
                            type="submit"
                            className="xl:w-28 w-full xl:mt-0 mt-2"
                          >
                            Search
                          </Button>
                        </div>
                        <div className="xl:flex xl:items-center xl:space-x-32">
                          <Link
                            href="/advancedsearch"
                            className="text-primary text-sm font-medium"
                          >
                            Advanced Search
                          </Link>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
          </div>
          <div className="hidden xl:flex relative">
            <Image
              className="w-auto h-[460px] bg-no-repeat relative bg-bottom rounded-lg"
              src="/hero/main.jpg"
              alt="Hero Image"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
