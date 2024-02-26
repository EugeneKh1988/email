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

interface Iproduct {
    name: string;
    imgUrl: string;
};

interface hotlineEmailProps {
  title?: string;
  cashback?: string;
  promoCode?: string;
  promoDuration?: string;
  promoHowToL1?: string;
  promoHowToL2?: string;
  products: Iproduct[];
}

const baseUrl = process.env.SITE_URL ? `https://${process.env.SITE_URL}` : "";
const isRemoteImages = false;

const products_: Iproduct[] = [
  {
    name: "Мультипечі від 3299 грн",
    imgUrl: `${baseUrl}/static/Мультипечі.png`,
  },
  {
    name: "Грилі від 1499 грн",
    imgUrl: `${baseUrl}/static/Грилі.png`,
  },
  {
    name: "Сендвічмейкери від 459 грн",
    imgUrl: `${baseUrl}/static/Сендвічмейкери.png`,
  },
  {
    name: "Електрочайники від 599 гр",
    imgUrl: `${baseUrl}/static/Електрочайники.png`,
  },
  {
    name: "Міксери стаціонарні від 1399 грн",
    imgUrl: `${baseUrl}/static/Міксери стаціонарні.png`,
  },
  {
    name: "Мультиварки від 1199 грн",
    imgUrl: `${baseUrl}/static/Мультиварки.png`,
  },
  {
    name: "Міксери ручні від 599 грн",
    imgUrl: `${baseUrl}/static/Міксери ручні.png`,
  },
  {
    name: "Блендери від 749 грн",
    imgUrl: `${baseUrl}/static/Блендери.png`,
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
  cashback = "Кешбек 5%",
  promoCode = "kiber5",
  promoDuration = "Промокод діє з 29 лютого по 7 березня на сайті kibernetiki.com.ua",
  promoHowToL1 = "Вкажіть промокод при оформленні замовлення",
  promoHowToL2 = "або менеджеру в телефонній розмові 0 800 33 26 96",
  products = products_,
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
                        : `${baseUrl}/static/logo_1.png`
                    }
                    className="m-[10px]"
                    width={170}
                    height="auto"
                    alt="Кібернетики.UA"
                  />
                </Column>
                <Column>
                  <Text
                    className="text-[26px] mx-[15px] my-[20px] font-[700] text-[#2B2A29]"
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
            <Section>
              <Row>
                <Column className="text-center">
                  <Text
                    className="my-[15px] px-[20px] py-[10px] rounded-[74px] text-[20px] font-[700] inline-block"
                    style={{
                      color: "#FFFFFF",
                      backgroundColor: "#05B263",
                      border: "2px solid #ffffff",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {cashback}
                  </Text>
                  <Text
                    className="text-[16px] font-[700] mt-0 mb-[15px]"
                    style={{
                      color: "#2B2A29",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    На всю дрібну побутову техніку за промокодом
                  </Text>
                  <Text
                    className="mt-0 mb-[15px] px-[35px] py-[8px] tracking-[0.2em] rounded-[8px] text-[14px] font-[700] inline-block"
                    style={{
                      color: "#2B2A29",
                      backgroundColor: "#F9E505",
                      border: "2px solid #ffffff",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {promoCode}
                  </Text>
                  <Text
                    className="text-[12px] mt-0 mb-[5px]"
                    style={{
                      color: "#2B2A29",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {promoDuration}
                  </Text>
                  <Text
                    className="text-[12px] mt-0 mb-0 leading-5"
                    style={{
                      color: "#2B2A29",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {promoHowToL1}
                  </Text>
                  <Text
                    className="text-[12px] mt-0 mb-[15px] leading-5"
                    style={{
                      color: "#2B2A29",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {promoHowToL2}
                  </Text>
                  <Hr style={{ borderTop: "2px solid #9E9E9E" }} />
                </Column>
              </Row>
            </Section>
            <Section>
              <Row>
                <Column className="w-1/2 relative text-left">
                  <Img
                    src={products[0].imgUrl}
                    height="auto"
                    className="max-w-[120px]"
                  />
                  <Button
                    className="m-0 pl-[20px] pr-[10px] py-[8px] rounded-[16px] text-[12px] font-[700] absolute top-2 left-1/3 z-[-1]"
                    style={{
                      color: "#2B2A29",
                      backgroundColor: "#F9E505",
                      border: "2px solid #ffffff",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {products[0].name}
                  </Button>
                </Column>
                <Column className="w-1/2 relative text-right">
                  <Img
                    src={products[1].imgUrl}
                    height="auto"
                    className="inline-block max-w-[120px]"
                  />
                  <Button
                    className="m-0 pr-[20px] pl-[10px] py-[8px] rounded-[16px] text-[12px] font-[700] inline-block absolute bottom-2 left-1/3"
                    style={{
                      color: "#2B2A29",
                      backgroundColor: "#F9E505",
                      border: "2px solid #ffffff",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {products[1].name}
                  </Button>
                </Column>
              </Row>
              <Row className="mt-[10px]">
                <Column className="w-1/2 relative text-left">
                  <Img
                    src={products[2].imgUrl}
                    height="auto"
                    className="max-w-[120px]"
                  />
                  <Button
                    className="m-0 pl-[20px] pr-[10px] py-[8px] rounded-[16px] text-[12px] font-[700] absolute top-2 left-1/3 z-[-1]"
                    style={{
                      color: "#2B2A29",
                      backgroundColor: "#F9E505",
                      border: "2px solid #ffffff",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {products[2].name}
                  </Button>
                </Column>
                <Column className="w-1/2 relative text-right">
                  <Img
                    src={products[3].imgUrl}
                    height="auto"
                    className="inline-block max-w-[120px]"
                  />
                  <Button
                    className="m-0 pr-[20px] pl-[10px] py-[8px] rounded-[16px] text-[12px] font-[700] inline-block absolute bottom-2 left-1/3"
                    style={{
                      color: "#2B2A29",
                      backgroundColor: "#F9E505",
                      border: "2px solid #ffffff",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {products[3].name}
                  </Button>
                </Column>
              </Row>
              <Row className="mt-[10px]">
                <Column className="w-1/2 relative text-left">
                  <Img
                    src={products[4].imgUrl}
                    height="auto"
                    className="max-w-[120px]"
                  />
                  <Button
                    className="m-0 pl-[20px] pr-[10px] py-[8px] rounded-[16px] text-[12px] font-[700] absolute top-2 left-1/3 z-[-1]"
                    style={{
                      color: "#2B2A29",
                      backgroundColor: "#F9E505",
                      border: "2px solid #ffffff",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {products[4].name}
                  </Button>
                </Column>
                <Column className="w-1/2 relative text-right">
                  <Img
                    src={products[5].imgUrl}
                    height="auto"
                    className="inline-block max-w-[120px]"
                  />
                  <Button
                    className="m-0 pr-[20px] pl-[10px] py-[8px] rounded-[16px] text-[12px] font-[700] inline-block absolute bottom-2 left-1/3"
                    style={{
                      color: "#2B2A29",
                      backgroundColor: "#F9E505",
                      border: "2px solid #ffffff",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {products[5].name}
                  </Button>
                </Column>
              </Row>
              <Row className="mt-[10px]">
                <Column className="w-1/2 relative text-left">
                  <Img
                    src={products[6].imgUrl}
                    height="auto"
                    className="max-w-[120px]"
                  />
                  <Button
                    className="m-0 pl-[20px] pr-[10px] py-[8px] rounded-[16px] text-[12px] font-[700] absolute top-2 left-1/3 z-[-1]"
                    style={{
                      color: "#2B2A29",
                      backgroundColor: "#F9E505",
                      border: "2px solid #ffffff",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {products[6].name}
                  </Button>
                </Column>
                <Column className="w-1/2 relative text-right">
                  <Img
                    src={products[7].imgUrl}
                    height="auto"
                    className="inline-block max-w-[120px]"
                  />
                  <Button
                    className="m-0 pr-[20px] pl-[10px] py-[8px] rounded-[16px] text-[12px] font-[700] inline-block absolute bottom-2 left-1/3"
                    style={{
                      color: "#2B2A29",
                      backgroundColor: "#F9E505",
                      border: "2px solid #ffffff",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {products[7].name}
                  </Button>
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
