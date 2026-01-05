'use client';

import EquationSolver, { EquationStep } from '@/components/EquationSolver';

export default function LessonsPage() {
  const equationSteps: EquationStep[] = [
    {
      expression: '2x + 5 = 13',
      explanation: 'Ecuația inițială - trebuie să găsim valoarea lui x',
    },
    {
      expression: '2x = 13 - 5',
      explanation: 'Scădem 5 din ambele părți pentru a izola termenul cu x',
    },
    {
      expression: '2x = 8',
      explanation: 'Simplificăm partea dreaptă: 13 - 5 = 8',
    },
    {
      expression: 'x = 8 ÷ 2',
      explanation: 'Împărțim ambele părți la 2 pentru a izola x',
    },
  ];

  const finalAnswer = 'x = 4';

  return (
    <div className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight font-serif sm:text-5xl lg:text-6xl">
            Lecții Interactive
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Înțelege fiecare pas cu explicații clare și exemple practice
          </p>
        </div>

        <div className="mt-16">
          <EquationSolver
            title="Exemplu: Ecuație de gradul I"
            steps={equationSteps}
            finalAnswer={finalAnswer}
          />
        </div>

        <div className="mt-16 bg-muted/50 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">Despre această lecție</h3>
          <p className="text-muted-foreground mb-4">
            Acest exemplu demonstrează cum să rezolvi o ecuație simplă de gradul întâi.
            Fiecare pas include o explicație clară pentru a te ajuta să înțelegi procesul.
          </p>
          <p className="text-muted-foreground">
            Navighează prin pașii folosind butoanele &ldquo;Anterior&rdquo; și &ldquo;Următorul&rdquo; pentru
            a vedea întregul proces de rezolvare.
          </p>
        </div>
      </div>
    </div>
  );
}
