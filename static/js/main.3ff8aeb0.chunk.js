(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(38)},25:function(e,t,n){},27:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(8),i=n.n(s),r=(n(25),n(15)),c=n(1),l=n(2),u=n(4),m=n(3),p=n(5),d=n(6),h=(n(27),n(7)),f=n(12);function b(){var e=Object(d.a)(["\n    height: 300px;\n    width: 300px;\n    flex: 1;\n"]);return b=function(){return e},e}var v=h.a.div(b()),w=function(e){function t(e,n){var o;return Object(c.a)(this,t),(o=Object(u.a)(this,Object(m.a)(t).call(this,e,n))).mouseEnter=function(){o.props.busy||o.setState({isHovered:!0})},o.mouseLeave=function(){o.props.busy||o.setState({isHovered:!1})},o.mouseUp=function(){o.props.busy||(console.log("mouse up"),o.setState({isClicked:!1}),o.props.clickCallback())},o.mouseDown=function(){o.props.busy||(console.log("mouse down"),new Audio(o.props.sound).play(),o.setState({isClicked:!0}))},o.state={isHovered:!1,isClicked:!1,busy:!1},o}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=String(this.props.className).split(" "),t=this.props,n=t.extra,o=t.color,s=this.state,i=s.isClicked,r=s.isHovered;return n.animated&&(new Audio(this.props.sound).play(),e.push("active")),i?(e.push("active"),new Audio(this.props.sound).play()):r&&e.push("hover"),a.a.createElement(v,{className:e.join(" "),style:{backgroundColor:o},onMouseEnter:this.mouseEnter,onTouchStart:this.mouseDown,onMouseLeave:this.mouseLeave,onMouseDown:this.mouseDown,onMouseUp:this.mouseUp})}}]),t}(a.a.Component);function y(){var e=Object(d.a)(["\n    height: 100px;\n    width: 100px;\n    background: darkred;\n    border-radius: 100px;\n    box-shadow: 0 0px 21px 8px #555;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 100px;\n    font-weight: 800;\n    font-size: 44px;\n    font-family: monospace;\n"]);return y=function(){return e},e}var k=h.a.div(y()),g=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:{position:"absolute"}},a.a.createElement(k,{onClick:this.props.onClick},this.props.score))}}]),t}(a.a.Component),O=(n(36),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props),a.a.createElement("div",{id:"gameover",className:"gameover"},a.a.createElement("p",null," GAME "),a.a.createElement("p",null," OVER "),a.a.createElement("div",{className:"score"},"Your Score is ",this.props.score),a.a.createElement("div",{className:"restart",onClick:this.props.reset},"Restart"))}}]),t}(a.a.Component));function j(){var e=Object(d.a)(["\n  color: white;\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n"]);return j=function(){return e},e}var E=h.a.div(j()),x=["green","blue","red","yellow"],C=new Audio("http://www.freesound.org/data/previews/331/331912_3248244-lq.mp3"),S=function(e){function t(e,n){var o;return Object(c.a)(this,t),(o=Object(u.a)(this,Object(m.a)(t).call(this,e,n))).compare=function(e,t){for(var n=0;n<t.length;n++)if(e[n]!==t[n])return!1;return!0},o.reset=function(){console.log("reset"),o.setState({score:0,gameOver:!1}),o.flow=[x[Date.now()%4]],o.clicked=[],setTimeout(o.displayFlow,300)},o.onClick=function(e){return function(){console.log("click ",e),o.clicked.push(e),o.compare(o.flow,o.clicked)?(o.flow.length===o.clicked.length&&(o.clicked=[],o.flow.push(x[Date.now()%4]),o.setState({busy:!0}),setTimeout(function(){o.setState({busy:!1}),o.displayFlow()},500)),o.setState({score:o.state.score+1})):(C.play(),o.setState({gameOver:!0}))}},o.animate=function(e){var t=Object(r.a)({},o.state);return t[e].animated=!0,o.setState(t),Object(f.delay)(500).then(function(){var t=Object(r.a)({},o.state);return t[e].animated=!1,o.setState(t),Object(f.delay)(200)})},o.displayFlow=function(){if(!o.state.busy){var e=function(){o.setState({busy:!0});for(var e=o.flow,t=o.animate(e[0]),n=function(n){t=t.then(function(){return o.animate(e[n])})},a=1;a<e.length;a++)n(a);return{v:t.then(function(){return o.setState({busy:!1})})}}();if("object"===typeof e)return e.v}return Promise.resolve()},o.resize=function(){return o.forceUpdate()},o.state={score:0,red:{animated:!1},green:{animated:!1},blue:{animated:!1},yellow:{animated:!1},busy:!1,gameOver:!1},o.flow=[x[Date.now()%4]],o.clicked=[],o}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=1/(640/window.innerWidth);return e>1&&(e=1),this.state.gameOver?a.a.createElement("div",null,a.a.createElement(E,null,a.a.createElement(O,{score:this.state.score,reset:this.reset}))):a.a.createElement("div",{style:{transform:"scale(".concat(e,")"),height:"640px"}},a.a.createElement(E,null,a.a.createElement("div",null,a.a.createElement(w,{className:"topLeft simonBtn",color:"green",clickCallback:this.onClick("green"),extra:this.state.green,busy:this.state.busy,sound:"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"}),a.a.createElement(w,{className:"bottomLeft simonBtn",color:"red",clickCallback:this.onClick("red"),extra:this.state.red,busy:this.state.busy,sound:"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"})),a.a.createElement(g,{score:this.state.score,onClick:this.displayFlow}),a.a.createElement("div",null,a.a.createElement(w,{className:"topRight simonBtn",color:"blue",clickCallback:this.onClick("blue"),extra:this.state.blue,busy:this.state.busy,sound:"https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"}),a.a.createElement(w,{className:"bottomRight simonBtn",color:"yellow",clickCallback:this.onClick("yellow"),extra:this.state.yellow,busy:this.state.busy,sound:"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"}))))}}]),t}(o.Component);i.a.render(a.a.createElement(S,null),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.3ff8aeb0.chunk.js.map