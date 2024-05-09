"use client";

import TeX from "@matejmazur/react-katex";
import "katex/dist/katex.min.css";
import "./math-equation.css";

type Props = {
  equation: string;
  block?: boolean;
};
export default function MathEquation({ block, equation }: Props) {
  return <TeX block={block} math={equation} />;
}
