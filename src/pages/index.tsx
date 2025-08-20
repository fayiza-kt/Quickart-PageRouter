// pages/index.tsx
import React from "react";
import CarousalSection from "../components/CarousalSection/CarousalSection";
import Image from "next/image";

const offers = [
  { title: "50% Off on School Bags", description: "Grab the deal before it ends!" },
  { title: "Fashion Bonanza", description: "Flat 40% Off on Clothing" },
];

const CaptionStyle: React.CSSProperties = {
  color: "blue",
  fontStyle: "italic",
  textAlign: "center",
  textDecoration: "underline",
};

export default function Home() {
  return (
    <div>
      <CarousalSection />

      <h2 style={CaptionStyle}>Kart It Quick, Love It Long.</h2>
      <h4 className="text-3xl font-bold text-center">
        Welcome to Quickart – Your Stylish Destination for Smart Shopping!
      </h4>
      <p className="text-center text-muted px-3">
        Discover a world of fashion, electronics, beauty, and lifestyle
        products curated just for you. At QuicKart, we combine luxury, style,
        and affordability in one seamless shopping experience. Browse our
        collection of quality products. Free delivery on first order.
      </p>

      <section className="container mt-4">
        <h3 className="mb-3">Today's Offers</h3>
        <div className="row">
          {offers.map((offer, index) => (
            <div key={index} className="col-md-6">
              <div className="card mb-3 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-primary">{offer.title}</h5>
                  <p className="card-text text-muted">{offer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <Image
              src="/images/b2s.jpg"
              alt="Back to School Offer"
              width={500}
              height={300}
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-4 mb-3">
            <Image
              src="/images/fashion.jpeg"
              alt="Fashion Offer"
              width={500}
              height={300}
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-4 mb-3">
            <Image
              src="/images/b2s.jpg"
              alt="Exclusive Offer"
              width={500}
              height={300}
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

