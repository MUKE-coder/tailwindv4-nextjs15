"use client";
import React, { useState } from "react";

import Select from "react-tailwindcss-select";
import { SelectValue } from "react-tailwindcss-select/dist/components/type";

const options = [
  { value: "fox", label: "🦊 Fox" },
  { value: "Butterfly", label: "🦋 Butterfly" },
  { value: "Honeybee", label: "🐝 Honeybee" },
];
export default function TailwindSelect() {
  const [animal, setAnimal] = useState<SelectValue>(null);
  const handleChange = (value: SelectValue) => {
    console.log("value:", value);
    setAnimal(value);
  };

  return (
    <div className="py-6 max-w-xl mx-auto min-h-96">
      <Select
        value={animal}
        onChange={handleChange}
        options={options}
        primaryColor="blue"
      />
    </div>
  );
}
