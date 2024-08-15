'use client'

import MyDropdown from "@/components/myDropdown";
import MyMultipleDropdown from "@/components/myMultipleDropdown";
import { title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Avatar, Badge, BreadcrumbItem, Breadcrumbs, Card, CardBody, CardFooter, Checkbox, CheckboxGroup, Chip, CircularProgress, DatePicker, Image, Kbd, Progress } from "@nextui-org/react";

export default function ControlPage() {
  return (
    <div>
      <h1 className={title()}>Dropdown</h1>
      <div className="flex gap-4 mt-4">
        <MyDropdown />
        <MyMultipleDropdown /> 
      </div>
 
      <div className="flex flex-wrap w-full gap-4 mt-4 md:flex-nowrap">
        <Input type="email" label="Email" />
        <Input type="email" label="Email" placeholder="Enter your email" />
      </div> 


      <div className="flex flex-wrap w-full gap-4 mt-4 md:flex-nowrap">
          <DatePicker 
            label="Birth date"
            className="max-w-[284px]"
            isRequired
             isInvalid
            errorMessage="Please enter a valid date."
          />
      </div>

      <div className="m-4">
        <Image
         isZoomed  
          width={240}
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          alt="NextUI Album Cover" 
        /> 
      </div>

      <div className="flex gap-4">
        <Kbd keys={["command"]}>K</Kbd>
        <Kbd keys={["command", "shift"]}>N</Kbd>
        <Kbd keys={["option", "command"]}>P</Kbd>
      </div>  
      
      <div className="flex items-center gap-3 mt-4">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar name="Junior" />

        <Badge content="5" color="success">
          <Avatar
            radius="md"
            src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
          />
        </Badge>

        <Breadcrumbs radius="none" variant="solid">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Music</BreadcrumbItem>
            <BreadcrumbItem>Artist</BreadcrumbItem>
            <BreadcrumbItem>Album</BreadcrumbItem>
            <BreadcrumbItem>Song</BreadcrumbItem>
        </Breadcrumbs>
      </div>


      <div className="flex justify-between gap-4 mt-4">
        <CheckboxGroup defaultValue={["Primary", "Secondary", "Warning"]}>
          <Checkbox value="Default" color="default">Default</Checkbox> 
          <Checkbox value="Primary" color="primary">Primary</Checkbox>
          <Checkbox value="Secondary" color="secondary">Secondary</Checkbox>
          <Checkbox value="Success" color="success">Success</Checkbox>
          <Checkbox value="Warning" color="warning">Warning</Checkbox>
          <Checkbox value="Danger" color="danger">Danger</Checkbox>
        </CheckboxGroup>

        <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
        <CardBody className="items-center justify-center pb-0">
          <CircularProgress
            classNames={{
              svg: "w-36 h-36 drop-shadow-md",
              indicator: "stroke-white",
              track: "stroke-white/5",
              value: "text-3xl font-semibold text-white",
            }}
            value={70}
            strokeWidth={4}
            showValueLabel={true}
          />
        </CardBody>
        <CardFooter className="items-center justify-center pt-0">
          <Chip
            classNames={{
              base: "border-1 border-white/30",
              content: "text-white/90 text-small font-semibold",
            }}
            variant="bordered"
          >
            2800 Data points
          </Chip>
        </CardFooter>
      </Card>
      </div> 

      <div className="flex gap-4 mt-4"> 

        <CircularProgress size="lg" aria-label="Loading..."/>
        <CircularProgress
        label="Speed"
        size="lg"
        value={70}
        color="success"
        formatOptions={{ style: "unit", unit: "kilometer" }}
        showValueLabel={true}
      /> 
      </div>

     
      <div className="mt-4">
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md"
        />
      </div>

      
    </div>


  );
}
