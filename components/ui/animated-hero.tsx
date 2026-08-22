"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MoveRight, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    []
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleIndex === titles.length - 1) {
        setTitleIndex(0)
      } else {
        setTitleIndex(titleIndex + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleIndex, titles])

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" classname="gap-4">
              Read our launch article <moveright classname="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektra-500">This is something</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleIndex === index
                        ? { y: "0%", opacity: 1 }
                        : { y: "100%", opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Managing a small business today is already tough. Avoid spending
              time on administrative tasks and focus on expanding your company.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" classname="gap-4" variant="outline">
              Jump on a call <phonecall classname="w-4 h-4" />
            </Button>
            <Button size="lg" classname="gap-4">
              Sign up here <moveright classname="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
