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
    Demo
    <small>Try Squirrelly right in your browser!</small>
  </h2>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
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

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <div className="mainContainer">
          <HomeSplash/>
          <TryOut />
        </div>
      </div>
    );
  }
}

module.exports = Index;
