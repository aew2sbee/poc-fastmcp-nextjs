"use client";

import { useActionState } from "react";
// サーバーサイドの処理 (handleMcpAction) だけをインポートする
import { handleMcpAction } from "./actions";

export default function Home() {
  /**
   * ポイント：
   * 1. callMcpTool のインポートを削除しました（ブラウザでは動かないため）
   * 2. handleAction 関数を削除しました（actions.ts 側で処理するため）
   * 3. handleMcpAction を useActionState に直接渡します
   */
  const [state, formAction, isPending] = useActionState(handleMcpAction, null);

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">FastMCP + Next.js PoC</h1>

      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <form action={formAction} className="flex flex-col gap-4">
          <label className="text-sm font-medium text-gray-700">「入力」+「送信」でPythonサーバーからオウム返ししてくれます</label>
          <div className="flex gap-2">
            <input
              name="message"
              type="text"
              placeholder="ここに好きなメッセージを入力してください"
              className="flex-1 border border-gray-300 p-2 rounded text-black focus:ring-2 focus:ring-blue-500 outline-none"
              disabled={isPending}
            />
            <button
              type="submit"
              disabled={isPending}
              className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {isPending ? "実行中..." : "送信"}
            </button>
          </div>
        </form>

        <div className="mt-8 border-t pt-6 text-black">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">Response from Python</h2>

          {state?.error && (
            <div className="p-4 bg-red-50 text-red-700 rounded border border-red-200">
              {state.error}
            </div>
          )}

          {state?.text && (
            <div className="p-4 bg-green-50 text-green-800 rounded border border-green-200 font-mono">
              {state.text}
            </div>
          )}

          {!state?.text && !state?.error && (
            <p className="text-gray-400 italic text-sm">上のフォームから送信して結果を確認してください。</p>
          )}
        </div>
      </div>
    </main>
  );
}