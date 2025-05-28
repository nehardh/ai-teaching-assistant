"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form" 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { subjects } from "@/constants"
import { Textarea } from "./ui/textarea"


const formSchema = z.object({
  name: z.string().min(1, {message: "Companion is required."}),
  subject: z.string().min(1, {message: "Subject is required."}),
  topic: z.string().min(1, {message: "Topic is required."}),
  voice: z.string().min(1, {message: "Voice is required."}),
  style: z.string().min(1, {message: "Style is required."}),
  duration: z.coerce.number().min(1, {message: "Duration is required."}),
})

const CompanionForm = () => {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 15,
    },
  })
    // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

    return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name<span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input 
                    placeholder="Enter the Companion Name" 
                    {...field} 
                    className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject<span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Select 
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                >
                    <SelectTrigger className="w-[180px] input capitalize">
                        <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                        {subjects.map((subject) => (
                            <SelectItem 
                                key={subject} 
                                value={subject} 
                                className="capitalize"
                            >
                                {subject}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should the companion Help with ?<span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Textarea 
                    placeholder="Ex. Integrals and Derivatives" 
                    {...field} 
                    className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name<span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input 
                    placeholder="Enter the Companion Name" 
                    {...field} 
                    className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name<span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input 
                    placeholder="Enter the Companion Name" 
                    {...field} 
                    className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name<span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input 
                    placeholder="Enter the Companion Name" 
                    {...field} 
                    className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default CompanionForm