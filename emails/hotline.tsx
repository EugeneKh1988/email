import { Button } from "@react-email/button";
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { Html } from "@react-email/html";
import * as React from "react";

interface Iproducts {
    name: string;
    imgUrl: string;
};

interface hotlineEmailProps {
  title?: string;
  promoCode?: string;
  promoDuration?: string;
  promoHowTo?: string;
  products: Iproducts[];
}

const baseUrl = process.env.SITE_URL ? `https://${process.env.SITE_URL}` : "";
const isRemoteImages = false;

const products: Iproducts[] = [
  {
    name: "Мультипечі від 3299 грн",
    imgUrl: "",
  },
  {
    name: "Грилі від 1499 грн",
    imgUrl: "",
  },
  {
    name: "Сендвічмейкери від 459 грн",
    imgUrl: "",
  },
  {
    name: "Електрочайники від 599 гр",
    imgUrl: "",
  },
  {
    name: "Міксери стаціонарні від 1399 грн",
    imgUrl: "",
  },
  {
    name: "Мультиварки від 1199 грн",
    imgUrl: "",
  },
  {
    name: "Міксери ручні від 599 грн",
    imgUrl: "",
  },
  {
    name: "Блендери від 749 грн",
    imgUrl: "",
  },
];

const fallBackFonts =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji";

const Font = ({
  webFont,
  fontStyle = "normal",
  fontFamily,
  fontWeight = 400,
  fallbackFontFamily,
}) => {
  const src = webFont
    ? `src: url(${webFont.url}) format(${webFont.format});`
    : "";

  return (
    <style>
      {`
            @font-face {
                font-style: ${fontStyle};
                font-family: ${fontFamily};
                font-weight: ${fontWeight};
                mso-font-alt: ${
                  Array.isArray(fallbackFontFamily)
                    ? fallbackFontFamily[0]
                    : fallbackFontFamily
                };
                ${src}
            }
            `}
    </style>
  );
};

const hotlineEmail = ({
  title = "Техніка, яка тебе любить",
  promoCode = "kiber5",
  promoDuration = "Промокод діє з 29 лютого по 7 березня на сайті kibernetiki.com.ua",
  promoHowTo = "Вкажіть промокод при оформленні замовлення або менеджеру в телефонній розмові 0 800 33 26 96",
  products
}: hotlineEmailProps) => {

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light"></meta>
        <meta name="supported-color-schemes" content="light dark"></meta>
      </Head>
      <Preview>{title}</Preview>
      <Font
        webFont={{
          url: "https://db.onlinewebfonts.com/t/1064f0ad1cb65fdab43bb592ddd8aa91.woff2",
          format: "woff2",
        }}
        fontStyle="normal"
        fontFamily="Gilroy-Bold"
        fontWeight={700}
        fallbackFontFamily={fallBackFonts}
      />
      <Font
        webFont={{
          url: "https://db.onlinewebfonts.com/t/9d942e0ff1014c476713a855710ce309.woff2",
          format: "woff2",
        }}
        fontStyle="normal"
        fontFamily="Lato-Bold"
        fontWeight={700}
        fallbackFontFamily={fallBackFonts}
      />
      <Tailwind>
        <Body className="bg-white mx-auto my-auto font-sans">
          <Container className="mx-auto w-full">
            <Section
              style={{
                backgroundColor: "#FDDC37",
                background: "linear-gradient(90deg, #FDDC37 44%, #FBC603 100%)",
              }}
            >
              <Row>
                <Column>
                  <Img
                    src={
                      isRemoteImages
                        ? "https://drive.google.com/uc?export=view&id=1dNAnyYqM9CiRw6dkDqrsJl7FYRV6w-_I"
                        : `${baseUrl}/static/logo.png`
                    }
                    width={160}
                    height="auto"
                    alt="Кібернетики.UA"
                  />
                </Column>
                <Column>
                  <Text
                    className="text-[24px] mx-[15px] my-[20px] font-[700] text-2B2A29"
                    style={{
                      color: "#2B2A29",
                      fontFamily: `Gilroy-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {title}
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default hotlineEmail;
