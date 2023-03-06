import SkillLevel from "@/components/SkillLevel";
const page = () => {
  return (
    <div className="w-7/12 text-[14px] shadow-md p-6 my-8 border border-gray-200 mx-auto flex flex-col">
      {/* Title starts */}
      <div id="title">
        <h1 className="text-3xl font-semibold">Oluwasegun Adeniyi</h1>
        <p className="text-gray-500 text-lg font-medium">Frontend Developer</p>
      </div>
      {/* Title ends */}

      {/* Contact starts */}
      <div id="contact" className="flex my-4 space-x-16">
        <div>
          <h3>
            Phone : <span>09092284972</span>
          </h3>
          <h3>
            Email : <span>09092284972</span>
          </h3>
        </div>
        <div>
          <h3>
            Website : <span>https://segun-adeniyi.vercel.app</span>
          </h3>
          <h3>
            Github : <span>https://github.com/hadeeny</span>
          </h3>
        </div>
      </div>
      {/* Contact Ends */}

      {/* Professional Summary */}
      <div className="mb-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsum
          explicabo nisi eveniet quaerat iure temporibus, impedit cum quia animi
          maiores incidunt omnis error similique cumque inventore vero commodi
          aut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          ipsum explicabo nisi eveniet quaerat iure temporibus, impedit cum quia
          animi maiores incidunt omnis error similique cumque inventore vero
          commodi aut?
        </p>
      </div>
      {/* Professional summary ends */}

      {/* Experience starts */}
      <h2 className="mt-4 font-semibold text-black/90">Work Experience</h2>
      <div className="border-t py-4 border-gray-300">
        <ul className="space-y-4">
          {/* Experience 1 starts */}
          <li className="flex  justify-between">
            <div className="w-2/12 font-medium" id="date">
              2003/3 - 2020/11
            </div>
            <div className="w-9/12">
              <h2 id="position" className="text-lg text-black/90 font-medium">
                Frontend engineer
              </h2>
              <h3 className="text-md text-black/90 font-bold">Twitter Inc</h3>
              <p className="my-2 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus itaque dignissimos consectetur nam nobis placeat
                nesciunt expedita quidem maxime ad, velit amet quos
                consequuntur, rerum commodi cumque neque, voluptas ipsa.
              </p>
            </div>
          </li>
          {/* Experience 1 ends */}

          {/* Experience 2 starts */}
          <li className="flex justify-between">
            <div className="w-2/12 font-medium" id="date">
              2003/3 - 2020/11
            </div>
            <div className="w-9/12">
              <h2 id="position" className="text-lg text-black/90 font-medium">
                Frontend engineer
              </h2>
              <h3 className="text-md text-black/90 font-bold">Twitter Inc</h3>
              <p className="my-2 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus itaque dignissimos consectetur nam nobis placeat
                nesciunt expedita quidem maxime ad, velit amet quos
                consequuntur, rerum commodi cumque neque, voluptas ipsa.
              </p>
            </div>
          </li>
          {/* Experience 2 ends */}
        </ul>
      </div>
      {/* Experience ends */}

      {/* Education starts */}
      <h2 className="mt-4 font-semibold text-black/90">Education</h2>
      <div className="border-t py-4 border-gray-300">
        <ul className="space-y-4">
          {/* Education 1 starts */}
          <li className="flex  justify-between">
            <div className="w-2/12 font-medium" id="date">
              2003/3 - 2020/11
            </div>
            <div className="w-9/12">
              <h2 id="position" className="text-lg text-black/90 font-medium">
                Frontend engineer
              </h2>
              <h3 className="text-md text-black/90 font-bold">Twitter Inc</h3>
              <p className="my-2 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus itaque dignissimos consectetur nam nobis placeat
                nesciunt expedita quidem maxime ad, velit amet quos
                consequuntur, rerum commodi cumque neque, voluptas ipsa.
              </p>
            </div>
          </li>
          {/* Education 1 ends */}

          {/* Education 2 starts */}
          <li className="flex justify-between">
            <div className="w-2/12 font-medium" id="date">
              2003/3 - 2020/11
            </div>
            <div className="w-9/12">
              <h2 id="position" className="text-lg text-black/90 font-medium">
                Frontend engineer
              </h2>
              <h3 className="text-md text-black/90 font-bold">Twitter Inc</h3>
              <p className="my-2 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus itaque dignissimos consectetur nam nobis placeat
                nesciunt expedita quidem maxime ad, velit amet quos
                consequuntur, rerum commodi cumque neque, voluptas ipsa.
              </p>
            </div>
          </li>
          {/* Education 2 ends */}
        </ul>
      </div>
      {/* Education Ends */}

      {/* Skills starts */}
      <h2 className="mt-4 font-semibold text-black/90">Skills</h2>
      <div className="border-t py-4 border-gray-300">
        <div className="flex justify-between">
          {/* Skills 1 starts */}
          <div className="w-2/12"></div>
          <ul className="w-9/12 space-y-0">
            <li className="flex justify-between">
              <h4>figma</h4>{" "}
              <div className="flex items-center space-x-2">
                <SkillLevel skillLevel="good" />
                <span>good</span>
              </div>
            </li>
            <li className="flex justify-between">
              <h4>figma</h4>{" "}
              <div className="flex items-center space-x-2">
                <SkillLevel skillLevel="advanced" />
                <span>good</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Skills end */}

      {/* Interests start*/}
      <h2 className="mt-4 font-semibold text-black/90">Interest</h2>
      <div className="border-t py-4 border-gray-300">
        <ul className="space-x-2 space-y-2">
          {/* Skills 1 starts */}
          <li className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
            html
          </li>
          <li className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
            css
          </li>
          <li className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
            javascript
          </li>
          <li className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
            react
          </li>
          <li className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
            framer motion
          </li>
          <li className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
            css
          </li>
          <li className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
            javascript
          </li>

          {/* Skills 1 ends */}
        </ul>
      </div>
      {/* Interests end */}
    </div>
  );
};

export default page;
