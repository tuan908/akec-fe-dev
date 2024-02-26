export default async function Loading() {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-1"
      style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}
    >
      <h1 className="text-center text-red-500">Loading page...</h1>
    </div>
  );
}
