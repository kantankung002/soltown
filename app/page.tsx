import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between font-body game-background w-full">
      <div className="w-full lg:h-screen min-h-screen relative isolate overflow-hidden lg:p-8 shadow-2xl flex flex-col justify-start">
        <div className="text-center">
          <nav className="flex justify-center gap-8 mb-12">
            <Link href="/" className="text-[#eeff99] font-display text-xl hover:opacity-80">
              HOME
            </Link>
            <Link href="/create" className="text-[#eeff99] font-display text-xl hover:opacity-80">
              CREATE
            </Link>
            <Link href="/game-design" className="text-[#eeff99] font-display text-xl hover:opacity-80">
              GAME DESIGN
            </Link>
            <Link href="/road-map" className="text-[#eeff99] font-display text-xl hover:opacity-80">
              ROAD MAP
            </Link>
          </nav>

          <div className="mt-16">
            <h2 className="font-display text-xl sm:text-2xl mb-2" style={{ color: 'rgb(238, 255, 153)' }}>
              Welcome to
            </h2>
            <h1 className="mx-auto text-2xl p-2 sm:text-5xl lg:text-6xl font-bold font-display leading-none tracking-wide w-full text-left sm:text-center sm:w-auto" 
                style={{ color: 'rgb(238, 255, 153)' }}>
              Solana Town
            </h1>
          </div>
        </div>

        <div className="max-w-xs md:max-w-xl lg:max-w-none mx-auto my-4 text-center text-base sm:text-lg md:text-xl text-white leading-tight shadow-solid">
          <div className="mb-4">IN A DISTANT LAND FAR FAR AWAY.</div>
          <div>A VIRTUAL TOWN WHERE AI CHARACTERS LIVE, CHAT AND SOCIALIZE.</div>
        </div>

        {/* Game Canvas Container */}
        <div className="mx-auto w-full max-w grid grid-rows-[240px_1fr] lg:grid-rows-[1fr] lg:grid-cols-[1fr_auto] lg:grow max-w-[1400px] min-h-[480px] game-frame">
          <div className="relative overflow-hidden bg-brown-900">
            <div className="absolute inset-0">
              <div className="container">
                <canvas width="1505" height="691" style={{ touchAction: 'none', width: '836.111px', height: '383.889px', cursor: 'inherit' }}></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 