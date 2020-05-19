/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Image from "../components/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { createMarkup } from "../utils/functions";
import Outlinebutton from "./outlineButton";

const DesktopSlider = ({
  imageGallery,
  price,
  heading,
  descriptionNode,
  specificationTitle,
  specificationListNode,
  externalButtonText,
  externalButtonLink,
}) => {
  const [focusImage, setFocusImage] = useState();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:
      imageGallery.length > 5
        ? 6
        : imageGallery.length > 4
        ? 5
        : imageGallery.length > 3
        ? 4
        : imageGallery.length > 2
        ? 3
        : imageGallery.length > 1
        ? 2
        : 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    focusOnSelect: true,
  };
  return (
    <article
      sx={{
        display: ["none", "flex", "flex"],
        flexDirection: ["column-reverse", "row-reverse"],
        my: 8,
      }}
    >
      <div sx={{ flex: "1" }}>
        <div sx={{ px: 3, ml: [2, null, 6] }}>
          <Styled.h2>{heading}</Styled.h2>
          <p
            sx={{
              display: "block",
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
              fontSize: 2,
              textTransform: "uppercase",
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
          <div sx={{ py: 3 }}>
            <Outlinebutton
              text={externalButtonText}
              href={externalButtonLink}
            />
          </div>
        </div>
      </div>
      <div sx={{ flex: "1" }}>
        <div>
          <Image
            alt={imageGallery[0].alt}
            image={focusImage ? focusImage : imageGallery[0].fluid}
          />
        </div>
        {imageGallery.length >= 2 ? (
          <div
            sx={{
              width: imageGallery.length > 2 ? "300px" : "200px",
              display: ["none", "inline-block", null],
              my: 2,
            }}
          >
            <Slider {...settings}>
              {imageGallery.map(({ fluid, alt }, index) => (
                <div
                  key={index}
                  sx={{
                    width: "100px",
                    height: "100px",
                    outline: "none",
                    cursor: "pointer",
                    mt: 4,
                  }}
                  onClick={() => setFocusImage(fluid)}
                >
                  <Image
                    sx={{ width: "100px", height: "100px" }}
                    alt={alt}
                    image={fluid}
                  />
                </div>
              ))}
            </Slider>
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default DesktopSlider;
