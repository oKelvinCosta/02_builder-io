import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Img from "./Img";

interface CardBuildIoProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const previewCard = {
  title: "Login to your account",
  description:
    "<p>Você está começando o Projeto Biomaq e irá conhecer uma importante área da Ciência: a Física e iremos trilhar esse conhecimento falando sobre a ENERGIA!</p> <br> <p>Observe e tente pensar: O que há em comum nas imagens?!</p>",
  imageUrl: "./imgs/core/placeholder.png",
};

export default function CardBuildIo({
  title = previewCard.title,
  description = previewCard.description,
  imageUrl = previewCard.imageUrl,
}: CardBuildIoProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="mb-3 text-indigo-600 font-bold">{title}</CardTitle>
        <Img src={imageUrl || "./imgs/core/placeholder.png"} className="rounded-xl" />
      </CardHeader>
      <CardContent dangerouslySetInnerHTML={{ __html: description }} />
    </Card>
  );
}
