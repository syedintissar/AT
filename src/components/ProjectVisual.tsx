import { ArrowUpRight, Check, ChevronDown, Heart, LayoutDashboard, Plus, Search, ShoppingBag, Sun, Wallet } from "lucide-react";

function FinanceVisual() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#e8e4f5] px-[7%] pt-[10%]">
      <div className="absolute -left-12 -top-24 h-64 w-64 rounded-full border border-white/50" />
      <div className="absolute -bottom-28 -right-12 h-80 w-80 rounded-full border border-white/60" />
      <div className="relative flex h-full w-full origin-bottom -rotate-[3deg] overflow-hidden rounded-t-[12px] border border-[#dad6e9] bg-[#faf9ff] shadow-[0_20px_60px_-20px_#6b5c9180] transition-transform duration-700 group-hover:rotate-0 group-hover:-translate-y-2">
        <div className="w-[19%] shrink-0 border-r border-[#eeebf6] bg-white px-[4%] py-[6%]">
          <div className="mb-9 text-[clamp(9px,1.1vw,15px)] font-bold tracking-tight text-[#3f3262]">c<span className="hidden sm:inline">larity</span><span className="text-[#8a6ad3]">.</span></div>
          <div className="space-y-5 text-[#a49bb8]">
            <LayoutDashboard size={14} className="text-[#7953bf]" />
            <Wallet size={14} />
            <div className="h-2 w-5 rounded-full bg-[#e9e5f1]" />
            <div className="h-2 w-7 rounded-full bg-[#e9e5f1]" />
          </div>
        </div>
        <div className="min-w-0 flex-1 p-[5%]">
          <div className="mb-[8%] flex items-center justify-between">
            <div><p className="text-[8px] text-[#9d93b2]">YOUR WORKSPACE</p><p className="mt-1 text-[clamp(12px,1.4vw,20px)] font-semibold text-[#3b3156]">A clearer picture.</p></div>
            <div className="grid h-7 w-7 place-items-center rounded-full bg-[#e5ddf4] text-[9px] font-semibold text-[#79618e]">JD</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-[#7a59b9] p-[9%] text-white"><p className="text-[8px] text-[#e0d5f4]">Total balance</p><p className="mt-2 text-[clamp(16px,2.2vw,30px)] font-medium tracking-tight">$24,680<span className="text-[10px] opacity-60">.00</span></p><p className="mt-3 text-[7px] text-[#e0d5f4]">↗ Your money, in perspective</p></div>
            <div className="rounded-lg border border-[#e9e4f3] bg-white p-[9%]"><p className="text-[8px] text-[#9d93b2]">Monthly income</p><p className="mt-2 text-[clamp(16px,2.2vw,30px)] font-medium tracking-tight text-[#3b3156]">$8,420</p><div className="mt-4 h-1 rounded-full bg-[#f0edf5]"><div className="h-1 w-3/4 rounded-full bg-[#ad94d8]" /></div></div>
          </div>
          <div className="mt-[5%] rounded-lg border border-[#e9e4f3] bg-white p-[6%]">
            <div className="flex justify-between text-[9px] font-medium text-[#4e416c]"><span>Cash flow</span><span className="flex items-center gap-1 text-[7px] font-normal text-[#9d93b2]">This month <ChevronDown size={9} /></span></div>
            <div className="mt-5 flex h-[clamp(60px,8vw,120px)] items-end justify-between gap-[4%] border-b border-[#ece8f3] px-1">
              {[35, 52, 43, 68, 57, 78, 65, 91, 75, 100, 85, 95].map((height, index) => <div key={index} className={`w-full rounded-t-[3px] ${index === 9 ? "bg-[#7a59b9]" : "bg-[#dfd4f1]"}`} style={{ height: `${height}%` }} />)}
            </div>
            <div className="mt-2 flex justify-between text-[6px] text-[#afa6bd]"><span>01 JUN</span><span>15 JUN</span><span>30 JUN</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommerceVisual() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#e5e9df] px-[9%] pt-[9%]">
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#d4ddcb]/60" />
      <div className="relative h-full w-full origin-bottom rotate-[3deg] overflow-hidden rounded-t-[10px] bg-[#f8f5ef] shadow-[0_20px_60px_-20px_#66755880] transition-transform duration-700 group-hover:rotate-0 group-hover:-translate-y-2">
        <div className="flex items-center justify-between border-b border-[#eae5d9] px-[7%] py-[5%]"><span className="font-serif text-[clamp(18px,2.5vw,32px)] tracking-[-0.06em] text-[#394c35]">forma</span><div className="flex items-center gap-3 text-[#65715a]"><span className="text-[7px]">Objects for living</span><ShoppingBag size={11} /></div></div>
        <div className="grid grid-cols-[1.1fr_1fr] items-center gap-2 px-[7%] pt-[10%]">
          <div className="relative z-10"><p className="mb-3 text-[6px] tracking-[0.2em] text-[#8a8b75]">LESS, BUT BETTER.</p><p className="font-serif text-[clamp(24px,3.2vw,45px)] leading-[1.08] tracking-[-0.06em] text-[#3f4e35]">Everyday<br />objects.<br /><span className="italic">Extraordinary</span><br />living.</p><div className="mt-5 inline-flex items-center gap-3 border-b border-[#47563b] pb-1 text-[7px] text-[#47563b]">Explore the collection <ArrowUpRight size={10} /></div></div>
          <div className="relative flex h-[clamp(140px,20vw,275px)] items-end justify-center rounded-t-full bg-[#e6e4d5]">
            <div className="absolute bottom-5 h-3 w-4/5 rounded-full bg-[#8a8460]/20 blur-sm" />
            <div className="relative mb-5 h-[58%] w-[64%] rounded-t-[38%] rounded-b-[24%] bg-[linear-gradient(90deg,#a97c50,#d1ab7f_45%,#b78c5f)] shadow-[inset_-8px_0_14px_#936e4430] before:absolute before:-top-[5%] before:left-[24%] before:h-[15%] before:w-[52%] before:rounded-[50%] before:border-[4px] before:border-[#d6b58b] before:bg-[#8e6a47]">
              <div className="absolute -top-[50%] left-1/2 h-[64%] w-[2px] -rotate-12 bg-[#7a8055] before:absolute before:left-0 before:top-4 before:h-8 before:w-3 before:rotate-[-35deg] before:rounded-[90%_0_90%_0] before:bg-[#8b9365] after:absolute after:-left-3 after:top-9 after:h-7 after:w-3 after:rotate-[20deg] after:rounded-[0_90%_0_90%] after:bg-[#737e50]" />
            </div>
          </div>
        </div>
        <div className="mx-[7%] mt-[9%] flex justify-between border-t border-[#e4dfd2] py-4 text-[7px] tracking-wide text-[#90917d]"><span>Thoughtfully made.</span><span>Made to stay.</span><span>01 / 03</span></div>
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="relative flex h-full items-center justify-center gap-[6%] overflow-hidden bg-[#f3e1df] px-[10%] pt-[12%]">
      <div className="absolute -top-20 left-12 h-80 w-80 rounded-full border border-[#ffffff70]" />
      <div className="absolute -bottom-36 right-0 h-80 w-80 rounded-full bg-[#e7c4c1]/45" />
      <div className="relative h-[112%] w-[44%] -rotate-[9deg] rounded-t-[28px] border-[5px] border-[#faf6f2] bg-[#fbf7f1] px-[4%] pt-[5%] shadow-[0_15px_40px_#9a6b6230] transition-transform duration-700 group-hover:-rotate-[5deg] group-hover:-translate-y-2">
        <div className="mx-auto mb-6 h-1 w-8 rounded-full bg-[#43382d]" />
        <div className="flex items-center justify-between text-[#886553]"><span className="font-serif text-[clamp(14px,2vw,26px)] italic">bloom.</span><Sun size={14} /></div>
        <p className="mt-6 text-[7px] text-[#9d8c7e]">A LITTLE SPACE FOR YOU</p>
        <p className="mt-2 font-serif text-[clamp(18px,2.5vw,34px)] leading-[1.1] tracking-[-0.05em] text-[#695446]">Good things<br />take a little<br /><span className="italic text-[#b57662]">practice.</span></p>
        <div className="relative mx-auto my-5 grid aspect-square w-[80%] place-items-center">
          {[0, 60, 120].map(rotation => <div key={rotation} className="absolute h-[92%] w-[47%] rounded-[50%] bg-[#d79e8670]" style={{ transform: `rotate(${rotation}deg)` }} />)}
          <div className="relative h-6 w-6 rounded-full bg-[#f3d6b2]" />
        </div>
        <div className="flex items-center justify-between rounded-full bg-[#a87059] px-3 py-2 text-[7px] text-white">Find your moment <ArrowUpRight size={10} /></div>
      </div>
      <div className="relative mt-14 h-[112%] w-[44%] rotate-[9deg] rounded-t-[28px] border-[5px] border-[#faf6f2] bg-[#fffaf4] px-[4%] pt-[5%] shadow-[0_15px_40px_#9a6b6230] transition-transform duration-700 group-hover:rotate-[5deg] group-hover:-translate-y-2">
        <div className="mx-auto mb-6 h-1 w-8 rounded-full bg-[#43382d]" />
        <div className="flex items-center justify-between text-[#886553]"><span className="text-[8px]">Your daily pause</span><Heart size={12} /></div>
        <p className="mt-6 font-serif text-[clamp(17px,2.3vw,30px)] leading-[1.15] text-[#695446]">How are you<br /><span className="italic">feeling today?</span></p>
        <div className="mt-4 flex gap-1.5">{["☺", "◡", "☀"].map((face, index) => <div key={face} className={`grid aspect-square w-1/3 place-items-center rounded-full text-lg ${index === 0 ? "bg-[#edd7bd] text-[#86664c]" : "bg-[#f1ede3] text-[#c1ae94]"}`}>{face}</div>)}</div>
        <p className="mb-3 mt-6 text-[8px] font-semibold text-[#886553]">Little rituals</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 rounded-lg bg-[#e6e9db] p-3 text-[7px] text-[#7e8965]"><Sun size={11} /><span>A moment outside</span><Check size={10} className="ml-auto" /></div>
          <div className="flex items-center gap-2 rounded-lg bg-[#f0dfd2] p-3 text-[7px] text-[#a78067]"><Heart size={11} /><span>A little gratitude</span><Plus size={10} className="ml-auto" /></div>
          <div className="flex items-center gap-2 rounded-lg bg-[#e9e4ef] p-3 text-[7px] text-[#9684a7]"><Search size={11} /><span>Something to notice</span><Plus size={10} className="ml-auto" /></div>
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({ variant, compact = false }: { variant: string; compact?: boolean }) {
  return (
    <div aria-hidden="true" className={`w-full overflow-hidden rounded-[20px] ${compact ? "aspect-[1.35]" : "aspect-[1.3]"}`}>
      {variant === "commerce" ? <CommerceVisual /> : variant === "mobile" ? <MobileVisual /> : <FinanceVisual />}
    </div>
  );
}
