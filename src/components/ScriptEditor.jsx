import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Code,
  Play,
  Copy,
  Check,
  RotateCcw,
  X,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Zap,
  AlertCircle,
  GripVertical,
  CheckCircle2,
  FileCode,
} from 'lucide-react';
import { SCRIPT_TEMPLATES } from '../scriptEngine';

export default function ScriptEditor({
  isOpen,
  onClose,
  scriptCode,
  onChangeCode,
  onApplyScript,
  onRegenerateFromState,
  isExecuting,
  executionError,
  autoApply,
  setAutoApply,
  isPaused,
  onTogglePlay,
}) {
  const [width, setWidth] = useState(420);
  const [copied, setCopied] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [templateDropdownOpen, setTemplateDropdownOpen] = useState(false);

  const textareaRef = useRef(null);
  const lineNumbersRef = useRef(null);

  // Sync scroll between line numbers and textarea
  const handleScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  // Drag resizer
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isResizing) return;
      const newWidth = window.innerWidth - e.clientX;
      setWidth(Math.max(320, Math.min(window.innerWidth * 0.85, newWidth)));
    };

    const handlePointerUp = () => {
      if (isResizing) setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isResizing]);

  // Copy code to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(scriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Keyboard shortcut: Cmd+Enter or Ctrl+Enter to run script
  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      onApplyScript(scriptCode);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const updated = scriptCode.substring(0, start) + '    ' + scriptCode.substring(end);
      onChangeCode(updated);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
        }
      }, 0);
    }
  };

  // Compute line numbers
  const lineCount = (scriptCode || '').split('\n').length;
  const lineNumbers = Array.from({ length: Math.max(lineCount, 1) }, (_, i) => i + 1);

  if (!isOpen) return null;

  return (
    <div
      style={{ width: `${width}px` }}
      className="absolute right-0 top-0 bottom-0 z-40 mono-glass flex flex-col border-l border-zinc-800 shadow-2xl animate-fade-in text-xs select-none backdrop-blur-xl bg-black/90"
    >
      {/* Left Resizer Drag Handle */}
      <div
        onPointerDown={(e) => {
          e.preventDefault();
          setIsResizing(true);
        }}
        title="Drag to resize script editor"
        className="absolute left-0 top-0 bottom-0 w-2 -ml-1 cursor-ew-resize flex items-center justify-center group hover:bg-cyan-500/30 transition z-50"
      >
        <div className="w-0.5 h-8 bg-zinc-600 group-hover:bg-cyan-400 rounded-full transition" />
      </div>

      {/* Editor Header */}
      <div className="p-3.5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/80">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <FileCode size={15} />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-mono font-bold text-white text-xs">
              <span>Pythonic Pendulum Script</span>
              <span className="text-[9px] px-1.5 py-0.2 bg-cyan-500/20 text-cyan-300 rounded font-mono uppercase">
                DSL
              </span>
            </div>
            <span className="text-[10px] text-zinc-400 font-mono">
              Bidirectional Live 2-Way Sync
            </span>
          </div>
        </div>

        {/* Header Controls */}
        <div className="flex items-center gap-1">
          {/* Templates Dropdown */}
          <div className="relative">
            <button
              onClick={() => setTemplateDropdownOpen((o) => !o)}
              className="px-2 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 flex items-center gap-1 font-mono text-[10px] transition"
            >
              <Sparkles size={11} className="text-amber-400" />
              <span>Templates</span>
              <ChevronDown size={11} />
            </button>

            {templateDropdownOpen && (
              <div className="absolute right-0 top-8 w-56 bg-zinc-950 border border-zinc-700 rounded-xl shadow-2xl p-1 z-50 animate-fade-in font-mono text-[11px] space-y-0.5">
                <div className="px-2 py-1 text-[9px] uppercase tracking-wider text-zinc-500 font-bold">
                  Preset Script Examples
                </div>
                {SCRIPT_TEMPLATES.map((tmpl) => (
                  <button
                    key={tmpl.id}
                    onClick={() => {
                      onChangeCode(tmpl.code);
                      onApplyScript(tmpl.code);
                      setTemplateDropdownOpen(false);
                    }}
                    className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-zinc-800 text-zinc-300 hover:text-white transition flex items-center justify-between"
                  >
                    <span>{tmpl.name}</span>
                    <ChevronRight size={11} className="text-zinc-500" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            title="Collapse Editor"
            className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition ml-1"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Editor Action Toolbar */}
      <div className="px-3 py-2 border-b border-zinc-800/80 bg-zinc-950/40 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          {/* Run / Apply Script */}
          <button
            onClick={() => onApplyScript(scriptCode)}
            className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono text-[11px] flex items-center gap-1.5 shadow-[0_0_10px_rgba(6,182,212,0.4)] transition active:scale-95"
          >
            <Play size={12} fill="currentColor" />
            <span>Run Script</span>
          </button>

          {/* Re-sync from Simulation */}
          <button
            onClick={onRegenerateFromState}
            title="Regenerate Script from Current 3D Canvas State"
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white transition"
          >
            <RotateCcw size={13} />
          </button>

          {/* Copy Code */}
          <button
            onClick={handleCopy}
            title="Copy Script"
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white transition"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          </button>
        </div>

        {/* Auto Apply Toggle */}
        <label className="flex items-center gap-1.5 cursor-pointer text-[10px] font-mono text-zinc-400 hover:text-zinc-200">
          <input
            type="checkbox"
            checked={autoApply}
            onChange={(e) => setAutoApply(e.target.checked)}
            className="w-3.5 h-3.5 rounded bg-zinc-900 border-zinc-700 accent-cyan-500"
          />
          <span>Auto-run</span>
        </label>
      </div>

      {/* Code Textarea with Line Numbers */}
      <div className="flex-1 flex overflow-hidden font-mono text-xs bg-zinc-950/90 relative">
        {/* Line Numbers Gutter */}
        <div
          ref={lineNumbersRef}
          className="w-10 bg-zinc-950 border-r border-zinc-800/80 py-3 text-right pr-2 text-zinc-600 select-none overflow-hidden font-mono text-[11px] leading-5"
        >
          {lineNumbers.map((n) => (
            <div key={n}>{n}</div>
          ))}
        </div>

        {/* Code Input */}
        <textarea
          ref={textareaRef}
          value={scriptCode}
          onChange={(e) => onChangeCode(e.target.value)}
          onKeyDown={handleKeyDown}
          onScroll={handleScroll}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          className="flex-1 bg-transparent text-zinc-100 p-3 outline-none resize-none overflow-auto font-mono text-[11px] leading-5 text-left whitespace-pre tab-4 selection:bg-cyan-500/30 no-scrollbar"
          placeholder="# Write Pythonic script to configure pendulum network..."
        />
      </div>

      {/* Status & Error Footer */}
      <div className="p-2.5 border-t border-zinc-800 bg-zinc-950 text-[10px] font-mono">
        {executionError ? (
          <div className="flex items-center gap-1.5 text-red-400 truncate">
            <AlertCircle size={13} className="flex-shrink-0" />
            <span className="truncate">Syntax/Runtime Error: {executionError}</span>
          </div>
        ) : (
          <div className="flex items-center justify-between text-zinc-400">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 size={13} className="flex-shrink-0" />
              <span>Script Active & Synced (Cmd+Enter to Run)</span>
            </div>
            <span className="text-zinc-500">{lineCount} lines</span>
          </div>
        )}
      </div>
    </div>
  );
}
