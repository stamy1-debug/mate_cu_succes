"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Download, FileText, Video, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const materialCategories = [
  "Toate",
  "Algebra",
  "Geometrie",
  "Trigonometrie",
  "Statistică",
  "Teste",
];

const mockMaterials = [
  {
    id: 1,
    title: "Ecuații de gradul I și II",
    category: "Algebra",
    type: "pdf",
    downloads: 234,
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Teorema lui Pitagora - Aplicații",
    category: "Geometrie",
    type: "video",
    downloads: 189,
    date: "2024-01-10",
  },
  {
    id: 3,
    title: "Test de evaluare - Capitolul 1",
    category: "Teste",
    type: "pdf",
    downloads: 456,
    date: "2024-01-08",
  },
  {
    id: 4,
    title: "Funcții liniare - Teorie și exemple",
    category: "Algebra",
    type: "pdf",
    downloads: 312,
    date: "2024-01-05",
  },
  {
    id: 5,
    title: "Seminar live - Probleme de sinteză",
    category: "Toate",
    type: "live",
    downloads: 567,
    date: "2024-01-20",
  },
  {
    id: 6,
    title: "Probabilități și statistică",
    category: "Statistică",
    type: "pdf",
    downloads: 198,
    date: "2024-01-03",
  },
];

export default function MaterialeGratuitePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Toate");

  const filteredMaterials = mockMaterials.filter((material) => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Toate" || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-5 w-5" />;
      case "video":
        return <Video className="h-5 w-5" />;
      case "live":
        return <Calendar className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight font-serif sm:text-5xl mb-4">
            Materiale gratuite
          </h1>
          <p className="text-lg text-muted-foreground">
            Acces la sute de materiale educaționale, videoclipuri și teste de pregătire
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Caută materiale..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Filter className="h-5 w-5 text-muted-foreground self-center" />
            {materialCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredMaterials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg">{material.title}</CardTitle>
                    <div className="text-primary shrink-0">
                      {getTypeIcon(material.type)}
                    </div>
                  </div>
                  <CardDescription>
                    {material.category} • {new Date(material.date).toLocaleDateString('ro-RO')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    <Download className="inline h-4 w-4 mr-1" />
                    {material.downloads} descărcări
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    {material.type === "live" ? "Participă" : "Descarcă"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Nu s-au găsit materiale care să corespundă criteriilor tale de căutare.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
