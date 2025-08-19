interface HeroProps {
  title: string;
  imageUrl?: string;
}

export default function Hero({
  title = 'Título do Hero',
  imageUrl = './imgs/core/placeholder.png',
}: HeroProps) {
  return (
    <section
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`flex h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat`}
    >
      <h1 className="text-center text-2xl font-bold text-yellow-300 md:text-5xl">{title}</h1>
    </section>
  );
}
