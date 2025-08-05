import AccordionContained from "@/components/AccordionContained";
import CardBuildIo from "@/components/card-build-io";
import CarouselCard from "@/components/CarouselCard";

export default function Components() {
  const previewCard = {
    title: "Login to your account",
    description:
      "<p>Você está começando o Projeto Biomaq e irá conhecer uma importante área da Ciência: a Física e iremos trilhar esse conhecimento falando sobre a ENERGIA!</p> <br> <p>Observe e tente pensar: O que há em comum nas imagens?!</p>",
    imageUrl: "./imgs/core/placeholder.png",
  };

  const previewAccordionContained = [
    {
      title: "Item 1",
      content: "Conteúdo do item 1",
    },
    {
      title: "Item 2",
      content: "Conteúdo do item 2",
    },
  ];

  const previewCarouselCard = [
    {
      imgSrc: "./imgs/core/placeholder.png",
      title: "Título 1",
      content: "Conteúdo 1",
    },
    {
      imgSrc: "./imgs/core/placeholder.png",
      title: "Título 2",
      content: "Conteúdo 2",
    },
    {
      imgSrc: "./imgs/core/placeholder.png",
      title: "Título 3",
      content: "Conteúdo 3",
    },
  ];

  return (
    <div className="p-10 max-w-[780px] mx-auto">
      <CardBuildIo
        title={previewCard.title}
        description={previewCard.description}
        imageUrl={previewCard.imageUrl}
      />
      <AccordionContained items={previewAccordionContained} />
      <CarouselCard items={previewCarouselCard} />
    </div>
  );
}
