import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import "./Select.css";

import { useState } from "react";

const SelectArea = (props) => {
  const [selectedValue, setSelectedValue] = useState("Selecione uma Área...");

  const handleChange = (value) => {
    setSelectedValue(value);
    props.onValueChange(value);
  };

  return (
    <Select.Root
      id="SelectArea"
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
            <Select.Group>
              <SelectItem value="Consultoria">Consultoria</SelectItem>
              <SelectItem value="Desenvolvimento">Desenvolvimento</SelectItem>
              <SelectItem value="Dados">Dados</SelectItem>
              <SelectItem value="Mais de Uma">Mais de Uma</SelectItem>
              <SelectItem value="Nenhuma das anteriores">
                Nenhuma das anteriores
              </SelectItem>
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

export default SelectArea;
