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

interface promoEmailProps {
  productName?: string;
  productOldPrice?: number;
  productPrice?: number;
  productImg?: string;
}

const baseUrl = process.env.SITE_URL ? `https://${process.env.SITE_URL}` : "";
const isRemoteImages = true;

const fallBackFonts = "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"; 

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

const promoEmail = ({
  productName = "Смартфон Apple iPhone 14 256GB Midnight (MPVX3)",
  productOldPrice = 39499,
  productPrice = 36999,
  productImg = isRemoteImages
    ? "https://drive.google.com/uc?export=view&id=1d8N2rU8MsZJ57B7POv9FUrOwbJvfSc9Q"
    : `${baseUrl}/static/iphone14.png`,
}: promoEmailProps) => {
  const previewText = "Круто, знову в наявності!";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
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
          <Container
            className="mx-auto py-[20px] w-full"
            style={{
              background: isRemoteImages
                ? "url(https://drive.google.com/uc?export=view&id=1d3CO3W71eKjorIUspDIsg2O8t1LbFoi0), url(https://drive.google.com/uc?export=view&id=1cpzGm02olFv_J-KQeO1FakBiZ_Sm4D8y) #ffffff"
                : `url(${baseUrl}/static/bg_flower.png), url(${baseUrl}/static/bg_star.png) #ffffff`,
              backgroundSize: "300px auto, 300px auto",
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundPosition: "100% 20%, 0 80%",
            }}
          >
            <Section
              style={{
                backgroundColor: "#FDDC37",
                background: "linear-gradient(90deg, #FDDC37 44%, #FBC603 100%)",
              }}
            >
              <Row>
                <Column>
                  <Text
                    className="text-[24px] mx-[15px] my-[20px] font-[700] gilroy"
                    style={{
                      color: "#2B2A29",
                      fontFamily: `Gilroy-Bold, ${fallBackFonts}`,
                    }}
                  >
                    Круто, знову в наявності!
                  </Text>
                </Column>
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
              </Row>
            </Section>
            <Section className="mt-[15px] px-[15px]">
              <Row>
                <Column>
                  <Img src={productImg} width={100} height="auto" />
                </Column>
                <Column className="px-[10px]">
                  <Text
                    className="text-[16px] font-[700] m-0 mb-[10px]"
                    style={{
                      color: "#2B2A29",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {productName}
                  </Text>
                  <Text
                    className="text-[12px] line-through m-0"
                    style={{
                      color: "#868686",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {productOldPrice}
                    <span>&#8372;</span>
                  </Text>
                  <Text
                    className="text-[20px] m-0 mb-[10px]"
                    style={{
                      color: "#2B2A29",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    {productPrice}
                    <span>&#8372;</span>
                  </Text>
                  <Button
                    href="#"
                    className="px-[15px] py-[10px] rounded-[50px] text-[14px] font-[700]"
                    style={{
                      color: "#2B2A29",
                      backgroundColor: "#F9E505",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    Замовити
                  </Button>
                </Column>
              </Row>
            </Section>
            <Hr
              className="border border-solid  w-full mx-0 mt-[10px]"
              style={{ borderColor: "#9E9E9E" }}
            />
            <Text
              className="text-center text-[24px] font-[700] mb-[25px]"
              style={{
                color: "#2B2A29",
                fontFamily: `Gilroy-Bold, ${fallBackFonts}`,
              }}
            >
              Скористайся нашими послугами
            </Text>
            <Section>
              <Row>
                <Column>
                  <Link href="#">
                    <Img
                      src={
                        isRemoteImages
                          ? "https://drive.google.com/uc?export=view&id=1cnkztDEUGb6lY7WI_wrgwUYwZY_ZW-ri"
                          : `${baseUrl}/static/cashback.png`
                      }
                      width={200}
                      height="auto"
                      alt="Кібер-Кешбек"
                    />
                    <Text
                      className="text-center text-[20px] font-[700]"
                      style={{
                        color: "#2B2A29",
                        fontFamily: `Gilroy-Bold, ${fallBackFonts}`,
                      }}
                    >
                      Кібер-Кешбек
                    </Text>
                  </Link>
                </Column>
                <Column>
                  <Link href="#">
                    <Img
                      src={
                        isRemoteImages
                          ? "https://drive.google.com/uc?export=view&id=1dAXVeiLTgrZQW3xbRoGDFrFVb04Kiivn"
                          : `${baseUrl}/static/credit.png`
                      }
                      width={200}
                      height="auto"
                      alt="Кібер-Кредит"
                    />
                    <Text
                      className="text-center text-[20px] font-[700]"
                      style={{
                        color: "#2B2A29",
                        fontFamily: `Gilroy-Bold, ${fallBackFonts}`,
                      }}
                    >
                      Кібер-Кредит
                    </Text>
                  </Link>
                </Column>
                <Column>
                  <Link href="#">
                    <Img
                      src={
                        isRemoteImages
                          ? "https://drive.google.com/uc?export=view&id=1cpxJQm_0Yeo3-wtLs14JWlcYCJxPcwSf"
                          : `${baseUrl}/static/exchange.png`
                      }
                      width={200}
                      height="auto"
                      alt="Кібер-Обмін"
                    />
                    <Text
                      className="text-center text-[20px] font-[700]"
                      style={{
                        color: "#2B2A29",
                        fontFamily: `Gilroy-Bold, ${fallBackFonts}`,
                      }}
                    >
                      Кібер-Обмін
                    </Text>
                  </Link>
                </Column>
              </Row>
            </Section>
            <Section className="mt-[25px]">
              <Row>
                <Column align="right">
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
                  <p style={{ marginTop: "20px" }}>
                    <Link href="https://www.instagram.com">
                      <Img
                        src={
                          isRemoteImages
                            ? "https://drive.google.com/uc?export=view&id=1dhF23rML6nEnRJ3-n86pLngOhwSgSM7W"
                            : `${baseUrl}/static/instagram.png`
                        }
                        width={16}
                        height="auto"
                        alt="Instagram"
                        className="inline-block mr-2"
                      />
                    </Link>
                    <Link href="https://www.tiktok.com/ru-RU/">
                      <Img
                        src={
                          isRemoteImages
                            ? "https://drive.google.com/uc?export=view&id=1dTmzHy0NCvAmaWwF0bHDtoCw44F5hmB7"
                            : `${baseUrl}/static/tik tok.png`
                        }
                        width={16}
                        height="auto"
                        alt="TikTok"
                        className="inline-block mr-2"
                      />
                    </Link>
                    <Link href="https://www.facebook.com">
                      <Img
                        src={
                          isRemoteImages
                            ? "https://drive.google.com/uc?export=view&id=1dn5XKgH6cX8HFGNSBjz4zssF77WK9ppy"
                            : `${baseUrl}/static/facebook.png`
                        }
                        width={16}
                        height="auto"
                        alt="Facebook"
                        className="inline-block mr-2"
                      />
                    </Link>
                    <Link href="https://www.viber.com/ru/">
                      <Img
                        src={
                          isRemoteImages
                            ? "https://drive.google.com/uc?export=view&id=1dXMmxkY_ClyRMtqYmDwCxDZc1W7JrA-0"
                            : `${baseUrl}/static/viber.png`
                        }
                        width={16}
                        height="auto"
                        alt="Viber"
                        className="inline-block mr-2"
                      />
                    </Link>
                    <Link href="https://web.telegram.org/k/">
                      <Img
                        src={
                          isRemoteImages
                            ? "https://drive.google.com/uc?export=view&id=1df4CMHIgoOZ4q-6qrufierExKKyXb6GX"
                            : `${baseUrl}/static/telegram.png`
                        }
                        width={16}
                        height="auto"
                        className="inline-block mr-6"
                        alt="Telegram"
                      />
                    </Link>
                  </p>
                </Column>
                <Column>
                  <Img
                    src={
                      isRemoteImages
                        ? "https://drive.google.com/uc?export=view&id=1cpSCIQ6Aw2f4m0UjqULUk7POZwAcdEGy"
                        : `${baseUrl}/static/smile.png`
                    }
                    width={160}
                    height="auto"
                    alt="Smile"
                  />
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default promoEmail;
