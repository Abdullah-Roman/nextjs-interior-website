"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, Label, Switch } from "@headlessui/react";
import { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";

const Contact = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className=" px-6 py-24 sm:py-32 lg:px-8">
      <div className="max-auto max-w-2xl text-center ">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact Sales
        </h2>
        <p className="mt-2 text-lg leading-8">
          Please feel free to ask anything
        </p>
      </div>
      <form className="mx-auto mt-16 sm:mt-20 max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mt-2.5">
            <Input
              type="name"
              placeholder="First Name"
              className="rounded-full"
            />
          </div>
          <div className="mt-2.5">
            <Input
              type="name"
              placeholder="Last Name"
              className="rounded-full"
            />
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input
                type="name"
                placeholder="Company"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input
                type="name"
                placeholder="Email Address"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Textarea placeholder="Type Your Message Here..." />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Field className="flex gap-x-2 items-center">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-500 transition data-[checked]:bg-blue-600"
              >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
              </Switch>
              <Label className="">
                By selecting this, you are agree to our{" "}
                <a href="#" className="text-primary">
                  privacy&nbsp;policy.
                </a>
              </Label>
            </Field>
          </div>
        </div>
        <Button className="px-8 py-4 mt-6 rounded-full w-full bg-gray-500 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 text-white">
          Let's Talk <TbArrowUpRight />
        </Button>
      </form>
    </div>
  );
};

export default Contact;
