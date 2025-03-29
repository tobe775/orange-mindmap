import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; //条件分岐でcssを結合できる
import { Pen, Plus, RefreshCw, Trash } from "lucide-react"; //icon: アイコンライブラリ

// 共通のボタンスタイルを関数化
const getButtonStyle = (type: "blue" | "red" | "green") =>
  cn(
    "flex items-center gap-1 border-2 font-pixel",//全部共通
    type === "blue" && "border-blue-800 bg-blue-600 hover:bg-blue-700",//青の場合
    type === "red" && "border-red-800 bg-red-600 hover:bg-red-700",//赤の場合
    type === "green" && "border-emerald-800 bg-green-600 hover:bg-green-700"//緑の場合
  );

export function Header() {
  return (
    <header className="bg-amber-500 border-b-4 border-amber-600 p-2 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="font-pixel text-white text-2xl font-bold ml-12">
          Orange Mind-Map 🍊
        </h1>
      </div>

      <div className="py-2 px-4 rounded-md border-2 border-amber-500 flex items-center gap-2">
        <Button disabled={true} className={getButtonStyle("green")}>
          子要素の追加
          <Plus className="w-4 h-4" />
        </Button>

        <Button disabled={true} className={getButtonStyle("blue")}>
          編集
          <Pen className="w-4 h-4" />
        </Button>

        <Button disabled={true} className={getButtonStyle("red")}>
          削除
          <Trash className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          variant="destructive"
          size="sm"
          className="font-pixel text-xs flex items-center gap-1 border-2 border-red-800 bg-red-600 hover:bg-red-600"
        >
          すべてリセット
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}