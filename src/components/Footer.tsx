import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold font-serif text-primary mb-4">
              Mate cu Succes
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Platforma educațională premium pentru pregătirea examenului de matematică. 
              Oferim materiale complete, suport dedicat și strategii de învățare eficiente.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigare</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Prețuri
                </Link>
              </li>
              <li>
                <Link href="/pregatire-en" className="text-muted-foreground hover:text-primary transition-colors">
                  Pregătire EN
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Suport</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/materiale-gratuite" className="text-muted-foreground hover:text-primary transition-colors">
                  Materiale gratuite
                </Link>
              </li>
              <li>
                <Link href="/contul-meu" className="text-muted-foreground hover:text-primary transition-colors">
                  Contul meu
                </Link>
              </li>
              <li>
                <a href="mailto:contact@matecusucces.ro" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mate cu Succes. Toate drepturile rezervate.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Termeni și condiții
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Politica de confidențialitate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
