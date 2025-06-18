import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, Star, FileText } from "lucide-react"
import { createServerClient } from "@/lib/supabase-server"

interface SampleReport {
  id: string
  title: string
  description: string
  category: string
  file_url: string
  file_type: string
  preview_text: string
  thumbnail_url?: string
}

export async function SampleReportsSection() {
  const supabase = await createServerClient()

  const { data: reports } = await supabase.from("sample_reports").select("*").limit(6)

  return (
    <section id="samples" className="py-12 md:py-20 bg-gradient-card">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-primary/10 border border-purple-200 dark:border-purple-800 rounded-full px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm mb-4">
            <Star className="h-3 w-3 md:h-4 md:w-4 text-purple-500" />
            <span className="text-gradient font-medium">Premium Quality</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Sample <span className="text-gradient">Project Reports</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            ✨ Explore our high-quality sample reports across various MBA specializations
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {reports?.map((report: SampleReport, index: number) => (
            <div
              key={report.id}
              className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 border-2 hover:border-purple-300 card-gradient rounded-lg p-4 md:p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                {/* Report Icon & Number */}
                <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                    <FileText className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Report Details */}
                <div className="flex-grow space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="text-lg md:text-xl font-semibold group-hover:text-gradient transition-colors line-clamp-1">
                      {report.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-secondary text-white border-0 text-xs md:text-sm w-fit"
                    >
                      {report.category}
                    </Badge>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground line-clamp-2">{report.description}</p>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <span className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">{report.file_type}</span>
                    <span>•</span>
                    <span>Professional Quality</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 flex-shrink-0 w-full md:w-auto">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 md:flex-none hover:bg-gradient-card text-xs md:text-sm"
                  >
                    <Eye className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Preview
                  </Button>
                  <Button size="sm" className="flex-1 md:flex-none btn-gradient text-xs md:text-sm">
                    <Download className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Download
                  </Button>
                </div>
              </div>

              {/* Progress Bar Effect */}
              <div className="mt-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${((index + 1) / 6) * 100}%`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-300 hover:border-purple-500 hover:bg-gradient-card text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
          >
            View All Samples ✨
          </Button>
        </div>
      </div>
    </section>
  )
}
