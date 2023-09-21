"use client";
import React from "react";
import SliderDemo from "@/components/SliderCounter";
import { Text, Button, Flex } from "@radix-ui/themes";

function reducer(state: any, action: any) {
  if (action.type === "increment") {
    return {
      count: state.count + state.step,
      step: state.step,
    };
  } else if (action.type === "decrement") {
    return {
      count: state.count - state.step,
      step: state.step,
    };
  } else if (action.type === "reset") {
    return {
      count: 0,
      step: state.step,
    };
  } else if (action.type === "updateStep") {
    return {
      count: state.count,
      step: action.step,
    };
  } else {
    throw new Error("This action type isn't supported.");
  }
}

export default function Home() {
  const [state, dispatch] = React.useReducer(reducer, {
    count: 0,
    step: 1,
  });

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleReset = () => dispatch({ type: "reset" });
  const handleUpdateStep = (step: any) =>
    dispatch({ type: "updateStep", step });

  return (
    <main className=" flex h-screen flex-col items-center justify-center p-24">
      <Text className=" rounded p-3 shadow mb-10" size={"9"}>
        {state.count}
      </Text>
      <SliderDemo onChange={handleUpdateStep}></SliderDemo>
      <Flex gap={"3"}>
        <Button onClick={handleIncrement} variant="soft">
          +
        </Button>
        <Button onClick={handleDecrement} variant="soft">
          -
        </Button>
        <Button onClick={handleReset} variant="soft">
          Reset
        </Button>
      </Flex>
    </main>
  );
}
