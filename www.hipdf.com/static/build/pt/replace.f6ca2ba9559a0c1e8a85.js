!function(e){function t(t){for(var n,a,l=t[0],o=t[1],h=t[2],f=0,c=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&c.push(r[a][0]),r[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);c.length;)c.shift()();return s.push.apply(s,h||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,l=1;l<i.length;l++){var o=i[l];0!==r[o]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},r={36:0,33:0},s=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="../static/build/pt/index.html";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var d=o;s.push([559,0]),i()}({0:function(e,t){e.exports=MutiLang},1:function(e,t){e.exports=Vue},2:function(e,t){e.exports=Cookie},5:function(e,t){e.exports=base64},559:function(e,t,i){"use strict";var n,r=i(1),s=(n=r)&&n.__esModule?n:{default:n},a=i(4);i(8);var l=i(22),o=i(6),h=i(15);var d=i(0);new s.default({el:"#app",mixins:[a.publicMixin,o.uploadMixin,h.singlePdfMixin,a.filterMixin,a.trackMixin,a.shareDocumentMixin],data:function(){return{filePages:[],referBox:{offsetLeft:0,offsetTop:0,width:1220,height:100,paddRight:20,paddBottom:40},searchVal:"",searchTotalNum:0,replaceVal:"",showResult:!1,replaceError:"",pdfFileText:null,pdfFileContent:null}},watch:{step:function(e,t){e===a.common.steps.optionSet?document.getElementById("footer").style.display="none":document.getElementById("footer").style.display="block"}},filters:{results:function(e){return e?1===e?d.lang.replaceOne:a.common.replacePlaceVar(d.lang.replaceTotal,1,e+""):d.lang.replaceNone}},created:function(){this.specialPdfHandle=this.initPdfView,this.pdfInitRender=this.pdfStartRender,this.trackfunc="Replace Text";document.getElementById("pageId").value},methods:{initPdfView:function(e){var t=this,i=this,n=new l.PdfView({upload_id:e.upload_id,doc:e.file,file_id:e.file_id,fileUrl:e.fileUrl,password:e.password,isRenderHtml:!0,getPageInfo:function(e){var t=e.page,n=e.width,r=e.height;1===t&&i.calcReferData(),i.filePages[t-1].width=n,i.filePages[t-1].height=r},readPdfSuccess:function(i){t.initFilePages(i),t.getPdfPages(i,e,n)},renderFail:function(i){t.readPDfFailed(e,i)}})},pdfStartRender:function(e){var t=document.getElementById("referBox").offsetWidth,i=t>1200?1200:t;this.isSafari?setTimeout((function(){e.initRender({width:i,startPage:1})}),500):e.initRender({width:i,startPage:1})},resetVal:function(){this.filePages=[],this.searchVal="",this.searchTotalNum=0,this.replaceVal="",this.showResult=!1,this.pdfFileText=null,this.pdfFileContent=null},initFilePages:function(e){var t=this;if(this.resetVal(),e||(e=this.file.total_page),e>0)for(var i=0;i<e;i++)this.filePages.push({page:i+1,src:"",width:0,height:0,origialWidth:0,origialHeight:0});this.step=a.common.steps.optionSet,setTimeout((function(){t.$refs.searchInput.focus()}),100)},calcReferData:function(){var e=void 0;window.innerHeight?e=window.innerHeight:document.body&&document.body.clientHeight?e=document.body.clientHeight:document.documentElement&&document.documentElement.clientHeight&&document.documentElement.clientWidth&&(e=document.documentElement.clientHeight),this.referBox.offsetTop=this.$refs.referBox.offsetTop,this.referBox.height=e-this.referBox.offsetTop-this.referBox.paddBottom},getDivText:function(e){if(!(this.pdfFileText||e.length<=0)){for(var t={},i=[],n=0,r=e.length;n<r;n++){var s=e[n].getElementsByTagName("div");t[n+1]=[];for(var a="",l=0,o=s.length;l<o;l++){var h=s[l].getAttribute("style"),d=s[l].textContent||e[n].innerText,f=d.length;l===o-1?i.push(a):(a+=d,t[n+1].push({style:h,text:d,textLen:f}))}}this.pdfFileText=t,this.pdfFileContent=i}},renderHighLightText:function(e,t){for(var i in t)for(var n=e[i-1],r=0,s=t[i].length;r<s;r++){var a=t[i][r],l=this.pdfFileText[i][a.divIndex],o=l.text.substr(a.indexAt,a.len),h=l.text.substring(0,a.indexAt)+'<span class="highLight">'+o+"</span>"+l.text.substr(a.indexAt+a.len);n.children[a.divIndex].innerHTML=h}},getMatchDivIndex:function(e,t){for(var i=[],n=this.pdfFileText[e],r=this.searchVal.length,s=0,a=t.length;s<a;s++)for(var l=t[s],o=0,h=n.length;o<h;o++){if(l<n[o].textLen){if(l+r<=n[o].textLen)i.push({divIndex:o,indexAt:l,len:r});else{var d=n[o].textLen-l,f=r-d;i.push({divIndex:o,indexAt:l,len:d});for(var c=o+1;c<h;c++){if((f-=n[c].textLen)<=0){i.push({divIndex:c,indexAt:0,len:n[c].textLen+f});break}i.push({divIndex:c,indexAt:0,len:n[c].textLen})}}break}l-=n[o].textLen}return i},getPlaceholderCount:function(e,t){for(var i=[],n=0,r=t.length;n<=e.length;){var s=e.indexOf(t,n);if(-1===s)break;n=s+r,i.push(s)}return i},findText:function(){this.replaceError&&(this.replaceError="");var e=document.getElementsByClassName("textLayer");this.pdfFileText||this.getDivText(e);for(var t={},i=0,n=0,r=e.length;n<r;n++){var s=e[n].innerHTML;if(s=(s=s.replace(new RegExp('<span class="highLight">',"g"),"")).replace(new RegExp("</span>","g"),""),e[n].innerHTML=s,0!=this.searchVal.length){var a=this.getPlaceholderCount(this.pdfFileContent[n],this.searchVal);if(a.length>0){i+=a.length;var l=this.getMatchDivIndex(n+1,a);l.length>0&&(t[n+1]=l)}}}this.renderHighLightText(e,t),this.showResult=!0,this.searchTotalNum=i},replace:function(){var e=this;if(this.searchVal)if(this.replaceVal){this.replaceError&&(this.replaceError="");var t=void 0;t=this.password?{file_id:this.file.file_id,find_text:this.searchVal,replace_text:this.replaceVal,passwd:this.password}:{file_id:this.file.file_id,find_text:this.searchVal,replace_text:this.replaceVal,passwd:""},this.step=a.common.steps.processing,a.https.post(a.https.httpUrls.interfaceUrl+a.https.httpUrls.replaceText,t,(function(t){e.startOperateCallBack(t),e.filePages=[]}),this.handleErrorFail)}else this.replaceError=d.lang.replaceError;else this.replaceError=d.lang.replaceSearchError},replaceOver:function(e){1===e.result?(this.file.downloadUrl=a.https.httpUrls.interfaceUrl+"/middle/document/download-doc?task_id="+e.data.task_id,this.file.target_name=e.data.output_file_name,this.step=a.common.steps.success,this.filePages=[]):4204===e.status?this.step=a.common.steps.encrypt:(this.error=a.https.handleError(e.status),this.step=a.common.steps.fail)},shareFile:function(e){this.shareFilePublic(e,this.getConvertData.task_id)},changeShareType:function(e){this.shareType=e,"link"!=e||this.linkMessage||this.shareFilePublic(2,this.getConvertData.task_id)}}})}});