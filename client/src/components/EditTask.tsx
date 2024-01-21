import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

type Props = {};

export default function EditTask({}: Props) {
  const { id } = useParams();
  return (
    <div className="flex flex-col justify-center items-center border border-red-500 h-[100vh]">
      <Card className="w-[25rem] text-center">
        <CardHeader>
          <CardTitle>Edit Task</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="">
            <div className="flex justify-start gap-[1rem] items-center mb-5">
              <label className="mr-10 text-lg">Task ID</label>
              <p className="text-lg">{id}</p>
            </div>
            <div className="flex justify-start gap-[1rem] items-center mb-5">
              <label className="mr-10 text-lg">Name</label>
              <Input className="bg-gray-500/10 focus-visible:ring-transparent" />
            </div>
            <div className="flex justify-start gap-[1rem] items-center mb-5">
              <label htmlFor="completed" className=" text-lg">
                Completed
              </label>
              <Checkbox id="completed" className=""/>
            </div>
            <Button className="bg-indigo-800 w-full text-base" type="submit">Edit</Button>
          </form>
        </CardContent>
      </Card>

      <Button className="text-lg mt-10 px-[5rem]">Back To Tasks
      </Button>
    </div>
  );
}
