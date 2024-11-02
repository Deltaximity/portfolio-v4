// import Header from '@/components/Header';
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <header className="main-hero">
        <h1 className="h1">Deltaximity</h1>
        <p className="subheading">Developer, photographer, designer, musician</p>
        <Image 
          className="hero-lambda"
          src="/assets/img/Lambda.png"
          alt="Logo"
          width={600}
          height={600}
          style={{objectFit: 'contain', height: 'auto', width: '650px'}}
        />
      </header>
      <h2>Heading 1</h2>
      <h3>Heading 2</h3>
      <h4>Heading 3</h4>
      <p>Explore my work and journey as a developer.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla nemo voluptatibus ab iure consequatur quidem, delectus, in vel recusandae ipsa qui ducimus autem illum aut cumque laborum obcaecati! Voluptatibus, ad nulla. Amet dolores eveniet odio earum molestiae sint velit ipsam soluta cum vitae, sequi perferendis in? Soluta, voluptatibus pariatur. Fugiat nisi minus, aperiam nobis voluptatibus aliquam? Nesciunt reiciendis voluptatem fugit debitis accusamus odit facilis aliquid ipsam iste eaque? Omnis expedita iure modi eveniet doloribus natus perspiciatis dignissimos corrupti, officia dicta qui inventore dolore odit officiis, quisquam nobis maxime fuga a in aliquam distinctio consequatur! Commodi eveniet pariatur provident cumque?</p>
    </>
  )
}