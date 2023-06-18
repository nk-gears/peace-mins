import Head from "next/head";
import Navbar from "../components/navbar";
import {useState} from 'react';
import Footer from "../components/footer";
import UserRegFormComponent from "../components/userRegForm";
import OrgRegFormComponent from "../components/orgRegForm";


const Register = () => {

  const [regMode, setRegMode] = useState("1");

  const handleChange = (e) => {

    setRegMode(e.target.value);
  };



  return (
    <>
      <Head>
        <title>5 mins for Peace</title>
        <meta
          name="description"
          content="5 mins for Peace"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />    
   
      <section className="bg-gray-50 dark:bg-gray-900">
      <div className="text-center py-3 my-3 px-0 my-0  lg:py-0">
      <ul class="segmented-control " onChange={handleChange}>
    <li class="segmented-control__item  focus:ring-4 focus:outline-none ">
        <a href="#"><input    class="segmented-control__input" type="radio" value="1" name="option" id="option-1" 
        
        onChange={() => {
								
          setRegMode(1);
          }}
        
          defaultChecked={regMode=="1"}


        />
          <label class="segmented-control__label" for="option-1">Individual</label></a>
    </li>
    <li class="segmented-control__item  focus:ring-4 focus:outline-none ">
        <a href="#"><input   class="segmented-control__input" type="radio" value="2" name="option" id="option-2" 
            onChange={() => {
								
              setRegMode("2");
              }}
            
              defaultChecked={regMode=="2"}
        
        />
          <label class="segmented-control__label" for="option-2">Group</label></a>
    </li>
</ul>
      </div>

        <div className="flex flex-col items-center justify-top px-6 mx-auto  lg:py-0">
          <div className=" w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              { regMode==1 && 
               <>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Participant Details
              </h1>
              <UserRegFormComponent />
              </>
              }
              { regMode==2 && 
              <>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Group Details
              </h1>
              <OrgRegFormComponent />
              </>
               }
   
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
    </>
  );
}

export default Register;