import { Builder } from "@builder.io/react";
import { AlertDialogDemo } from "../components/alert-dialog-demo";
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
