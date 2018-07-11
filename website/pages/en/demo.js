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

const SqrlInputStyle = {
    boxSizing: 'border-box',
    width: '100%',
    height: '25vh',
    maxWidth: '100%',
    resize: 'none'
}
const SqrlDivInputStyle = {
    float: 'left',
    width: '42vw',
    height: '45vh',
    boxSizing: 'border-box',
    float: 'left',
    padding: '4vw'
}

const divFloatRightStyle = {
    boxSizing: 'border-box',
    float: 'right',
    width: '42vw',
    padding: '4vw',
    height: '45vh'
}

const divFloatLeftStyle = {
    boxSizing: 'border-box',
    float: 'left',
    width: '42vw',
    height: '45vh',
    padding: '4vw'
}

const templateFunctionStyle = {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    zIndex: 999,
    backgroundColor: '#eee',
    wordWrap: "break-word", /* IE>=5.5 */
    whiteSpace: "pre", /* IE>=6 */
    whiteSpace: "-moz-pre-wrap", /* For Fx<=2 */
    whiteSpace: "pre-wrap" /* Fx>3, Opera>8, Safari>3*/
}
const dataStyle = {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    marginBottom: '10em'
}
const templateResultStyle = {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%'
}

class SqrlInput extends React.Component {
  
    render() {
      return (
        <textarea type="text" id="SqrlInput" value="Hi, my name is {{parent.secondchild}}. {{if(~~obj.children) test}}{{foreach(~~obj.children) looping}}Name: {{@this.name}} {{@this.lastName}}, {{/foreach looping}}\n{{/if test}}" style = {SqrlInputStyle}></textarea>
      );
    }
  }
  
class SqrlFields extends React.Component {
    render () {
        return (
        <div style={{height: '100vh', marginTop: '-6em'}}>
            <div style={SqrlDivInputStyle}>
            <h2 style={{fontSize: '4vw'}}>Type something</h2>
            <SqrlInput />
            </div>
            <div style={divFloatRightStyle}><h2 style={{fontSize: '4vw'}}>Squirrelly returns:</h2><pre style={templateFunctionStyle}><code id="templateFunction"></code></pre></div>
            <div style={divFloatLeftStyle}><h2 style={{fontSize: '4vw'}}>Data</h2><div id="SqrlData" style={dataStyle}></div></div>
            <div style={divFloatRightStyle}><h2 style={{fontSize: '4vw'}}>Result</h2><div id="templateResult" style={templateResultStyle}></div></div>
            <script
          dangerouslySetInnerHTML={{ __html:
            'const Sqrldata = {\
                name: "Joe",\
                list: "hi",\
                parent: {\
                  firstchild: "hi",\
                  secondchild: "Mr. Potato"\
                },\
                bool: true,\
                arr: [1, 2, "three", {value: "four"}, 5],\
                obj: {\
                  name: "Hey",\
                  children: {\
                    first: {\
                      name: "Ben",\
                      lastName: "Gubler"\
                    },\
                    second: {\
                      name: "Johnny",\
                      lastName: "Appleseed"\
                    },\
                    third: {\
                      name: "Ada",\
                      lastName: "Lovelace"\
                    },\
                    fourth: {\
                      name: "Mister",\
                      lastName: "Potato"\
                    },\
                    fifth: {\
                      name: "Leonardo",\
                      lastName: "da Vinci"\
                    }\
                  }\
                }\
            };\
            document.getElementById("SqrlData").innerHTML = JSON.stringify(Sqrldata);\
            function handleChange() {\
                var SqrlFunc = Sqrl.Precompile(document.getElementById("SqrlInput").value);\
                var SqrlResult = SqrlFunc(Sqrldata, Sqrl);\
                document.getElementById("templateFunction").innerHTML = SqrlFunc.toString();\
                document.getElementById("templateResult").innerHTML = SqrlResult;\
            }\
            document.getElementById("SqrlInput").addEventListener("input", handleChange);\
            handleChange();'
          }}
        />
        </div>
        )
    }
}

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <div className="mainContainer">
          <SqrlFields />
        </div>
      </div>
    );
  }
}

module.exports = Index;
