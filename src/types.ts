export interface ChapterItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  keyPoints: string[];
  content: {
    heading?: string;
    paragraphs?: string[];
    callout?: {
      type: 'warning' | 'info' | 'critical' | 'principle';
      title: string;
      text: string;
    };
    checklists?: {
      title: string;
      items: string[];
    };
    subsections?: {
      title: string;
      content: string[];
      badge?: string;
    }[];
  }[];
}

export interface DecisionRow {
  aspect: string;
  lowAlert: string;
  warningAlert: string;
  nextStep: string;
  detailedAnalysis: string;
}

export interface MethodComparisonRow {
  method: string;
  protozoa: string;
  bacteria: string;
  virus: string;
  turbidityImpact: string;
  chemicalRemoval: string;
  keyLimitation: string;
  bestScenario: string;
}
