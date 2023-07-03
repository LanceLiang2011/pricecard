import { styled } from "styled-components";
import { COLORS, PRICE_MAP, pageViewOptions } from "../utils/util";
import { useMemo, useState } from "react";
import sliderIcon from "../assets/images/icon-slider.svg";
import tickBullet from "../assets/images/icon-check.svg";

import * as Slider from "@radix-ui/react-slider";
import * as Switch from "@radix-ui/react-switch";

export default function Pricecard() {
  const [pageView, setPageView] = useState(2);
  const [discount, setDiscount] = useState(false);

  const price = useMemo(
    () => PRICE_MAP[pageViewOptions[pageView]] ?? 0,
    [pageView]
  );

  const shownPrice = useMemo(
    () => (discount ? price * 0.75 : price),
    [price, discount]
  );

  return (
    <Wrapper>
      <PriceTag>
        <Pageview>
          {pageView === pageViewOptions.length - 1
            ? 1
            : pageViewOptions[pageView]}
          {pageView === pageViewOptions.length - 1 ? "m" : "k"} pageviews
        </Pageview>
        <Price>{shownPrice}.00</Price>
      </PriceTag>
      <SliderRoot
        min={0}
        max={pageViewOptions.length - 1}
        value={[pageView]}
        onValueChange={(values) => {
          setPageView(values[0]);
        }}
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb aria-label="Slider button">
          <img src={sliderIcon} alt="left and right arror on the button" />
        </SliderThumb>
      </SliderRoot>
      <SwitchWrapper>
        <Fill> </Fill>
        <label htmlFor="billing">Monthly Billing</label>
        <SwitchRoot
          id="billing"
          checked={discount}
          onCheckedChange={(checked) => {
            setDiscount(checked);
          }}
        >
          <SwitchThumb aria-checked="false" />
        </SwitchRoot>
        <label htmlFor="billing">Yearly Billing</label>
        <DiscountTag>25%</DiscountTag>
      </SwitchWrapper>
      <Start>
        <BenifitList>
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </BenifitList>
        <StartBtn>Start my trial</StartBtn>
      </Start>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  height: 397px;
  width: 540px;
  background-color: ${COLORS.white};
  box-shadow: 0 20px 30px -5px hsla(230 29% 61% / 0.152);
  border-radius: 8px;
  overflow: hidden;

  margin: 0 auto;
  padding: 48px 46px;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media (max-width: 560px) {
    height: 478px;
    width: auto;
    margin-left: 24px;
    margin-right: 24px;
    padding: 34px 24px;
    position: relative;
    transform: translateY(-40%);
  }
`;

const PriceTag = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const Pageview = styled.p`
  color: ${COLORS.grayishBlue};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 800;
  letter-spacing: 2px;
`;

const Price = styled.p`
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -1px;
  color: ${COLORS.darkDesaturatedBlue};
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "$";
  }

  &::after {
    content: "/ month";
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0;
    color: ${COLORS.grayishBlue};
  }

  @media (max-width: 560px) {
    position: absolute;
    top: 26%;
  }
`;

const SliderRoot = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;
  margin-top: 16px;
  @media (max-width: 560px) {
    transform: translateY(-400%);
  }
`;
const SliderTrack = styled(Slider.Track)`
  background-color: ${COLORS.lightGrayishBlue};
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  height: 8px;
`;
const SliderRange = styled(Slider.Range)`
  position: absolute;
  background-color: ${COLORS.softCyan};
  border-radius: 9999px;
  height: 100%;
`;
const SliderThumb = styled(Slider.Thumb)`
  display: block;
  width: 40px;
  height: 40px;
  background-color: ${COLORS.strongCyan};
  box-shadow: 0 2px 10px var(--black-a7);
  border-radius: 50%;
  display: grid;
  place-items: center;
  box-shadow: 0 15px 30px hsla(174 100% 50% / 0.6);
  cursor: pointer;

  &:hover {
    background-color: hsl(174 65% 41%);
  }
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 17px;
  gap: 9px;
  width: 100%;
  margin-top: 24px;

  label {
    font-size: 0.75rem;
    font-weight: 600;
    color: ${COLORS.grayishBlue};
  }

  @media (max-width: 560px) {
    padding-right: 0;
  }
`;
const SwitchRoot = styled(Switch.Root)`
  width: 43px;
  height: 22px;
  margin-left: 8px;
  margin-right: 8px;
  background-color: ${COLORS.lightGrayishBlue2};
  border-radius: 15px;
  position: relative;
  /* box-shadow: 0 2px 10px var(--black-a7); */

  &:focus {
  }

  &[data-state="checked"] {
    background-color: hsl(174 73% 70%);
  }
`;
const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 14px;
  height: 14px;
  background-color: ${COLORS.white};
  border-radius: 9999px;
  /* box-shadow: 0 2px 2px var(--black-a7); */
  transition: transform 100ms;
  transform: translateX(4px);
  will-change: transform;
  cursor: pointer;

  &[data-state="checked"] {
    transform: translateX(25px);
  }

  @media (max-width: 560px) {
    &[data-state="checked"] {
      transform: translateX(22px);
    }
  }
`;

const DiscountTag = styled.div`
  flex: 1;
  white-space: nowrap;
  font-size: 0.625rem;
  font-weight: 800;
  color: ${COLORS.lightRed};
  background-color: ${COLORS.lightRedBg};
  max-width: min-content;
  padding: 3px 6px;
  border-radius: 9.5px;

  &::after {
    content: " discount";
  }

  @media (max-width: 560px) {
    &::after {
      content: "";
    }
  }
`;

const Fill = styled.div`
  flex: 1;
  /* @media (max-width: 560px) {
    display: hidden;
  } */
`;

const Start = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid #ecf0fb;
  padding-top: 32px;

  @media (max-width: 560px) {
    flex-direction: column;
    gap: 32px;
    position: relative;
    top: -8%;
    padding-top: 16px;
  }
`;

const BenifitList = styled.ul`
  /* list-style-image: url(${tickBullet}); */
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    list-style-type: none;
    font-size: 0.75rem;
    font-weight: 600;
    color: ${COLORS.grayishBlue};

    &::before {
      content: "";
      display: inline-block;
      width: 7px;
      height: 7px;
      margin-right: 16px;
      background-image: url(${tickBullet});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;

const StartBtn = styled.button`
  color: ${COLORS.paleBlue};
  background-color: ${COLORS.darkDesaturatedBlue};
  font-size: 0.75rem;
  font-weight: 800;
  padding: 12px 46px;
  border-radius: 20.5px;
  cursor: pointer;

  &:hover {
    color: ${COLORS.white};
  }
`;
