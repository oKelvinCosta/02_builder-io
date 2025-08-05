import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemProps {
  items: {
    title: string;
    content: string; // agora é string, não uma função
  }[];
}

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

export default function AccordionContained({
  items = previewAccordionContained,
}: AccordionItemProps) {
  return (
    <Accordion type="single" collapsible className="my-3 w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={`${item.title}${index}`}
          value={`${item.title}${index}`}
          className=":first:mt-0 mt-2 w-full rounded-md border bg-card text-card-foreground shadow-none [&_h3]:mb-0"
        >
          <AccordionTrigger className="px-4 text-lg">{item.title}</AccordionTrigger>
          <AccordionContent className="px-4">{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
