(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{39:function(e,t,o){},40:function(e,t,o){},54:function(e,t,o){},56:function(e,t,o){},61:function(e,t,o){},80:function(e,t){},81:function(e,t,o){},82:function(e,t,o){"use strict";o.r(t);var n=o(3),r=o(30),i=o.n(r),s=(o(39),o(13)),c=o(19),l=o(10),d=(o(40),o(5)),a=o(31),b=o(17),j=(o(54),o(2)),u=function(e){var t={signInFlow:"popup",signInSuccessUrl:"/bookingdetails",signInOptions:[{provider:b.a.auth.GoogleAuthProvider.PROVIDER_ID,requireDisplayName:!0},{provider:b.a.auth.EmailAuthProvider.PROVIDER_ID,requireDisplayName:!0}]};return Object(j.jsxs)("div",{className:"login-container",children:[Object(j.jsx)("h2",{children:"Login to use booking app"}),Object(j.jsx)("br",{}),Object(j.jsx)(a.StyledFirebaseAuth,{uiConfig:t,firebaseAuth:b.a.auth()})]})},h=(o(56),o(61),o(34)),x=o.n(h),g=function(){return Object(j.jsx)("div",{style:{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(j.jsx)(x.a,{type:"Puff",height:200,width:200,color:"#3f51b5"})})},m=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),o=t[0],r=t[1];Object(n.useEffect)((function(){var e=localStorage.getItem("booking");r(e?JSON.parse(e):"")}),[]);var i=function(){b.a.auth().signOut()};return null===o?Object(j.jsx)(g,{}):o&&o.prev===b.a.auth().currentUser.displayName?1===o.p?(o.p=0,localStorage.setItem("booking",JSON.stringify(o)),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"app-header",children:Object(j.jsx)("button",{className:"logout-btn",onClick:i,children:"Logout"})}),Object(j.jsx)("div",{className:"success",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Success"}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:Object(j.jsx)("prev",{children:"Your room has been booked successfully"})}),Object(j.jsx)("h3",{children:"Your room details are as follows:"}),Object(j.jsxs)("p",{children:["Hostel No. ",o.hostelBuilding]}),Object(j.jsxs)("p",{children:["Romm No. ",o.roomNo]})]})})]})):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"app-header",children:Object(j.jsx)("button",{className:"logout-btn",onClick:i,children:"Logout"})}),Object(j.jsxs)("table",{className:"booking-details",children:[Object(j.jsxs)("div",{className:"theading",children:[Object(j.jsxs)("h1",{children:["Welcome ",o.prev," "]}),Object(j.jsx)("h2",{children:"You have already booked a room."}),Object(j.jsx)("h3",{children:"Your room details are as follows:"})]}),Object(j.jsxs)("tr",{className:"details-row",children:[Object(j.jsx)("td",{className:"details-label",children:"Hostel No."}),Object(j.jsx)("td",{className:"details-value",children:o.hostelBuilding})]}),Object(j.jsxs)("tr",{className:"details-row",children:[Object(j.jsx)("td",{className:"details-label",children:"Floor No."}),Object(j.jsx)("td",{className:"details-value",children:o.hostelFloor})]}),Object(j.jsxs)("tr",{className:"details-row",children:[Object(j.jsx)("td",{className:"details-label",children:"Room No."}),Object(j.jsx)("td",{className:"details-value",children:o.roomNo})]})]})]}):Object(j.jsx)(l.a,{to:"/booking"})},p=(o(80),o(81),function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),o=t[0],r=t[1],i=Object(n.useState)(null),c=Object(s.a)(i,2),d=c[0],a=c[1],u=Object(n.useState)(null),h=Object(s.a)(u,2),x=h[0],g=h[1],m=Object(n.useState)(null),p=Object(s.a)(m,2),f=p[0],O=p[1],y=Object(n.useState)("one"),v=Object(s.a)(y,2),C=v[0],k=v[1],N=Object(n.useState)(null),w=Object(s.a)(N,2),B=w[0],S=w[1],I=Object(n.useState)(null),P=Object(s.a)(I,2),E=P[0],R=P[1],q=Object(n.useState)(null),T=Object(s.a)(q,2),W=(T[0],T[1]);Object(n.useEffect)((function(){var e=localStorage.getItem("booking");W(e?JSON.parse(e):"")}),[]);if(E)return Object(j.jsx)(l.a,{to:"/bookingdetails"});if(B)return Object(j.jsxs)("div",{className:"booking-form-error",children:[Object(j.jsx)("div",{className:"error-message",children:"Some fields are missing."}),Object(j.jsxs)("div",{className:"error-clear",onClick:function(){return S(null)},children:["Fill details",E]})]});var A=b.a.auth().currentUser.displayName,H=1;return Object(j.jsxs)("div",{className:"booking-form",children:[Object(j.jsx)("div",{className:"app-header",children:Object(j.jsx)("button",{className:"logout-btn",onClick:function(){b.a.auth().signOut()},children:"Logout"})}),Object(j.jsxs)("div",{className:"booking-form-part",id:"hostel-type",children:[Object(j.jsx)("div",{className:"booking-form-part-label",children:"Choose your Hostel"}),Object(j.jsxs)("div",{className:"booking-form-part-details hostel-type-details",children:[Object(j.jsxs)("div",{className:"hostel-type male"+("male"===o?"selected":""),onClick:function(){r("male")},children:[Object(j.jsx)("img",{src:"https://lh3.googleusercontent.com/FlFBnzH6-TEmAIjAxn6MilDWSBeJkEpvylO864LcD2M-vHORfPTpDGveJtVzBXj1cdra7y8=s85"}),Object(j.jsx)("div",{children:"Boys' hostel "})]}),Object(j.jsxs)("div",{className:"hostel-type female"+("female"===o?"selected":""),onClick:function(){r("female")},children:[Object(j.jsx)("img",{src:"data:image/png;base64,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"}),Object(j.jsx)("div",{children:"Girls' hostel"})]})]}),Object(j.jsx)("a",{className:"next-link",href:"#building-no",children:Object(j.jsx)("button",{className:"next",children:"Next"})})]}),Object(j.jsxs)("div",{className:"booking-form-part",id:"building-no",children:[Object(j.jsx)("div",{className:"booking-form-part-label",children:"Choose Building"}),Object(j.jsx)("div",{className:"booking-form-part-details room-details",children:"male"===o?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{style:{width:"17%",display:"flex",justifyContent:"space-around"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("button",{style:{width:"60px",height:"60px",backgroundColor:"grey",borderRadius:"10px",color:"white",fontSize:"25px"},onClick:function(){return g("B1")},children:"B1"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{style:{width:"60px",height:"60px",backgroundColor:"grey",borderRadius:"10px",color:"white",fontSize:"25px"},onClick:function(){return g("B2")},children:"B2"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{style:{width:"60px",height:"60px",backgroundColor:"grey",borderRadius:"10px",color:"white",fontSize:"25px"},onClick:function(){return g("B3")},children:"B3"})})]}),Object(j.jsxs)("div",{style:{width:"17%",display:"flex",justifyContent:"space-around"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("button",{style:{width:"60px",height:"60px",backgroundColor:"grey",borderRadius:"10px",color:"white",fontSize:"25px"},onClick:function(){return g("B4")},children:"B4"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{style:{width:"60px",height:"60px",backgroundColor:"grey",borderRadius:"10px",color:"white",fontSize:"25px"},onClick:function(){return g("B5")},children:"B5"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{style:{width:"60px",height:"60px",backgroundColor:"grey",borderRadius:"10px",color:"white",fontSize:"25px"},onClick:function(){return g("B6")},children:"B6"})})]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{style:{width:"17%",display:"flex",justifyContent:"space-around"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("button",{style:{width:"60px",height:"60px",backgroundColor:"grey",borderRadius:"10px",color:"white",fontSize:"25px"},onClick:function(){return g("G1")},children:"G1"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{style:{width:"60px",height:"60px",backgroundColor:"grey",borderRadius:"10px",color:"white",fontSize:"25px"},onClick:function(){return g("G2")},children:"G2"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{style:{width:"60px",height:"60px",backgroundColor:"grey",borderRadius:"10px",color:"white",fontSize:"25px"},onClick:function(){return g("G3")},children:"G3"})})]}),Object(j.jsxs)("div",{style:{width:"17%",display:"flex",justifyContent:"space-around"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("button",{style:{width:"60px",height:"60px",backgroundColor:"grey",borderRadius:"10px",color:"white",fontSize:"25px"},onClick:function(){return g("G4")},children:"G4"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{style:{width:"60px",height:"60px",backgroundColor:"grey",borderRadius:"10px",color:"white",fontSize:"25px"},onClick:function(){return g("G5")},children:"G5"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{style:{width:"60px",height:"60px",backgroundColor:"grey",borderRadius:"10px",color:"white",fontSize:"25px"},onClick:function(){return g("G6")},children:"G6"})})]})]})}),Object(j.jsx)("a",{className:"next-link",href:"#hostel-floor",children:Object(j.jsx)("button",{className:"next",children:"Next"})}),Object(j.jsxs)("div",{className:"booking-form-part",id:"hostel-floor",children:[Object(j.jsx)("div",{className:"booking-form-part-label",children:"Choose hostel floor"}),Object(j.jsx)("div",{className:"booking-form-part-details floor-details",children:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{height:"30px",textAlign:"center"},children:Object(j.jsxs)("select",{name:"selectList",id:"selectList",onChange:function(e){a(e.target.value)},children:["\xa0 ",Object(j.jsx)("option",{value:1,children:" 1st floor"}),"\xa0 ",Object(j.jsx)("option",{value:2,children:" 2nd floor"}),Object(j.jsx)("option",{value:3,children:" 3rd floor"}),Object(j.jsx)("option",{value:4,children:" 4th floor"}),Object(j.jsx)("option",{value:5,children:" 5th floor"})]})}),Object(j.jsxs)("div",{style:{width:"290px",height:"250px",border:"2px solid grey",borderRadius:"9px"},children:[Object(j.jsxs)("div",{style:{margin:"20px",display:"flex",width:"250px",justifyContent:"space-around"},children:[Object(j.jsx)("a",{href:"#submit-form",children:Object(j.jsx)("button",{className:"room",id:"one",style:{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"},value:1,onClick:function(){O(1),document.getElementById(C).style.backgroundColor="#99ff99",document.getElementById("one").style.backgroundColor="grey",k("one")},children:"1"})}),Object(j.jsx)("a",{href:"#submit-form",children:Object(j.jsx)("button",{className:"room",id:"two",style:{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"},value:2,onClick:function(){O(2),document.getElementById(C).style.backgroundColor="#99ff99",document.getElementById("two").style.backgroundColor="grey",k("two")},children:"2"})}),Object(j.jsx)("a",{href:"#submit-form",children:Object(j.jsx)("button",{className:"room",id:"three",style:{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"},value:3,onClick:function(){O(3),document.getElementById(C).style.backgroundColor="#99ff99",document.getElementById("three").style.backgroundColor="grey",k("three")},children:"3"})}),Object(j.jsx)("a",{href:"#submit-form",children:Object(j.jsx)("button",{className:"room",id:"four",style:{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"},value:4,onClick:function(){O(4),document.getElementById(C).style.backgroundColor="#99ff99",document.getElementById("four").style.backgroundColor="grey",k("four")},children:"4"})})]}),Object(j.jsxs)("div",{style:{margin:"20px",display:"flex",width:"250px",justifyContent:"space-between"},children:[Object(j.jsx)("a",{href:"#submit-form",children:Object(j.jsx)("button",{className:"room",id:"ten",style:{marginLeft:"13px",width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"},value:10,onClick:function(){O(10),document.getElementById(C).style.backgroundColor="#99ff99",document.getElementById("ten").style.backgroundColor="grey",k("ten")},children:"10"})}),Object(j.jsx)("a",{href:"#submit-form",children:Object(j.jsx)("button",{className:"room",id:"five",style:{marginRight:"13px",width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"},value:5,onClick:function(){O(5),document.getElementById(C).style.backgroundColor="#99ff99",document.getElementById("five").style.backgroundColor="grey",k("five")},children:"5"})})]}),Object(j.jsxs)("div",{style:{margin:"20px",display:"flex",width:"250px",justifyContent:"space-around"},children:[Object(j.jsx)("a",{href:"#submit-form",children:Object(j.jsx)("button",{className:"room",id:"nine",style:{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"},value:9,onClick:function(){O(9),document.getElementById(C).style.backgroundColor="#99ff99",document.getElementById("nine").style.backgroundColor="grey",k("nine")},children:"9"})}),Object(j.jsx)("a",{href:"#submit-form",children:Object(j.jsx)("button",{className:"room",id:"eight",style:{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"},value:8,onClick:function(){O(8),document.getElementById(C).style.backgroundColor="#99ff99",document.getElementById("eight").style.backgroundColor="grey",k("eight")},children:"8"})}),Object(j.jsx)("a",{href:"#submit-form",children:Object(j.jsx)("button",{className:"room",id:"seven",style:{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"},value:7,onClick:function(){O(7),document.getElementById(C).style.backgroundColor="#99ff99",document.getElementById("seven").style.backgroundColor="grey",k("seven")},children:"7"})}),Object(j.jsx)("a",{href:"#submit-form",children:Object(j.jsx)("button",{className:"room",id:"six",style:{width:"35px",backgroundColor:" #99ff99",border:"1px solid   #99ff99",height:"50px",borderRadius:"13px"},value:6,onClick:function(){O(6),document.getElementById(C).style.backgroundColor="#99ff99",document.getElementById("six").style.backgroundColor="grey",k("six")},children:"6"})})]})]})]})})})]}),Object(j.jsx)("div",{id:"submit-form",children:Object(j.jsx)("button",{onClick:function(){if(o&&d&&f&&x){var e={hostelType:o,hostelFloor:d,roomNo:f,hostelBuilding:x,prev:A,p:H};localStorage.setItem("booking",JSON.stringify(e)),R(!0)}else S(!0)},children:"Book room"})}),Object(j.jsx)("div",{className:"clear-booking",children:Object(j.jsx)("a",{className:"next-link",href:"#hostel-type",children:Object(j.jsx)("button",{onClick:function(){localStorage.removeItem("booking"),W("")},children:"Cancel Booking"})})})]})]})});var f=function(e){var t=Object(n.useState)(!1),o=Object(s.a)(t,2),r=o[0],i=o[1],a=Object(n.useState)(null),b=Object(s.a)(a,2),h=b[0],x=b[1];return Object(n.useEffect)((function(){if(!d.a.apps.length){d.a.initializeApp({apiKey:"AIzaSyCuv5I89PWdNRygTZe0PrATsZGP8oQdjlA",authDomain:"host-4dfe7.firebaseapp.com",projectId:"host-4dfe7",storageBucket:"host-4dfe7.appspot.com",messagingSenderId:"884557550471",appId:"1:884557550471:web:4c1d09b8eab0655d557922",measurementId:"G-EREPYVX2HQ"}),d.a.analytics(),d.a.auth().setPersistence(d.a.auth.Auth.Persistence.LOCAL).then((function(){i(!0)})),d.a.auth().onAuthStateChanged((function(e){x(!!e)}))}}),[]),r&&null!==h?h?Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(c.a,{children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{path:"/bookingdetails",component:m}),Object(j.jsx)(l.b,{path:"/booking",component:p}),Object(j.jsx)(l.b,{render:function(){return Object(j.jsx)(l.a,{to:"/bookingdetails"})}})]})})}):Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(c.a,{children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{path:"/",exact:!0,component:u}),Object(j.jsx)(l.b,{path:"/login",exact:!0,component:u}),Object(j.jsx)(l.b,{render:function(){return Object(j.jsx)(l.a,{to:"/"})}})]})})}):Object(j.jsx)("div",{children:Object(j.jsx)(g,{})})};i.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.8a73f5eb.chunk.js.map