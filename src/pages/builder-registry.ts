import { Builder } from "@builder.io/react";
import Counter from "../components/Counter/Counter";
import KelvinName from "../components/kelvin-name";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(KelvinName, {
  name: "KelvinName",
});
