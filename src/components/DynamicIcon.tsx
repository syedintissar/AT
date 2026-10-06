"use client";

import { BarChart3, Cloud, Code, Code2, Compass, Cpu, Database, GitBranch, Globe, Headphones, Layers, Layout, Lock, MessagesSquare, Monitor, Palette, PenTool, Rocket, ScanLine, Search, Server, Shield, ShieldAlert, ShieldCheck, ShoppingBag, Smartphone, Sparkles, Sprout, TrendingUp, Users, Workflow, type LucideIcon, type LucideProps } from "lucide-react";

const icons: Record<string, LucideIcon> = { BarChart3, Cloud, Code, Code2, Compass, Cpu, Database, GitBranch, Globe, Headphones, Layers, Layout, Lock, MessagesSquare, Monitor, Palette, PenTool, Rocket, ScanLine, Search, Server, Shield, ShieldAlert, ShieldCheck, ShoppingBag, Smartphone, Sparkles, Sprout, TrendingUp, Users, Workflow };

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = icons[name] || Code;
  return <IconComponent {...props} />;
}
