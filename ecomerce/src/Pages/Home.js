import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Home() {
  const trending = [
    {
      url:
        "https://cdn.shopify.com/s/files/1/0332/6420/5963/products/p27-1_360x.jpg?v=1581868287",
      title: "Title1",
      price: "Rs. 2500",
    },
    {
      url:
        "https://cdn.shopify.com/s/files/1/0332/6420/5963/products/p24-11_540x.jpg?v=1581557817",
      title: "Title2",
      price: "Rs.2000",
    },
    {
      url:
        "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/p24-21_540x.jpg?v=1581731327",
      title: "Title3",
      price: "Rs 4000",
    },
    {
      url:
        "https://cdn.shopify.com/s/files/1/0332/6420/5963/products/P31-1_360x.jpg?v=1581902626",
      title: "Title4",
      price: "Rs 3000",
    },
  ];
  const bestSeller = [
    {
      url:
        "https://cdn.shopify.com/s/files/1/0332/6420/5963/products/p24-11_540x.jpg?v=1581557817",
      title: "Title1",
      price: "Rs. 2500",
    },
    {
      url:
        "https://cdn.shopify.com/s/files/1/0332/6420/5963/products/P31-1_360x.jpg?v=1581902626",
      title: "Title2",
      price: "Rs.2000",
    },
    {
      url:
        "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/p24-21_540x.jpg?v=1581731327",
      title: "Title3",
      price: "Rs 4000",
    },
    {
      url:
        "https://cdn.shopify.com/s/files/1/0332/6420/5963/products/p27-1_360x.jpg?v=1581868287",
      title: "Title4",
      price: "Rs 3000",
    },
  ];
  return (
    <>
      <div className="container">
        <section className="Section1" id="section1">
          <div className="content">
            <div className="small-heading">Winter 2020</div>
            <div className="large-heading">New Arrival Collection</div>
            <a href="#" className="shopButton">
              Shop Now
            </a>
          </div>
          {/* <img
            className="banner"
            src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/slider13_49090674-d1ef-4c34-95b9-19c1edac4d15_3000x.jpg?v=1585640180"
            alt=""
          /> */}
        </section>
        <section className="section2">
          <div
            className="image image1"
            style={{
              backgroundImage:
                "url('https://cdn.shopify.com/s/files/1/0332/6420/5963/files/p-21_1080x.jpg?v=1582087410')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* <img className="image" src={Image2} alt="" /> */}
            <a href="#" className="text">
              Women
            </a>
          </div>
          <div
            className="image image2"
            style={{
              backgroundImage:
                "url('https://cdn.shopify.com/s/files/1/0332/6420/5963/files/bag2_540x.jpg?v=1581730050')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <a href="#" className="text">
              Acessories
            </a>
            {/* <img className="image" src={Image3} alt="" /> */}
          </div>
          <div
            className="image image3"
            style={{
              backgroundImage:
                "url('https://cdn.shopify.com/s/files/1/0332/6420/5963/files/sho1_540x.jpg?v=1581731224')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <a href="#" className="text">
              Footwear
            </a>
            {/* <img className="image" src={Image4} alt="" /> */}
          </div>
          <div
            className="image image4"
            style={{
              backgroundImage:
                "url('https://cdn.shopify.com/s/files/1/0332/6420/5963/files/p24-21_540x.jpg?v=1581731327')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <a href="#" className="text">
              Watches
            </a>
            {/* <img className="image image100" src={Image5} alt="" /> */}
          </div>
        </section>
        <section id="section3" className="section3">
          <div className="heading">
            <div className="line"></div>
            <div className="trendingText">Trending</div>
            <div className="line"></div>
          </div>
          <div className="subHeading">Top view in this week</div>
          <div className="gallery">
            {trending.map((items, index) => (
              <div className="imageGallery imageGallery2" key={index}>
                <div className="addCartView">
                  <a href="#" className="addCartButton">
                    <FaShoppingCart style={{ marginRight: "10px" }} />
                    Add To Cart
                  </a>
                </div>
                <div className="details">
                  <img className="galleryImage" src={items.url} alt="" />
                  <div className="desc">
                    <div className="title">{items.title}</div>
                    <div className="price">{items.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="loadMore">
            <a href="#" className="loadMoreButton" id="button">
              Load More
            </a>
          </div>
        </section>
        <section id="section4" className="section4">
          <div className="offerBanner">
            <div className="saleHeading">Winter Sale</div>
            <div className="saleDetails">Up To 70%</div>
          </div>
        </section>
        <section className="section5">
          <div className="heading">
            <div className="line"></div>
            <div className="trendingText">Best Seller</div>
            <div className="line"></div>
          </div>
          <div className="subHeading">Top view in this week</div>
          <div className="gallery">
            {bestSeller.map((items, index) => (
              <div className="imageGallery imageGallery2" key={index}>
                <div className="addCartView">
                  <a href="#" className="addCartButton">
                    <FaShoppingCart style={{ marginRight: "10px" }} />
                    Add To Cart
                  </a>
                </div>
                <div className="details">
                  <img className="galleryImage" src={items.url} alt="" />
                  <div className="desc">
                    <div className="title">{items.title}</div>
                    <div className="price">{items.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="loadMore">
            <a href="#" className="loadMoreButton" id="button">
              Load More
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
