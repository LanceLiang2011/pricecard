import { styled } from "styled-components";
import { COLORS } from "../utils/util";
import ctaBackgroundImg from "../assets/images/pattern-circles.svg";

export default function Header() {
  return (
    <Wrapper>
      <CTA>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </CTA>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: hsl(224 85% 97%);
  height: 433px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 0 191px;

  padding: 67px;

  @media (max-width: 560px) {
    padding: 32px;
    height: 380px;
    text-align: center;
  }
`;

const CTA = styled.div`
  background-image: url(${ctaBackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 145px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  h1 {
    font-size: 1.75rem;
    font-weight: 800;
    color: ${COLORS.darkDesaturatedBlue};
  }

  p {
    color: ${COLORS.grayishBlue};
    font-size: 0.9375rem;
  }

  @media (max-width: 560px) {
    h1 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.8125rem;
    }
  }
`;
