exports.id=413,exports.ids=[413],exports.modules={936:(e,t,s)=>{"use strict";s.a(e,async(e,l)=>{try{s.d(t,{Z:()=>o});var a=s(997),i=s(6689),r=s(6197),n=e([r]);r=(n.then?(await n)():n)[0];let o=()=>{let[e,t]=(0,i.useState)(!1),s=()=>t(!e),[l,n]=(0,i.useState)("white");return(0,i.useEffect)(()=>{let e=()=>{document.documentElement.classList.contains("dark")?n("white"):n("black")};e();let t=new MutationObserver(e);return t.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>t.disconnect()},[]),(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:"fixed bottom-14 left-6",children:(0,a.jsxs)("div",{className:"relative w-32 h-32",children:[" ",a.jsx(r.motion.div,{className:"absolute inset-0",animate:{rotate:360},transition:{duration:10,repeat:1/0,ease:"linear"},children:(0,a.jsxs)("svg",{viewBox:"0 0 100 100",className:"w-full h-full",children:[a.jsx("path",{id:"circlePath",d:"M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0",fill:"none"}),a.jsx("text",{fill:l,fontSize:"12",fontWeight:"500",letterSpacing:"0.8",children:a.jsx("textPath",{href:"#circlePath",startOffset:"0%",children:"Web Developer • Software Developer • Web Developer • Software Developer •"})})]})}),a.jsx(r.motion.button,{className:"absolute inset-0 m-auto bg-black text-white rounded-full w-20 h-20 font-bold flex flex-col items-center justify-center cursor-pointer dark:bg-slate-300",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:s,children:(0,a.jsxs)("div",{className:"dark:text-dark",children:[a.jsx("p",{className:"leading-tight mt-2",children:"Contact"}),a.jsx("span",{children:"Me"})]})})]})}),a.jsx(r.AnimatePresence,{children:e&&a.jsx(r.motion.div,{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,a.jsxs)(r.motion.div,{className:"bg-white rounded-lg p-6 w-96",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Contact Me"}),(0,a.jsxs)("form",{className:"space-y-4",children:[a.jsx("div",{children:(0,a.jsxs)("div",{className:"block text-gray-700 text-sm font-bold mb-2",children:["To: ",a.jsx("span",{className:"font-medium underline underline-offset-4",children:"ayushdeb848@gmail.com"})]})}),(0,a.jsxs)("div",{children:[a.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"name",children:"Name"}),a.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700",id:"name",type:"text",placeholder:"Your name"})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),a.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700",id:"email",type:"email",placeholder:"Your email"})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"message",children:"Message"}),a.jsx("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700",id:"message",placeholder:"Your message",rows:"4"})]}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[a.jsx(r.motion.button,{className:"bg-black text-white font-bold py-2 px-4 rounded",whileHover:{scale:1.05},whileTap:{scale:.95},type:"submit",children:"Send Message"}),a.jsx(r.motion.button,{className:"text-black font-bold",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:s,type:"button",children:"Close"})]})]})]})})})]})};l()}catch(e){l(e)}})},6252:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var l=s(997);s(6689);var a=s(6137),i=s(1664),r=s.n(i);let n=()=>l.jsx("footer",{className:"w-full border-t-2 border-solid text-lg border-dark font-medium dark:border-light",children:(0,l.jsxs)(a.Z,{className:"py-8 flex items-center justify-between",children:[(0,l.jsxs)("span",{className:"text-dark dark:text-light",children:[new Date().getFullYear()," \xa9 All Rights Reserved"]}),(0,l.jsxs)("div",{className:"flex items-center text-dark dark:text-light",children:["Build by \xa0",l.jsx(r(),{href:"/",className:"underline underline-offset-4",children:"Ayush Deb"})]}),l.jsx(r(),{href:"/",className:"text-dark dark:text-light",children:"Contact"})]})})},3520:(e,t,s)=>{"use strict";s.d(t,{ET:()=>i,NW:()=>c,OW:()=>a,Zm:()=>r,kL:()=>d,nI:()=>n,uf:()=>o});var l=s(997);s(6689);let a=({fill:e,className:t,...s})=>l.jsx("svg",{width:"1em",height:"1em",viewBox:"0 -55 256 256",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",...s,className:`w-full h-auto ${t}`,children:l.jsx("path",{fill:e,d:"M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"})}),i=({className:e,...t})=>(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 512 512",...t,className:`w-full h-auto ${e}`,children:[l.jsx("path",{fill:"none",d:"M0 0h512v512H0z"}),l.jsx("path",{fill:"currentColor",d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"})]}),r=({className:e,...t})=>(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 209",...t,className:`w-full h-auto ${e}`,children:[l.jsx("path",{fill:"none",d:"M0 0h256v209H0z"}),l.jsx("path",{fill:"#55acee",d:"M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"})]}),n=({className:e,...t})=>(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...t,className:`w-full h-auto ${e}`,children:[l.jsx("path",{fill:"none",d:"M0 0h256v256H0z"}),(0,l.jsxs)("g",{fill:"none",children:[l.jsx("rect",{width:256,height:256,fill:"#fff",rx:60}),l.jsx("rect",{width:256,height:256,fill:"#0A66C2",rx:60}),l.jsx("path",{fill:"#fff",d:"M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"})]})]}),o=({className:e,...t})=>(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...t,className:`w-full h-auto ${e}`,children:[l.jsx("path",{fill:"none",d:"M0 0h256v256H0z"}),l.jsx("path",{fill:"#E74D89",d:"M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"}),l.jsx("path",{fill:"#B2215A",d:"M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"})]}),c=({className:e,...t})=>(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t,className:`w-full h-auto ${e}`,children:[(0,l.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:[(0,l.jsxs)("g",{strokeDasharray:"2",children:[l.jsx("path",{d:"M12 21v1M21 12h1M12 3v-1M3 12h-1",children:l.jsx("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.2s",values:"4;2"})}),l.jsx("path",{d:"M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5",children:l.jsx("animate",{fill:"freeze",attributeName:"stroke-dashoffset",begin:"0.2s",dur:"0.2s",values:"4;2"})})]}),l.jsx("path",{fill:"currentColor",d:"M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z",opacity:"0",children:l.jsx("set",{attributeName:"opacity",begin:"0.5s",to:"1"})})]}),(0,l.jsxs)("g",{fill:"currentColor",fillOpacity:"0",children:[(0,l.jsxs)("path",{d:"m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z",children:[l.jsx("animate",{id:"lineMdSunnyFilledLoopToMoonFilledLoopTransition0",fill:"freeze",attributeName:"fill-opacity",begin:"0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s",dur:"0.4s",values:"0;1"}),l.jsx("animate",{fill:"freeze",attributeName:"fill-opacity",begin:"lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s",dur:"0.4s",values:"1;0"})]}),(0,l.jsxs)("path",{d:"M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z",children:[l.jsx("animate",{fill:"freeze",attributeName:"fill-opacity",begin:"lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s",dur:"0.4s",values:"0;1"}),l.jsx("animate",{fill:"freeze",attributeName:"fill-opacity",begin:"lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s",dur:"0.4s",values:"1;0"})]}),(0,l.jsxs)("path",{d:"M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z",children:[l.jsx("animate",{fill:"freeze",attributeName:"fill-opacity",begin:"lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s",dur:"0.4s",values:"0;1"}),l.jsx("animate",{fill:"freeze",attributeName:"fill-opacity",begin:"lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s",dur:"0.4s",values:"1;0"})]}),(0,l.jsxs)("path",{d:"m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z",children:[l.jsx("animate",{fill:"freeze",attributeName:"fill-opacity",begin:"lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s",dur:"0.4s",values:"0;1"}),l.jsx("animate",{fill:"freeze",attributeName:"fill-opacity",begin:"lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s",dur:"0.4s",values:"1;0"})]})]}),(0,l.jsxs)("mask",{id:"lineMdSunnyFilledLoopToMoonFilledLoopTransition1",children:[l.jsx("circle",{cx:"12",cy:"12",r:"12",fill:"#fff"}),(0,l.jsxs)("circle",{cx:"22",cy:"2",r:"3",fill:"#fff",children:[l.jsx("animate",{fill:"freeze",attributeName:"cx",begin:"0.1s",dur:"0.4s",values:"22;18"}),l.jsx("animate",{fill:"freeze",attributeName:"cy",begin:"0.1s",dur:"0.4s",values:"2;6"}),l.jsx("animate",{fill:"freeze",attributeName:"r",begin:"0.1s",dur:"0.4s",values:"3;12"})]}),(0,l.jsxs)("circle",{cx:"22",cy:"2",r:"1",children:[l.jsx("animate",{fill:"freeze",attributeName:"cx",begin:"0.1s",dur:"0.4s",values:"22;18"}),l.jsx("animate",{fill:"freeze",attributeName:"cy",begin:"0.1s",dur:"0.4s",values:"2;6"}),l.jsx("animate",{fill:"freeze",attributeName:"r",begin:"0.1s",dur:"0.4s",values:"1;10"})]})]}),(0,l.jsxs)("circle",{cx:"12",cy:"12",r:"6",fill:"currentColor",mask:"url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)",children:[l.jsx("set",{attributeName:"opacity",begin:"0.5s",to:"0"}),l.jsx("animate",{fill:"freeze",attributeName:"r",begin:"0.1s",dur:"0.4s",values:"6;10"})]})]}),d=({className:e,...t})=>(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t,className:`w-full h-auto ${e}`,children:[l.jsx("rect",{x:"0",y:"0",width:"24",height:"24",fill:"rgba(255, 255, 255, 0)"}),(0,l.jsxs)("g",{fill:"none",stroke:"currentColor",strokeDasharray:"2",strokeDashoffset:"2",strokeLinecap:"round",strokeWidth:"2",children:[(0,l.jsxs)("path",{d:"M0 0",children:[l.jsx("animate",{fill:"freeze",attributeName:"d",begin:"1.2s",dur:"0.2s",values:"M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"}),l.jsx("animate",{fill:"freeze",attributeName:"stroke-dashoffset",begin:"1.2s",dur:"0.2s",values:"2;0"})]}),(0,l.jsxs)("path",{d:"M0 0",children:[l.jsx("animate",{fill:"freeze",attributeName:"d",begin:"1.5s",dur:"0.2s",values:"M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"}),l.jsx("animate",{fill:"freeze",attributeName:"stroke-dashoffset",begin:"1.5s",dur:"1.2s",values:"2;0"})]}),l.jsx("animateTransform",{attributeName:"transform",dur:"30s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})]}),(0,l.jsxs)("g",{fill:"currentColor",children:[l.jsx("path",{d:"M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z",children:l.jsx("animate",{fill:"freeze",attributeName:"fill-opacity",dur:"0.4s",values:"1;0"})}),l.jsx("path",{d:"M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z",children:l.jsx("animate",{fill:"freeze",attributeName:"fill-opacity",begin:"0.2s",dur:"0.4s",values:"1;0"})})]}),(0,l.jsxs)("g",{fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:[l.jsx("path",{d:"M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"}),l.jsx("set",{attributeName:"opacity",begin:"0.6s",to:"0"})]}),(0,l.jsxs)("mask",{id:"lineMdMoonFilledToSunnyFilledLoopTransition0",children:[l.jsx("circle",{cx:"12",cy:"12",r:"12",fill:"#fff"}),(0,l.jsxs)("circle",{cx:"18",cy:"6",r:"12",fill:"#fff",children:[l.jsx("animate",{fill:"freeze",attributeName:"cx",begin:"0.6s",dur:"0.4s",values:"18;22"}),l.jsx("animate",{fill:"freeze",attributeName:"cy",begin:"0.6s",dur:"0.4s",values:"6;2"}),l.jsx("animate",{fill:"freeze",attributeName:"r",begin:"0.6s",dur:"0.4s",values:"12;3"})]}),(0,l.jsxs)("circle",{cx:"18",cy:"6",r:"10",children:[l.jsx("animate",{fill:"freeze",attributeName:"cx",begin:"0.6s",dur:"0.4s",values:"18;22"}),l.jsx("animate",{fill:"freeze",attributeName:"cy",begin:"0.6s",dur:"0.4s",values:"6;2"}),l.jsx("animate",{fill:"freeze",attributeName:"r",begin:"0.6s",dur:"0.4s",values:"10;1"})]})]}),(0,l.jsxs)("circle",{cx:"12",cy:"12",r:"10",fill:"currentColor",mask:"url(#lineMdMoonFilledToSunnyFilledLoopTransition0)",opacity:"0",children:[l.jsx("set",{attributeName:"opacity",begin:"0.6s",to:"1"}),l.jsx("animate",{fill:"freeze",attributeName:"r",begin:"0.6s",dur:"0.4s",values:"10;6"})]})]})},6137:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var l=s(997);s(6689);let a=({children:e,className:t=""})=>l.jsx("div",{className:`w-full h-full inl z-0 bg-lightImg p-32 ${t} dark:bg-darkImg`,children:e})},3525:(e,t,s)=>{"use strict";s.a(e,async(e,l)=>{try{s.d(t,{Z:()=>d});var a=s(997);s(6689);var i=s(1664),r=s.n(i),n=s(6197),o=e([n]);n=(o.then?(await o)():o)[0];let c=(0,n.motion)(r()),d=()=>a.jsx("div",{className:"flex items-center justify-center mt-2",children:a.jsx(c,{href:"/",className:"w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border-solid  border-transparent  dark:border-light",whileHover:{backgroundColor:["#121212","rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)","#121212"],transition:{duration:1,repeat:1/0}},children:"AD"})});l()}catch(e){l(e)}})},7373:(e,t,s)=>{"use strict";s.a(e,async(e,l)=>{try{s.d(t,{Z:()=>g});var a=s(997),i=s(1664),r=s.n(i),n=s(6689),o=s(3525),c=s(1163),d=s(3520),m=s(6197),h=s(7940),x=e([o,m]);[o,m]=x.then?(await x)():x;let u=({href:e,title:t,className:s=""})=>{let l=(0,c.useRouter)();return(0,a.jsxs)(r(),{href:e,className:`${s} group relative`,children:[t,a.jsx("span",{className:`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300
        ${l.asPath===e?"w-full bg-slate-400":"w-0"}
        dark:bg-light`,children:"\xa0"})]})},g=()=>{let[e,t]=(0,h.Z)(),[s,l]=(0,n.useState)("black"),[i,r]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{l(document.documentElement.classList.contains("dark")?"white":"black")};e();let t=new MutationObserver(e);return t.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>t.disconnect()},[]),(0,a.jsxs)("header",{className:"w-full px-4 py-4 font-medium flex items-center justify-between dark:text-light relative",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between w-full",children:[a.jsx("div",{className:"absolute left-[50%] top-2 translate-x-[-50%]",children:a.jsx(o.Z,{})}),(0,a.jsxs)("button",{className:"md:hidden flex flex-col items-center justify-center w-8 h-8",onClick:()=>r(!i),children:[a.jsx("span",{className:"block w-full h-1 bg-dark dark:bg-light mb-1"}),a.jsx("span",{className:"block w-full h-1 bg-dark dark:bg-light mb-1"}),a.jsx("span",{className:"block w-full h-1 bg-dark dark:bg-light"})]}),(0,a.jsxs)("nav",{className:"hidden md:flex md:flex-row md:items-center",children:[a.jsx(u,{href:"/",title:"Home",className:"mr-2"}),a.jsx(u,{href:"/about",title:"About",className:"mx-3"}),a.jsx(u,{href:"/#projects",title:"Projects",className:"mx-3"}),a.jsx(u,{href:"/articles",title:"Articles",className:"mx-3"})]}),(0,a.jsxs)("nav",{className:"flex items-center justify-between flex-wrap",children:[a.jsx(m.motion.a,{href:"/",target:"_blank",whileHover:{y:-2},className:"w-6 mx-3",whileTap:{scale:.9},children:a.jsx(d.Zm,{})}),a.jsx(m.motion.a,{href:"/",target:"_blank",whileHover:{y:-2},className:"w-6 mx-3",whileTap:{scale:.9},children:a.jsx(d.ET,{})}),a.jsx(m.motion.a,{href:"/",target:"_blank",whileHover:{y:-2},className:"w-6 mx-3",whileTap:{scale:.9},children:a.jsx(d.OW,{fill:s})}),a.jsx(m.motion.a,{href:"/",target:"_blank",whileHover:{y:-2},className:"w-6 mx-3",whileTap:{scale:.9},children:a.jsx(d.nI,{})}),a.jsx(m.motion.a,{href:"/",target:"_blank",whileHover:{y:-2},className:"w-6 ml-3",whileTap:{scale:.9},children:a.jsx(d.uf,{})}),a.jsx("button",{onClick:()=>t("light"===e?"dark":"light"),className:`ml-3 flex items-center justify-center rounded-full p-1 ${"light"===e?"bg-dark text-light":"bg-light text-dark"}`,children:"dark"===e?a.jsx(d.NW,{className:"fill-dark"}):a.jsx(d.kL,{className:"fill-dark"})})]})]}),i&&a.jsx("nav",{className:"absolute left-0 top-full bg-white dark:bg-gray-800 w-full shadow-lg z-10",children:(0,a.jsxs)("div",{className:"flex flex-col",children:[a.jsx(u,{href:"/",title:"Home",className:"my-2 px-4 py-2"}),a.jsx(u,{href:"/about",title:"About",className:"my-2 px-4 py-2"}),a.jsx(u,{href:"/#projects",title:"Projects",className:"my-2 px-4 py-2"}),a.jsx(u,{href:"/articles",title:"Articles",className:"my-2 px-4 py-2"})]})})]})};l()}catch(e){l(e)}})},4586:(e,t,s)=>{"use strict";s.a(e,async(e,l)=>{try{s.d(t,{Z:()=>d});var a=s(997),i=s(6689),r=s(6197),n=s(9831),o=e([r]);r=(o.then?(await o)():o)[0];let c=[{id:1,title:"E-commerce Platform",description:"A full-stack e-commerce solution with real-time inventory management and secure payment processing.",image:"https://picsum.photos/seed/ecommerce/800/600",technologies:["React","Node.js","MongoDB","Stripe API"],github:"https://github.com/yourusername/ecommerce-platform",live:"https://your-ecommerce-platform.com"},{id:2,title:"Weather Forecast App",description:"A mobile-responsive web app that provides accurate weather forecasts using geolocation and third-party APIs.",image:"https://picsum.photos/seed/weather/800/600",technologies:["Vue.js","OpenWeatherMap API","Geolocation API"],github:"https://github.com/yourusername/weather-forecast-app",live:"https://your-weather-app.com"},{id:3,title:"Blog Platform",description:"A blogging platform where users can create, edit, and delete their posts. Features include user authentication and real-time commenting.",image:"https://picsum.photos/seed/blog/800/600",technologies:["Next.js","MongoDB","Express","Socket.IO"],github:"https://github.com/yourusername/blog-platform",live:"https://your-blog-platform.com"},{id:4,title:"Portfolio Website",description:"A personal portfolio website showcasing my projects, skills, and contact information. Built with a modern design and responsive layout.",image:"https://picsum.photos/seed/portfolio/800/600",technologies:["React","Tailwind CSS","Netlify"],github:"https://github.com/yourusername/portfolio-website",live:"https://your-portfolio-website.com"}],d=()=>{let[e,t]=(0,i.useState)(c);return a.jsx("div",{className:"py-16",id:"projects",children:(0,a.jsxs)("div",{className:"max-w-4xl mx-auto px-2",children:[a.jsx("h2",{className:"text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100",children:"My Projects"}),a.jsx(r.Reorder.Group,{axis:"y",values:e,onReorder:t,className:"grid grid-cols-1 md:grid-cols-2 gap-8",dragConstraints:!1,dragElastic:1,children:e.map(e=>a.jsx(r.Reorder.Item,{value:e,className:"cursor-grab",drag:!0,dragConstraints:!1,dragElastic:1,whileDrag:{scale:1.05},transition:{type:"spring",stiffness:300,damping:30},style:{listStyle:"none",position:"relative"},children:(0,a.jsxs)(r.motion.div,{className:"rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 backdrop-filter backdrop-blur-md bg-opacity-50 dark:bg-opacity-30",whileHover:{scale:1.05},transition:{duration:.3},layout:!0,style:{background:"rgba(255, 255, 255, 0.05)",backdropFilter:"blur(5px)",border:"2px solid rgba(255, 255, 255, 0.2)"},children:[a.jsx("img",{src:e.image,alt:e.title,className:"w-full h-48 object-cover"}),(0,a.jsxs)("div",{className:"p-4",children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-gray-100",children:e.title}),a.jsx("p",{className:"mt-2 text-gray-700 dark:text-gray-300",children:e.description}),a.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:e.technologies.map(e=>a.jsx("span",{className:"inline-block text-gray-900 dark:text-gray-100 text-sm px-2 py-1 rounded-full",style:{background:"rgba(255, 215, 0, 0.1)",border:"2px solid #FFD700"},children:e},e))}),(0,a.jsxs)("div",{className:"mt-6 flex items-center justify-between",children:[(0,a.jsxs)("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200 ease-in-out",children:[a.jsx(n.hJX,{className:"mr-1"}),"View Code"]}),a.jsx(n.SPC,{className:"text-gray-500 cursor-grab mx-4 text-xl"}),(0,a.jsxs)("a",{href:e.live,target:"_blank",rel:"noopener noreferrer",className:"flex items-center bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200 ease-in-out",children:[a.jsx(n.CkN,{className:"mr-1"}),"Live Demo"]})]})]})]})},e.id))})]})})};l()}catch(e){l(e)}})},6724:(e,t,s)=>{"use strict";s.a(e,async(e,l)=>{try{s.d(t,{Z:()=>d});var a=s(997);s(6689);var i=s(6197),r=s(5675),n=s.n(r),o=e([i]);i=(o.then?(await o)():o)[0];let c=({skill:e,logo:t,index:s})=>(0,a.jsxs)(i.motion.div,{className:"flex items-center bg-white rounded-lg px-3 py-2 shadow-md m-2 transition-all",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.1*s},whileHover:{scale:1.05,boxShadow:"0 10px 20px rgba(0, 0, 0, 0.2)"},whileTap:{scale:.95},children:[a.jsx(n(),{src:t,alt:`${e} logo`,className:"w-6 h-6 mr-2",width:24,height:24}),a.jsx("span",{className:"text-sm font-medium text-gray-800",children:e})]}),d=()=>a.jsx(i.motion.div,{className:"flex flex-wrap justify-center items-center max-w-screen-md mx-auto py-10 px-4",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[{name:"JavaScript",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},{name:"TypeScript",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{name:"CSS",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},{name:"HTML",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},{name:"Next.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},{name:"React",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"Tailwind",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},{name:"Node.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},{name:"Express",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},{name:"MongoDB",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},{name:"Bootstrap",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"},{name:"Git",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},{name:"GitHub",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"}].map((e,t)=>a.jsx(c,{skill:e.name,logo:e.logo,index:t},t))});l()}catch(e){l(e)}})},7940:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var l=s(6689);let a=()=>{let[e,t]=(0,l.useState)("dark");return(0,l.useEffect)(()=>{},[]),(0,l.useEffect)(()=>{},[e]),[e,t]}},9413:(e,t,s)=>{"use strict";s.a(e,async(e,l)=>{try{s.r(t),s.d(t,{default:()=>g});var a=s(997),i=s(4694),r=s.n(i),n=s(6252),o=s(7373),c=s(936);s(108);var d=s(968),m=s.n(d),h=s(6724),x=s(4586),u=e([o,c,h,x]);function g({Component:e,pageProps:t}){return(0,a.jsxs)("div",{className:"bg-lightImg dark:bg-darkImg",children:[(0,a.jsxs)(m(),{children:[a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.jsx("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("main",{className:`${r().className} bg-lightImg w-full min-h-screen text-black relative dark:bg-darkImg`,children:[a.jsx(o.Z,{}),a.jsx(e,{...t}),a.jsx(c.Z,{}),a.jsx(h.Z,{}),a.jsx(x.Z,{}),a.jsx(n.Z,{})]})]})}[o,c,h,x]=u.then?(await u)():u,l()}catch(e){l(e)}})},108:()=>{}};