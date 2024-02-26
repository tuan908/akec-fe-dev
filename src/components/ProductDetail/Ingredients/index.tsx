import Image from "next/image";

export default function ProductIngredients() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex-[0.5]">
        <Image
          className="w-full rounded-xl"
          src="https://images-assets.nasa.gov/image/carina_nebula/carina_nebula~small.jpg"
          alt=""
          width={400}
          height={400}
        />
      </div>
      <h1 className="flex-[0.5] text-center">ProductIngredients</h1>
    </div>
  );
}
