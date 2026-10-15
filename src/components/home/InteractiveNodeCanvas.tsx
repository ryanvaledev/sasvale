"use client";

import { useEffect, useRef, useState } from "react";

interface NodeItem {
  id: string;
  label: string;
  sublabel: string;
  xPct: number; // Percentage 0 - 100
  yPct: number; // Percentage 0 - 100
  color: string;
}

interface EdgeItem {
  from: string;
  to: string;
  progress: number;
  speed: number;
}

const NODES: NodeItem[] = [
  { id: "FN", label: "FN", sublabel: "Edge Functions", xPct: 56, yPct: 15, color: "#38bdf8" },
  { id: "DB", label: "DB", sublabel: "Vector & Graph DB", xPct: 28, yPct: 22, color: "#818cf8" },
  { id: "NLP", label: "NLP", sublabel: "Intent Router", xPct: 86, yPct: 32, color: "#a78bfa" },
  { id: "RAG", label: "RAG", sublabel: "Context Engine", xPct: 78, yPct: 54, color: "#38bdf8" },
  { id: "LLM", label: "LLM", sublabel: "Frontier Intelligence", xPct: 82, yPct: 69, color: "#60a5fa" },
  { id: "ETL", label: "ETL", sublabel: "Streaming Ingest", xPct: 52, yPct: 74, color: "#34d399" },
  { id: "AGT", label: "AGT", sublabel: "Agentic Loop", xPct: 84, yPct: 88, color: "#f59e0b" },
];

const EDGES: EdgeItem[] = [
  { from: "DB", to: "FN", progress: 0.1, speed: 0.006 },
  { from: "FN", to: "NLP", progress: 0.4, speed: 0.005 },
  { from: "FN", to: "RAG", progress: 0.7, speed: 0.007 },
  { from: "RAG", to: "LLM", progress: 0.2, speed: 0.008 },
  { from: "ETL", to: "RAG", progress: 0.8, speed: 0.005 },
  { from: "ETL", to: "AGT", progress: 0.3, speed: 0.006 },
  { from: "DB", to: "ETL", progress: 0.5, speed: 0.004 },
  { from: "LLM", to: "AGT", progress: 0.9, speed: 0.007 },
];

export function InteractiveNodeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredNode, setHoveredNode] = useState<NodeItem | null>(null);
  const [activeSignal, setActiveSignal] = useState("Autonomous Agent Pipeline Active");

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const edgesState = EDGES.map((e) => ({ ...e }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background ambient radial grid dots
      ctx.fillStyle = "rgba(56, 189, 248, 0.04)";
      const dotSpacing = 32;
      for (let x = 16; x < width; x += dotSpacing) {
        for (let y = 16; y < height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Compute node pixel coordinates
      const coords = new Map<string, { x: number; y: number; node: NodeItem }>();
      NODES.forEach((node) => {
        coords.set(node.id, {
          x: (node.xPct / 100) * width,
          y: (node.yPct / 100) * height,
          node,
        });
      });

      // Draw curved bezier connection wires
      edgesState.forEach((edge) => {
        const fromCoord = coords.get(edge.from);
        const toCoord = coords.get(edge.to);
        if (!fromCoord || !toCoord) return;

        const isHighlighted =
          hoveredNode && (hoveredNode.id === edge.from || hoveredNode.id === edge.to);

        // Calculate control points for smooth S-curve
        const midX = (fromCoord.x + toCoord.x) / 2;
        const cp1x = midX;
        const cp1y = fromCoord.y;
        const cp2x = midX;
        const cp2y = toCoord.y;

        // Path wire
        ctx.beginPath();
        ctx.moveTo(fromCoord.x, fromCoord.y);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, toCoord.x, toCoord.y);

        ctx.strokeStyle = isHighlighted
          ? "rgba(56, 189, 248, 0.7)"
          : "rgba(56, 189, 248, 0.16)";
        ctx.lineWidth = isHighlighted ? 2.5 : 1.2;
        ctx.stroke();

        // Update & draw traveling energy packet
        edge.progress = (edge.progress + edge.speed) % 1;
        const t = edge.progress;
        // Cubic bezier formula for point at t
        const invT = 1 - t;
        const px =
          Math.pow(invT, 3) * fromCoord.x +
          3 * Math.pow(invT, 2) * t * cp1x +
          3 * invT * Math.pow(t, 2) * cp2x +
          Math.pow(t, 3) * toCoord.x;
        const py =
          Math.pow(invT, 3) * fromCoord.y +
          3 * Math.pow(invT, 2) * t * cp1y +
          3 * invT * Math.pow(t, 2) * cp2y +
          Math.pow(t, 3) * toCoord.y;

        // Pulse glow
        const glowRadius = isHighlighted ? 6 : 4;
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = isHighlighted ? "#38bdf8" : "#f59e0b";
        ctx.shadowColor = isHighlighted ? "#38bdf8" : "#f59e0b";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hoveredNode]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] sm:h-[480px] lg:h-[530px] rounded-2xl overflow-hidden bg-[#070b14]/90 border border-white/[0.1] shadow-[0_20px_80px_rgba(3,7,18,0.9)] backdrop-blur-xl group"
      aria-label="Interactive AI Architecture Graph"
    >
      {/* Ambient background glow matching SDLC Corp */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

      {/* Top Floating Status Pill */}
      <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{activeSignal}</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-black/40 px-2.5 py-1 rounded border border-white/5">
          <span>LATENCY:</span>
          <span className="text-emerald-400">14ms</span>
        </div>
      </div>

      {/* The HTML5 Canvas for dynamic wires & traveling pulses */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* HTML Interactive Nodes overlaid on coordinates */}
      <div className="absolute inset-0 z-10">
        {NODES.map((node) => {
          const isHovered = hoveredNode?.id === node.id;
          return (
            <div
              key={node.id}
              style={{
                left: `${node.xPct}%`,
                top: `${node.yPct}%`,
                transform: "translate(-50%, -50%)",
              }}
              className="absolute group/node cursor-pointer select-none"
              onMouseEnter={() => {
                setHoveredNode(node);
                setActiveSignal(`${node.label} » ${node.sublabel} stream locked`);
              }}
              onMouseLeave={() => {
                setHoveredNode(null);
                setActiveSignal("Autonomous Agent Pipeline Active");
              }}
            >
              {/* Pulsing Aura */}
              <div
                className={`absolute -inset-2 rounded-xl transition-all duration-300 ${
                  isHovered
                    ? "bg-cyan-400/20 blur-md scale-110"
                    : "bg-white/[0.02] group-hover/node:bg-cyan-400/10 blur-sm"
                }`}
              />

              {/* Node Card Button */}
              <div
                className={`relative flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border transition-all duration-200 ${
                  isHovered
                    ? "bg-slate-900/95 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-105"
                    : "bg-[#0b101b]/85 border-white/[0.12] hover:border-cyan-400/60 shadow-lg"
                }`}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: node.color }}
                />
                <div className="flex flex-col text-left">
                  <span className="text-[12px] sm:text-[13px] font-bold tracking-wide text-white">
                    {node.label}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {node.sublabel}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Live System Metrics Bar */}
      <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center justify-between p-2.5 rounded-xl bg-slate-950/70 border border-white/[0.08] backdrop-blur-md text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-slate-200 font-medium">99.99% RUNTIME</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">NODES: 7 CLUSTERS</span>
          <span className="text-cyan-400">RAG + AGENTIC AI</span>
        </div>
      </div>
    </div>
  );
}
