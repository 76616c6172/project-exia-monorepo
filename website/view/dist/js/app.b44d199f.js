(function(){"use strict";var t={8497:function(t,e,o){var n=o(9242),s=o(7154),a=o(7139),r=o(6265),i=o.n(r);const l="https://exia.art/api/0",c={jobs:[],selectedJob:[]},u={getJobs:t=>t.jobs,getSelectedJob:t=>t.selectedJob},d={async fetchJobs({commit:t}){try{return await i().get(`${l}/status`).then((e=>{if(200==e.status){const o=e.data.completed_jobs;t("FETCH_JOBS",o)}}))}catch(e){console.log(e)}},async sendNewJob(t){console.log(t);try{return await i().post(`${l}/jobs`,t).then((t=>{200==t.status&&console.log(t)}))}catch(e){console.log(e)}},getSelectedJob({commit:t},e){const o=this.getters.getJobs.filter((t=>t.jobid===e))[0];o.img=`${l}/img?${e}`,t("FETCH_SELECTED_JOB",o)}},m={FETCH_JOBS(t,e){t.jobs=e},FETCH_SELECTED_JOB(t,e){t.selectedJob=e,console.log(t.selectedJob)}},p={state:c,mutations:m,actions:d,getters:u};var g=p,b=(0,a.MT)({modules:{api:g}}),v=o(678),h=o(3396);const f={class:"container-fluid"},_={class:"mt-5"},w={class:"row justify-content-center"},y={class:"col-lg-6 col-sm-12"},k={class:"row justify-content-center"},j={class:"col-lg-6 col-sm-12"},x={class:"row justify-content-center bg-light"},S={class:"col-lg-6 col-sm-12"},C={class:"row justify-content-center bg-light"},J={class:"col-lg-6 col-sm-12"};function D(t,e,o,n,s,a){const r=(0,h.up)("Typing"),i=(0,h.up)("Instructions"),l=(0,h.up)("StatusItemList"),c=(0,h.up)("Prompt");return(0,h.wg)(),(0,h.iD)("div",f,[(0,h._)("div",_,[(0,h._)("div",w,[(0,h._)("div",y,[(0,h.Wm)(r)])]),(0,h._)("div",k,[(0,h._)("div",j,[(0,h.Wm)(i)])]),(0,h._)("div",x,[(0,h._)("div",S,[(0,h.Wm)(l)])]),(0,h._)("div",C,[(0,h._)("div",J,[(0,h.Wm)(c)])])])])}var T=o(2268);const P=(0,h._)("h1",{class:"text-start mb-4"},[(0,h._)("strong",null," High-resolution images generated by Ai ")],-1),O={class:"text-start"},H=(0,h._)("span",{class:"blink"},"|",-1);function E(t,e,o,n,s,a){return(0,h.wg)(),(0,h.iD)("div",null,[P,(0,h._)("p",O,[(0,h.Uk)((0,T.zw)(a.getText())+" ",1),H])])}var I={name:"TypingComponent",data(){return{i:0,txtOut:"",txtIn:"We leverage an AI Image generating technique called CLIP-Guided Diffusion to allow you to create compelling and beautiful images from just text inputs. Made with love by Zen and Valar!."}},methods:{getText(){return this.txtOut},delay(t){return new Promise((e=>setTimeout(e,t)))},async setText(){this.i<=this.txtIn.length&&(this.txtOut+=this.txtIn.charAt(this.i),await this.delay(40),this.i++,this.setText())}},mounted(){this.setText()}},B=o(89);const L=(0,B.Z)(I,[["render",E]]);var W=L;const $={class:"mb-5"},M={class:"text-start"},Z={key:0,class:"mt-5 mb-5"},q=(0,h._)("h2",{class:"text-start"},[(0,h._)("strong",null," How to ")],-1),z={class:"row"},F={class:"col-sm-1 col-lg-1 mt-2 mb-3"},N={class:"text-start"},U={class:"col-sm-11 col-lg-5 mt-2 mb-3"},V={class:"text-start"},Y={key:0,class:"d-lg-block d-sm-none d-xs-none"};function A(t,e,o,n,s,a){return(0,h.wg)(),(0,h.iD)("div",$,[(0,h._)("div",M,[(0,h._)("button",{onClick:e[0]||(e[0]=t=>this.visible=!this.visible),type:"button",class:"btn btn-outline-secondary"}," How to ")]),s.visible?((0,h.wg)(),(0,h.iD)("div",Z,[q,(0,h._)("div",z,[((0,h.wg)(!0),(0,h.iD)(h.HY,null,(0,h.Ko)(s.instructions,((t,e)=>((0,h.wg)(),(0,h.iD)(h.HY,{key:e},[(0,h._)("div",F,[(0,h._)("h4",N,"0"+(0,T.zw)(e+1),1)]),(0,h._)("div",U,[(0,h._)("h5",V,(0,T.zw)(t.content),1)]),1==e||3==e?((0,h.wg)(),(0,h.iD)("hr",Y)):(0,h.kq)("",!0)],64)))),128))])])):(0,h.kq)("",!0)])}var Q={name:"InstructionsComponent",data(){return{instructions:[{content:"Enter search term"},{content:"Click generate or hit enter"},{content:"Wait the image to be finished"},{content:"Enjoy and feel energized"}],visible:!1}}};const K=(0,B.Z)(Q,[["render",A]]);var G=K;const R={class:"input-group"};function X(t,e,o,s,a,r){return(0,h.wg)(),(0,h.iD)("div",null,[(0,h._)("div",R,[(0,h.wy)((0,h._)("input",{onKeyup:e[0]||(e[0]=(0,n.D2)((t=>r.onClickSendNewJob()),["enter"])),"onUpdate:modelValue":e[1]||(e[1]=t=>a.vPrompt=t),type:"text",class:"form-control",placeholder:"Enter your prompt","aria-label":"Enter your prompt"},null,544),[[n.nr,a.vPrompt]]),(0,h._)("button",{onClick:e[2]||(e[2]=t=>r.onClickSendNewJob()),class:"btn btn-outline-secondary",type:"submit"}," Generate ")])])}var tt={name:"PromptComponent",data(){return{vPrompt:""}},methods:{onClickSendNewJob(){this.$store.dispatch("sendNewJob",{prompt:this.vPrompt})}}};const et=(0,B.Z)(tt,[["render",X]]);var ot=et;const nt={class:"mt-5 mb-4"},st=(0,h._)("h2",{class:"text-start mt-5 mb-4"},[(0,h._)("strong",null," ImageList")],-1),at={class:"col-4 mb-3 mb-lg-0"},rt={class:"list-group-flush",style:{"padding-left":"0 !important"}};function it(t,e,o,s,a,r){const i=(0,h.up)("StatusItem");return(0,h.wg)(),(0,h.iD)("div",nt,[st,(0,h._)("form",at,[(0,h.wy)((0,h._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.searchQuery=t),type:"search",class:"form-control",placeholder:"Search prompt","aria-label":"Search"},null,512),[[n.nr,a.searchQuery]])]),(0,h._)("ul",rt,[((0,h.wg)(!0),(0,h.iD)(h.HY,null,(0,h.Ko)(r.getSearchedProducts,((t,e)=>((0,h.wg)(),(0,h.j4)(i,{key:e,job:t},null,8,["job"])))),128))])])}const lt={class:"row"},ct={class:"col-lg-10 col-md-10"},ut={class:"text-start"},dt={class:"col-lg-2 col-md-2"},mt={class:"badge border text-secondary"};function pt(t,e,o,n,s,a){const r=(0,h.up)("ConfirmDialogue");return(0,h.wg)(),(0,h.iD)(h.HY,null,[(0,h._)("li",{onClick:e[0]||(e[0]=t=>a.onClickSetSelected(o.job.jobid)),class:"list-group-item list-group-item-action"},[(0,h._)("div",lt,[(0,h._)("div",ct,[(0,h._)("p",ut,(0,T.zw)(o.job.prompt),1)]),(0,h._)("div",dt,[(0,h._)("span",{class:(0,T.C_)([a.getJobBorderClass(o.job.job_status),"badge border text-secondary"])},(0,T.zw)(o.job.job_status),3),(0,h._)("span",mt,(0,T.zw)(o.job.iteration_status)+"/"+(0,T.zw)(o.job.iteration_max),1)])])]),(0,h.Wm)(r,{ref:"confirmDialogue"},null,512)],64)}const gt=["innerHTML"],bt=["innerHTML"],vt=["src"],ht={class:"popupmodal__buttons"};function ft(t,e,o,n,s,a){const r=(0,h.up)("popup-modal");return(0,h.wg)(),(0,h.j4)(r,{ref:"popup"},{default:(0,h.w5)((()=>[(0,h._)("h2",{class:"popupmodal__title",style:{"margin-top":"0"},innerHTML:t.title},null,8,gt),(0,h._)("p",{class:"popupmodal__message",innerHTML:t.message},null,8,bt),(0,h._)("img",{class:"img-fluid",src:`${t.image}`,alt:""},null,8,vt),(0,h._)("div",ht,[(0,h._)("button",{class:"popupmodal__buttons-cancel",onClick:e[0]||(e[0]=(...t)=>a._cancel&&a._cancel(...t))},(0,T.zw)(t.cancelButton),1),(0,h._)("button",{class:"popupmodal__buttons-ok",onClick:e[1]||(e[1]=(...t)=>a._confirm&&a._confirm(...t))},(0,T.zw)(t.okButton),1)])])),_:1},512)}const _t={key:0,class:"popupmodal"},wt={class:"popupmodal__window"};function yt(t,e,o,s,a,r){return(0,h.wg)(),(0,h.j4)(n.uT,{name:"fade"},{default:(0,h.w5)((()=>[t.isVisible?((0,h.wg)(),(0,h.iD)("div",_t,[(0,h._)("div",wt,[(0,h.WI)(t.$slots,"default")])])):(0,h.kq)("",!0)])),_:3})}var kt={name:"PopupModal",data:()=>({isVisible:!1}),methods:{open(){this.isVisible=!0},close(){this.isVisible=!1}}};const jt=(0,B.Z)(kt,[["render",yt]]);var xt=jt,St={name:"ConfirmDialogue",components:{PopupModal:xt},data:()=>({title:void 0,message:void 0,image:void 0,okButton:void 0,cancelButton:"Cancel",resolvePromise:void 0,rejectPromise:void 0}),methods:{show(t={}){return this.title=t.title,this.message=t.message,this.image=t.image,this.okButton=t.okButton,t.cancelButton&&(this.cancelButton=t.cancelButton),this.$refs.popup.open(),new Promise(((t,e)=>{this.resolvePromise=t,this.rejectPromise=e}))},_confirm(){this.$refs.popup.close(),this.resolvePromise(!0)},_cancel(){this.$refs.popup.close(),this.resolvePromise(!1)}}};const Ct=(0,B.Z)(St,[["render",ft]]);var Jt=Ct,Dt={name:"StatusItemComponent",components:{ConfirmDialogue:Jt},props:{job:{type:Object,required:!0,iteration_max:{type:String,required:!0},iteration_status:{type:String,required:!0},job_status:{type:String,required:!0},job_id:{type:String,required:!0},prompt:{type:String,required:!0}}},methods:{onClickSetSelected(t){this.$store.dispatch("getSelectedJob",t),this.buildModalDialogue()},async buildModalDialogue(){console.log("triggered");await this.$refs.confirmDialogue.show({title:this.getSelectedJob.prompt,image:this.getSelectedJob.img,message:"",okButton:"Löschen"})},getJobBorderClass(t){let e;switch(t){case"completed":e="border-success";break;case"processing":e="border-info";break;case"queued":e="border-warning";break;default:break}return e}},computed:{getSelectedJob(){return this.$store.getters.getSelectedJob}}};const Tt=(0,B.Z)(Dt,[["render",pt],["__scopeId","data-v-269dde5a"]]);var Pt=Tt,Ot={name:"StatusListComponent",components:{StatusItem:Pt},data(){return{jobs:[],searchQuery:""}},methods:{loadJobs(t){0==this.jobs.length&&t.forEach((t=>{this.jobs.push(t)}))}},computed:{getJobsFromStore(){return this.$store.getters.getJobs},getSearchedProducts(){return this.jobs.filter((t=>-1!=t.prompt.toLowerCase().indexOf(this.searchQuery.toLowerCase())))}},watch:{getJobsFromStore:{handler(t){t&&this.loadJobs(t)},immediate:!0}},async mounted(){this.$store.dispatch("fetchJobs")}};const Ht=(0,B.Z)(Ot,[["render",it]]);var Et=Ht,It={name:"HomeComponent",components:{Typing:W,Instructions:G,Prompt:ot,StatusItemList:Et},props:{msg:String}};const Bt=(0,B.Z)(It,[["render",D]]);var Lt=Bt;const Wt=[{path:"/",name:"Home",component:Lt}],$t=(0,v.p7)({history:(0,v.PO)("/"),routes:Wt});var Mt=$t;const Zt={class:"appContainer"},qt={class:"row"},zt={class:"col-12"};function Ft(t,e,o,n,s,a){const r=(0,h.up)("Navbar"),i=(0,h.up)("Home"),l=(0,h.up)("Footer");return(0,h.wg)(),(0,h.iD)("div",Zt,[(0,h.Wm)(r),(0,h._)("div",qt,[(0,h._)("div",zt,[(0,h.Wm)(i)])]),(0,h.Wm)(l)])}const Nt={class:"navbar navbar-expand-lg navbar-light fixed-top"},Ut={class:"container"},Vt=(0,h._)("a",{class:"navbar-brand",href:"#"},"Exia",-1),Yt=(0,h._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",style:{width:"auto"}},[(0,h._)("span",{class:"navbar-toggler-icon"})],-1),At={class:"collapse navbar-collapse",id:"navbarNav"},Qt={class:"navbar-nav"},Kt={class:"nav-item"},Gt=(0,h.Uk)("Home"),Rt={class:"nav-item"},Xt=(0,h.Uk)("Settings"),te={class:"nav-item"},ee=(0,h.Uk)("About"),oe={class:"nav-item"},ne=(0,h.Uk)("Login");function se(t,e,o,n,s,a){const r=(0,h.up)("router-link");return(0,h.wg)(),(0,h.iD)("nav",Nt,[(0,h._)("div",Ut,[Vt,Yt,(0,h._)("div",At,[(0,h._)("ul",Qt,[(0,h._)("li",Kt,[(0,h.Wm)(r,{to:"/",class:"nav-link text-start active"},{default:(0,h.w5)((()=>[Gt])),_:1})]),(0,h._)("div",Rt,[(0,h.Wm)(r,{to:"/",class:"nav-link text-start"},{default:(0,h.w5)((()=>[Xt])),_:1})]),(0,h._)("div",te,[(0,h.Wm)(r,{to:"/",class:"nav-link text-start"},{default:(0,h.w5)((()=>[ee])),_:1})]),(0,h._)("div",oe,[(0,h.Wm)(r,{to:"/",class:"nav-link text-start"},{default:(0,h.w5)((()=>[ne])),_:1})])])])])])}var ae={name:"NavbarComponent"};const re=(0,B.Z)(ae,[["render",se]]);var ie=re;const le={class:"footer text-muted mt-auto py-3 bg-light"},ce={class:"text-center p-3"},ue=(0,h.Uk)(" Made with "),de=(0,h._)("i",{class:"fa fa-heart","aria-hidden":"true"},null,-1);function me(t,e,o,n,s,a){return(0,h.wg)(),(0,h.iD)("footer",le,[(0,h._)("div",ce,[ue,de,(0,h.Uk)(" by Valar and Zendo in "+(0,T.zw)(a.getYear),1)])])}var pe={name:"FooterComponent",data(){return{}},computed:{getYear(){return(new Date).getFullYear()}}};const ge=(0,B.Z)(pe,[["render",me]]);var be=ge,ve={name:"App",components:{Home:Lt,Navbar:ie,Footer:be}};const he=(0,B.Z)(ve,[["render",Ft]]);var fe=he;let _e=(0,n.ri)(fe);_e.use(s),_e.use(b),_e.use(Mt),_e.mount("#app")}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,a){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],s=t[u][1],a=t[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(i=!1,a<r&&(r=a));if(i){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,s,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,a,r=n[0],i=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(l)var u=l(o)}for(e&&e(n);c<r.length;c++)a=r[c],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(8497)}));n=o.O(n)})();
//# sourceMappingURL=app.b44d199f.js.map