/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Fragment } from "react";
import Image from "../components/image";
import StyledLink from "../components/styledLink";

const ProductGallery = ({ title, products }) => {
  return (
    <Fragment>
      <Styled.h2 sx={{ textAlign: "center", mt: 6, mb: "0px" }}>
        {title}
      </Styled.h2>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          p: 4,
        }}
      >
        {products.map((product) => {
          return (
            <div
              key={product.id}
              sx={{
                flex: 1,
                minWidth: "300px",
                maxWidth: ["300px", null, "400px"],
                textAlign: "center",
                py: 4,
                px: [2, 3],
                position: "relative",
                height: ["430px", null, "510px"],
              }}
            >
              <Image
                image={product.productImage.fluid}
                alt={product.productImage.alt}
              />
              <p>{product.productTitle}</p>
              <div
                sx={{ position: "absolute", bottom: 0, left: 50, right: 50 }}
              >
                <StyledLink href="/products">View products</StyledLink>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProductGallery;
