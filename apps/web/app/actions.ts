"use server"; // これにより、このファイル内の関数は必ずサーバー側で実行されます

import { callMcpTool } from "./lib/mcp-client";

export async function handleMcpAction(prevState: any, formData: FormData) {
  const message = (formData.get("message") as string) || "";
  if (!message) return { error: "メッセージを入力してください" };

  try {
    // サーバーサイドでのみ実行される
    const result: any = await callMcpTool("echo_message", { text: message });
    const reply = result.content?.[0]?.text || "返答がありませんでした";
    return { text: reply };
  } catch (err) {
    console.error(err);
    return { error: "MCPサーバーの呼び出しに失敗しました" };
  }
}