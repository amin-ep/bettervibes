"use client";

import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";

type Props = {
  control: Control;
  name: string;
};
function SixDigitsInput(props: Props) {
  const onChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<FieldValues, string>,
  ) => {};

  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => {
        return (
          <div className="grid grid-cols-6 gap-2">
            {[
              ...Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  className="input aspect-square"
                  type="number"
                  onChange={(e) => onChange(index, e, field)}
                />
              )),
            ]}
          </div>
        );
      }}
    />
  );
}

export default SixDigitsInput;
