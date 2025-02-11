"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const categories = ["Agarbatti", "Dhoop Sticks", "Cones", "Gift Sets"]

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get("category")

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams)
    if (category === selectedCategory) {
      params.delete("category")
    } else {
      params.set("category", category)
    }
    router.push(`/shop?${params.toString()}`)
  }

  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible defaultValue="category">
        <AccordionItem value="category">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={category === selectedCategory}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <label
                    htmlFor={category}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {selectedCategory && (
        <Button
          variant="ghost"
          className="h-auto p-0 text-sm text-muted-foreground"
          onClick={() => {
            const params = new URLSearchParams(searchParams)
            params.delete("category")
            router.push(`/shop?${params.toString()}`)
          }}
        >
          Clear Filters
        </Button>
      )}
    </div>
  )
}

