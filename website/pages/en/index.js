/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="promoRow">
        <img src={props.img_src} alt="Project Logo" height="25%" width="25%" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/logo.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('about/about.html')}>Know More</Button>
            <Button href={docUrl('protocol/protocol.html')}>Get Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (

        <Block id="try">
        {[
          {
            content:
                'The Inflexibility of Financial Asset can only be mitigated by virtue of enabling on the fly customization and it promted us to think -  ' +
                ' What if we were to made lego blocks style customization for financial services sector. </br></br> ',
            image: `${baseUrl}img/undraw_thought_process_67my.svg`,
            imageAlign: 'left',
            title: 'How do we achive this goal?',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block >
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (

      <Block background="light">
        {[
          {
            content:
              'Traditionally Financial assets are too rigid in nature and are not flexible inherently. ' +
              'This behaviour promted us to build a TAC Protocol ( Needs more content here ) </br>',
            image: `${baseUrl}img/undraw_forming_ideas_0pav.svg`,
            imageAlign: 'right',
            title: 'What inspired us to make TAC?',
          },
        ]}
      </Block>


    );

    const Features = () => (
      <Block layout="fourColumn" >
        {[
          {
            content: '',
            image: `${baseUrl}img/NShield.png`,
            imageAlign: 'top',
            title: '<h3> Secure by Design </h3>',
          },
          {
            content: '',
            image: `${baseUrl}img/Login.png`,
            imageAlign: 'top',
            title: '<h3> Decentralised SSO</h3>',
          },
          {
              content: '',
           image: `${baseUrl}img/NMarket.png`,
           imageAlign: 'top',
           title: '<h3> Self Soverinity </h3>',
          },
        ]}
      </Block>
    );


      const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Built With</h2>
          <p>Flake Network is built upon</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('tech.html')}>
              Complete List of technology Integration
                {/*More {siteConfig.title} Users*/}
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          {/*<LearnHow /> */}
          {/* <TryOut /> */}
          {/*<FeatureCallout />*/}
          <Showcase/>
        </div>
      </div>
    );
  }
}

module.exports = Index;
