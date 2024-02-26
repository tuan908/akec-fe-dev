import Image from "next/image";

export default function ProductHow() {
  return (
    <div className="flex flex-row items-center justify-center">
      <h1 className="flex-[0.5] text-center">Product How</h1>

      <div className="flex-[0.5]">
        <Image
          className="rounded-xl object-fill w-full"
          src={
            "https://images-assets.nasa.gov/image/PIA13014/PIA13014~small.jpg"
          }
          alt=""
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
