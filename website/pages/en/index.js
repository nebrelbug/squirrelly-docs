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

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
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

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('Squirrelly1.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="#try">Demo</Button>
            <Button href={docUrl('doc1.html', language)}>Get Started</Button>
            <Button href={docUrl('doc2.html', language)}>Performance Stats</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Unlike many template engines, Squirrelly doesn\'t do token parsing. Instead, it uses RegExp, which is backed by C code in JavaScript. Squirrelly consistently outperforms other template engines in benchmarks.',
        image: imgUrl('lightning.png'),
        imageAlign: 'top',
        title: 'Built for Performance',
      },
      {
        content: 'Squirrelly supports custom partials, helpers, and filters.',
        image: imgUrl('cog.png'),
        imageAlign: 'top',
        title: 'Configurable',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    >
    <h2 style={{marginLeft: '1.3em', textAlign: 'left'}}>Features</h2>
    <ul style={{textAlign: 'left', listStylePosition: 'inside', fontSize: '20px'}}>
      <li>Blazing Fast</li>
      <li>Non-Whitespace Sensitive</li>
      <li>Not bound to a specific language</li>
      <li>Custom Helpers</li>
      <li>Custom Filters</li>
      <li>Partials</li>
    </ul>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Run \'npm install squirrelly\' or link to it on Unpkg',
        image: imgUrl('Squirrelly1.png'),
        imageAlign: 'right',
        title: 'Installation',
      },
    ]}
  </Block>
);

const tryContent = '\
<script>\
function SqrlParse () {\
  var textContent = document.getElementById("stuffToParse").value || "";\
  var SqrlFunction = Sqrl.Precompile(textContent);\
  document.getElementById("templateFunction").innerHTML = SqrlFunction.toString();\
  var Sqrldata = {\
    name: "Joe",\
    list: "hi",\
    parent: {\
      firstchild: "hi",\
      secondchild: "Mr. Potato"\
    }\
};\
document.getElementById("Data").innerHTML = JSON.stringify(Sqrldata);\
document.getElementById("templateResult").textContent = SqrlFunction(Sqrldata, Sqrl);\
}\
</script>\
<div style="box-sizing: border-box; float: left; width: 50%; height: 200px;"><h2>Type something</h2><textarea id="stuffToParse" oninput="SqrlParse()" style="width: 100%; height:70%; max-width: 100%; resize: none;">Hi, my name is {{parent.secondchild}}</textarea></div>\
<div style="box-sizing: border-box; float: right; width: 50%; height: 200px;"><h2>Squirrelly returns:</h2><div id="templateFunction" style="width: 100%; height:70%; overflow-y:auto;"></div></div>\
<div style="box-sizing: border-box; float: left; width: 50%; height: 200px;"><h2>Data</h2><div id="Data" style="width: 100%; height:70%;"></div></div>\
<div style="box-sizing: border-box; float: right; width: 50%; height: 200px;"><h2>Result</h2><div id="templateResult" style="width: 100%; height:70%;"></div></div>\
<script>SqrlParse()</script>\
'
const TryOut = props => (
  <Block id="try">
    {[
      {
        content: tryContent,
        imageAlign: 'left',
        title: '<h1>Try it Out</h1>',
      },
    ]}
  </Block>
);

/*const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);*/

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
