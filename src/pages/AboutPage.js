import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero roadMap="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="About us" />
        <article>
          <div className="title">
            <h2>About us</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            perferendis unde, voluptatum obcaecati ipsam porro, incidunt quia
            nesciunt quis veritatis mollitia reiciendis sequi tenetur ex iusto
            doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Labore recusandae ipsum, cum sunt eum aliquam est reprehenderit
            doloribus molestias rem culpa at optio officia ab! Distinctio
            quaerat incidunt saepe labore. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nisi facilis modi odio, id dolore iste
            rerum quibusdam nihil fuga. Error!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
