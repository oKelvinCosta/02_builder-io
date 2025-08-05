import CarouselCard from "@/components/CarouselCard";
import { Builder } from "@builder.io/react";
import AccordionContained from "../components/AccordionContained";
import { AlertDialogDemo } from "../components/alert-dialog-demo";
import CardBuildIo from "../components/card-build-io";
import { CarouselSize } from "../components/carousel-size";
import Counter from "../components/Counter/Counter";
import KelvinName from "../components/kelvin-name";
import StressTest from "../components/stress-test";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(AlertDialogDemo, {
  name: "AlertDialogDemo",
});

Builder.registerComponent(CarouselSize, {
  name: "CarouselSize",
});

Builder.registerComponent(KelvinName, {
  name: "KelvinName",
  inputs: [
    {
      name: "text",
      type: "text",
      defaultValue: "Kelvin Castro da Silva Costa",
    },
  ],
});

Builder.registerComponent(StressTest, {
  name: "StressTest",
});

Builder.registerComponent(CardBuildIo, {
  name: "CardBuildIo",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "T\u00EDtulo personalizado",
    },
    {
      name: "description",
      type: "richText",
      defaultValue: "<p>Descri\u00E7\u00E3o edit\u00E1vel com <strong>HTML</strong>.</p>",
    },
    {
      name: "imageUrl",
      type: "file",
      allowedFileTypes: ["jpeg", "png", "jpg", "gif", "webp", "svg"],
    },
  ],
});

Builder.registerComponent(AccordionContained, {
  name: "AccordionContained",
  inputs: [
    {
      name: "items",
      type: "list",
      subFields: [
        { name: "title", type: "string" },
        { name: "content", type: "string" },
      ],
    },
  ],
});

Builder.registerComponent(CarouselCard, {
  name: "CarouselCard",
  inputs: [
    {
      name: "layout",
      type: "string",
      enum: ["1:1", "1:2", "2:1"],
      defaultValue: "1:1",
    },
    {
      name: "items",
      type: "list",
      subFields: [
        {
          name: "imgSrc",
          type: "string",
          defaultValue: "./imgs/core/placeholder.png",
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "content",
          type: "string",
        },
      ],
    },
  ],
});
