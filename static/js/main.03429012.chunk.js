(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(e,a,t){"use strict";(function(e){var n=t(284),c=t(177),r=t(20),i=t(21),o=t(23),l=t(22),s=t(24),u=t(46),b=t.n(u),h=t(182),d=t(0),f=t.n(d),m=t(33),g=t(583),p=t(176),E=t(173),O=t(174),v=t(585),S=t(586),j=t(596),k=t(593),y=t(584),C=(t(39),t(258)),z=t(275),w=t(276),x=t(277),A=t(278),I=t(279),M=t(280),F=t(429).SigningRequest,R=t(449),T=R({httpEndpoint:"https://eos.greymass.com"}),P={abi:!1,action:"",authorization:{actor:"............1",permission:"............1"},blockchain:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",callback:{background:!1,url:""},contract:"",decoded:{},fields:{},fieldsMatchSigner:{"authorization-actor":!0,"authorization-permission":!0},fieldsPromptSigner:{},loading:!1,uri:!1,uriError:!1},B=["eosio","eosio.token","eosio.forum"],N=[["EOS","aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"],["TELOS","4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11"],["JUNGLE","e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473"],["KYLIN","5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191"],["WORBLI","73647cde120091e0a4b85bced2f3cfdb3041e266cbbe95cee59b73235a1b3b6f"],["BOS","d5a3d18fbb3c084e3b1f3fa98c21014b5f3db536cc15d08f9f6479517c6a3d86"],["MEETONE","cfe6486a83bad4962f232d48003b1824ab5665c36778141034d75e57b956e422"],["INSIGHTS","b042025541e25a472bffde2d62edd457b7e70cee943412b1ea0f044f88591664"],["BEOS","b912d19a6abd2b1b05611ae5be473355d64d95aeff0c09bedc8c166cd6468fe4"]],D={aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906:"https://eos.greymass.com","4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11":"https://telos.greymass.com",e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473:"https://jungle.greymass.com","5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191":"https://kylin.eoscanada.com:443","73647cde120091e0a4b85bced2f3cfdb3041e266cbbe95cee59b73235a1b3b6f":"https://api.worbli.io",d5a3d18fbb3c084e3b1f3fa98c21014b5f3db536cc15d08f9f6479517c6a3d86:"https://hapi.bos.eosrio.io",cfe6486a83bad4962f232d48003b1824ab5665c36778141034d75e57b956e422:"https://fullnode.meet.one",b042025541e25a472bffde2d62edd457b7e70cee943412b1ea0f044f88591664:"https://instar.greymass.com",b912d19a6abd2b1b05611ae5be473355d64d95aeff0c09bedc8c166cd6468fe4:"https://api.beos.world"},U=(t(149),t(555)),J={zlib:{deflateRaw:function(a){return new Uint8Array(U.deflateRawSync(e.from(a)))},inflateRaw:function(a){return new Uint8Array(U.inflateRawSync(e.from(a)))}},abiProvider:{getAbi:function(){var e=Object(h.a)(b.a.mark(function e(a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getAbi(a);case 2:return e.abrupt("return",e.sent.abi);case 3:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()}},L=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).onChangeCallback=function(e,a){var n=a.checked,r=a.name,i=a.value;t.setState({callback:Object.assign({},t.state.callback,Object(c.a)({},r,i||n))})},t.onChangeField=function(e,a){var n=a.name,r=a.value;Object(m.isError)(Object(m.attempt)(JSON.parse,r))?t.setState({fields:Object.assign({},t.state.fields,Object(c.a)({},n,r))}):t.setState({fields:Object.assign({},t.state.fields,Object(c.a)({},n,JSON.parse(r)))})},t.onChangeMatchSigner=function(e,a){var n=a.name,r=t.state,i=r.fields,o=r.fieldsMatchSigner,l=r.fieldsPromptSigner,s=!o[n],u={fields:Object.assign({},i,Object(c.a)({},n,s?"............1":"")),fieldsMatchSigner:Object.assign({},o,Object(c.a)({},n,s))};return l[n]&&(u.fieldsPromptSigner=Object.assign({},l,Object(c.a)({},n,!1))),t.setState(u),e.preventDefault(),!1},t.onChangePromptSigner=function(e,a){var n=a.name,r=(a.checked,t.state),i=r.fields,o=r.fieldsMatchSigner,l=r.fieldsPromptSigner,s=!l[n],u={fields:Object.assign({},i,Object(c.a)({},n,s?"............2":"")),fieldsPromptSigner:Object.assign({},l,Object(c.a)({},n,s))};return o[n]&&(u.fieldsMatchSigner=Object.assign({},o,Object(c.a)({},n,!1))),t.setState(u),e.preventDefault(),!1},t.onChangeAuthorization=function(e,a){var n=a.name,r=a.value;t.setState({authorization:Object.assign({},t.state.authorization,Object(c.a)({},n,r))})},t.onChangeAuthorizationMatchSigner=function(e,a){var n=a.name,r=t.state,i=r.authorization,o=r.fieldsMatchSigner,l=r.fieldsPromptSigner,s=!o["authorization-".concat(n)],u={authorization:Object.assign({},i,Object(c.a)({},n,s?"............1":"")),fieldsMatchSigner:Object.assign({},o,Object(c.a)({},"authorization-".concat(n),s))};return l[n]&&(u.fieldsPromptSigner=Object.assign({},l,Object(c.a)({},"authorization-".concat(n),!1))),t.setState(u),e.preventDefault(),!1},t.onResetContract=function(){t.setState({abi:!1,contract:!1})},t.onResetBlockchain=function(){t.setState({abi:!1,blockchain:!1,contract:!1})},t.onSelect=function(e,a){var n=a.name,r=a.value;t.setState(Object(c.a)({},n,r))},t.onSelectBlockchain=function(e,a){var n=a.name,r=a.value;t.setState(Object(c.a)({},n,r),function(){var e=D[r];T=R({httpEndpoint:e})})},t.decode=Object(h.a)(b.a.mark(function e(){var a,n,c,r,i,o,l,s,u,h,d,f,m,g=arguments;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=g.length>0&&void 0!==g[0]&&g[0],n=t.state.authorization,c=F.from(a,J),r=c.getChainId().toLowerCase(),i=D[r],T=R({httpEndpoint:i}),e.prev=6,e.next=9,c.getActions();case 9:return o=e.sent,e.next=12,T.getInfo(!0);case 12:return l=e.sent.head_block_num,e.next=15,T.getBlock(l);case 15:return s=e.sent,e.next=18,c.getTransaction(n,s);case 18:u=e.sent,h=c.data.callback,d=o[0],f={},m={},d.authorization.forEach(function(e){"............1"===e.actor&&(f["authorization-actor"]=!0),"............1"===e.permission&&(f["authorization-permission"]=!0)}),Object.keys(d.data).forEach(function(e){var a=d.data[e];"............2"===a&&(m[e]=!0),"............1"===a&&(f[e]=!0)}),t.setState({action:d.name,authorization:d.authorization[0],blockchain:r,callback:h,contract:d.account,decoded:{actions:o,tx:u,callback:h},fields:Object.assign({},d.data),fieldsMatchSigner:f,fieldsPromptSigner:m,loading:!1}),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(6),t.setState({blockchain:r,loading:!1});case 31:case"end":return e.stop()}},e,this,[[6,28]])})),t.generate=Object(h.a)(b.a.mark(function e(){var a,n,c,r,i,o,l,s,u;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state,a.abi,n=a.action,c=a.authorization,r=a.blockchain,i=a.callback,o=a.contract,l=a.fields,e.prev=1,e.next=4,F.create({action:{account:o,name:n,authorization:[c],data:l},callback:i,chainId:r},J);case 4:s=e.sent,u=s.encode(),t.decode(u),t.setState({uri:u,uriError:!1},function(){var e=u.replace("eosio:","");t.props.history.replace("/eosio-uri-builder/".concat(e))}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.setState({uriError:e.t0.toString()});case 13:case"end":return e.stop()}},e,this,[[1,10]])})),t.onBlockchainSelect=function(e,a){var n=a.name,r=a.value;t.setState(Object(c.a)({},n,r))},t.state=Object.assign({},P),t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this,a=this.decode,t=this.props.match;if(t&&t.params&&t.params.uri){var n="eosio:".concat(t.params.uri);this.setState({loading:!0,uri:n},function(){a(n)})}this.state.contract&&!this.state.abi&&(console.log("loading",this.state.contract),console.log("from",this.state.blockchain),T.getAbi(this.state.contract).then(function(a){e.setState({abi:a.abi})}))}},{key:"componentWillUpdate",value:function(e,a){var t=this;if(this.state.contract!==a.contract&&T.getAbi(a.contract).then(function(e){t.setState({abi:e.abi})}),this.state.action&&this.state.action!==a.action){var n=a.abi,c=a.action,r=n.structs,i=Object(m.find)(r,{name:c});if(i){var o=i.fields,l={};o.forEach(function(e){l[e.name]=""}),this.setState({uri:void 0,fields:l})}}}},{key:"render",value:function(){var e,a=this,t=this.state,c=t.abi,r=t.action,i=t.authorization,o=t.blockchain,l=t.contract,s=t.decoded,u=t.fieldsMatchSigner,b=t.fieldsPromptSigner,h=t.loading,d=t.uri,F=t.uriError,R=(s.actions,s.tx),T=(s.callback,B.map(function(e){return{key:e,text:e,value:e}})),P=N.map(function(e){var a=Object(n.a)(e,2),t=a[0],c=a[1];return{key:c,text:t,value:c}});if(c&&l&&r){var D=c.structs,U=Object(m.find)(D,{name:r});U&&(e=U.fields)}var J=[{menuItem:"Action Data",render:function(){return f.a.createElement(w.a,{aliases:c.types,fields:e,fieldsMatchSigner:u,fieldsPromptSigner:b,onChange:a.onChangeField,onChangeMatchSigner:a.onChangeMatchSigner,onChangePromptSigner:a.onChangePromptSigner,values:a.state.fields})}},{menuItem:"Authorization",render:function(){return f.a.createElement(C.a,{authorization:i,fieldsMatchSigner:u,onChange:a.onChangeAuthorization,onChangeAuthorizationMatchSigner:a.onChangeAuthorizationMatchSigner,values:a.state.callback})}},{menuItem:"Callback",render:function(){return f.a.createElement(z.a,{onChange:a.onChangeCallback,values:a.state.callback})}}];return d&&J.push({menuItem:"Generated URI",render:function(){return f.a.createElement(M.a,{uri:d,tx:R})}}),f.a.createElement(g.a,{className:"App",style:{paddingTop:"1em"}},f.a.createElement(p.a,null,"EOSIO uri-builder"),f.a.createElement(E.a,{basic:!0,loading:h},f.a.createElement(O.a,{as:"div"},f.a.createElement(A.a,{blockchain:o,blockchainOptions:P,chainAliases:N,onChange:this.onSelectBlockchain,onReset:this.onResetBlockchain}),!!o&&f.a.createElement(f.a.Fragment,null,f.a.createElement(I.a,{contract:l,contractOptions:T,onChange:this.onSelect,onReset:this.onResetContract}),!!c&&f.a.createElement(x.a,{abi:c,action:r,contract:l,onChange:this.onSelect}),!(!r||!e)&&f.a.createElement(f.a.Fragment,null,f.a.createElement(E.a,{attached:!0,secondary:!0},f.a.createElement(v.a,{panes:J})),f.a.createElement(E.a,{attached:!0,tertiary:!0},!!F&&f.a.createElement(S.a,{color:"red",content:F,header:"Transaction Error",icon:"exclamation circle",size:"large"}),f.a.createElement(j.a,{color:"blue",content:"Generate URI",icon:"certificate",onClick:this.generate}),!!d&&f.a.createElement(f.a.Fragment,null,f.a.createElement(p.a,null,"Resulting URI"),f.a.createElement(k.a,{value:d}),f.a.createElement(y.a,null),f.a.createElement(j.a,{as:"a",color:"green",content:"Trigger URI in default handler",icon:"external",href:d}))))))))}}]),a}(d.Component);a.a=L}).call(this,t(16).Buffer)},258:function(e,a,t){"use strict";var n=t(20),c=t(21),r=t(23),i=t(22),o=t(24),l=t(0),s=t.n(l),u=t(174),b=t(173),h=t(176),d=t(39),f=t.n(d),m=(t(33),function(e){function a(){var e,t;Object(n.a)(this,a);for(var c=arguments.length,o=new Array(c),l=0;l<c;l++)o[l]=arguments[l];return(t=Object(r.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(o)))).getInput=function(e,a){var n=t.props,c=(n.aliases,n.authorization),r=n.fieldsMatchSigner,i=n.onChange,o=n.onChangeAuthorizationMatchSigner,l=(n.values,e),h=!!r["authorization-".concat(l)],d=h,f=c[e],m=s.a.createElement(u.a.Input,{autoFocus:0===a,label:l,name:l,onChange:i,defaultValue:f instanceof Object?JSON.stringify(f):f});return d&&(m=s.a.createElement(u.a.Field,null,s.a.createElement("label",null,l),s.a.createElement(u.a.Input,{disabled:!0,value:h?"Matching Transaction Signer":"Prompting Transaction Signer"}))),s.a.createElement(b.a,{attached:!0,key:l,secondary:!!(a%2)},s.a.createElement(u.a.Field,{key:l},m,s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a.Checkbox,{checked:r["authorization-".concat(l)],label:"Match to Signer",name:l,onChange:o}))))},t}return Object(o.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.authorization;a.fields,a.fieldsMatchSigner,a.onChange,a.onChangeAuthorizationMatchSigner,a.values;return s.a.createElement(b.a,{attached:!0},s.a.createElement(b.a,{basic:!0},s.a.createElement(h.a,null,"Transaction Authorization"),["actor","permission"].map(function(a,t){return e.getInput(a,t)})),s.a.createElement(b.a,{inverted:!0,basic:!0},s.a.createElement(h.a,null,"Authorization Data"),s.a.createElement(f.a,{displayDataTypes:!1,displayObjectSize:!1,iconStyle:"square",name:null,src:t,style:{padding:"1em"},theme:"harmonic"})))}}]),a}(l.Component));a.a=m},275:function(e,a,t){"use strict";var n=t(20),c=t(21),r=t(23),i=t(22),o=t(24),l=t(0),s=t.n(l),u=t(173),b=t(176),h=t(174),d=t(39),f=t.n(d),m=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=(e.fields,e.onChange),t=e.values;return s.a.createElement(u.a,{attached:!0},s.a.createElement(u.a,{basic:!0},s.a.createElement(b.a,null,"Callback Configuration"),s.a.createElement(h.a.Field,null,s.a.createElement(h.a.Input,{autoFocus:!0,defaultValue:t.url,label:"Callback URL",name:"url",onChange:a})),s.a.createElement(h.a.Field,null,s.a.createElement(h.a.Checkbox,{checked:t.background,label:"Process callback in background",name:"background",onChange:a}))),s.a.createElement(u.a,{inverted:!0,basic:!0},s.a.createElement(b.a,null,"Callback Data"),s.a.createElement(f.a,{displayDataTypes:!1,displayObjectSize:!1,iconStyle:"square",name:null,src:t,style:{padding:"1em"},theme:"harmonic"})))}}]),a}(l.Component);a.a=m},276:function(e,a,t){"use strict";var n=t(20),c=t(21),r=t(23),i=t(22),o=t(24),l=t(0),s=t.n(l),u=t(174),b=t(173),h=t(176),d=t(39),f=t.n(d),m=t(33),g=function(e){function a(){var e,t;Object(n.a)(this,a);for(var c=arguments.length,o=new Array(c),l=0;l<c;l++)o[l]=arguments[l];return(t=Object(r.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(o)))).getInput=function(e,a){var n=t.props,c=n.aliases,r=n.fieldsMatchSigner,i=n.onChange,o=n.onChangeMatchSigner,l=n.values,h=e.name,d=e.type,f=Object(m.find)(c,{new_type_name:d}),g=!!r[h],p=g,E="".concat(h," [").concat(d,"]").concat(f?", extending [".concat(f.type,"]"):""),O=t.formatValue(d,l[h]),v=s.a.createElement(u.a.Input,{autoFocus:0===a,label:E,name:h,onChange:i,defaultValue:O instanceof Object?JSON.stringify(O):O});if("[]"===d.substr(d.length-2)){var S=[];"multi",O&&O.length>0&&(S=Array.isArray(O)?O.map(function(e){return{key:e,value:e,text:e}}):[{key:O,value:O,text:O}]),v=s.a.createElement(u.a.Select,{allowAdditions:!0,autoFocus:0===a,options:S,value:O,label:E,name:h,selection:!0,search:!0,multiple:!0,onChange:i})}return p&&(v=s.a.createElement(u.a.Field,null,s.a.createElement("label",null,E),s.a.createElement(u.a.Input,{disabled:!0,value:g?"Matching Transaction Signer":"Prompting Transaction Signer"}))),s.a.createElement(b.a,{attached:!0,key:h,secondary:!!(a%2)},s.a.createElement(u.a.Field,{key:h},v,!!("name"===d||f&&"name"===f.type)&&s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a.Checkbox,{checked:r[h],label:"Match to Signer",name:h,onChange:o}))))},t.formatValue=function(e,a){if("............."===a)return"";switch(e){case"string":try{return JSON.stringify(JSON.parse(a))}catch(t){}return a;default:return a}return a},t}return Object(o.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.fields,n=(a.onChange,a.values);return s.a.createElement(b.a,{attached:!0},s.a.createElement(b.a,{basic:!0},s.a.createElement(h.a,{attached:"top",block:!0},"Action Parameters"),t.map(function(a,t){return e.getInput(a,t)})),s.a.createElement(b.a,{inverted:!0,basic:!0},s.a.createElement(h.a,null,"Transaction Data"),s.a.createElement(f.a,{displayDataTypes:!1,displayObjectSize:!1,iconStyle:"square",name:null,src:n,style:{padding:"1em"},theme:"harmonic"})))}}]),a}(l.Component);a.a=g},277:function(e,a,t){"use strict";var n=t(285),c=t(20),r=t(21),i=t(23),o=t(22),l=t(24),s=t(0),u=t.n(s),b=t(176),h=t(173),d=t(174),f=t(595),m=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.abi,t=e.action,c=e.contract,r=(e.contractOptions,e.onChange),i=(e.onReset,a.actions.map(function(e){return{key:e.name,text:e.name,value:e.name}})),o=[{key:"_",text:"",value:!1}].concat(Object(n.a)(i));return u.a.createElement(u.a.Fragment,null,u.a.createElement(b.a,{inverted:!0,attached:!0},"Select an action from the ",c," contract:"),u.a.createElement(h.a,{attached:!0},u.a.createElement(d.a.Field,null,u.a.createElement(f.a,{allowAdditions:!0,fluid:!0,name:"action",options:o,onChange:r,search:!0,selection:!0,selectOnBlur:!1,selectOnNavigation:!1,value:t}))))}}]),a}(s.Component);a.a=m},278:function(e,a,t){"use strict";var n=t(20),c=t(21),r=t(23),i=t(22),o=t(24),l=t(0),s=t.n(l),u=t(33),b=t(176),h=t(173),d=t(174),f=t(595),m=t(596),g=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.blockchain,t=e.blockchainOptions,n=e.chainAliases,c=e.onChange,r=e.onReset,i=Object(u.find)(n,function(e){return e[1]===a})||[];return a?s.a.createElement(h.a,{clearing:!0,attached:"top"},s.a.createElement(b.a,null,s.a.createElement(m.a,{color:"blue",content:"Change Blockchain",floated:"right",onClick:r,size:"small"}),"Blockchain: ",i[0]||"Unknown",s.a.createElement(b.a.Subheader,null,s.a.createElement("strong",null,a)))):s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{inverted:!0,attached:"top"},"Select which blockchain this transaction is intended for or enter a chain ID:"),s.a.createElement(h.a,{attached:"bottom"},s.a.createElement(d.a.Field,null,s.a.createElement(f.a,{allowAdditions:!0,fluid:!0,name:"blockchain",options:t,onChange:c,search:!0,selection:!0,selectOnNavigation:!1,value:a}))))}}]),a}(l.Component);a.a=g},279:function(e,a,t){"use strict";var n=t(20),c=t(21),r=t(23),i=t(22),o=t(24),l=t(0),s=t.n(l),u=t(176),b=t(173),h=t(174),d=t(595),f=t(596),m=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.contract,t=e.contractOptions,n=e.onChange,c=e.onReset;return a?s.a.createElement(b.a,{clearing:!0,attached:!0},s.a.createElement(u.a,null,s.a.createElement(f.a,{color:"blue",content:"Change Contract",floated:"right",onClick:c,size:"small"}),"Contract",s.a.createElement(u.a.Subheader,null,s.a.createElement("strong",null,a)))):s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{inverted:!0,attached:!0},"Select or enter a contract from which to generate a transaction:"),s.a.createElement(b.a,{attached:"bottom"},s.a.createElement(h.a.Field,null,s.a.createElement(d.a,{allowAdditions:!0,fluid:!0,name:"contract",options:t,onChange:n,search:!0,selection:!0,selectOnNavigation:!1,value:a}))))}}]),a}(l.Component);a.a=m},280:function(e,a,t){"use strict";var n=t(20),c=t(21),r=t(23),i=t(22),o=t(24),l=t(0),s=t.n(l),u=t(173),b=t(176),h=t(39),d=t.n(h),f=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.uri,t=e.tx;return s.a.createElement(u.a,{attached:!0},s.a.createElement(b.a,null,"URI Generated:",s.a.createElement(b.a.Subheader,{style:{marginTop:"0.5em"}},s.a.createElement("a",{href:a,target:"_blank"},a))),s.a.createElement(b.a,{size:"small"},"URI Transaction:"),s.a.createElement(d.a,{displayDataTypes:!1,displayObjectSize:!1,iconStyle:"square",name:null,src:t,style:{padding:"1em"},theme:"harmonic"}))}}]),a}(l.Component);a.a=f},298:function(e,a,t){e.exports=t(582)},491:function(e,a){},493:function(e,a){},524:function(e,a){},577:function(e,a,t){},582:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(72),i=t.n(r),o=t(20),l=t(21),s=t(23),u=t(22),b=t(24),h=t(594),d=t(597),f=t(186),m=(t(577),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement("div",null,c.a.createElement(d.a,{exact:!0,path:"/eosio-uri-builder",component:f.a}),c.a.createElement(d.a,{exact:!0,path:"/eosio-uri-builder/:uri",component:f.a})))}}]),a}(n.Component));i.a.render(c.a.createElement(h.a,{basename:"/"},c.a.createElement(m,null)),document.getElementById("root"))}},[[298,2,1]]]);
//# sourceMappingURL=main.03429012.chunk.js.map