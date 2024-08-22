"use client";

import Footer from "@/components/frontend/Footer";
import Header from "@/components/frontend/Header";
import SectionTitle from "@/components/frontend/SectionTitle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import countries from "@/data/country";
import months from "@/data/month";
import year from "@/data/year";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  match: z.boolean().default(false).optional(),
  rules: z
    .string({
      required_error: "Please select",
    })
    .default("all"),
  searchterm: z.string().min(2, {
    message: "Please enter keyword",
  }),
  type: z.enum(["horse", "sire", "dam"]).optional(),
  specific: z
    .enum([
      "named horses sent overseas",
      "unnamed horses sent overseas",
      "imported mares",
    ])
    .optional(),
  countries: z.string().optional(),
  month: z.string().optional(),
  year: z.string().default("2023/24").optional(),
});

const AdvancedSearchPage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      match: false,
      rules: "all",
      searchterm: "",
      year: "2023/24",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    router.push(`/searchresult?query=${encodeURIComponent(data.searchterm)}`);
  };

  return (
    <>
      <Header />
      <section className="py-16 xl:py-16 xl:pt-16">
        <div className="container mx-auto p-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary">
                  Advanced Search
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Card className="mt-8">
            <CardContent className="pt-4">
              <div className="p-4">
                <p className="xl:w-[890px] font-normal text-base">
                  Please use the search feature below to find breeding
                  information on a specific horse, or choose one of the other
                  available search options for more detailed inquiries.
                </p>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 mt-4"
                  >
                    <div className="flex items-center gap-2">
                      <FormField
                        control={form.control}
                        name="match"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="rounded-md border-foreground"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Match</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="rules"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="focus:outline-none focus-visible:ring-offset-0">
                                  <SelectValue>{field.value}</SelectValue>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="all">all</SelectItem>
                                <SelectItem value="any">any</SelectItem>
                                <SelectItem value="exact words">
                                  exact words
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      <p>of the following search rules</p>
                    </div>
                    <FormField
                      control={form.control}
                      name="searchterm"
                      render={({ field }) => (
                        <FormItem className="xl:w-[890px]">
                          <FormLabel className="text-xs font-normal text-slate-400 dark:text-white">
                            Search Digital Studbook:
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter keywords" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <SectionTitle title="Select Options" />
                    <div className="flex items-center justify-between xl:w-[890px]">
                      <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-4"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="horse" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Horse
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="sire" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Sire
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="dam" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Dam
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="specific"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-4"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="named horses sent overseas" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Named horses sent overseas
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="unnamed horses sent overseas" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Unnamed horses sent overseas
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="imported mares" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Imported mares
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <SectionTitle title="Select Fields" />
                    <div className="text-lg mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="countries"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Country:</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                      "w-full justify-between",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value
                                      ? countries.find(
                                          (country) =>
                                            country.code === field.value
                                        )?.name
                                      : "Select a country"}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-[200px] p-0">
                                <Command>
                                  <CommandInput
                                    placeholder="Search a country..."
                                    className="h-9"
                                  />
                                  <CommandList>
                                    <CommandEmpty>
                                      Country not found.
                                    </CommandEmpty>
                                    <CommandGroup>
                                      {countries.map((country) => (
                                        <CommandItem
                                          value={country.name}
                                          key={country.code}
                                          onSelect={() => {
                                            form.setValue(
                                              "countries",
                                              country.code
                                            );
                                          }}
                                        >
                                          {country.name}
                                          <Check
                                            className={cn(
                                              "ml-auto h-4 w-4",
                                              country.code === field.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                            )}
                                          />
                                        </CommandItem>
                                      ))}
                                    </CommandGroup>
                                  </CommandList>
                                </Command>
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="month"
                        render={({ field }) => (
                          <FormItem className="flex flex-col w-full">
                            <FormLabel>Month:</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select month" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {months.map((month) => {
                                  return (
                                    <SelectItem
                                      key={month.abbr}
                                      value={month.name}
                                    >
                                      {month.name}
                                    </SelectItem>
                                  );
                                })}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="year"
                        render={({ field }) => (
                          <FormItem className="flex flex-col w-full">
                            <FormLabel>Select Year:</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="focus:outline-none focus-visible:ring-offset-0">
                                  <SelectValue>{field.value}</SelectValue>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {year.map((yyyy) => {
                                  return (
                                    <SelectItem key={yyyy.id} value={yyyy.year}>
                                      {yyyy.year}
                                    </SelectItem>
                                  );
                                })}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex w-full justify-end">
                      <Button
                        type="submit"
                        className="xl:w-28 w-full xl:mt-0 mt-2 uppercase"
                      >
                        Search
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </CardContent>
          </Card>
          <div className="mt-4 px-4">
            <p className=" italic text-sm font-light">
              <span className="font-bold">Disclaimer: </span>StudBook strives to
              ensure the accuracy of the information in these records. However,
              they disclaim all liability for any errors or omissions, whether
              due to negligence or otherwise, and for any loss, damage, or other
              consequences that may result from relying on this information.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdvancedSearchPage;
