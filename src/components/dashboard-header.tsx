import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, ChevronDown, Search } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-sm">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="md:hidden font-bold text-xl mr-4">
          <span className="text-red-500">DR</span>
        </div>
        <div className="flex-1 flex items-center gap-4 md:gap-8">
          <form className="hidden md:flex items-center relative w-full max-w-md">
            <Search className="absolute left-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search runs..."
              className="pl-8 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 w-full"
            />
          </form>
          <div className="ml-auto flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Calendar className="mr-2 h-4 w-4" />
                  October 2023
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by period</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>October 2023</DropdownMenuItem>
                <DropdownMenuItem>September 2023</DropdownMenuItem>
                <DropdownMenuItem>August 2023</DropdownMenuItem>
                <DropdownMenuItem>Last 3 months</DropdownMenuItem>
                <DropdownMenuItem>Last 6 months</DropdownMenuItem>
                <DropdownMenuItem>This year</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Custom period</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center text-white font-medium">
              JD
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 