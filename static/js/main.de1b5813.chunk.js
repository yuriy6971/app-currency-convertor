(this["webpackJsonpapp-currency_convertor"]=this["webpackJsonpapp-currency_convertor"]||[]).push([[0],{10:function(e,t,c){e.exports={title_list:"blockElement_title_list__3EomP",title_table:"blockElement_title_table__3kmld"}},16:function(e,t,c){e.exports={head:"header_head__Cq-CX",conv:"header_conv__1AoMA"}},17:function(e,t,c){e.exports={elem_valute:"element_elem_valute__1OhV3",names:"element_names__167pL"}},27:function(e,t,c){e.exports={nav:"navbar_nav__27rLi",list:"navbar_list__1g6r9"}},28:function(e,t,c){e.exports={preload:"preloader_preload__3q7kS"}},33:function(e,t,c){},4:function(e,t,c){e.exports={block:"content_block__1I1um",calc_valute:"content_calc_valute__3B7GC",change:"content_change__1G_ZO",block_valute:"content_block_valute__UQ3NC",coude_valute:"content_coude_valute__3xsfX",input_number:"content_input_number__1F53d",label:"content_label__2qghM",block_button:"content_block_button__DBd70",butt_calc:"content_butt_calc__2s4gj",butt_clear:"content_butt_clear__3P0LW",simbol:"content_simbol__2_3UB"}},56:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),u=c(8),r=c.n(u),l=(c(33),c(11)),s=c(2),i=(c(13),"SET_VALUTES"),o="SET_VALUTE",_="SETFETCHING",b="UPDATE_CCY_VALUTE",j="SET_CURRENT_EXCHANGE_RATE",v="SET_VALUE_BASE_VALUTE",d="SET_CURRENT_VALUTE",O="SWAP_VALUTES",h=" SET_CURRENT_ELEMENT_VALUTE",p="TURN_OVER_RATE",m={valute:[{ccy:"EUR",base_ccy:"UAH",buy:"41.90000",sale:"42.90000"},{ccy:"USD",base_ccy:"UAH",buy:"39.80000",sale:"40.30000"}],nameValute:["\u0415\u0432\u0440\u043e","\u0434\u043e\u043b\u043b\u0430\u0440 \u0421\u0428\u0410"],isFetching:!1,base_valute:null,screen_base_valute:"",screen_ccy_valute:"",currentValute:"",currentElementValute:{ccy:"",base_ssy:"",buy:"",sale:""},currentExchengeRate:"",hard_valute:[{ccy:"EUR",base_ccy:"UAH",buy:"41.90000",sale:"42.90000"},{ccy:"USD",base_ccy:"UAH",buy:"39.80000",sale:"40.30000"}]},x=function(e){return{type:i,valute:e}},f=function(e){return{type:_,isFetching:e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(s.a)(Object(s.a)({},e),{},{valute:t.valute.map((function(t,c){return Object(s.a)(Object(s.a)({},t),{},{title:e.nameValute[c]})})),base_valute:t.valute[0].base_ccy,currentValute:t.valute[0].ccy,currentExchengeRate:t.valute[0].buy,currentElementValute:t.valute[0]});case o:return Object(s.a)(Object(s.a)({},e),{},{valute:e.valute.map((function(t,c){return Object(s.a)(Object(s.a)({},t),{},{title:e.nameValute[c]})})),base_valute:e.valute[0].base_ccy,currentValute:e.valute[0].ccy,currentExchengeRate:e.valute[0].buy,currentElementValute:e.valute[0]});case _:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case b:return Object(s.a)(Object(s.a)({},e),{},{screen_ccy_valute:t.number});case h:return Object(s.a)(Object(s.a)({},e),{},{currentElementValute:Object(s.a)({},e.valute.find((function(e){return e.ccy==t.code})))});case j:return Object(s.a)(Object(s.a)(Object(s.a)({},e),e.currentElementValute),{},{currentExchengeRate:e.currentElementValute.buy});case v:return Object(s.a)(Object(s.a)({},e),{},{screen_base_valute:t.number});case d:return Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({},e),{},{currentValute:t.currentValute},e.valute),e.valute[0]),{},{base_valute:e.valute[0].base_ccy});case O:return Object(s.a)(Object(s.a)({},e),{},{currentValute:e.base_valute,base_valute:e.currentValute});case p:return Object(s.a)(Object(s.a)({},e),{},{currentExchengeRate:(1/e.currentExchengeRate).toFixed(8)});default:return e}},E=c(26),g={field:""},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return t.type,e},C=Object(l.b)({convertorPage:V,contentPage:y}),N=Object(l.c)(C,Object(l.a)(E.a));window.store=N;var R=N,T=c(5),U=(c(56),c(16)),k=c.n(U),A=c(0),F=function(){return Object(A.jsx)("header",{className:k.a.head,children:Object(A.jsx)("h1",{className:k.a.conv,children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0442\u043e\u0440 \u0432\u0430\u043b\u044e\u0442"})})},S=c(4),P=c.n(S),L=c(9),B=c.n(L),w=function(e){var t=n.a.createRef();return Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{className:B.a.block_valute,children:Object(A.jsx)("input",{className:B.a.input,ref:t,onClick:function(c){var a=t.current.value;e.setCurrentValute(a),e.setCurrentElemValute(a),e.setCurrentExchangeRate(),e.setValueBase(""),e.updateCurrentValute("")},size:"1",type:"text",name:"valute",value:e.valuteName})}),Object(A.jsx)("div",{className:B.a.block})]})},H=Object(T.b)((function(e){return{valute:e.convertorPage.hard_valute,currentValute:e.convertorPage.currentValute,base_valute:e.convertorPage.base_valute,screen_base_valute:e.convertorPage.screen_base_valute,screen_ccy_valute:e.convertorPage.screen_ccy_valute,currentExengeRate:e.convertorPage.currentExchengeRate}}),(function(e){return{setCurrentValute:function(t){e(function(e){return{type:d,currentValute:e}}(t))},updateCurrentValute:function(t){e(function(e){return{type:b,number:e}}(t))},setCurrentExchangeRate:function(){var t;e({type:j,code:t})},setCurrentElemValute:function(t){e(function(e){return{type:h,code:e}}(t))},setValueBase:function(t){e(function(e){return{type:v,number:e}}(t))},swapValutes:function(){e({type:O})},turnOver:function(){e({type:p})}}}))((function(e){var t=n.a.createRef();return Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{className:P.a.calc_valute,children:[Object(A.jsxs)("div",{className:P.a.coude_valute,children:[Object(A.jsxs)("label",{children:["".concat(e.currentValute," :")," ",Object(A.jsx)("input",{className:P.a.input_number,ref:t,onChange:function(){var c=t.current.value;e.updateCurrentValute(c)},value:e.screen_ccy_valute,type:"text",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e",size:"10"})," "]}),Object(A.jsx)("span",{className:P.a.simbol,onClick:function(){e.swapValutes(),e.turnOver(),e.setValueBase(""),e.updateCurrentValute("")},children:"\u21d4"}),Object(A.jsxs)("label",{children:["".concat(e.base_valute," :")," ",Object(A.jsx)("input",{className:P.a.input_number,value:e.screen_base_valute,type:"text",size:"10"})," "]})]}),Object(A.jsxs)("div",{className:P.a.block_button,children:[Object(A.jsx)("button",{className:P.a.butt_calc,type:"button",form:"data",onClick:function(){var t=e.screen_ccy_valute*e.currentExengeRate;e.setValueBase(t.toFixed(2))},children:"Calculete"}),Object(A.jsx)("button",{className:P.a.butt_clear,type:"button",onClick:function(){e.setValueBase(""),e.updateCurrentValute("")},children:"Off"})]})]}),Object(A.jsx)("p",{className:P.a.change,children:"\u0412\u044b\u0431\u043e\u0440 \u0432\u0430\u043b\u044e\u0442\u044b :"}),Object(A.jsx)("div",{className:P.a.block_valute,children:e.valute.map((function(t,c){return Object(A.jsx)(w,{valuteName:t.ccy,setCurrentValute:e.setCurrentValute,setCurrentExchangeRate:e.setCurrentExchangeRate,setValueBase:e.setValueBase,updateCurrentValute:e.updateCurrentValute,setCurrentElemValute:e.setCurrentElemValute},c.toString())}))})]})})),D=c(27),G=c.n(D),I=c(10),q=c.n(I),z=c(28),M=c.n(z),X=c.p+"static/media/loader1.7343107b.svg",J=function(e){return Object(A.jsx)("div",{className:M.a.preload,children:Object(A.jsx)("img",{src:X,alt:"loader"})})},W=c(17),Z=c.n(W),Q=function(e){return Object(A.jsxs)("div",{className:Z.a.elem_valute,children:[Object(A.jsx)("p",{className:Z.a.names,children:e.namesValute}),Object(A.jsx)("p",{children:e.title}),Object(A.jsx)("p",{children:"".concat(e.exchenge," \u0433\u0440\u043d.")})]})},Y=function(e){return Object(A.jsxs)("div",{children:[Object(A.jsx)("h3",{className:q.a.title_list,children:"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442 :"}),Object(A.jsxs)("div",{className:q.a.title_table,children:[Object(A.jsx)("p",{children:"\u041a\u043e\u0434 \u0432\u0430\u043b\u044e\u0442\u044b"}),Object(A.jsx)("p",{children:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(A.jsx)("p",{children:"\u043a\u0443\u0440\u0441 \u0437\u0430 \u0435\u0434. \u0413\u0440\u043d"})]}),Object(A.jsx)("div",{className:q.a.elem_valutes,children:e.valute.map((function(e,t){return Object(A.jsx)(Q,{namesValute:e.ccy,title:e.title,exchenge:e.buy},t.toString())}))})]})},K=Object(T.b)((function(e){return{valute:e.convertorPage.valute,isFetching:e.convertorPage.isFetching}}),(function(e){return{setValutes:function(t){e(x(t))},setFetching:function(t){e(f(t))},setValute:function(){e({type:o})}}}))((function(e){return Object(a.useEffect)((function(){e.setValute()}),[]),Object(A.jsxs)("div",{className:G.a.nav,children:[e.isFetching&&Object(A.jsx)(J,{}),Object(A.jsx)(Y,{valute:e.valute,isFetching:e.isFetching})]})})),$=function(){return Object(A.jsxs)("div",{className:"app_wrapper",children:[Object(A.jsx)(F,{}),Object(A.jsx)(K,{}),Object(A.jsx)("div",{className:"app_wrapper_content",children:Object(A.jsx)(H,{})})]})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,u=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),u(e),r(e)}))};r.a.render(Object(A.jsx)(T.a,{store:R,children:Object(A.jsx)($,{})}),document.getElementById("root")),ee()},9:function(e,t,c){e.exports={input:"changeValute_input__2NxiZ"}}},[[58,1,2]]]);
//# sourceMappingURL=main.de1b5813.chunk.js.map