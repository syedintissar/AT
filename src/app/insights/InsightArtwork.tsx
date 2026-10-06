import { ArrowDown, ArrowRight, Check, Cloud, Code2, Database, Layers3 } from "lucide-react";

export function InsightArtwork({ accent }: { accent: string }) {
  return (
    <div aria-hidden="true" className={`relative flex aspect-[1.4] items-center justify-center overflow-hidden rounded-[18px] ${accent === "sage" ? "bg-[#e5e9df]" : accent === "peach" ? "bg-[#f4e5db]" : "bg-[#eae6f4]"}`}>
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(#8f869e_1px,transparent_1px)] [background-size:20px_20px]" />
      {accent === "lilac" ? (
        <div className="relative flex w-[72%] -rotate-6 flex-col gap-3 transition-transform duration-500 group-hover:rotate-0">
          {[{ title: "The right question", label: "01 / DISCOVER", width: "w-4/5", icon: <span className="h-2 w-2 rounded-full bg-[#a994c5]" /> }, { title: "A clear direction", label: "02 / DEFINE", width: "w-[90%] ml-auto", icon: <ArrowRight size={13} /> }, { title: "Something meaningful", label: "03 / MAKE", width: "w-full", icon: <Check size={13} /> }].map(item => <div key={item.title} className={`${item.width} flex items-center justify-between rounded-xl border border-white/80 bg-white/85 px-4 py-3 shadow-[0_5px_15px_#7d699a0a]`}><div><p className="text-[7px] tracking-widest text-[#a59ab6]">{item.label}</p><p className="mt-1 text-[11px] font-medium text-[#66517f]">{item.title}</p></div><span className="text-[#a994c5]">{item.icon}</span></div>)}
        </div>
      ) : accent === "peach" ? (
        <div className="relative grid w-[70%] rotate-6 grid-cols-[1.2fr_1fr] gap-3 transition-transform duration-500 group-hover:rotate-0">
          <div className="rounded-xl bg-[#fffaf5] p-5"><span className="font-serif text-5xl tracking-tight text-[#8c624e]">Aa</span><div className="mt-4 h-1.5 w-full rounded-full bg-[#ddc5b4]" /><div className="mt-2 h-1.5 w-2/3 rounded-full bg-[#eadbd0]" /></div>
          <div className="flex flex-col gap-3"><div className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-[#fffaf5] px-2">{["#c38e75", "#ddbe9b", "#9b9a80"].map(color => <span key={color} className="h-7 w-7 rounded-full" style={{ backgroundColor: color }} />)}</div><div className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#b6846b] text-[#fffaf5]"><Layers3 size={18} /><Code2 size={18} /></div></div>
          <div className="col-span-2 flex items-center gap-3 rounded-xl bg-[#fffaf5] p-3"><span className="h-8 w-8 rounded-lg bg-[#efdcd0]" /><div className="flex-1"><div className="h-1.5 w-3/4 rounded-full bg-[#ddc5b4]" /><div className="mt-2 h-1.5 w-1/2 rounded-full bg-[#eadbd0]" /></div><span className="rounded-full bg-[#b6846b] px-3 py-1.5 text-[7px] text-white">Create</span></div>
        </div>
      ) : (
        <div className="relative flex w-[75%] flex-col items-center transition-transform duration-500 group-hover:-translate-y-2"><div className="flex items-center gap-3 rounded-xl border border-white bg-[#fcfcf8] px-6 py-4 text-[#73806a] shadow-sm"><Cloud size={24} /><span className="text-xs font-medium">Ready for what&apos;s next</span></div><div className="my-3 text-[#96a08b]"><ArrowDown size={18} /></div><div className="flex w-full gap-3">{["Observe", "Recover", "Grow"].map((label, index) => <div key={label} className="flex flex-1 flex-col items-center gap-3 rounded-xl border border-white bg-[#fcfcf8] py-5 text-[#89957e]">{index === 0 ? <Layers3 size={20} /> : index === 1 ? <Database size={20} /> : <ArrowRight size={20} className="-rotate-45" />}<span className="text-[9px]">{label}</span></div>)}</div></div>
      )}
    </div>
  );
}
