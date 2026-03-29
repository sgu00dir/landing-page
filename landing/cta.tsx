"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="w-full px-6 lg:px-12 pt-1 pb-10">
      <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
        <div className="flex items-center justify-center gap-6">
          <Link href="/register" aria-label="Start Free">
            <Button className="px-12 py-5 text-xl font-semibold bg-brandOrange hover:bg-brandOrange/90 focus:ring-brandOrange">
              Start Free
            </Button>
          </Link>
          <span className="text-brandBlue text-3xl sm:text-4xl font-semibold">14 Day Trial</span>
        </div>
        <p className="text-gray-700 text-lg sm:text-xl">
          No credit card • Full access • Onboarding support
        </p>
      </div>
    </section>
  );
}
