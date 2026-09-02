const AnnouncementBar = () => {
  const items = Array.from({ length: 10 });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-red-600 text-black overflow-hidden h-9 flex items-center">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((_, i) => (
          <span
            key={i}
            className="font-bold text-sm md:text-base mx-8 tracking-wide"
          >
            COROAS DE FLORES A PARTIR DE R$169,99 <span className="mx-2">•</span> 24H
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
