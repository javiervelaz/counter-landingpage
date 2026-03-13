import { CTASection } from '@/components/CTASection';
import { CostSection } from '@/components/CostSection';
import { DiagnosisSection } from '@/components/DiagnosisSection';
import { FounderSection } from '@/components/FounderSection';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <CostSection />
      <SolutionSection />
      <DiagnosisSection />
      <FounderSection />
      <CTASection />
    </main>
  );
}
