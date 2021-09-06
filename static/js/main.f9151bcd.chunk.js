(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{143:function(e,t,a){e.exports=a(220)},220:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(83),i=a(15),s=a(224),m=a(272),u=a(268),d=a(297),p=a(274),b=a(298),g=a(118),E=a.n(g),f=a(30),h=a(263),v=a(267),y=a(19),x=a(128),j=a(266),S=Object(h.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function w(e){var t=S();return r.a.createElement(x.a,{className:t.backdrop,open:e.open},r.a.createElement(j.a,null))}var O=a(69),k=Object(O.create)({baseURL:"https://pocketims.herokuapp.com/api"}),I=a(273),N=a(301),T=Object(h.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},info:{marginRight:e.spacing(1.5)}}}));var C=function(e){var t=e.enqueueSnackbar,a=T(),l=Object(n.useState)(!1),c=Object(i.a)(l,2),o=c[0],g=c[1];return Object(n.useEffect)((function(){localStorage.getItem("uid")&&(t("Welcome! You are now on dashboard",{variant:"info"}),Object(y.b)("dashboard",{replace:!0}))})),r.a.createElement(v.a,{component:"main",maxWidth:"xs"},r.a.createElement(u.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(w,{open:o}),r.a.createElement(s.a,{className:a.avatar},r.a.createElement(E.a,null)),r.a.createElement(f.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,noValidate:!0,id:"signin-form"},r.a.createElement(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"uid",label:"UID",name:"uid",autoComplete:"email",autoFocus:!0}),r.a.createElement(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(m.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(e){e.preventDefault(),g(!0);var a=document.getElementById("uid").value,n=document.getElementById("password").value,r=new FormData;r.append("uid",a),r.append("password",n),k.post("/signin",r).then((function(e){g(!1),e.ok?e.data.error?(t(e.data.error,{variant:"error"}),console.log(e.data.error)):e.data.success?(t("Login successful",{variant:"success"}),localStorage.setItem("uid",a),localStorage.setItem("password",n),Object(y.b)("dashboard",{replace:!0})):t("Server Issue",{variant:-1}):(console.log(e.problem),t(e.problem,{variant:"error"}))}))}},"Sign In"))),r.a.createElement(b.a,{mt:8},r.a.createElement(I.a,{container:!0,justify:"flex-end"},r.a.createElement(N.a,{label:"PocketIMS is an open source project",variant:"outlined",onClick:function(){return window.open("https://github.com/xpt1x/PocketIMS/","_blank")}}),r.a.createElement(f.a,{className:a.info,variant:"overline",color:"textSecondary",inline:!0,align:"justify"},"Powered by ",r.a.createElement(p.a,{color:"inherit",href:"https://github.com/cu-unofficial/uims-api",target:"_blank"},"UIMS-API")))))},A=a(122),D=a.n(A);var F=a(285),P=a(286),R=a(277),L=a(299),_=a(287),M=a(280),B=a(271),W=a(281),U=a(282),q=a(283),J=a(284),z=a(121),G=a.n(z),H=a(119),V=a.n(H),Y=a(120),K=a.n(Y),X=a(275),$=a(276),Q=a(278),Z=a(279),ee=a(71),te=a.n(ee),ae=Object(h.a)((function(e){return{large:{width:e.spacing(7),height:e.spacing(7)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}})),ne=Object(O.create)({baseURL:"https://api.github.com/repos/xpt1x/PocketIMS"});function re(e){var t=ae(),a=Object(n.useState)(void 0),l=Object(i.a)(a,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){ne.get("/contributors").then((function(e){e.ok?o(e.data):console.log(e.problem)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{open:e.open,onClose:e.onclose},r.a.createElement($.a,null,"About PocketIMS",e.onclose?r.a.createElement(R.a,{"aria-label":"close",className:t.closeButton,onClick:e.onclose},r.a.createElement(te.a,null)):null),r.a.createElement(Q.a,{dividers:!0},r.a.createElement(f.a,{gutterBottom:!0},"PocketIMS is a better implementation of ",r.a.createElement(p.a,{color:"inherit",href:"https://github.com/cu-unofficial/uims-api",target:"_blank"},"UIMS-API"),", this project picks up where ",r.a.createElement(p.a,{color:"inherit",href:"https://github.com/xpt1x/SnapAttendance/",target:"_blank"},"SnapAttendance")," leaves off and aims to provide faster access to important modules from CUIMS with a better UI and UX. Appliation has a minimal UI built with ReactJS, MaterialUI. User's data is not kept on any server or DB, its stored locally on user's end"),r.a.createElement(f.a,{gutterBottom:!0},"Github Repository:"," ",r.a.createElement(p.a,{href:"https://github.com/xpt1x/PocketIMS",target:"_blank"},"https://github.com/xpt1x/PocketIMS")),r.a.createElement(f.a,{variant:"button",gutterBottom:!0},r.a.createElement("strong",null,"Contributors")),r.a.createElement(Z.a,{style:{marginTop:"1%"},max:5},void 0!==c?c.map((function(e,a){return r.a.createElement(s.a,{className:t.large,alt:e.login,src:e.avatar_url,key:a})})):null))))}var le=Object(h.a)({list:{width:250}});function ce(e){var t=le(),a=Object(n.useState)(!1),l=Object(i.a)(a,2),c=l[0],o=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{anchor:"left",open:e.open,onClose:e.onclose},r.a.createElement("div",{className:t.list},r.a.createElement(B.a,null,r.a.createElement(W.a,null,r.a.createElement(f.a,{color:"textSecondary",variant:"subtitle1"}," ","PocketIMS")),r.a.createElement(U.a,null),r.a.createElement(W.a,{button:!0,disabled:!0},r.a.createElement(q.a,null,r.a.createElement(V.a,null)),r.a.createElement(J.a,{primary:"Profile"})),r.a.createElement(W.a,{button:!0,onClick:function(){return o(!0)}},r.a.createElement(q.a,null,r.a.createElement(K.a,null)),r.a.createElement(J.a,{primary:"About"})),r.a.createElement(U.a,null),r.a.createElement(W.a,{button:!0,onClick:function(){localStorage.clear(),e.enqueueSnackbar("Logout successful",{variant:"success"}),e.setAttendance(void 0),e.setFullAttendance(void 0),e.setTimetable(void 0),Object(y.b)("/")}},r.a.createElement(q.a,null,r.a.createElement(G.a,null)),r.a.createElement(J.a,{primary:"Log Out"}))))),r.a.createElement(re,{open:c,onclose:function(){return o(!1)}}))}var oe=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));function ie(e){var t=e.setAttendance,a=e.setFullAttendance,l=e.setTimetable,c=e.enqueueSnackbar,o=e.children,s=oe(),m={0:"attendance",1:"timetable"},u=Object(n.useState)(0),d=Object(i.a)(u,2),p=d[0],b=d[1],g=Object(n.useState)(!1),E=Object(i.a)(g,2),f=E[0],h=E[1];return r.a.useEffect((function(){localStorage.getItem("uid")||Object(y.b)("/",{replace:!0}),localStorage.getItem("attendance")&&localStorage.getItem("fullattendance")&&localStorage.getItem("timetable")&&Date.now()-parseInt(localStorage.getItem("timestamp"))<=3e5?(t(JSON.parse(localStorage.getItem("attendance"))),a(JSON.parse(localStorage.getItem("fullattendance"))),l(JSON.parse(localStorage.getItem("timetable")))):function(e){var t=e.setAttendance,a=e.setFullAttendance,n=e.setTimetable,r=e.enqueueSnackbar,l=localStorage.getItem("uid"),c=localStorage.getItem("password"),o=new FormData;o.append("uid",l),o.append("password",c),k.post("/attendance",o).then((function(e){e.ok?e.data.error?(r("".concat(e.data.error," Visit UIMS to resolve"),{variant:"error"}),console.log(e.data.error)):(t(e.data),localStorage.setItem("attendance",JSON.stringify(e.data)),localStorage.setItem("timestamp",Date.now())):console.log(e.problem)})),k.post("/fullattendance",o).then((function(e){e.ok?e.data.error?(r("".concat(e.data.error," Visit UIMS to resolve"),{variant:"error"}),console.log(e.data.error)):(a(e.data),localStorage.setItem("fullattendance",JSON.stringify(e.data)),localStorage.setItem("timestamp",Date.now())):console.log(e.problem)})),!localStorage.getItem("timetable")||Date.now()-parseInt(localStorage.getItem("TTtimestamp"))>864e5?k.post("/timetable",o).then((function(e){e.ok?e.data.error?(r("".concat(e.data.error," Visit UIMS to resolve"),{variant:"error"}),console.log(e.data.error)):(n(e.data),localStorage.setItem("timetable",JSON.stringify(e.data)),localStorage.setItem("TTtimestamp",Date.now())):console.log(e.problem)})):n(JSON.parse(localStorage.getItem("timetable")))}({setAttendance:t,setFullAttendance:a,setTimetable:l,enqueueSnackbar:c}),Object(y.b)("/dashboard/attendance")}),[t,a,l,c]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:s.root},r.a.createElement(F.a,{position:"fixed"},r.a.createElement(P.a,{variant:"dense",style:{display:"flex"}},r.a.createElement(R.a,{edge:"start",className:s.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return h(!0)}},r.a.createElement(D.a,null)),r.a.createElement(ce,{enqueueSnackbar:c,open:f,onclose:function(){return h(!1)},setAttendance:t,setFullAttendance:a,setTimetable:l}),r.a.createElement(L.a,{value:p,onChange:function(e,t){b(t),Object(y.b)("/dashboard/".concat(m[t]))},style:{color:"white",flex:"1",display:"flex",justifyContent:"center"},centered:!0},r.a.createElement(_.a,{label:"Attendance"}),r.a.createElement(_.a,{label:"Timetable"}))))),o)}var se=a(125),me=a(290),ue=a(288),de=a(292),pe=a(291),be=a(289),ge=Object(h.a)((function(e){return{root:{position:"relative",marginTop:"60px",maxWidth:"860px",left:"50%",transform:"translatex(-50%)"}}}));function Ee(){var e=ge();return Object(n.useEffect)((function(){window.scroll(0,0)}),[]),r.a.createElement("div",{className:e.root},[1,2,3,4,5].map((function(e){return r.a.createElement(ue.a,{key:e,style:{marginTop:"20px",height:"160px",width:"100%"}},r.a.createElement("div",null,r.a.createElement("div",{style:{marginLeft:"10px",transform:"translateY(30%)"}},r.a.createElement(be.a,{variant:"text",style:{height:"30px",width:"50%"}}),r.a.createElement(be.a,{variant:"text",style:{height:"20px",width:"25%"}}),r.a.createElement(be.a,{variant:"text",style:{height:"20px",width:"30%"}}),r.a.createElement(be.a,{variant:"text",style:{height:"25px",width:"20%"}})),r.a.createElement("div",{style:{float:"right",top:"50%",transform:"translateY(-66%)",marginRight:"34px"}},r.a.createElement(be.a,{variant:"circle",width:90,height:90}))))})))}var fe=Object(se.a)({palette:{primary:{main:"#34bf58"},secondary:{main:"#e05151"}}}),he=Object(h.a)((function(e){return{title:{fontSize:14},content:{fontSize:12},fullWidth:{width:"100%",marginBottom:e.spacing(2)},spinner:{display:"flex",justifyContent:"center",marginTop:e.spacing(30)},boxGreen:{borderColor:"#34bf58"},boxRed:{borderColor:"#e05151"},boxOrange:{borderColor:"#ffa100"},circular:{position:"absolute",top:"50%",right:"3%",transform:"translateY(-50%)",marginTop:e.spacing(2.5),marginRight:e.spacing(2)},colorGreen:{color:"#34bf58"},colorRed:{color:"#e05151"}}}));function ve(e){var t=he();return r.a.createElement(b.a,{className:t.circular,position:"relative",display:"inline-flex"},r.a.createElement(me.a,{theme:fe},r.a.createElement(j.a,Object.assign({size:80,variant:"determinate"},e))),r.a.createElement(b.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(f.a,{variant:"h6",component:"div",color:"textPrimary"},"0"!==e.lectures?e.value:r.a.createElement(f.a,{variant:"button",color:"textSecondary"}," ",r.a.createElement("strong",null,"NA")," "))))}function ye(e){var t=e.attendance,a=e.setSubject,n=e.children,l=he();return r.a.createElement(r.a.Fragment,null,n,t?r.a.createElement(B.a,{component:"ul",style:{top:"60px",display:"flex",flexDirection:"column",alignItems:"center"}},t.sort((function(e,t){return e.Title<t.Title?-1:e.Title>t.Title?1:0})).map((function(e){return r.a.createElement(W.a,{key:e.Code,style:{maxWidth:"860px",marginBottom:"20px"}},r.a.createElement(pe.a,null,r.a.createElement(ue.a,{className:l.fullWidth,onClick:function(){!function(e){0!==parseInt(e.Total_Delv)&&(a(e),Object(y.b)("/dashboard/attendance/".concat(e.Code)))}(e)},elevation:10,style:{marginBottom:"0"}},r.a.createElement(b.a,{className:0===parseInt(e.Total_Delv)?l.boxOrange:parseFloat(e.EligibilityPercentage)>=75?l.boxGreen:l.boxRed,borderLeft:7},r.a.createElement(de.a,null,r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},e.Title.toUpperCase()),r.a.createElement(ve,{lectures:0!==parseInt(e.Total_Delv)?"1":"0",value:parseFloat(e.EligibilityPercentage),color:parseFloat(e.EligibilityPercentage)>=75?"primary":"secondary"}),r.a.createElement(f.a,{variant:"h6",color:"textSecondary",className:l.content},"Total Attended: ",e.Total_Attd),r.a.createElement(f.a,{variant:"h6",gutterBottom:!0,color:"textSecondary",className:l.content},"Total Delivered: ",e.Total_Delv),r.a.createElement(f.a,{variant:"overline",gutterBottom:!0,color:"textPrimary",className:l.content},"[",e.Code,"]"))))))}))):r.a.createElement(v.a,null,r.a.createElement(Ee,null)))}var xe=a(222),je=a(293),Se=a(124),we=a.n(Se),Oe=a(302),ke=Object(h.a)((function(e){return{title:{marginLeft:e.spacing(2),flex:1},progressMargin:{marginTop:e.spacing(15),marginBottom:e.spacing(5),display:"flex",justifyContent:"center",alignItems:"center"},secondary:{color:"textSecondary",float:"right"},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(4)}}})),Ie=Object(se.a)({palette:{primary:{main:"#34bf58"},secondary:{main:"#e05151"}}});function Ne(e){var t=ke();return r.a.createElement(b.a,{className:t.circular,position:"relative",display:"inline-flex"},r.a.createElement(me.a,{theme:Ie},r.a.createElement(j.a,Object.assign({size:200,variant:"static",color:parseFloat(e.subject.EligibilityPercentage)>=75?"primary":"secondary"},e))),r.a.createElement(b.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(v.a,{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},r.a.createElement(f.a,{variant:"h4",component:"div",color:"textPrimary"},e.value+"%"),r.a.createElement(f.a,{variant:"h6",component:"div",color:"textSecondary"},e.subject.EligibilityAttended,"/",e.subject.EligibilityDelivered))))}var Te=r.a.forwardRef((function(e,t){return r.a.createElement(xe.a,Object.assign({direction:"up",ref:t},e))}));var Ce=function(e){var t=ke(),a=Object(n.useState)(!0),l=Object(i.a)(a,2),c=l[0],o=l[1],s=function(){o(!1),Object(y.b)("/dashboard/attendance")};function m(e,t){var a=parseInt(e.subject.EligibilityAttended),n=parseInt(e.subject.EligibilityDelivered);if(0===n||a/n>=t/100)return"NA";var r=(t*n-100*a)/(100-t);return"".concat(Math.ceil(r)," lectures more")}return e.subject?r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{fullScreen:!0,open:c,onClose:s,TransitionComponent:Te},r.a.createElement(F.a,{position:"fixed"},r.a.createElement(P.a,null,r.a.createElement(R.a,{edge:"start",color:"inherit",onClick:s,"aria-label":"close"},r.a.createElement(te.a,null)),r.a.createElement(f.a,{variant:"h6",className:t.title},e.subject.Title.toUpperCase()))),r.a.createElement(v.a,{fixed:!0,className:t.progressMargin},r.a.createElement(Ne,{value:parseFloat(e.subject.EligibilityPercentage),subject:e.subject})),r.a.createElement(v.a,null,r.a.createElement(B.a,null,r.a.createElement(W.a,null,r.a.createElement(J.a,{disableTypography:!0,primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"button"},"Required to hit 75%"),r.a.createElement(f.a,{className:t.secondary,variant:"inherit"},m(e,75)))})),r.a.createElement(U.a,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{disableTypography:!0,primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"button"},"Required to hit 80%"),r.a.createElement(f.a,{className:t.secondary,variant:"inherit"},m(e,80)))})),r.a.createElement(U.a,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{disableTypography:!0,primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"button"},"Required to hit 85%"),r.a.createElement(f.a,{className:t.secondary,variant:"inherit"},m(e,85)))})),r.a.createElement(U.a,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{disableTypography:!0,primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"button"},"Required to hit 90%"),r.a.createElement(f.a,{className:t.secondary,variant:"inherit"},m(e,90)))})),r.a.createElement(U.a,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{disableTypography:!0,primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"button"},"Total Delivered"),r.a.createElement(f.a,{className:t.secondary,color:"textSecondary",variant:"inherit"},e.subject.Total_Delv))})),r.a.createElement(U.a,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{disableTypography:!0,primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"button"},"Total Attended"),r.a.createElement(f.a,{className:t.secondary,color:"textSecondary",variant:"inherit"},e.subject.Total_Attd))})),r.a.createElement(U.a,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{disableTypography:!0,primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"button"},"Duty Leave N P"),r.a.createElement(f.a,{className:t.secondary,color:"textSecondary",variant:"inherit"},e.subject.DutyLeave_N_P))})),r.a.createElement(U.a,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{disableTypography:!0,primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"button"},"Duty Leave Others"),r.a.createElement(f.a,{className:t.secondary,color:"textSecondary",variant:"inherit"},e.subject.DutyLeave_Others))})),r.a.createElement(U.a,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{disableTypography:!0,primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"button"},"Medical Leave"),r.a.createElement(f.a,{className:t.secondary,color:"textSecondary",variant:"inherit"},e.subject.MedicalLeave))})),r.a.createElement(U.a,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{disableTypography:!0,primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"button"},"Eligible Delivered"),r.a.createElement(f.a,{className:t.secondary,color:"textSecondary",variant:"inherit"},e.subject.EligibilityDelivered))})),r.a.createElement(U.a,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{disableTypography:!0,primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"button"},"Eligible Attended"),r.a.createElement(f.a,{className:t.secondary,color:"textSecondary",variant:"inherit"},e.subject.EligibilityAttended))})),r.a.createElement(U.a,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{disableTypography:!0,primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"button"},"Total Percentage"),r.a.createElement(f.a,{className:t.secondary,color:"textSecondary",variant:"inherit"},e.subject.Total_Perc))})),r.a.createElement(U.a,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{primary:"Subject Code",secondary:e.subject.Code})))),r.a.createElement(Oe.a,{title:"View full report"},void 0===e.fullAttendance?r.a.createElement(je.a,{color:"primary",className:t.fab},r.a.createElement(j.a,{color:"inherit"})):r.a.createElement(je.a,{disabled:void 0===e.fullAttendance,onClick:function(){e.drawerHandler(!0),Object(y.b)("/dashboard/attendance/".concat(e.subject.Code,"/report"),{state:{code:e.subject.Code}})},color:"primary",className:t.fab},r.a.createElement(we.a,null)))),e.children):null},Ae=a(4),De=a(73),Fe=a(75),Pe=Object(h.a)((function(e){return{limitHeight:{maxHeight:"80%"}}})),Re=Object(Ae.a)({root:{color:De.a[400]}})(f.a),Le=Object(Ae.a)({root:{color:Fe.a[400]}})(f.a);function _e(e){var t=Pe(),a=e.data.find((function(t){return t.Code===e.location.state.code}));return void 0!==a?r.a.createElement(M.a,{anchor:"bottom",classes:{paper:t.limitHeight},open:!!e.data,onClose:function(){window.history.back(),e.close(!1)}},r.a.createElement(B.a,null,a.FullAttendanceReport.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(W.a,{alignItems:"flex-start"},r.a.createElement(J.a,{primary:"P"===e.AttendanceCode?r.a.createElement(Le,null,"Present"):r.a.createElement(Re,null,"Absent"),secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:"span",variant:"subtitle2",color:"textSecondary"},e.AttDate),r.a.createElement("br",null),r.a.createElement(f.a,{component:"span",variant:"subtitle2",color:"textSecondary"},e.Timing))})),r.a.createElement(U.a,{component:"li"}))})))):null}var Me=a(74),Be=a(296),We=a(63),Ue=a(295),qe=a(303),Je=a(294),ze=a(300),Ge=a(2),He=Object(h.a)((function(e){return{root:{position:"relative",top:"60px",maxWidth:"860px",left:"52%",transform:"translatex(-50%)",display:"flex",flexDirection:"row"},time_table:{display:"flex",flexDirection:"row"},card:{marginTop:"20px",height:"150px",width:"95%"},chip1:{marginLeft:"1%",borderRadius:"100px"},chip2:{marginLeft:"2%",borderRadius:"100px"},cardContent:{paddingTop:"10px",display:"flex",alignItems:"center"},stepper:{display:"flex",marginRight:"2%",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"transparent",paddingLeft:"0"},step:{width:"40px",height:"40px"},connector:{width:"2px",height:"60px",backgroundColor:"#ededed"}}}));function Ve(){function e(){return r.a.createElement(be.a,{variant:"circle",width:40,height:40})}var t=He();return r.a.createElement(v.a,null,r.a.createElement("div",{className:t.root},r.a.createElement(qe.a,{orientation:"vertical",nonLinear:!0,connector:r.a.createElement(be.a,{variant:"rect",width:2,height:60}),className:t.stepper},[1,2,3,4,5,6,7].map((function(a){return r.a.createElement(Je.a,{key:a,className:t.step},r.a.createElement(ze.a,{StepIconComponent:e}))}))),r.a.createElement("div",{style:{width:"100%",marginBottom:"20px"}},[1,2,3,4,5].map((function(e){return r.a.createElement(ue.a,{key:e,className:t.card},r.a.createElement(Ue.a,{avatar:r.a.createElement(be.a,{variant:"circle",width:40,height:40}),title:r.a.createElement(be.a,{variant:"text",width:180,height:20}),subheader:r.a.createElement(be.a,{variant:"text",width:168,height:18})}),r.a.createElement(de.a,{className:t.cardContent},r.a.createElement(be.a,{className:t.chip1,variant:"rect",width:114,height:32}),r.a.createElement(be.a,{className:t.chip2,variant:"rect",width:67,height:24})))})))))}var Ye=Object(h.a)({root:{backgroundColor:"#2196f3",zIndex:1,color:"#fff",width:40,height:40,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center",cursor:"pointer",transition:".2s"},active:{transform:"scale(1.5)",backgroundColor:"#ff5722",boxShadow:"0px 0px 20px #ff5744aa",transition:".2s"}}),Ke=Object(h.a)((function(e){return{time_table:{position:"relative",top:"80px",maxWidth:"860px",display:"flex",flexDirection:"row"},stepper:{display:"flex",marginRight:"2%",flexDirection:"column",alignItems:"center",background:"transparent",paddingLeft:"0"},step:{width:"40px",height:"40px"},card_wrapper:{flex:"1"},card:{marginBottom:"20px",boxShadow:"0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)"},connector:{width:"2px",height:"60px",backgroundColor:"#ededed"},orange:{color:e.palette.getContrastText(Be.a[500]),backgroundColor:Be.a[500]}}})),Xe={1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",7:"Sun"};function $e(e){var t=Ye();return r.a.createElement("div",{className:Object(Ge.a)(t.root,Object(We.a)({},t.active,e.active))},Xe[String(e.icon)])}function Qe(){var e=Ke();return r.a.createElement("div",{className:e.connector})}var Ze=function(e){var t=Object(n.useState)((new Date).getDay()-1),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Ke();function m(e){var t=e.timetable,a=!1,n=[];return Object.keys(void 0===t[Xe[l+1]]?{"#":"#"}:t[Xe[l+1]]).forEach((function(e,c,i){if("#"===i[0])n.push(r.a.createElement(ue.a,{id:c,className:o.card},r.a.createElement(Ue.a,{title:"Wohooooo!",subheader:"Enjoy today"}),r.a.createElement(de.a,null,"No classes on this day")));else{var m=t[Xe[l+1]][e];null!==m?n.push(r.a.createElement(ue.a,{key:c,className:o.card},r.a.createElement(Ue.a,{title:m.title,subheader:m.teacher,avatar:r.a.createElement(s.a,{className:o.orange},m.title[0])}),r.a.createElement(de.a,null,r.a.createElement(N.a,{label:e}),r.a.createElement(N.a,{style:{marginLeft:"2%"},variant:"outlined",color:"primary",size:"small",label:m.type})))):a||(a=!0,n.push(r.a.createElement("hr",{key:e})))}})),n}return e.timetable?r.a.createElement(v.a,{className:o.time_table},r.a.createElement(qe.a,{orientation:"vertical",nonLinear:!0,connector:r.a.createElement(Qe,null),activeStep:l,className:o.stepper},Object.keys(Xe).map((function(e){return r.a.createElement(Je.a,{key:e,className:o.step},r.a.createElement(ze.a,{StepIconComponent:$e,onClick:(t=e,function(){window.scroll({top:0,left:0,behavior:"smooth"}),c(t-1)})}));var t}))),r.a.createElement("div",{className:o.card_wrapper},r.a.createElement(m,{timetable:e.timetable}))):r.a.createElement(Ve,null)},et=a(72);var tt=function(){var e=Object(n.useState)(void 0),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(void 0),s=Object(i.a)(c,2),m=s[0],d=s[1],p=Object(n.useState)(void 0),b=Object(i.a)(p,2),g=b[0],E=b[1],f=Object(n.useState)(void 0),h=Object(i.a)(f,2),v=h[0],x=h[1],j=Object(et.b)().enqueueSnackbar,S=Object(n.useState)(!1)[1],w={setDrawerOpen:S,enqueueSnackbar:j,setAttendance:l,setFullAttendance:d,setTimetable:E},O=Object(o.a)(Object(o.a)({},w),{},{attendance:a,fullAttendance:m,timetable:g}),k=Object(se.a)({palette:{type:"dark",primary:Me.a,secondary:Be.a}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{theme:k},r.a.createElement(u.a,null),r.a.createElement(y.a,null,r.a.createElement(C,Object.assign({path:"/",default:!0},w)),r.a.createElement(ie,Object.assign({path:"dashboard"},O),r.a.createElement(ye,{path:"attendance",attendance:a,setSubject:x},r.a.createElement(Ce,{path:":subjectcode",subject:v,fullAttendance:m,drawerHandler:S},r.a.createElement(_e,{path:"report",data:m,close:S}))),r.a.createElement(Ze,{path:"timetable",timetable:g})))))},at=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function nt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(e.waiting.postMessage({type:"SKIP_WAITING"}),window.location.reload(!0),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(et.a,{maxSnack:3},r.a.createElement(tt,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pims",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pims","/service-worker.js?version=").concat("2-h");at?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):nt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):nt(t,e)}))}}()}},[[143,1,2]]]);