import Image from "next/image";
import React from "react";
import Container from "./container";
import parse from 'html-react-parser';


const PeaceObjectives  = (props) => {
    const { content } = props;
    const sections=['section_2','section_3','section_4','section_5','section_6'];

  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
       
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col w-full h-full bg-gray-100 px-8 rounded-2xl py-8 dark:bg-trueGray-800">
         
          <p className="text-2xl  leading-normal "><Mark>{content.section_1}</Mark> </p>
            <p className="text-2xl  leading-normal align-text-top	mt-3">
             
            {parse(content.section_1_desc)}
            </p>

          
          </div>
        </div>

      {
        sections.map((section)=>{
          return (
            <div className="">
            <div className="flex flex-col  w-full h-full bg-gray-100 px-8 rounded-2xl py-8 dark:bg-trueGray-800">
            <p className="text-2xl  leading-normal "><Mark>{content[section]}</Mark> </p>
              <p className="text-2xl  leading-normal mt-3">
               
              {parse(content[section + "_desc"])}
              </p>
  
            
  
             
            </div>
          </div>
          )
        })
      }
     



   
    
      </div>
    </Container>
  );
}



function Mark(props) {
  return (
    <>
      {" "}
      <mark className="pl-2 pr-2 mb-2 text-brandBase bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200 font-extrabold">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default PeaceObjectives;