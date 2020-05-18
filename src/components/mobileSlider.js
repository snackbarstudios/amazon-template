/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Image from "../components/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { createMarkup } from "../utils/functions";
import Outlinebutton from "./outlineButton";

const MobileSlider = ({
  imageGallery,
  price,
  heading,
  descriptionNode,
  specificationTitle,
  specificationListNode,
  externalButtonText,
  externalButtonLink,
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    swipeToSlide: true,
    dots: true,
    focusOnSelect: true,
  };
  return (
    <article
      sx={{
        display: ["flex", "none", "none"],
        flexDirection: ["column"],
        mt: 4,
        mb: 6,
      }}
    >
      <div sx={{ px: [0, 0, 3], flex: "1" }}>
        <div sx={{ mb: 4 }}>
          <Slider {...settings}>
            {imageGallery.map(({ fluid, alt }, index) => (
              <div key={index}>
                <Image alt={alt} image={fluid} />
              </div>
            ))}
          </Slider>
        </div>
        <Styled.h2>{heading}</Styled.h2>
        <p
          sx={{
            textTransform: "uppercase",
            fontSize: 2,
            my: 3,
          }}
        >
          {price}
        </p>
        <div sx={{ my: 3 }}>
          <div
            dangerouslySetInnerHTML={createMarkup(
              descriptionNode.childMarkdownRemark.html
            )}
          />
        </div>
        <p
          sx={{
            textTransform: "uppercase",
            fontSize: 2,
            my: 3,
          }}
        >
          {specificationTitle}
        </p>

        <div
          sx={{
            ul: {
              variant: "markdownText.ul",
            },
          }}
          dangerouslySetInnerHTML={createMarkup(
            specificationListNode.childMarkdownRemark.html
          )}
        />
        <div sx={{ pt: 3 }}>
          <Outlinebutton text={externalButtonText} href={externalButtonLink} />
        </div>
      </div>
    </article>
  );
};

export default MobileSlider;
