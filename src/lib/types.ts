import { ToolInvocation } from "ai";
import { Result } from "@e2b/code-interpreter";

export type ToolResult = (ToolInvocation & {
  result: Result;
})[];

export type CustomFiles = {
  [x: string]: string;
  name: string;
  contentType: string;
  content: string;
};
