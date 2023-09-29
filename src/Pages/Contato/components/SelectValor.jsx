import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import "./Select.css";

const SelectValor = (props) => {
  const [selectedValue, setSelectedValue] = useState("Selecione um valor...");

  const handleChange = (value) => {
    setSelectedValue(value);
    props.onValueChange(value);
  };

  return (
    <Select.Root
      id="SelectValor"
      className="SelectRoot"
      value={selectedValue}
      onValueChange={handleChange}
    >
      <Select.Trigger
        id="SelectValor"
        className="SelectTrigger"
        aria-label="Food"
      >
        <Select.Value>{selectedValue}</Select.Value>
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group >
              <Select.Label className="SelectLabel">
                Valores (em R$)
              </Select.Label>
              <SelectItem value="De R$0,00 a R$1.000,00">De R$0,00 a R$1.000,00</SelectItem>
              <SelectItem value="De R$1.000,00 a R$5.000,00">De R$1.000,00 a R$5.000,00</SelectItem>
              <SelectItem value="De R$5.000,00 a R$10.000,00">De R$5.000,00 a R$10.000,00</SelectItem>
              <SelectItem value="De R$10.000,00 a R$20.000,00">De R$10.000,00 a R$20.000,00</SelectItem>
              <SelectItem value="De R$20.000,00 a R$50.000,00">De R$20.000,00 a R$50.000,00</SelectItem>
              <SelectItem value="Outro Valor">Outro Valor</SelectItem>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames("SelectItem", className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default SelectValor;
