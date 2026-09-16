import type { Metadata } from "next";
import { PrivacyView } from "@/components/legal/LegalView";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Green Planet Technology",
};

export default function Confidentialite() {
  return <PrivacyView />;
}
