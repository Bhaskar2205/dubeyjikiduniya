export default function MobileMap({ cities, setSelected }: any) {
  return (
    <div className="w-full max-w-md mx-auto px-4">

      <img
        src="/map/india-map.png"
        className="w-full object-contain mb-6"
      />

      <div className="flex flex-col gap-4">
        {cities.map((city: any) => (
          <div
            key={city.id}
            onClick={() => setSelected(city)}
            className="bg-[#3a2d22] px-4 py-3 rounded-xl"
          >
            {city.name}
          </div>
        ))}
      </div>

    </div>
  );
}