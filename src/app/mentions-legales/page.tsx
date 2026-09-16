import type { Metadata } from "next";
import { LegalNoticeView } from "@/components/legal/LegalView";

export const metadata: Metadata = {
  title: "Mentions légales — Green Planet Technology",
};

export default function MentionsLegales() {
  return <LegalNoticeView />;
}
