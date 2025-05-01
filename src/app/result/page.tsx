"use client";

import { useSearchParams, useRouter } from "next/navigation";
import ResultDisplay from "@/components/ui/ResultDisplay";

export default function ResultPage() {
  const params = useSearchParams();
  const explanation = params.get("explanation") || "";
  const router = useRouter();

  if (!explanation) {
    router.push("/");
    return null;
  }

  return <ResultDisplay explanation={explanation} />;
}
