// TODO: ほう、コンポーネント作る時はmemoを設定するのが普通なの？memoで囲ったコンポーネントは、どんな時にサイレンダリングされるのでしょうか？
// 例えばなんですが、再描画するのが重い時には使ったほうがいい。useMemoかmemoで関数をメモを使うようにする。
import { memo } from "react"; //親コンポーネントがサイレンダリングされても、このコンポーネントはいつサイレンダリングされるの？
import { Handle, type NodeProps, Position } from "@xyflow/react";
import { cn } from "@/lib/utils";

type MindMapNodeData = {
  label: string;
};

export const MindMapNode = memo(
  (node: NodeProps & { data: MindMapNodeData }) => {
    const { id, data, selected } = node;

    // これがルートノードかどうかを判断
    const isRoot = id === "root";

    return (
      <>
        <div
          className={cn(
            // 基本スタイル（常に適用）
            "px-4 py-2 rounded-lg shadow-md transition-all duration-200 min-w-[100px] max-w-[200px]",
            // ノードタイプによるスタイル
            isRoot
              ? "bg-orange-500 text-white border-4 border-yellow-400"
              : "bg-white border-2 border-amber-500",
            // 選択状態のスタイル
            selected && "animate-pulse-subtle",
            selected && !isRoot && "bg-emerald-100 border-2 border-emerald-500"
          )}
        >
          <div className="font-pixel text-center">{data.label}</div>
        </div>

        {/* 接続ポイント */}
        <Handle
          type="target"
          position={Position.Top}
          className="w-3 h-3 border-2 border-amber-500 bg-white"
        />
        <Handle
          type="source"
          position={Position.Bottom}
          className="w-3 h-3 border-2 border-amber-500 bg-white"
        />
      </>
    );
  }
);

MindMapNode.displayName = "MindMapNode";