import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <main className="flex flex-1 justify-center items-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Basic Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            value={input}
            readOnly
            className="mb-4 text-right"
          />
          <div className="grid grid-cols-4 gap-2 mb-4">
            {["7", "8", "9", "/"].map((value) => (
              <Button key={value} onClick={() => handleClick(value)}>
                {value}
              </Button>
            ))}
            {["4", "5", "6", "*"].map((value) => (
              <Button key={value} onClick={() => handleClick(value)}>
                {value}
              </Button>
            ))}
            {["1", "2", "3", "-"].map((value) => (
              <Button key={value} onClick={() => handleClick(value)}>
                {value}
              </Button>
            ))}
            {["0", ".", "=", "+"].map((value) => (
              <Button
                key={value}
                onClick={() =>
                  value === "=" ? handleCalculate() : handleClick(value)
                }
              >
                {value}
              </Button>
            ))}
          </div>
          <Button variant="destructive" onClick={handleClear} className="w-full">
            Clear
          </Button>
          {result && (
            <div className="mt-4 text-right text-xl font-bold">{result}</div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}

export default Index;