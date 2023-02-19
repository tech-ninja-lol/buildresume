import Image from "next/image";
import Link from "next/link";
import {templates} from '../templates'

const Templates = () => {
  return (
    <section className="w-10/12 mx-auto">
      
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:grid-rows-2">
        {templates.map((temp, i)=>(
            <Link key={i} href={`/template/${temp.id}/user`}>
            <div className="border border-black">
              <Image alt={temp.alt} width={800} src={temp.image} />
            </div>
          </Link>
        ))}
        
      </div>
    </section>
  );
};

export default Templates;
