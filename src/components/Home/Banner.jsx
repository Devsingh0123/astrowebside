import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { MoveRight, Phone } from "lucide-react";
import { IoIosChatbubbles } from "react-icons/io";
import { Link } from "react-router-dom";

import outercircle1 from "@/assets/outercircle1.png"
import innercircle from "@/assets/innercircle.png"

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-container">

        {/* Top Section */}
        <div className="banner-top">
          
          {/* Left Content */}
          <div className="banner-left">
            <h1 className="banner-heading">
              Discover What The <br /> Stars Have Written For You ✨
            </h1>
            <p className="banner-text">
              Learn about astrology, zodiac signs, retrogrades, and more!
              Your world becomes clear once you understand how the universe influences it.
            </p>
          </div>

          {/* Right Image */}
          <div className="banner-image">
            <img src={outercircle1} alt="outer" className="outer" />
            <div className="banner-inner">
              <img src={innercircle} alt="inner" />
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="banner-cards">

          {/* Chat Card */}
          <Card className="banner-card">
            <Link to="/talk-to-astrologer">
              <CardHeader className="flex items-center justify-between px-4 py-3">
                <CardTitle className="banner-card-title">
                  <span className="banner-card-icon chat">
                    <IoIosChatbubbles className="h-4 w-4" />
                  </span>
                  Chat
                </CardTitle>
                <MoveRight className="banner-card-arrow" />
              </CardHeader>
            </Link>
          </Card>

          {/* Talk Card */}
          <Card className="banner-card">
            <Link to="/talk-to-astrologer">
              <CardHeader className="flex items-center justify-between px-4 py-3">
                <CardTitle className="banner-card-title">
                  <span className="banner-card-icon phone">
                    <Phone className="h-4 w-4" />
                  </span>
                  Talk
                </CardTitle>
                <MoveRight className="banner-card-arrow" />
              </CardHeader>
            </Link>
          </Card>

          {/* Store Card */}
          <Card className="banner-card">
            <Link to="/talk-to-astrologer">
              <CardHeader className="flex items-center justify-between px-4 py-3">
                <CardTitle className="banner-card-title">
                  <span className="banner-card-icon phone">
                    <Phone className="h-4 w-4" />
                  </span>
                  Store
                </CardTitle>
                <MoveRight className="banner-card-arrow" />
              </CardHeader>
            </Link>
          </Card>

        </div>
      </div>
    </section>
  )
}

export default Banner;

