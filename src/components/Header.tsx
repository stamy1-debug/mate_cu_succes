"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Acasă", href: "/" },
  { name: "Prețuri", href: "/pricing" },
  { name: "Pregătire EN", href: "/pregatire-en" },
  { name: "Materiale gratuite", href: "/materiale-gratuite" },
  { name: "Contul meu", href: "/contul-meu" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasClerk, setHasClerk] = useState(false);
  const [ClerkComponents, setClerkComponents] = useState<any>(null);

  useEffect(() => {
    // Check if Clerk is available
    const checkClerk = async () => {
      if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
        try {
          const clerk = await import("@clerk/nextjs");
          setClerkComponents({
            SignedIn: clerk.SignedIn,
            SignedOut: clerk.SignedOut,
            UserButton: clerk.UserButton,
          });
          setHasClerk(true);
        } catch (e) {
          setHasClerk(false);
        }
      }
    };
    checkClerk();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold font-serif text-primary">
              Mate cu Succes
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Deschide meniul"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          {hasClerk && ClerkComponents ? (
            <>
              <ClerkComponents.SignedOut>
                <Button asChild variant="ghost">
                  <Link href="/sign-in">Autentificare</Link>
                </Button>
                <Button asChild>
                  <Link href="/sign-up">Înregistrare</Link>
                </Button>
              </ClerkComponents.SignedOut>
              <ClerkComponents.SignedIn>
                <ClerkComponents.UserButton afterSignOutUrl="/" />
              </ClerkComponents.SignedIn>
            </>
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link href="/sign-in">Autentificare</Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">Înregistrare</Link>
              </Button>
            </>
          )}
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-bold font-serif text-primary">
                  Mate cu Succes
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Închide meniul"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-2">
                  {hasClerk && ClerkComponents ? (
                    <>
                      <ClerkComponents.SignedOut>
                        <Button asChild variant="ghost" className="w-full">
                          <Link href="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                            Autentificare
                          </Link>
                        </Button>
                        <Button asChild className="w-full">
                          <Link href="/sign-up" onClick={() => setMobileMenuOpen(false)}>
                            Înregistrare
                          </Link>
                        </Button>
                      </ClerkComponents.SignedOut>
                      <ClerkComponents.SignedIn>
                        <div className="flex justify-center py-2">
                          <ClerkComponents.UserButton afterSignOutUrl="/" />
                        </div>
                      </ClerkComponents.SignedIn>
                    </>
                  ) : (
                    <>
                      <Button asChild variant="ghost" className="w-full">
                        <Link href="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                          Autentificare
                        </Link>
                      </Button>
                      <Button asChild className="w-full">
                        <Link href="/sign-up" onClick={() => setMobileMenuOpen(false)}>
                          Înregistrare
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
