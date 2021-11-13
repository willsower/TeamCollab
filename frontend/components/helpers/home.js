import Image from "next/image";

function Feature({ name, desc, img }) {
  return (
    <div className="ml-4 py-3 md:w-52 md:m-auto">
      <div className="relative h-12 w-12 md:h-24 md:w-24">
        <Image src={`${img}`} layout="fill" objectFit="contain" />
      </div>
      <h4 className="text-sm md:text-lg font-bold mt-2">{name}</h4>
      <p className="text-sm mt-4 font-light sm:leading-7 sm:w-36 md:w-44">
        {desc}
      </p>
    </div>
  );
}

function BoxFeature({ name, img }) {
  return (
    <div className="bg-white rounded-lg h-44 w-44 text-center p-12 mt-2">
      <div className="relative h-12 w-12 m-auto">
        <Image src={img} layout="fill" objectFit="contain" />
      </div>
      <p className="text-primary uppercase text-sm">{name}</p>
    </div>
  );
}

export { Feature, BoxFeature };
