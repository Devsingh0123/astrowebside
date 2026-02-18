import { Button } from "../ui/button"
import outer from "@/assets/outercircle.png"
// import inner from "@/assets/innercircle.png"
import bannerImg from "@/assets/banner-img-674ebf17e0101.jpg";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MoveRight, Phone } from "lucide-react"
import { IoIosChatbubbles } from "react-icons/io";
import { Link } from "react-router-dom"


const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-50 via-amber-100 to-orange-50 shadow-lg">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">

          {/* Left content */}


          <div className="space-y-6 self-center text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl font-extrabold leading-tight bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Discover What The <br /> Stars Have Written For You ✨
            </h1>

            <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
              Learn about astrology, zodiac signs, retrogrades, and more!
              Your world becomes clear once you understand how the universe influences it.
            </p>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
              <Card className={"active:scale-97"}>
                <Link to={"/talk-to-astrologer"}>

                  <CardHeader className="flex flex-row items-iten   justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                        <Phone className="h-5 w-5 " />
                      </span>
                      <span className="text-base font-semibold">
                        Talk
                      </span>
                    </CardTitle>
                    <CardAction className={"self-center"}>
                      <MoveRight className=" " />
                    </CardAction>
                  </CardHeader>
                </Link>
              </Card>
              <Card className={"active:scale-97"}>
                <Link to={"/talk-to-astrologer"}>
                  <CardHeader className="flex flex-row items-iten  justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                        <IoIosChatbubbles className="h-5 w-5  " />
                      </span>
                      <span className="text-base font-semibold">
                        Chat


                      </span>

                    </CardTitle>
                    <CardAction className={"self-center"}>
                      <MoveRight className=" " />
                    </CardAction>
                  </CardHeader>
                </Link>


              </Card>
              <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-400/30">
                ✨ Love & Career Guidance
              </span>
              <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-400/30">
                💼 Career & Finance Predictions
              </span>


              {/* <Card className={"active:scale-97"}>
                <Link>

                  <CardHeader className="flex flex-row items-iten  justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                        <Phone className="h-5 w-5  " />
                      </span>
                      <span className="text-base font-semibold">
                        Talk
                      </span>
                    </CardTitle>
                    <CardAction className={"self-center"}>
                      <MoveRight className=" " />
                    </CardAction>
                  </CardHeader>
                </Link>
              </Card> */}
              {/* <Card className={"active:scale-97"}>
                <Link>
                  <CardHeader className="flex flex-row items-iten  justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                        <Phone className="h-5 w-5  " />
                      </span>
                      <span className="text-base font-semibold">
                        Talk
                      </span>
                    </CardTitle>
                    <CardAction className={"self-center"}>
                      <MoveRight className=" " />
                    </CardAction>
                  </CardHeader>
                </Link>
              </Card> */}



            </div>

            {/* <Button>Chat now</Button> */}
          </div>




          {/* Right animation */}
          <div className="relative flex items-center justify-center">

            {/* Outer rotating circle */}
            <img
              src={outer}
              alt="imageOuter"
              color="red-600"
              className="
                w-[80%]
                animate-spin
                
                
                
              motion-safe:animation-duration-[20s]
              "
            />

            {/* Inner reverse rotating circle */}
            <img
              src={bannerImg}
              alt="imageInner"
              className="absolute w-[75%] z-10 "
            />


          </div>

        </div>
      </div>
    </section>
  )
}

export default Banner
