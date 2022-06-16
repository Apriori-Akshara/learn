var OneTrustStub=function(e){"use strict";var t,o,i,n,a,r,s,l,c,p,u,d,m,h,g,f,A,b,v,y,C,I,L,S,T,D,R,B,w,_,E,P,U,G,O,k,F,V,N,x,H,M,j,z,K,q,W,J,Y,Q,X,Z,$,ee,te,oe,ie,ne,ae,re,se,le,ce,pe=new function(){this.optanonCookieName="OptanonConsent",this.optanonHtmlGroupData=[],this.optanonHostData=[],this.genVendorsData=[],this.vendorsServiceData=[],this.IABCookieValue="",this.oneTrustIABCookieName="eupubconsent",this.oneTrustIsIABCrossConsentEnableParam="isIABGlobal",this.isStubReady=!0,this.geolocationCookiesParam="geolocation",this.EUCOUNTRIES=["BE","BG","CZ","DK","DE","EE","IE","GR","ES","FR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","GB","HR","LI","NO","IS"],this.stubFileName="otSDKStub",this.DATAFILEATTRIBUTE="data-domain-script",this.bannerScriptName="otBannerSdk.js",this.mobileOnlineURL=[],this.isMigratedURL=!1,this.migratedCCTID="[[OldCCTID]]",this.migratedDomainId="[[NewDomainId]]",this.userLocation={country:"",state:""}};(o=t=t||{})[o.Unknown=0]="Unknown",o[o.BannerCloseButton=1]="BannerCloseButton",o[o.ConfirmChoiceButton=2]="ConfirmChoiceButton",o[o.AcceptAll=3]="AcceptAll",o[o.RejectAll=4]="RejectAll",o[o.BannerSaveSettings=5]="BannerSaveSettings",o[o.ContinueWithoutAcceptingButton=6]="ContinueWithoutAcceptingButton",(n=i=i||{})[n.Banner=1]="Banner",n[n.PC=2]="PC",n[n.API=3]="API",(r=a=a||{}).AcceptAll="AcceptAll",r.RejectAll="RejectAll",r.UpdateConsent="UpdateConsent",(l=s=s||{})[l.Purpose=1]="Purpose",l[l.SpecialFeature=2]="SpecialFeature",(p=c=c||{}).Legal="legal",p.UserFriendly="user_friendly",(d=u=u||{}).Top="top",d.Bottom="bottom",(h=m=m||{})[h.Banner=0]="Banner",h[h.PrefCenterHome=1]="PrefCenterHome",h[h.VendorList=2]="VendorList",h[h.CookieList=3]="CookieList",(f=g=g||{})[f.RightArrow=39]="RightArrow",f[f.LeftArrow=37]="LeftArrow",(b=A=A||{}).AfterTitle="AfterTitle",b.AfterDescription="AfterDescription",b.AfterDPD="AfterDPD",(y=v=v||{}).PlusMinus="Plusminus",y.Caret="Caret",y.NoAccordion="NoAccordion",(I=C=C||{}).Consent="Consent",I.LI="LI",I.AddtlConsent="AddtlConsent",(S=L=L||{}).Iab1Pub="eupubconsent",S.Iab2Pub="eupubconsent-v2",S.Iab1Eu="euconsent",S.Iab2Eu="euconsent-v2",(D=T=T||{})[D.Disabled=0]="Disabled",D[D.Consent=1]="Consent",D[D.LegInt=2]="LegInt",(B=R=R||{})[B["Banner - Allow All"]=1]="Banner - Allow All",B[B["Banner - Reject All"]=2]="Banner - Reject All",B[B["Banner - Close"]=3]="Banner - Close",B[B["Preference Center - Allow All"]=4]="Preference Center - Allow All",B[B["Preference Center - Reject All"]=5]="Preference Center - Reject All",B[B["Preference Center - Confirm"]=6]="Preference Center - Confirm",(_=w=w||{}).Active="1",_.InActive="0",(P=E=E||{}).Host="Host",P.GenVendor="GenVen",(G=U=U||{})[G.Host=1]="Host",G[G.GenVen=2]="GenVen",G[G.HostAndGenVen=3]="HostAndGenVen",(k=O=O||{})[k.minDays=1]="minDays",k[k.maxDays=30]="maxDays",k[k.maxYear=31536e3]="maxYear",k[k.maxSecToDays=86400]="maxSecToDays",(V=F=F||{})[V.RTL=0]="RTL",V[V.LTR=1]="LTR",(x=N=N||{})[x.GoogleVendor=1]="GoogleVendor",x[x.GeneralVendor=2]="GeneralVendor",(M=H=H||{})[M.Days=1]="Days",M[M.Weeks=7]="Weeks",M[M.Months=30]="Months",M[M.Years=365]="Years",(z=j=j||{}).Checkbox="Checkbox",z.Toggle="Toggle",(q=K=K||{}).SlideIn="Slide_In",q.FadeIn="Fade_In",q.RemoveAnimation="Remove_Animation",(J=W=W||{}).Link="Link",J.Icon="Icon",(Q=Y=Y||{}).consent="consent",Q.set="set",(Z=X=X||{}).update="update",Z.default="default",Z.ads_data_redaction="ads_data_redaction",(ee=$=$||{}).analytics_storage="analytics_storage",ee.ad_storage="ad_storage",ee.functionality_storage="functionality_storage",ee.personalization_storage="personalization_storage",ee.security_storage="security_storage",ee.region="region",ee.wait_for_update="wait_for_update",(oe=te=te||{}).granted="granted",oe.denied="denied",(ne=ie=ie||{})[ne.HostList=0]="HostList",ne[ne.IabVendors=1]="IabVendors",ne[ne.VendorServices=2]="VendorServices",(re=ae=ae||{}).OBJECT_TO_LI="ObjectToLI",re.LI_ACTIVE_IF_LEGAL_BASIS="LIActiveIfLegalBasis",(le=se=se||{}).cookies="cookies",le.vendors="vendors";var ue="geo",de="otpreview",me="PRODUCTION",he=((ce={})[H.Days]="PCenterVendorListLifespanDay",ce[H.Weeks]="LfSpnWk",ce[H.Months]="PCenterVendorListLifespanMonth",ce[H.Years]="LfSpnYr",ge.prototype.camelize=function(e){return e.split("-").map(function(e,t){return 0===t?e:e[0].toUpperCase()+e.slice(1)}).join("")},ge.prototype.strToObj=function(e){for(var t={},o=e.split(";").map(function(e){return e.trim()}),i=0,n=void 0;i<o.length;++i)if(/:/.test(o[i])){if(!(n=o[i].split(/:(.+)/))[1])return null;t[this.camelize(n[0])]=n[1].trim()}return t},ge);function ge(){var e=this;this.implementThePolyfill=function(){var n=e,a=Element.prototype.setAttribute;return Element.prototype.setAttribute=function(e,t){if("style"!==e.toLowerCase()&&a.apply(this,[e,t]),"style"===e.toLowerCase()){this.removeAttribute("style");var o=n.strToObj(t);for(var i in o)this.style[i]=o[i]}},!0}}function fe(e,t,o){void 0===o&&(o=!1);function i(e){if(!e)return null;var t=e.trim();return";"!==t.charAt(t.length-1)&&(t+=";"),t.trim()}var a=i(e.getAttribute("style")),r=i(t),n="";n=o&&a?function(){for(var e=a.split(";").concat(r.split(";")).filter(function(e){return 0!==e.length}),t="",o="",i=e.length-1;0<=i;i--){var n=e[i].substring(0,e[i].indexOf(":")).trim();t.indexOf(n)<0&&(t+=n,o+=e[i]+";")}return o}():r,e.setAttribute("style",n)}var Ae=(be.prototype.initConsentSDK=function(){this.initCustomEventPolyfill(),this.ensureHtmlGroupDataInitialised(),this.setStubScriptElement(),this.setOTDataLayer(),this.getParam(),this.fetchBannerSDKDependency(),this.captureNonce()},be.prototype.captureNonce=function(){this.nonce=pe.stubScriptElement.nonce||pe.stubScriptElement.getAttribute("nonce")||null},be.prototype.fetchBannerSDKDependency=function(){this.setDomainDataFileURL(),this.crossOrigin=pe.stubScriptElement.getAttribute("crossorigin")||null,this.otFetch(pe.bannerDataParentURL,this.getLocation.bind(this))},be.prototype.getLocation=function(e){var t=e&&e.TenantFeatures,o=window.location.hostname,i=e.Domain,n=e.BulkDomainCheckUrl;if(t&&t.CookieV2BulkDomainManagement&&o!==i&&e.ScriptType===me){var a={location:pe.storageBaseURL.replace(/^https?:\/\//,""),domainId:this.domainId,url:o};this.otFetch(n,this.handleBulkDomainMgmt,!1,a,e)}if(t&&t.CookieV2CSP&&this.nonce&&(this.setAttributePolyfillIsActive=!0,(new he).implementThePolyfill()),!e.RuleSet[0].Type)return this.iabTypeAdded=!1,window.__cmp=this.executeCmpApi,window.__tcfapi=this.executeTcfApi,this.intializeIabStub(),this.addBannerSDKScript(e);var r=window;if(r.OneTrust&&r.OneTrust.geolocationResponse){var s=r.OneTrust.geolocationResponse;this.setGeoLocation(s.countryCode,s.stateCode),this.addBannerSDKScript(e)}else{var l=this.readCookieParam(pe.optanonCookieName,pe.geolocationCookiesParam);if(l||e.SkipGeolocation){var c=l.split(";")[0],p=l.split(";")[1];this.setGeoLocation(c,p),this.addBannerSDKScript(e)}else this.getGeoLocation(e)}},be.prototype.handleBulkDomainMgmt=function(e,t){e.isValid&&(t.Domain=window.location.hostname)},be.prototype.getGeolocationURL=function(e){e.TenantFeatures;var t=""+pe.stubScriptElement.getAttribute("src").split(pe.stubFileName)[0]+e.Version;if(new RegExp("^file://","i").test(t)&&e.MobileSDK){var o="/"+e.GeolocationUrl.replace(/^(http|https):\/\//,"").split("/").slice(1).join("/")+".js";return pe.storageBaseURL+o}return e.GeolocationUrl},be.prototype.geoLocationJsonCallback=function(e,t){t&&this.setGeoLocation(t.country,t.state),this.addBannerSDKScript(e)},be.prototype.getGeoLocation=function(e){var t=this.getGeolocationURL(e);this.otFetch(t,this.geoLocationJsonCallback.bind(this,e),!0)},be.prototype.setOTDataLayer=function(){var e="data-dLayer-ignore",t=pe.stubScriptElement.hasAttribute(e),o=pe.stubScriptElement.getAttribute(e),i=t&&"true"===o||t&&""===o;this.otDataLayer={ignore:i,name:pe.stubScriptElement.getAttribute("data-dLayer-name")||"dataLayer"}},be.prototype.setGeoLocation=function(e,t){void 0===t&&(t=""),pe.userLocation={country:e,state:t}},be.prototype.otFetch=function(e,t,o,i,n){if(void 0===o&&(o=!1),void 0===i&&(i=null),new RegExp("^file://","i").test(e))this.otFetchOfflineFile(e,t);else{pe.mobileOnlineURL.push(e);var a=new XMLHttpRequest;if(a.onload=function(){n?t(JSON.parse(this.responseText),n):t(JSON.parse(this.responseText))},a.onerror=function(){t()},a.open("GET",e),o&&a.setRequestHeader("accept","application/json"),i)for(var r in i)a.setRequestHeader(r,i[r]);a.send()}},be.prototype.otFetchOfflineFile=function(e,t){var o=(e=e.replace(".json",".js")).split("/"),i=o[o.length-1].split(".js")[0];this.jsonp(e,function(){t(window[i])})},be.prototype.jsonp=function(e,t){var o=document.createElement("script");o.setAttribute("src",e),this.nonce&&o.setAttribute("nonce",this.nonce),o.async=!0,o.type="text/javascript",this.crossOrigin&&o.setAttribute("crossorigin",this.crossOrigin),document.getElementsByTagName("head")[0].appendChild(o),new RegExp("^file://","i").test(e)||pe.mobileOnlineURL.push(e),t&&(o.onload=o.onerror=function(){t()})},be.prototype.getRegionSet=function(e){var t,o,i,n=pe.userLocation,a=e.RuleSet.filter(function(e){return!0===e.Default});if(!n.country&&!n.state)return a&&0<a.length?a[0]:null;for(var r=n.state.toLowerCase(),s=n.country.toLowerCase(),l=0;l<e.RuleSet.length;l++)if(!0===e.RuleSet[l].Global)i=e.RuleSet[l];else{var c=e.RuleSet[l].States;if(c[s]&&0<=c[s].indexOf(r)){o=e.RuleSet[l];break}0<=e.RuleSet[l].Countries.indexOf(s)&&(t=e.RuleSet[l])}return o||t||i},be.prototype.ensureHtmlGroupDataInitialised=function(){this.initializeIABData(),this.initializeGroupData(),this.initializeHostData(),this.initializeGenVenData()},be.prototype.initializeGroupData=function(){var e=this.readCookieParam(pe.optanonCookieName,"groups");e&&(pe.optanonHtmlGroupData=this.deserialiseStringToArray(e))},be.prototype.initializeHostData=function(){var e=this.readCookieParam(pe.optanonCookieName,"hosts");e&&(pe.optanonHostData=this.deserialiseStringToArray(e))},be.prototype.initializeGenVenData=function(){var e=this.readCookieParam(pe.optanonCookieName,"genVendors");e&&(pe.genVendorsData=this.deserialiseStringToArray(e))},be.prototype.initializeIABData=function(){this.validateIABGDPRApplied(),this.validateIABGlobalScope()},be.prototype.validateIABGlobalScope=function(){var e=this.readCookieParam(pe.optanonCookieName,pe.oneTrustIsIABCrossConsentEnableParam);e?"true"===e?(pe.hasIABGlobalScope=!0,pe.isStubReady=!1):(pe.hasIABGlobalScope=!1,pe.IABCookieValue=this.getCookie(pe.oneTrustIABCookieName)):pe.isStubReady=!1},be.prototype.validateIABGDPRApplied=function(){var e=this.readCookieParam(pe.optanonCookieName,pe.geolocationCookiesParam).split(";")[0];e?this.isBoolean(e)?pe.oneTrustIABgdprAppliesGlobally="true"===e:pe.oneTrustIABgdprAppliesGlobally=0<=pe.EUCOUNTRIES.indexOf(e):pe.isStubReady=!1},be.prototype.isBoolean=function(e){return"true"===e||"false"===e},be.prototype.readCookieParam=function(e,t){var o,i,n,a,r=this.getCookie(e);if(r){for(i={},n=r.split("&"),o=0;o<n.length;o+=1)a=n[o].split("="),i[decodeURIComponent(a[0])]=decodeURIComponent(a[1]).replace(/\+/g," ");return t&&i[t]?i[t]:t&&!i[t]?"":i}return""},be.prototype.getCookie=function(e){if(this.isAmp){var t=JSON.parse(window.localStorage.getItem(this.domainId))||{};if(t)return t[e]||null}var o,i,n=e+"=",a=document.cookie.split(";");for(o=0;o<a.length;o+=1){for(i=a[o];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(n))return i.substring(n.length,i.length)}return null},be.prototype.updateGtmMacros=function(){var e,t=[],o=pe.optanonHtmlGroupData.length;for(e=0;e<o;e++)this.endsWith(pe.optanonHtmlGroupData[e],":1")&&t.push(pe.optanonHtmlGroupData[e].replace(":1",""));for(o=pe.optanonHostData.length,e=0;e<o;e++)this.endsWith(pe.optanonHostData[e],":1")&&t.push(pe.optanonHostData[e].replace(":1",""));for(o=pe.genVendorsData.length,e=0;e<o;e++)this.endsWith(pe.genVendorsData[e],":1")&&t.push(pe.genVendorsData[e].replace(":1",""));for(o=pe.vendorsServiceData.length,e=0;e<o;e++)this.endsWith(pe.vendorsServiceData[e],":1")&&t.push(pe.vendorsServiceData[e].replace(":1",""));var i=","+this.serialiseArrayToString(t)+",";window.OnetrustActiveGroups=i,window.OptanonActiveGroups=i;var n=window;this.otDataLayer.ignore||void 0===n[this.otDataLayer.name]?this.otDataLayer.ignore||(n[this.otDataLayer.name]=[{event:"OneTrustLoaded",OnetrustActiveGroups:i},{event:"OptanonLoaded",OptanonActiveGroups:i}]):n[this.otDataLayer.name].constructor===Array&&(n[this.otDataLayer.name].push({OnetrustActiveGroups:i}),n[this.otDataLayer.name].push({OptanonActiveGroups:i}));var a,r=new CustomEvent("consent.onetrust",{detail:t});!this.otDataLayer.ignore&&t.length&&(n[this.otDataLayer.name].constructor===Array&&n[this.otDataLayer.name].push({event:"OneTrustGroupsUpdated",OnetrustActiveGroups:i}),a=new CustomEvent("OneTrustGroupsUpdated",{detail:t})),setTimeout(function(){window.dispatchEvent(r),a&&window.dispatchEvent(a)})},be.prototype.deserialiseStringToArray=function(e){return e?e.split(","):[]},be.prototype.endsWith=function(e,t){return-1!==e.indexOf(t,e.length-t.length)},be.prototype.serialiseArrayToString=function(e){return e.toString()},be.prototype.setStubScriptElement=function(){pe.stubScriptElement=document.querySelector("script[src*='"+pe.stubFileName+"']");var e=pe.stubScriptElement&&0<=pe.stubScriptElement.getAttribute("src").indexOf("did=");pe.stubScriptElement&&pe.stubScriptElement.hasAttribute(pe.DATAFILEATTRIBUTE)?this.domainId=pe.stubScriptElement.getAttribute(pe.DATAFILEATTRIBUTE).trim():e?this.domainId=pe.stubScriptElement.getAttribute("src").split("did=")[1]:pe.stubScriptElement||(pe.stubScriptElement=document.querySelector("script[src*='"+pe.migratedCCTID+"']"),pe.stubScriptElement&&(pe.isMigratedURL=!0,this.domainId=pe.migratedDomainId.trim()))},be.prototype.setDomainDataFileURL=function(){var e=pe.stubScriptElement.getAttribute("src"),t=-1<e.indexOf("/consent");e&&(pe.isMigratedURL?pe.storageBaseURL=e.split("/consent/"+pe.migratedCCTID)[0]:pe.storageBaseURL=t?e.split("/consent")[0]:e.split("/scripttemplates/"+pe.stubFileName)[0]),this.storageBaseURL=pe.storageBaseURL,this.isPreview&&-1===this.domainId.indexOf("test")?this.domainId=this.domainId+"-test":this.isPreview=!1,pe.bannerBaseDataURL=pe.storageBaseURL&&pe.storageBaseURL+"/consent/"+this.domainId,pe.bannerDataParentURL=pe.bannerBaseDataURL+"/"+this.domainId+".json"},be.prototype.initCustomEventPolyfill=function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}e.prototype=window.Event.prototype,window.CustomEvent=e},be.prototype.removeTcf=function(){delete window.__tcfapi;var e=document.querySelectorAll("iframe[name='__tcfapiLocator']")[0];e&&e.parentElement.removeChild(e)},be.prototype.getParamForIE=function(){return{get:function(e){var t=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?null:decodeURI(t[1])||""}}},be.prototype.getParam=function(){window.document.documentMode||!window.URLSearchParams?this.urlParams=this.getParamForIE():this.urlParams=new URLSearchParams(window.location.search);var e="true"===this.urlParams.get("otreset"),t="true"===this.urlParams.get("otpreview");this.geoFromUrl=(this.urlParams.get("otgeo")||"").toLowerCase();var o=this.readCookieParam(de,"expiry"),i=this.readCookieParam(de,ue);this.isReset=e||o&&new Date(o)<new Date,this.isPreview=!this.isReset&&(t||o&&new Date(o)>new Date),this.setGeoParam(this.geoFromUrl||i)},be.prototype.setGeoParam=function(e){if(e){var t=window;t.OneTrust||(t.OneTrust={});var o=e.split(",");t.OneTrust.geolocationResponse={countryCode:o[0],stateCode:o[1]}}},be);function be(){var c=this;this.iabType=null,this.iabTypeAdded=!0,this.crossOrigin=null,this.isAmp=!1,this.domainId="",this.isReset=!1,this.isPreview=!1,this.geoFromUrl="",this.nonce="",this.setAttributePolyfillIsActive=!1,this.storageBaseURL="",this.addBannerSDKScript=function(e){var t=c.getRegionSet(e);t.GCEnable||(c.updateGtmMacros(),c.gtmUpdated=!0),c.iabTypeAdded&&("IAB"!==t.Type&&"IAB2"!==t.Type||(c.iabType=t.Type,c.intializeIabStub()),"IAB2"!==t.Type&&c.removeTcf());var o=pe.stubScriptElement.cloneNode(!0),i="";i=e.UseSDKRefactor?(pe.isMigratedURL&&(o.src=pe.storageBaseURL+"/scripttemplates/new/scripttemplates/"+pe.stubFileName+".js"),pe.storageBaseURL+"/scripttemplates/new/scripttemplates/"+e.Version+"/"+pe.bannerScriptName):"5.11.0"===e.Version?(pe.isMigratedURL&&(o.src=pe.storageBaseURL+"/scripttemplates/old/scripttemplates/"+pe.stubFileName+".js"),pe.storageBaseURL+"/scripttemplates/old/scripttemplates/5.11.0/"+pe.bannerScriptName):(pe.isMigratedURL&&(o.src=pe.storageBaseURL+"/scripttemplates/"+pe.stubFileName+".js"),pe.storageBaseURL+"/scripttemplates/"+e.Version+"/"+pe.bannerScriptName);["charset","data-language","data-document-language","data-domain-script","crossorigin","data-ignore-ga"].forEach(function(e){pe.stubScriptElement.getAttribute(e)&&o.setAttribute(e,pe.stubScriptElement.getAttribute(e))}),c.isAmp=!!pe.stubScriptElement.getAttribute("amp"),window.otStubData={bannerBaseDataURL:pe.bannerBaseDataURL,crossOrigin:c.crossOrigin,domainData:e,domainId:c.domainId,geoFromUrl:c.geoFromUrl,isAmp:c.isAmp,isPreview:c.isPreview,isReset:c.isReset,mobileOnlineURL:pe.mobileOnlineURL,nonce:c.nonce,otDataLayer:c.otDataLayer,regionRule:t,setAttributePolyfillIsActive:c.setAttributePolyfillIsActive,storageBaseURL:c.storageBaseURL,stubElement:o,urlParams:c.urlParams,userLocation:pe.userLocation,gtmUpdated:c.gtmUpdated},c.jsonp(i,null)},this.intializeIabStub=function(){var e=window;c.iabTypeAdded?("IAB"===c.iabType?void 0===e.__cmp&&(window.__cmp=c.executeCmpApi):void 0===e.__tcfapi&&(window.__tcfapi=c.executeTcfApi),c.addIabFrame()):c.addBackwardIabFrame(),e.receiveOTMessage=c.receiveIabMessage,(e.attachEvent||window.addEventListener)("message",e.receiveOTMessage,!1)},this.addIabFrame=function(){var e=window,t="IAB"===c.iabType?"__cmpLocator":"__tcfapiLocator";!e.frames[t]&&(e.document.body?c.addLocator(t,"CMP"):setTimeout(c.addIabFrame,5))},this.addBackwardIabFrame=function(){var e=window,t="__cmpLocator";!e.frames[t]&&(e.document.body?c.addLocator(t,"CMP"):setTimeout(c.addIabFrame,5));var o="__tcfapiLocator";!e.frames[o]&&(e.document.body?c.addLocator(o,"TCF"):setTimeout(c.addIabFrame,5))},this.addLocator=function(e,t){var o=window,i=o.document.createElement("iframe");fe(i,"display: none;",!0),i.name=e,i.setAttribute("title",t+" Locator"),o.document.body.appendChild(i)},this.receiveIabMessage=function(i){var n="string"==typeof i.data,e={};try{e=n?JSON.parse(i.data):i.data}catch(e){}if(e.__cmpCall&&"IAB"===c.iabType){var a=e.__cmpCall.callId,r=e.__cmpCall.command,t=e.__cmpCall.parameter;c.executeCmpApi(r,t,function(e,t){var o={__cmpReturn:{returnValue:e,success:t,callId:a,command:r}};i.source.postMessage(n?JSON.stringify(o):o,i.origin)})}else e.__cmpCall&&"IAB2"===c.iabType&&console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");if(e.__tcfapiCall&&"IAB2"===c.iabType){var s=e.__tcfapiCall.callId,l=e.__tcfapiCall.command,o=(t=e.__tcfapiCall.parameter,e.__tcfapiCall.version);c.executeTcfApi(l,t,function(e,t){var o={__tcfapiReturn:{returnValue:e,success:t,callId:s,command:l}};i&&i.source&&i.source.postMessage&&i.source.postMessage(n?JSON.stringify(o):o,"*")},o)}else e.__tcfapiCall&&"IAB"===c.iabType&&console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")},this.executeCmpApi=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];c.iabType="IAB";var o=e[0],i=e[1],n=e[2];if("function"==typeof n&&o)if(pe.isStubReady&&pe.IABCookieValue)switch(o){case"ping":c.getPingRequest(n,!0);break;case"getConsentData":c.getConsentDataRequest(n);break;default:c.addToQueue(o,i,n)}else c.addToQueue(o,i,n)},this.executeTcfApi=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(c.iabType="IAB2",!e.length)return window.__tcfapi.a||[];var o=e[0],i=e[1],n=e[2],a=e[3];"function"==typeof n&&o&&("ping"===o?c.getPingRequest(n):c.addToQueue(o,i,n,a))},this.addToQueue=function(e,t,o,i){var n=window,a="IAB"===c.iabType?"__cmp":"__tcfapi";n[a].a=n[a].a||[],n[a].a.push([e,t,o,i])},this.getPingRequest=function(e,t){if(void 0===t&&(t=!1),e){var o={},i=!1;"IAB"===c.iabType?(o={gdprAppliesGlobally:pe.oneTrustIABgdprAppliesGlobally,cmpLoaded:t},i=!0):"IAB2"===c.iabType&&(o={gdprApplies:pe.oneTrustIABgdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"stub",apiVersion:"2.0",cmpVersion:void 0,cmpId:void 0,gvlVersion:void 0,tcfPolicyVersion:void 0},i=!0),e(o,i)}},this.getConsentDataRequest=function(e){e&&pe.IABCookieValue&&e({gdprApplies:pe.oneTrustIABgdprAppliesGlobally,hasGlobalScope:pe.hasIABGlobalScope,consentData:pe.IABCookieValue},!0)},this.initConsentSDK()}var ve=new Ae;return e.OtSDKStub=Ae,e.otSdkStub=ve,e}({});