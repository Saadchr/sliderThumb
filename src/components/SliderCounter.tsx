import React from "react";
import * as Slider from "@radix-ui/react-slider";

const SliderDemo = ({ onChange }: any) => {
  const [value, setValue] = React.useState(1);

  const handleChange = (value: number[]) => {
    setValue(value[0]);
    onChange(value[0]);
  };

  return (
    <form>
      <Slider.Root
        minStepsBetweenThumbs={1}
        className="relative flex items-center select-none touch-none w-[200px] h-5"
        defaultValue={[50]}
        value={[value]}
        max={100}
        step={1}
        onValueChange={handleChange}
      >
        <Slider.Track className="bg-blue-300 relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-yellow-500 rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 bg-green-400  shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          aria-label="Volume"
        />
      </Slider.Root>
      {value}
    </form>
  );
};

export default SliderDemo;
