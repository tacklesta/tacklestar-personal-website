(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,s,a){},19:function(e,s,a){"use strict";a.r(s);var c=a(1),t=a.n(c),i=a(9),r=a.n(i),n=(a(15),a(2)),l=a(3),j=a(5),o=a(4),d=a(8),h=a(10),b=a.n(h),m=a(0),O=function(e){Object(j.a)(a,e);var s=Object(o.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=this.props.data.description,a=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsxs)("header",{id:"home",children:[Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show Navigation",children:"Show Navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"home",title:"Hide Navigation",children:" Hide Navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:" Home "})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:" About "})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume "})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:" Works "})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:" Testimonials "})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsxs)("h1",{className:"responsive-headline",children:[" I 'am ",e,"."]}),Object(m.jsx)("h3",{children:s}),Object(m.jsx)("hr",{}),Object(m.jsx)("ul",{className:"social",children:a})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})}}]),a}(t.a.Component),x=function(e){Object(j.a)(a,e);var s=Object(o.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s="images/"+this.props.data.image,a=this.props.data.bio,c=this.props.data.address.street,t=this.props.data.address.state,i=this.props.data.address.zip,r=this.props.data.phone,n=this.props.data.email,l=this.props.data.resumeDownload;return Object(m.jsx)("section",{id:"about",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:s,alt:"Tarun Profile Pic"})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:" About Me "}),Object(m.jsxs)("p",{children:[" ",a," "]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:" Contact Details "}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:Object(m.jsxs)("strong",{children:[" ",e," "]})}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:[" ",c," ",Object(m.jsx)("br",{}),t,Object(m.jsx)("br",{}),i]}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:[" ",r," "]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{className:"mail",href:"mailto:tarundyundi2000@gmail.com",children:n})})]})]}),Object(m.jsx)("div",{className:"columns download",children:Object(m.jsx)("p",{children:Object(m.jsxs)("a",{href:l,target:"_none",className:"button",children:[Object(m.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),a}(c.Component),u=function(e){Object(j.a)(a,e);var s=Object(o.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.school}),Object(m.jsxs)("p",{className:"info",children:[e.degree,Object(m.jsx)("br",{}),Object(m.jsx)("em",{className:"date",children:e.graduated})]}),Object(m.jsx)("br",{})]},e.school)})),a=this.props.data.work.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.company}),Object(m.jsxs)("p",{className:"info",children:[e.title,Object(m.jsx)("br",{}),Object(m.jsx)("em",{class:"date",children:e.years})]}),Object(m.jsx)("p",{children:e.description})]},e.company)}));return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col edu-head",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns resume-content",children:s})})})]}),Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col work-head",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Work"})})}),Object(m.jsx)("div",{className:"nine columns main-col resume-content",children:a})]}),Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns resume-head",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Skills"})})}),Object(m.jsx)("div",{className:"nine columns main-col sub-text",children:Object(m.jsx)("h5",{children:e})}),Object(m.jsxs)("div",{class:"container",children:[Object(m.jsxs)("div",{class:"row",children:[Object(m.jsxs)("div",{class:"col-md-6 skills",children:["C++",Object(m.jsx)("div",{class:"progress",children:Object(m.jsx)("div",{class:"progress-bar",role:"progressbar",style:{background:this.getRandomColor(),width:"80%"},"aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100"})}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{class:"col-md-6",children:["Python",Object(m.jsx)("div",{class:"progress",children:Object(m.jsx)("div",{class:"progress-bar",role:"progressbar",style:{background:this.getRandomColor(),width:"50%"},"aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"})}),Object(m.jsx)("br",{})]})]}),Object(m.jsxs)("div",{class:"row",children:[Object(m.jsxs)("div",{class:"col-md-6",children:["JavaScript",Object(m.jsx)("div",{class:"progress",children:Object(m.jsx)("div",{class:"progress-bar",role:"progressbar",style:{background:this.getRandomColor(),width:"70%"},"aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"})}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{class:"col-md-6",children:["Machine Learning",Object(m.jsx)("div",{class:"progress",children:Object(m.jsx)("div",{class:"progress-bar",role:"progressbar",style:{background:this.getRandomColor(),width:"65%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"})}),Object(m.jsx)("br",{})]})]}),Object(m.jsxs)("div",{class:"row",children:[Object(m.jsxs)("div",{class:"col-md-6",children:["MERN Stack",Object(m.jsx)("div",{class:"progress",children:Object(m.jsx)("div",{class:"progress-bar",role:"progressbar",style:{background:this.getRandomColor(),width:"60%"},"aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"})}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{class:"col-md-6",children:["Flask",Object(m.jsx)("div",{class:"progress",children:Object(m.jsx)("div",{class:"progress-bar",role:"progressbar",style:{background:this.getRandomColor(),width:"40%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"})}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{class:"col-md-6",children:["NLP",Object(m.jsx)("div",{class:"progress",children:Object(m.jsx)("div",{class:"progress-bar",role:"progressbar",style:{background:this.getRandomColor(),width:"60%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"})}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{class:"col-md-6",children:["MYSQL",Object(m.jsx)("div",{class:"progress",children:Object(m.jsx)("div",{class:"progress-bar",role:"progressbar",style:{background:this.getRandomColor(),width:"55%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"})}),Object(m.jsx)("br",{})]})]})]})]})]})}}]),a}(t.a.Component),p=function(e){Object(j.a)(a,e);var s=Object(o.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=this.props.data.phone,a=this.props.data.email,c=this.props.data.contactmessage;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsxs)("div",{className:"row section-head",children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Get In Touch."})})}),Object(m.jsxs)("div",{className:"ten columns",children:[Object(m.jsx)("p",{className:"lead",children:c}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{class:"lead warning",children:"NOTE : Contact form not yet configured, Please contact me via normal email for now !!"})]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"eight columns",children:[Object(m.jsx)("form",{action:"contact_form.php",method:"POST",id:"contactForm",name:"contactForm",children:Object(m.jsxs)("fieldset",{children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactName",children:["Name",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlfor:"contactEmail",children:["Email",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{label:"contactSubject",children:"Subject"}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onchange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlfor:"contactMessage",children:["Message",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("textarea",{id:"contactMessage",name:"contactMessage"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"submit",className:"submit",children:"Submit"}),Object(m.jsx)("span",{id:"image-loader",children:Object(m.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(m.jsx)("div",{id:"message-warning",children:"ERROR !!"}),Object(m.jsxs)("div",{id:"message-success",children:[Object(m.jsx)("i",{className:"fa fa-check"}),"Your Message was Sent Successfully, THANK YOU !!",Object(m.jsx)("br",{})]})]}),Object(m.jsx)("aside",{className:"four columns footer-widgets",children:Object(m.jsxs)("div",{className:"widget widget_contact",children:[Object(m.jsx)("h4",{children:"Contact"}),Object(m.jsxs)("p",{className:"address",children:[e,Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:s}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:"mailto:tarundyundi2000@gmail.com",children:a})})]})]})})]})]})}}]),a}(t.a.Component),v=function(e){Object(j.a)(a,e);var s=Object(o.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsxs)("blockquote",{children:[Object(m.jsx)("p",{children:e.user}),Object(m.jsx)("cite",{children:e.user})]})},e.user)}));return Object(m.jsx)("section",{id:"testimonials",children:Object(m.jsx)("div",{className:"text-container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Client Testimonials"})})}),Object(m.jsx)("div",{className:"ten columns flex-container",children:Object(m.jsx)("ul",{className:"slides",children:e})})]})})})}}]),a}(t.a.Component),f=function(e){Object(j.a)(a,e);var s=Object(o.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsx)("div",{className:"item-wrap",children:Object(m.jsxs)("a",{href:e.url,title:e.title,children:[Object(m.jsx)("img",{alt:e.title,src:s}),Object(m.jsx)("div",{className:"overlay",children:Object(m.jsxs)("div",{className:"portfolio-item-meta",children:[Object(m.jsx)("h5",{children:e.title}),Object(m.jsx)("p",{children:e.category})]})}),Object(m.jsx)("div",{className:"link-icon",children:Object(m.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:Object(m.jsx)("strong",{children:"Check out some of My Works :"})}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),a}(t.a.Component),g=function(e){Object(j.a)(a,e);var s=Object(o.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("ul",{className:"social-links",children:e}),Object(m.jsxs)("ul",{className:"copyright",children:[Object(m.jsx)("li",{children:"\xa9 Copyright 2021 Tarun Dyundi"}),Object(m.jsxs)("li",{children:["Design by ",Object(m.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),a}(t.a.Component),N=function(e){Object(j.a)(a,e);var s=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=s.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),c}return Object(l.a)(a,[{key:"getResumeData",value:function(){b.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{data:this.state.resumeData.main}),Object(m.jsx)(x,{data:this.state.resumeData.main}),Object(m.jsx)(u,{data:this.state.resumeData.resume}),Object(m.jsx)(f,{data:this.state.resumeData.portfolio}),Object(m.jsx)(v,{data:this.state.resumeData.testimonials}),Object(m.jsx)(p,{data:this.state.resumeData.main}),Object(m.jsx)(g,{data:this.state.resumeData.main})]})}}]),a}(t.a.Component);r.a.render(Object(m.jsx)(N,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.cccb0650.chunk.js.map