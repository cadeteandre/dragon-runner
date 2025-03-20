import Link from "next/link";
import { Button } from "./button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
    return (  
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Track Your Running Progress with Dragon Runner
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Record your daily runs, track your progress, and visualize your improvement over time.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="gap-1">
                      Get Started <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="lg" variant="outline">
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <div className="p-8 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg">
                      <div className="text-center space-y-2">
                        <div className="text-4xl font-bold text-primary">5.2 km</div>
                        <div className="text-sm text-muted-foreground">{"Today's Run"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}
 
export default Hero;