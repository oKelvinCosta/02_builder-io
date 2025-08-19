import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { BuilderBlocks, type BuilderElement } from '@builder.io/react';
import type { ReactNode } from 'react';

interface AccordionItemPropsBuilder {
  accordionList: {
    accordionName: string;
    blocks: ReactNode[]; // agora é string, não uma função
  }[];
  builderBlock: BuilderElement;
}

export default function AccordionContained({
  accordionList,
  builderBlock,
}: AccordionItemPropsBuilder) {
  return (
    <Accordion
      type="multiple"
      className="my-3 w-full"
      defaultValue={accordionList.map((_, index) => `item-${index}`)}
    >
      {accordionList.map((item, index) => (
        <AccordionItem
          key={`${item.accordionName}${index}`}
          value={`item-${index}`}
          className=":first:mt-0 bg-card text-card-foreground mt-2 w-full rounded-md border shadow-none [&_h3]:mb-0"
        >
          <AccordionTrigger className="px-4 text-lg">{item.accordionName}</AccordionTrigger>
          <AccordionContent className="px-4">
            <BuilderBlocks
              parentElementId={builderBlock?.id}
              dataPath={`accordionList.${index}.blocks`}
              blocks={accordionList[index].blocks || []}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
