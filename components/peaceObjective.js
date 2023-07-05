import Image from "next/image";
import React from "react";
import Container from "./container";


const PeaceObjectives  = (props) => {
    const { content } = props;

  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
       
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
         
          <p className="text-2xl text-justify leading-normal "><Mark>{content.section_1}</Mark> </p>
            <p className="text-2xl text-justify leading-normal align-text-top	">
             
            {content.section_1_desc}
            </p>

          
          </div>
        </div>

        <div className="">
          <div className="flex flex-col  w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <p className="text-2xl text-justify leading-normal "><Mark>{content.section_2}</Mark> </p>
            <p className="text-2xl text-justify leading-normal ">
             
            {content.section_2_desc}
            </p>

          

           
          </div>
        </div>



        <div className="">
          <div className="flex flex-col  w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <p className="text-2xl text-justify leading-normal "><Mark>{content.section_3}</Mark> </p>
            <p className="text-2xl text-justify leading-normal ">
             
            {content.section_3_desc}
            </p>

          

           
          </div>
        </div>


        <div className="">
          <div className="flex flex-col  w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <p className="text-2xl text-justify leading-normal "><Mark>{content.section_4}</Mark> </p>
            <p className="text-2xl text-justify leading-normal ">
             
            {content.section_4_desc}
            </p>

          

           
          </div>
        </div>



        <div className="">
          <div className="flex flex-col  w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <p className="text-2xl text-justify leading-normal "><Mark>{content.section_5}</Mark> </p>
            <p className="text-2xl text-justify leading-normal ">
             
            {content.section_5_desc}
            </p>

          

           
          </div>
        </div>


        <div className="">
          <div className="flex flex-col  w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <p className="text-2xl text-justify leading-normal "><Mark>{content.section_6}</Mark> </p>
            <p className="text-2xl text-justify leading-normal ">
             
            {content.section_6_desc}
            </p>

          

           
          </div>
        </div>
    
      </div>
    </Container>
  );
}



function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-brandBase bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default PeaceObjectives;