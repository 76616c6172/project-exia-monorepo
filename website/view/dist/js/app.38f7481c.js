(function(){"use strict";var t={4934:function(t,e,s){var o={};s.r(o);var a=s(9242),r=s(7154),n=s(7139),i=s(6265),l=s.n(i);const c="https://exia.art/api/0",u={jobs:[],selectedJob:[],selectedJobs:[],jobStatus:{jobRange:{},jobsCompleted:"",jobsQueued:"",newestJobId:"",newestCompletedJobs:[]},isOldestJobID:!1,isInitialLoad:!1},d={getIsInitialLoadStatus:t=>t.isInitialLoad,getJobs:t=>t.jobs,getSelectedJob:t=>t.selectedJob,getSelectedJobs:t=>t.selectedJobs,getJobStatus:t=>t.jobStatus,getJobsExist:t=>t.jobsExist},b={async fetchJobStatus({commit:t},e){try{return await l().get(`${c}/status`).then((s=>{if(200==s.status){const o=s.data,a=Number(o.newest_jobid);switch(e){case"initial":t("SET_JOBSTATUS",{jobRange:{jobx:a-9>=1?a-9:1,joby:a},jobsCompleted:o.Jobs_completed,jobsQueued:o.Jobs_queued,newestJobId:a,newestCompletedJobs:[...o.Newest_completed_jobs]});break;case"add":t("SET_JOBSTATUS",{jobRange:{jobx:u.jobStatus.jobRange.jobx>1&&u.jobStatus.jobRange.jobx-10>0?u.jobStatus.jobRange.jobx-10:u.jobStatus.jobRange.jobx=1,joby:u.jobStatus.jobRange.joby>1?u.jobStatus.jobRange.joby-10:u.jobStatus.jobRange.joby=1},jobsCompleted:o.Jobs_completed,jobsQueued:o.Jobs_queued,newestJobId:a,newestCompletedJobs:[...o.Newest_completed_jobs]});break;default:console.log("default"),t("SET_JOBSTATUS",{jobRange:{jobx:u.jobStatus.jobRange.jobx,joby:u.jobStatus.jobRange.joby},jobsCompleted:o.Jobs_completed,jobsQueued:o.Jobs_queued,newestJobId:a,newestCompletedJobs:[...o.Newest_completed_jobs]});break}}}))}catch(s){console.log(s)}},async fetchJobs({commit:t,dispatch:e},s){switch(s){case"initial":if(!u.isOldestJobID)try{return l().get(`${c}/jobs?jobx=${u.jobStatus.jobRange.jobx}&joby=${u.jobStatus.jobRange.joby}`).then((e=>{if(200==e.status){const s=e.data.sort((t=>t.id)).reverse();t("FETCH_JOBS",s),1==u.jobStatus.jobRange.jobx&&(u.isOldestJobID=!0)}}))}catch(o){console.log(o)}break;default:e("fetchJobStatus",s).then((()=>{if(!u.isOldestJobID)try{return l().get(`${c}/jobs?jobx=${u.jobStatus.jobRange.jobx}&joby=${u.jobStatus.jobRange.joby}`).then((e=>{if(200==e.status){const s=e.data.sort((t=>t.id)).reverse();t("FETCH_JOBS",s),1==u.jobStatus.jobRange.jobx&&(u.isOldestJobID=!0)}}))}catch(o){console.log(o)}}));break}},async sendNewJob({commit:t,dispatch:e},s){try{return await l().post(`${c}/jobs`,s).then((s=>{if(200==s.status){const a=s.data.jobid;try{return l().get(`${c}/jobs?jobx=${a}&joby=${a}`).then((s=>{if(200==s.status){const o=s.data[0];t("SEND_NEW_JOB",o),e("fetchJobStatus")}}))}catch(o){console.log(o)}}}))}catch(o){console.log(o)}},getSelectedJob({commit:t},e){const s=this.getters.getJobs.filter((t=>t.jobid===e))[0];s.img=`${c}/img?${e}`,t("FETCH_SELECTED_JOB",s)},getSelectedJobs({commit:t},{jobx:e,joby:s,jobIds:o}){try{return l().get(`${c}/jobs?jobx=${e}&joby=${s}`).then((e=>{if(200==e.status){const s=e.data.filter((t=>o.indexOf(t.jobid)>-1));t("FETCH_SELECTED_JOBS",s)}}))}catch(a){console.log(a)}},async getSelectedImg(t,e){let s=e?"jpg":"png",o=e?"thumbnail":"full",a=e?`${c}/img?type=${o}?jobid=${e}`:`${u.selectedJob.img_path.split("?jobid")[0]}?type=${o}?jobid=${u.selectedJob.jobid}`;try{return await l().get(`${a}`,{responseType:"blob"}).then((t=>{if(200==t.status)return new Promise((e=>{const o=t.data;let a=new Image,r=new Blob([o],{type:`image/${s}`}),n=URL.createObjectURL(r);a.src=n,e(a.src)}))}))}catch(r){console.log(r)}}},m={SET_JOBSTATUS(t,e){t.jobStatus=e,0==t.isInitialLoad&&(t.isInitialLoad=!0)},FETCH_JOBS(t,e){t.jobs.push(...e)},FETCH_SELECTED_JOB(t,e){t.selectedJob=e},FETCH_SELECTED_JOBS(t,e){t.selectedJobs=e},SEND_NEW_JOB(t,e){t.jobs.unshift(e)}},p={state:u,mutations:m,actions:b,getters:d};var g=p,h=(0,n.MT)({modules:{api:g}}),j=s(678),v=s(3396);const w={class:"container-fluid"},f={class:"row justify-content-center"},S={class:"col-lg-10 col-sm-12"},y={class:"mt-5"},_={class:"row justify-content-center"},x={class:"col-lg-10 col-sm-12"},C={class:"row justify-content-center pb-5"},J={class:"col-lg-10 col-sm-12"},I={class:"row justify-content-center"},k={class:"col-lg-10 col-sm-12"},T={class:"row justify-content-center pb-5 pt-5"},O={class:"col-lg-10 col-sm-12"},L={class:"row justify-content-center bg-light pt-5 pb-5"},E={class:"col-lg-10 col-sm-12"},D={class:"row justify-content-center pt-5 pb-5"},$={class:"col-lg-10 col-sm-12"};function P(t,e,s,o,a,r){const n=(0,v.up)("Navbar"),i=(0,v.up)("Typing"),l=(0,v.up)("Instructions"),c=(0,v.up)("ImageNewestRendersComponent"),u=(0,v.up)("StatsComponent"),d=(0,v.up)("TerminalWrapper"),b=(0,v.up)("Image"),m=(0,v.up)("Footer");return(0,v.wg)(),(0,v.iD)(v.HY,null,[(0,v._)("div",w,[(0,v._)("div",f,[(0,v._)("div",S,[(0,v.Wm)(n)])]),(0,v._)("div",y,[(0,v._)("div",_,[(0,v._)("div",x,[(0,v.Wm)(i,{onSetCursor:e[0]||(e[0]=t=>r.setCursor())})])]),(0,v._)("div",C,[(0,v._)("div",J,[(0,v.Wm)(l)])]),(0,v._)("div",I,[(0,v._)("div",k,[a.jobStatus.newestCompletedJobs?((0,v.wg)(),(0,v.j4)(c,{key:0,newestJobIds:a.jobStatus.newestCompletedJobs},null,8,["newestJobIds"])):(0,v.kq)("",!0)])]),(0,v._)("div",T,[(0,v._)("div",O,[a.jobStatus?((0,v.wg)(),(0,v.j4)(u,{key:0,jobStatus:a.jobStatus},null,8,["jobStatus"])):(0,v.kq)("",!0)])]),(0,v._)("div",L,[(0,v._)("div",E,[(0,v.Wm)(d,{showCursor:a.showCursor},null,8,["showCursor"])])]),(0,v._)("div",D,[(0,v._)("div",$,[(0,v.Wm)(b)])])])]),(0,v.Wm)(m)],64)}const R={class:"navbar navbar-expand-lg navbar-light"},q={class:"container-fluid p-0"},H=(0,v._)("a",{class:"navbar-brand text-start",href:"#"},"Exia",-1),U=(0,v._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",style:{width:"auto"}},[(0,v._)("span",{class:"navbar-toggler-icon"})],-1),W={class:"collapse navbar-collapse",id:"navbarNav"},F={class:"navbar-nav me-auto mb-2 mb-lg-0"},B={class:"nav-item"},z=(0,v.Uk)("Home"),N={class:"nav-item"},A=(0,v.Uk)("Settings"),Z={class:"nav-item"},Q=(0,v.Uk)("About"),M={class:"nav-item"},Y=(0,v.Uk)("Login");function V(t,e,s,o,a,r){const n=(0,v.up)("router-link");return(0,v.wg)(),(0,v.iD)("nav",R,[(0,v._)("div",q,[H,U,(0,v._)("div",W,[(0,v._)("ul",F,[(0,v._)("li",B,[(0,v.Wm)(n,{to:"/",class:"nav-link text-start active"},{default:(0,v.w5)((()=>[z])),_:1})]),(0,v._)("div",N,[(0,v.Wm)(n,{to:"/",class:"nav-link text-start"},{default:(0,v.w5)((()=>[A])),_:1})]),(0,v._)("div",Z,[(0,v.Wm)(n,{to:"/",class:"nav-link text-start"},{default:(0,v.w5)((()=>[Q])),_:1})]),(0,v._)("div",M,[(0,v.Wm)(n,{to:"/",class:"nav-link text-start"},{default:(0,v.w5)((()=>[Y])),_:1})])])])])])}var K={name:"NavbarComponent"},G=s(89);const X=(0,G.Z)(K,[["render",V]]);var tt=X,et=s(2268);const st={class:"footer text-muted mt-auto py-3 bg-light"},ot={class:"text-center p-3"},at=(0,v.Uk)(" Made with "),rt=(0,v._)("i",{class:"fa fa-heart","aria-hidden":"true"},null,-1);function nt(t,e,s,o,a,r){return(0,v.wg)(),(0,v.iD)("footer",st,[(0,v._)("div",ot,[at,rt,(0,v.Uk)(" by Valar and Zendo in "+(0,et.zw)(r.getYear),1)])])}var it={name:"FooterComponent",data(){return{}},computed:{getYear(){return(new Date).getFullYear()}}};const lt=(0,G.Z)(it,[["render",nt]]);var ct=lt;const ut=(0,v._)("h1",{class:"text-start display-5"},"High-resolution images generated by Ai",-1),dt={key:0},bt={class:"text-start fs-5"},mt={key:0,class:"blink"},pt={key:1},gt={class:"text-start fs-5"};function ht(t,e,s,o,a,r){return(0,v.wg)(),(0,v.iD)("div",null,[ut,r.isPageLoaded?((0,v.wg)(),(0,v.iD)("div",pt,[(0,v._)("p",gt,(0,et.zw)(a.textInput),1)])):((0,v.wg)(),(0,v.iD)("div",dt,[(0,v._)("p",bt,[(0,v.Uk)((0,et.zw)(r.getText)+" ",1),r.showCursor?((0,v.wg)(),(0,v.iD)("span",mt,"|")):(0,v.kq)("",!0)])]))])}var jt={name:"TypingComponent",data(){return{i:0,textOutput:"",textInput:"We leverage an AI Image generating technique called CLIP-Guided Diffusion to allow you to create compelling and beautiful images from just text inputs. Made with love by Zen and Valar!"}},methods:{delay(t){return new Promise((e=>setTimeout(e,t)))},async setText(){this.i<=this.textInput.length?(this.textOutput+=this.textInput.charAt(this.i),await this.delay(20),this.i++,this.setText()):sessionStorage.setItem(this.$options.name,"typingComponent")}},computed:{getText(){return this.textOutput},showCursor(){return this.i==this.textOutput.length+1&&this.$emit("set-cursor"),this.i<=this.textOutput.length},isPageLoaded(){return"typingComponent"==sessionStorage.getItem(this.$options.name)}},mounted(){this.setText()}};const vt=(0,G.Z)(jt,[["render",ht]]);var wt=vt;const ft={class:"row"},St=["onClick","src"];function yt(t,e,s,o,a,r){return(0,v.wg)(),(0,v.iD)("div",null,[(0,v._)("div",ft,[((0,v.wg)(!0),(0,v.iD)(v.HY,null,(0,v.Ko)(a.imgArray,((t,e)=>((0,v.wg)(),(0,v.iD)("div",{key:e,class:"col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-1 col-xs-1"},[(0,v._)("img",{onClick:e=>r.onClickSetSelected(t.jobId),src:t.imgURL,class:"img-fluid img-thumbnail",alt:""},null,8,St),(0,v._)("p",null,(0,et.zw)(t.prompt),1)])))),128))])])}var _t={name:"ImageNewestRendersComponent",data(){return{imgArray:[]}},props:["newestJobIds"],methods:{createImgObjectURL(t){return new Promise((e=>{this.$store.dispatch("getSelectedImg",t).then((e=>{this.imgArray.push({jobid:t,imgURL:e})})).finally((()=>{e()}))}))},async getSelectedJobsObject(t){await this.createImgObjectURL(t).then((()=>{if(3==this.imgArray.length){let t=Object.values(this.newestJobIds),e=Math.max(...t),s=Math.min(...t);this.$store.dispatch("getSelectedJobs",{jobx:s,joby:e,jobIds:t}).then((()=>{this.$store.getters.getSelectedJobs.forEach((t=>{this.imgArray.forEach((e=>{e.jobid==t.jobid&&(e.prompt=t.prompt)}))}))}))}}))},onClickSetSelected(){}},computed:{getIsInitialLoadStatus(){return this.$store.getters.getIsInitialLoadStatus}},async mounted(){0==this.imgArray.length&&this.newestJobIds.map(((t,e)=>e<=3?this.getSelectedJobsObject(t):""))}};const xt=(0,G.Z)(_t,[["render",yt],["__scopeId","data-v-19a1b588"]]);var Ct=xt;const Jt={class:"imgContainer"},It={class:"imgRendered"},kt={key:0,class:"loader"},Tt=["src"],Ot={class:"imgTextbox"},Lt={class:"p-5 imgTextboxContent"},Et=(0,v._)("hr",null,null,-1),Dt={class:"fs-4"},$t=(0,v._)("hr",null,null,-1),Pt=(0,v._)("i",{class:"fa-solid fa-link"},null,-1),Rt=["href"];function qt(t,e,s,o,r,n){return(0,v.wg)(),(0,v.iD)("div",null,[(0,v._)("div",Jt,[(0,v._)("div",It,[r.isLoading?((0,v.wg)(),(0,v.iD)("div",kt,"Loading...")):(0,v.kq)("",!0),(0,v._)("img",{src:r.imgObjectURL,class:"img-fluid img-thumbnail",alt:""},null,8,Tt)]),(0,v.wy)((0,v._)("div",Ot,[(0,v._)("div",Lt,[Et,(0,v._)("p",Dt,(0,et.zw)(t.getSelectedJob.prompt),1),$t,(0,v._)("span",null,[Pt,(0,v._)("a",{href:r.imgObjectURL,class:"text-white",target:"_blank"}," Goto Image",8,Rt)])])],512),[[a.F8,0!==Object.keys(t.getSelectedJob).length]])])])}var Ht={name:"ImageComponent",data(){return{imgObjectURL:"https://via.placeholder.com/1920x1024.png?text=This%20is%20zen%27s%20placeholder",isLoading:!1}},methods:{createImgObjectURL(){this.isLoading=!0,this.imgObjectURL="https://via.placeholder.com/1920x1024.png?text=Loading%20image",this.$store.dispatch("getSelectedImg").then((t=>{this.imgObjectURL=t})).finally((()=>{this.isLoading=!1}))}},computed:{...(0,n.Se)(["getSelectedJob"])},watch:{getSelectedJob:{handler(){this.createImgObjectURL()}}}};const Ut=(0,G.Z)(Ht,[["render",qt]]);var Wt=Ut;const Ft={class:"terminalWrapper rounded-3 shadow border border-4 border-white"},Bt={class:"terminalWrapperBg p-4 rounded-3"},zt=(0,v._)("div",{class:"ui-container"},[(0,v._)("div",{class:"ui-circle ui-circle-red rounded-pill"}),(0,v._)("div",{class:"ui-circle ui-circle-yellow rounded-pill"}),(0,v._)("div",{class:"ui-circle ui-circle-green rounded-pill"})],-1);function Nt(t,e,s,o,a,r){const n=(0,v.up)("ItemList"),i=(0,v.up)("Prompt");return(0,v.wg)(),(0,v.iD)("div",Ft,[(0,v._)("div",Bt,[zt,(0,v.Wm)(n),(0,v.Wm)(i,{showCursor:s.showCursor},null,8,["showCursor"])])])}const At=t=>((0,v.dD)("data-v-e4ece376"),t=t(),(0,v.Cn)(),t),Zt=["onSubmit"],Qt={class:"col-12 mb-3 mb-lg-0"},Mt={class:"input-group"},Yt=At((()=>(0,v._)("i",{class:"fa fa-arrow-right","aria-hidden":"true"},null,-1))),Vt={class:"w-100",ref:"inputPrompt"},Kt={class:"input-group"},Gt={key:0,class:"input-group"},Xt={class:"alertbox text-start text-white"};function te(t,e,s,o,a,r){const n=(0,v.up)("Field"),i=(0,v.up)("ErrorMessage"),l=(0,v.up)("VeeForm");return(0,v.wg)(),(0,v.j4)(l,{as:"div",ref:"promptForm"},{default:(0,v.w5)((({handleSubmit:t})=>[(0,v._)("form",{onSubmit:e=>t(e,r.onSubmit),name:"promptForm"},[(0,v._)("div",Qt,[(0,v._)("div",Mt,[Yt,(0,v._)("div",Vt,[(0,v.Wm)(n,{as:"input",rules:"required|minLength:1|maxLength:600|noWhitespace",name:"vPrompt",type:"input",class:"form-control bg-transparent text-white"})],512)]),(0,v._)("div",Kt,[(0,v.Wm)(i,{name:"vPrompt",as:"div",class:"alertbox text-start text-white",role:"alert"})]),0!==a.promptStatus.length?((0,v.wg)(),(0,v.iD)("div",Gt,[(0,v._)("div",Xt,(0,et.zw)(a.promptStatus),1)])):(0,v.kq)("",!0)])],40,Zt)])),_:1},512)}var ee=s(5708);(0,ee.aH)("required",(t=>!(!t||!t.length)||"Required field")),(0,ee.aH)("minLength",((t,[e])=>!(t.length<e)||`Minimum length: ${e}`)),(0,ee.aH)("maxLength",((t,[e])=>!(t.length>e)||`Maximum length: ${e}`)),(0,ee.aH)("selectValue",(t=>void 0!=t||"Select value from dropdown")),(0,ee.aH)("email",(t=>{const e=new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);return!!e.test(t)||"Email address"})),(0,ee.aH)("noWhitespace",(t=>{const e=new RegExp(/([\S]+)/g);return!!e.test(t)||"No whitespaces"})),(0,ee.aH)("commaSeperated",(t=>{const e=new RegExp(/^([\S^,]+(,+)\S){1}/g);return!!e.test(t)||"Format: prompt1,prompt2,... (2 prompts min)!"})),(0,ee.aH)("confirmed",((t,[e])=>t===e||"Passwords do not match"));var se={name:"PromptComponent",components:{VeeForm:ee.l0,Field:ee.gN,ErrorMessage:ee.Bc},data(){return{promptStatus:"",Validation:o}},props:{showCursor:{type:Boolean,required:!0}},methods:{onSubmit(t,{resetForm:e}){e(),this.promptStatus="Processing prompt...",this.$store.dispatch("sendNewJob",{prompt:t.vPrompt}).then((()=>{this.promptStatus="Prompt added"})).finally((()=>{this.promptStatus=""})).catch((t=>{this.promptStatus=t}))}},computed:{setAutofocus(){return this.showCursor?this.$refs.inputPrompt.firstChild.focus():""}},watch:{showCursor:{handler(){setTimeout((()=>{this.setAutofocus}),500)}}}};const oe=(0,G.Z)(se,[["render",te],["__scopeId","data-v-e4ece376"]]);var ae=oe;const re={class:"row"},ne={class:"col-9 mb-3 mb-lg-0 pt-3 pb-3"},ie={id:"ul-list",class:"list-group-flush",style:{"padding-left":"0 !important"}};function le(t,e,s,o,r,n){const i=(0,v.up)("Item");return(0,v.wg)(),(0,v.iD)("div",null,[(0,v._)("div",re,[(0,v._)("div",ne,[(0,v._)("form",null,[(0,v.wy)((0,v._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.searchQuery=t),type:"search",class:"form-control bg-transparent text-white",placeholder:"Search...","aria-label":"Search"},null,512),[[a.nr,r.searchQuery]])])])]),(0,v._)("ul",ie,[((0,v.wg)(!0),(0,v.iD)(v.HY,null,(0,v.Ko)(n.getFilteredJobs,((t,e)=>((0,v.wg)(),(0,v.j4)(i,{key:e,job:t},null,8,["job"])))),128))])])}const ce=t=>((0,v.dD)("data-v-6ea213af"),t=t(),(0,v.Cn)(),t),ue=["disabled"],de={class:"row"},be={class:"col-lg-10 col-md-10"},me=ce((()=>(0,v._)("span",{class:"prompt-prefix"},"# / ",-1))),pe={class:"col-lg-2 col-md-2 cursor-default"},ge={class:"progress mt-1"},he=["aria-valuenow"];function je(t,e,s,o,a,r){return(0,v.wg)(),(0,v.iD)("li",{disabled:"completed"!=s.job.job_status,class:(0,et.C_)([["completed"!=s.job.job_status?"disabled":""],"list-group-item list-group-item-action"])},[(0,v._)("div",de,[(0,v._)("div",be,[(0,v._)("p",{onClick:e[0]||(e[0]=t=>r.onClickSetSelected(t)),class:"text-start text-light"},[me,(0,v.Uk)((0,et.zw)(s.job.prompt),1)])]),(0,v._)("div",pe,[(0,v._)("div",{class:(0,et.C_)([r.getJobBorderClass,"badge border text-secondary"])},(0,et.zw)(s.job.job_status),3),(0,v._)("div",ge,[(0,v._)("div",{style:(0,et.j5)(`width: ${r.getProgressbarPercent}%;`),class:"progress-bar progress-bar-animated",role:"progressbar","aria-valuenow":r.getProgressbarPercent,"aria-valuemin":"0","aria-valuemax":"100"},(0,et.zw)(`${r.getProgressbarPercent}%`),13,he)])])])],10,ue)}var ve={name:"ItemComponent",props:{job:{type:Object,required:!0,iteration_max:{type:String,required:!0},iteration_status:{type:String,required:!0},job_status:{type:String,required:!0},job_id:{type:String,required:!0},prompt:{type:String,required:!0}}},methods:{onClickSetSelected(t){let e=t.target.parentElement.parentElement.parentElement,s=document.getElementsByClassName("list-group-flush")[0].children,o="item-group-active";for(let a=0;a<s.length;a++)s[a].classList.remove(o);e.classList.add(o),"completed"!=this.job.job_status&&t.preventDefault(),this.$store.dispatch("getSelectedJob",this.job.jobid)}},computed:{getSelectedJob(){return this.$store.getters.getSelectedJob},getJobBorderClass(){let t;switch(this.job.job_status){case"completed":t="border-success";break;case"processing":t="border-info";break;case"queued":t="border-warning";break;default:break}return t},getProgressbarPercent(){return this.job.iteration_status/this.job.iteration_max*100}}};const we=(0,G.Z)(ve,[["render",je],["__scopeId","data-v-6ea213af"]]);var fe=we,Se={name:"StatusListComponent",components:{Item:fe},data(){return{searchQuery:""}},methods:{getFoundJobs(t){return t.filter((t=>-1!=t.prompt.toLowerCase().indexOf(this.searchQuery.toLowerCase())))},handleScroll(t){let e=t.srcElement,s=Math.ceil(e.scrollTop),o=e.scrollHeight-e.offsetHeight;s!=o&&s!=o+1||this.$store.dispatch("fetchJobs","add")}},computed:{getFilteredJobs(){let t=this.getJobs;return this.getFoundJobs(t)},...(0,n.Se)(["getJobs","getIsInitialLoadStatus"])},async mounted(){document.getElementById("ul-list").addEventListener("scroll",this.handleScroll)},unmounted(){document.getElementById("ul-list").addEventListener("scroll",this.handleScroll)},watch:{getIsInitialLoadStatus:{handler(){this.$store.dispatch("fetchJobs","initial")}}}};const ye=(0,G.Z)(Se,[["render",le],["__scopeId","data-v-5e9446b5"]]);var _e=ye,xe={name:"TerminalWrapperComponent",components:{Prompt:ae,ItemList:_e},props:{showCursor:{type:Boolean,required:!0}}};const Ce=(0,G.Z)(xe,[["render",Nt]]);var Je=Ce;const Ie={class:"text-start"},ke={key:0,class:"mt-5"},Te={class:"row"},Oe={class:"col-sm-1 col-lg-1 mt-2 mb-3"},Le={class:"text-start"},Ee={class:"col-sm-11 col-lg-5 mt-2 mb-3"},De={class:"text-start"},$e={key:0,class:"d-lg-block d-sm-none d-xs-none"};function Pe(t,e,s,o,a,r){return(0,v.wg)(),(0,v.iD)("div",null,[(0,v._)("div",Ie,[(0,v._)("button",{onClick:e[0]||(e[0]=t=>this.visible=!this.visible),type:"button",class:"btn btn-outline-secondary"}," How to ")]),a.visible?((0,v.wg)(),(0,v.iD)("div",ke,[(0,v._)("div",Te,[((0,v.wg)(!0),(0,v.iD)(v.HY,null,(0,v.Ko)(a.instructions,((t,e)=>((0,v.wg)(),(0,v.iD)(v.HY,{key:e},[(0,v._)("div",Oe,[(0,v._)("h4",Le,"0"+(0,et.zw)(e+1),1)]),(0,v._)("div",Ee,[(0,v._)("h5",De,(0,et.zw)(t.content),1)]),1==e||3==e?((0,v.wg)(),(0,v.iD)("hr",$e)):(0,v.kq)("",!0)],64)))),128))])])):(0,v.kq)("",!0)])}var Re={name:"InstructionsComponent",data(){return{instructions:[{content:"Enter search term"},{content:"Click generate or hit enter"},{content:"Wait the image to be finished"},{content:"Enjoy and feel energized"}],visible:!1}}};const qe=(0,G.Z)(Re,[["render",Pe]]);var He=qe;const Ue={class:"row"},We={class:"col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-1 col-xs-1"},Fe={key:0,class:"display-3 text-start"},Be={key:1,class:"display-3 text-start"},ze={key:2,class:"text-start"},Ne={class:"col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-1 col-xs-1"},Ae={key:0,class:"display-3 text-start"},Ze={key:1,class:"display-3 text-start"},Qe={key:2,class:"text-start"},Me={class:"col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-1 col-xs-1"},Ye={key:0,class:"display-3 text-start"},Ve={key:1,class:"display-3 text-start"},Ke={key:2,class:"text-start"};function Ge(t,e,s,o,a,r){return(0,v.wg)(),(0,v.iD)("div",null,[(0,v._)("div",Ue,[(0,v._)("div",We,[r.isPageLoaded?((0,v.wg)(),(0,v.iD)("h2",Be,(0,et.zw)(s.jobStatus.newestJobId),1)):((0,v.wg)(),(0,v.iD)("h2",Fe,(0,et.zw)(r.getText("counterTotal")),1)),s.jobStatus.newestJobId?((0,v.wg)(),(0,v.iD)("p",ze,"Images total")):(0,v.kq)("",!0)]),(0,v._)("div",Ne,[r.isPageLoaded?((0,v.wg)(),(0,v.iD)("h2",Ze,(0,et.zw)(s.jobStatus.jobsQueued),1)):((0,v.wg)(),(0,v.iD)("h2",Ae,(0,et.zw)(r.getText("counterQueued")),1)),s.jobStatus.jobsQueued?((0,v.wg)(),(0,v.iD)("p",Qe,"Images queued")):(0,v.kq)("",!0)]),(0,v._)("div",Me,[r.isPageLoaded?((0,v.wg)(),(0,v.iD)("h2",Ve,(0,et.zw)(s.jobStatus.jobsCompleted),1)):((0,v.wg)(),(0,v.iD)("h2",Ye,(0,et.zw)(r.getText("counterCompleted")),1)),s.jobStatus.jobsCompleted?((0,v.wg)(),(0,v.iD)("p",Ke," Images completed ")):(0,v.kq)("",!0)])])])}var Xe={name:"StatsComponent",data(){return{counterObj:{counterTotal:0,counterQueued:0,counterCompleted:0},jobStatusProperty:""}},props:{jobStatus:{type:Object,required:!0,jobRange:{type:Object,required:!0},jobsCompleted:{type:String,required:!0},jobsQueued:{type:String,required:!0},newestJobId:{type:String,required:!0},newestCompletedJobs:{type:Array,required:!0}}},methods:{getText(t){return this.counterObj[t]},delay(t){return new Promise((e=>setTimeout(e,t)))},async setText(t){if(t!==this.jobStatus[this.jobStatusProperty])switch(t){case"counterTotal":this.jobStatusProperty="newestJobId";break;case"counterQueued":this.jobStatusProperty="jobsQueued";break;case"counterCompleted":this.jobStatusProperty="jobsCompleted";break;default:break}this.counterObj[t]<this.jobStatus[this.jobStatusProperty]?(await this.delay(1),this.counterObj[t]++,this.setText(t)):sessionStorage.setItem(this.$options.name,"statsComponent")}},computed:{isPageLoaded(){return"statsComponent"==sessionStorage.getItem(this.$options.name)}},watch:{jobStatus:{handler(){this.setText("counterTotal"),this.setText("counterQueued"),this.setText("counterCompleted")}}}};const ts=(0,G.Z)(Xe,[["render",Ge]]);var es=ts,ss={name:"HomeComponent",components:{Navbar:tt,Footer:ct,Typing:wt,Instructions:He,Image:Wt,TerminalWrapper:Je,StatsComponent:es,ImageNewestRendersComponent:Ct},props:{msg:String},data(){return{showCursor:!1,jobStatus:{}}},methods:{setCursor(){this.showCursor=!0}},computed:{...(0,n.Se)(["getJobStatus"])},async mounted(){this.$store.dispatch("fetchJobStatus","initial").then((()=>{this.jobStatus=this.getJobStatus}))},watch:{getJobStatus:{handler(){this.jobStatus=this.getJobStatus}}}};const os=(0,G.Z)(ss,[["render",P]]);var as=os;const rs=[{path:"/",name:"Home",component:as}],ns=(0,j.p7)({history:(0,j.PO)("/"),routes:rs});var is=ns;const ls={class:"appContainer"},cs={class:"row"},us={class:"col-12"};function ds(t,e,s,o,a,r){const n=(0,v.up)("Home");return(0,v.wg)(),(0,v.iD)("div",ls,[(0,v._)("div",cs,[(0,v._)("div",us,[(0,v.Wm)(n)])])])}var bs={name:"App",components:{Home:as}};const ms=(0,G.Z)(bs,[["render",ds]]);var ps=ms;let gs=(0,a.ri)(ps);gs.use(r),gs.use(h),gs.use(is),gs.mount("#app")}},e={};function s(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,o,a,r){if(!o){var n=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],r=t[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&r||n>=r)&&Object.keys(s.O).every((function(t){return s.O[t](o[l])}))?o.splice(l--,1):(i=!1,r<n&&(n=r));if(i){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,a,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,r,n=o[0],i=o[1],l=o[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(a in i)s.o(i,a)&&(s.m[a]=i[a]);if(l)var u=l(s)}for(e&&e(o);c<n.length;c++)r=n[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(u)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(4934)}));o=s.O(o)})();
//# sourceMappingURL=app.38f7481c.js.map