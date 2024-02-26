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
  remoteUrl: string;
}

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
const isRemoteImages = true;

const products_: Iproduct[] = [
  {
    name: "Мультипечі від 3299 грн",
    imgUrl: `${baseUrl}/static/Мультипечі.png`,
    remoteUrl:
      "https://drive.google.com/thumbnail?id=1mEm03nzd9gmYHE_b8VmZ-hlfVRSrb5oc",
  },
  {
    name: "Грилі від 1499 грн",
    imgUrl: `${baseUrl}/static/Грилі.png`,
    remoteUrl:
      "https://drive.google.com/thumbnail?id=1mCCjlr6kTdBasKC_ZtLkGqK5Yg7HvAmr",
  },
  {
    name: "Сендвічмейкери від 459 грн",
    imgUrl: `${baseUrl}/static/Сендвічмейкери.png`,
    remoteUrl:
      "https://drive.google.com/thumbnail?id=1lxVvcjlO3JGINZ6EshIFaFCae8Q4XStZ",
  },
  {
    name: "Електрочайники від 599 гр",
    imgUrl: `${baseUrl}/static/Електрочайники.png`,
    remoteUrl:
      "https://drive.google.com/thumbnail?id=1m1EgUXgg2QVCaTz-GEtIBRTULHRlAZfD",
  },
  {
    name: "Міксери стаціонарні від 1399 грн",
    imgUrl: `${baseUrl}/static/Міксери_стаціонарні.png`,
    remoteUrl:
      "https://drive.google.com/thumbnail?id=1lxdcM_cx0AVHgheOCjC2a3_jpVEtZtSy",
  },
  {
    name: "Мультиварки від 1199 грн",
    imgUrl: `${baseUrl}/static/Мультиварки.png`,
    remoteUrl:
      "https://drive.google.com/thumbnail?id=1mIdAGDPnsKpcIcuC4vUfh0tnT5gggLra",
  },
  {
    name: "Міксери ручні від 599 грн",
    imgUrl: `${baseUrl}/static/Міксери_ручні.png`,
    remoteUrl:
      "https://drive.google.com/thumbnail?id=1mAU5-eXHZvNIRh-vR9hoVwqfimaDA3gx",
  },
  {
    name: "Блендери від 749 грн",
    imgUrl: `${baseUrl}/static/Блендери.png`,
    remoteUrl:
      "https://drive.google.com/thumbnail?id=1m1hTIA8w9AAQEQl_r5IevLBlBiKgP5Yw",
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
                        ? "https://drive.google.com/thumbnail?id=1m3-lHgR-0bvKVASc5-XxhOKQcme814VD"
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
                    className="text-[18px] mx-[5px] my-[20px] font-[700] text-[#2B2A29]"
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
              <Row className="mt-[15px]">
                <Column
                  className="w-1/2 text-center h-[120px]"
                  valign="top"
                  style={{
                    background: isRemoteImages
                      ? `url(${products[0].remoteUrl})`
                      : `url(${products[0].imgUrl})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0% 0%",
                  }}
                >
                  <Button
                    href=""
                    className="m-0 px-[7px] py-[8px] rounded-[16px] text-[12px] font-[700]"
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
                <Column
                  className="w-1/2 text-center h-[120px]"
                  valign="bottom"
                  style={{
                    background: isRemoteImages
                      ? `url(${products[1].remoteUrl})`
                      : `url(${products[1].imgUrl})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "100% 0%",
                  }}
                >
                  <Button
                    href=""
                    className="m-0 px-[7px] py-[8px] rounded-[16px] text-[12px] font-[700] inline-block"
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
              <Row className="mt-[15px]">
                <Column
                  className="w-1/2 text-center h-[100px]"
                  valign="top"
                  style={{
                    background: isRemoteImages
                      ? `url(${products[2].remoteUrl})`
                      : `url(${products[2].imgUrl})`,
                    backgroundSize: "120px 72px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0% 20%",
                  }}
                >
                  <Button
                    href=""
                    className="m-0 pl-[10px] pr-[10px] py-[8px] rounded-[16px] text-[12px] font-[700]"
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
                <Column
                  className="w-1/2 text-center h-[120px]"
                  valign="bottom"
                  style={{
                    background: isRemoteImages
                      ? `url(${products[3].remoteUrl})`
                      : `url(${products[3].imgUrl})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "100% 0%",
                  }}
                >
                  <Button
                    href=""
                    className="m-0 px-[7px] py-[8px] rounded-[16px] text-[12px] font-[700] inline-block"
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
              <Row className="mt-[15px]">
                <Column
                  className="w-1/2 text-center h-[120px]"
                  valign="top"
                  style={{
                    background: isRemoteImages
                      ? `url(${products[4].remoteUrl})`
                      : `url(${products[4].imgUrl})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0% 0%",
                  }}
                >
                  <Button
                    href=""
                    className="m-0 px-[7px] py-[8px] rounded-[16px] text-[12px] font-[700]"
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
                <Column
                  className="w-1/2 text-center h-[120px]"
                  valign="bottom"
                  style={{
                    background: isRemoteImages
                      ? `url(${products[5].remoteUrl})`
                      : `url(${products[5].imgUrl})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "100% 0%",
                  }}
                >
                  <Button
                    href=""
                    className="m-0 px-[7px] py-[8px] rounded-[16px] text-[12px] font-[700] inline-block"
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
              <Row className="mt-[15px]">
                <Column
                  className="w-1/2 text-center h-[120px]"
                  valign="top"
                  style={{
                    background: isRemoteImages
                      ? `url(${products[6].remoteUrl})`
                      : `url(${products[6].imgUrl})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0% 0%",
                  }}
                >
                  <Button
                    href=""
                    className="m-0 px-[7px] py-[8px] rounded-[16px] text-[12px] font-[700]"
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
                <Column
                  className="w-1/2 text-center h-[120px]"
                  valign="bottom"
                  style={{
                    background: isRemoteImages
                      ? `url(${products[7].remoteUrl})`
                      : `url(${products[7].imgUrl})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "100% 0%",
                  }}
                >
                  <Button
                    href=""
                    className="m-0 px-[7px] py-[8px] rounded-[16px] text-[12px] font-[700] inline-block"
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
              <Row>
                <Column align="center">
                  <Text
                    className="text-[8px] mx-[15px] my-[10px] text-[#2B2A29] leading-3"
                    style={{
                      color: "#2B2A29",
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    * Під "КЕШБЕК 5%" мається на увазі нарахування бонусів у
                    розмірі 5 (п'яти) відсотків від вартості придбаного товару з
                    розділу сайту "Дрібна побутова техніка" на бонусний рахунок
                    покупця згідно правил програми "КІБЕР-КЕШБЕК", з якими можна
                    ознайомитись на сайті.
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section className="mt-[15px]">
              <Row className="bg-[#404040]">
                <Column className="w-1/3">
                  <Img
                    src={
                      isRemoteImages
                        ? "https://drive.google.com/thumbnail?id=1m3-lHgR-0bvKVASc5-XxhOKQcme814VD"
                        : `${baseUrl}/static/logo_1.png`
                    }
                    width={160}
                    height="auto"
                    alt="Кібернетики.UA"
                    className="px-[10px]"
                    style={{
                      borderRadius: "20px",
                    }}
                  />
                </Column>
                <Column align="center" className="w-1/3">
                  <p className="m-0">
                    <Link
                      href="https://kibernetiki.com.ua"
                      className="text-[12px] text-white leading-4"
                      style={{
                        fontFamily: `Lato-Bold, ${fallBackFonts}`,
                      }}
                    >
                      kibernetiki.com.ua
                    </Link>
                  </p>
                  <Text
                    className="text-[12px] text-white m-0 leading-4"
                    style={{
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    0800-33-26-96
                  </Text>
                  <Text
                    className="text-[12px] text-white m-0 leading-4"
                    style={{
                      fontFamily: `Lato-Bold, ${fallBackFonts}`,
                    }}
                  >
                    050-853-23-83
                  </Text>
                  <p
                    style={{ marginTop: "20px" }}
                    className="text-center max-w-[160px]"
                  >
                    <Link href="https://www.instagram.com">
                      <Img
                        src={
                          isRemoteImages
                            ? "https://drive.google.com/thumbnail?id=1mRI7ObrLZaY9IJACzXZNjBoB5ZeFYQ4u"
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
                            ? "https://drive.google.com/thumbnail?id=1mO2uA09tZh3SBe0iBEL3cLiPC6FLL0pQ"
                            : `${baseUrl}/static/tik tok.png`
                        }
                        width={16}
                        height="auto"
                        alt="TikTok"
                        className="inline-block mr-2"
                      />
                    </Link>
                    <Link href="https://www.viber.com/ru/">
                      <Img
                        src={
                          isRemoteImages
                            ? "https://drive.google.com/thumbnail?id=1mPHcKqVyhVo72ZUGgV_QohkP9aPKFmxP"
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
                            ? "https://drive.google.com/thumbnail?id=1mMD7mKNwRcw31s_2kbVoHCjK-da5mP0o"
                            : `${baseUrl}/static/telegram.png`
                        }
                        width={16}
                        height="auto"
                        className="inline-block"
                        alt="Telegram"
                      />
                    </Link>
                  </p>
                </Column>
                <Column className="w-1/3">
                  <Img
                    src={
                      isRemoteImages
                        ? "https://drive.google.com/thumbnail?id=1mF-Hlp9Ii5RR3AYbYJCbv0BvYcmYy30i"
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

export default hotlineEmail;
