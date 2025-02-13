"use client";

import React, { FormEvent, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";

export default function ContactSales() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("message", message);

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      setEmail("");
      setMessage("");
      toast({
        title: "Your message has been sent successfully",
        description: "We will get back to you soon",
        variant: "default",
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
        toast({
          title: "Oops, something went wrong",
          description: error,
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 bg-white px-12 py-8 text-base font-normal dark:bg-black lg:bg-transparent lg:py-0"
    >
      <div className="space-y-4">
        <Label className="text-base">Email</Label>
        <Input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 bg-background"
          placeholder="Enter your email"
        />
      </div>
      <div className="space-y-4 text-base">
        <Label className="text-base">How can we help you?</Label>
        <Textarea
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
          className="bg-background"
          rows={16}
          placeholder="Your need"
        />
      </div>
      <div className="flex w-full items-center justify-end">
        <Button
          disabled={isLoading}
          type="submit"
          className="h-12 rounded-full text-base"
          size="lg"
        >
          {isLoading ? <div className="loader"></div> : "Talk to us"}
        </Button>
      </div>
    </form>
  );
}
