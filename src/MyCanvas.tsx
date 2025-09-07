import { GraphCanvas, GraphCanvasProps, InternalGraphNode } from "reagraph";

function MyCanvas() {
  const nodes = [
    { id: "pathlib", label: "pathlib" },
    { id: "os", label: "os" },
    { id: "sys", label: "sys", color: "red" },
  ];

  const edges = [
    { source: "pathlib", target: "os", id: "pathlib-os" },
    { source: "os", target: "sys", id: "os-sys" },
  ];

  const handleNodeClick: GraphCanvasProps["onNodeClick"] = (
    node,
    // props:  // CollapseProps（折りたたみ用など）—使わない場合は無視可
    // event:  // Three.js ベースの MouseEvent（クリック位置など）
  ) => {
    console.log("Clicked node:", node);
    alert(`Clicked node: ${node.id}`);
  };

  return (
    <div className="fixed h-2/4 w-2/4">
      <GraphCanvas
        nodes={nodes}
        edges={edges}
        draggable={true}
        // renderNode={({ size, color, opacity }) => (
        //   <group>
        //     <mesh>
        //       <torusKnotGeometry attach="geometry" args={[size, 1.25, 50, 8]} />
        //       <meshBasicMaterial
        //         attach="material"
        //         color={color}
        //         opacity={opacity}
        //         transparent
        //       />
        //     </mesh>
        //   </group>
        // )}
        onNodeClick={handleNodeClick}
      />
    </div>
  );
}
export default MyCanvas;
