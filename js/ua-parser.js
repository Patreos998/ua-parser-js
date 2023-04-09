/* UAParser.js v2.0.0-alpha.2
   Copyright © 2012-2023 Faisal Salman <f@faisalman.com>
   MIT License */
   (function(window,undefined){"use strict";var LIBVERSION="2.0.0-alpha.2",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded",USER_AGENT="user-agent",UA_MAX_LENGTH=350,BRANDS="brands",FULLVERLIST="fullVersionList",PLATFORM="platform",PLATFORMVER="platformVersion",BITNESS="bitness",CH_HEADER="sec-ch-ua",CH_HEADER_FULL_VER_LIST=CH_HEADER+"-full-version-list",CH_HEADER_ARCH=CH_HEADER+"-arch",CH_HEADER_BITNESS=CH_HEADER+"-bitness",CH_HEADER_MOBILE=CH_HEADER+"-mobile",CH_HEADER_MODEL=CH_HEADER+"-model",CH_HEADER_PLATFORM=CH_HEADER+"-platform",CH_HEADER_PLATFORM_VER=CH_HEADER_PLATFORM+"-version",CH_ALL_VALUES=["brands","fullVersionList",MOBILE,MODEL,"platform","platformVersion",ARCHITECTURE,"bitness"],UA_BROWSER="browser",UA_CPU="cpu",UA_DEVICE="device",UA_ENGINE="engine",UA_OS="os",UA_RESULT="result",AMAZON="Amazon",APPLE="Apple",ASUS="ASUS",BLACKBERRY="BlackBerry",GOOGLE="Google",HUAWEI="Huawei",LG="LG",MICROSOFT="Microsoft",MOTOROLA="Motorola",SAMSUNG="Samsung",SHARP="Sharp",SONY="Sony",XIAOMI="Xiaomi",ZEBRA="Zebra",PREFIX_MOBILE="Mobile ",SUFFIX_BROWSER=" Browser",CHROME="Chrome",EDGE="Edge",FIREFOX="Firefox",OPERA="Opera",FACEBOOK="Facebook",WINDOWS="Windows";var NAVIGATOR=typeof window!==UNDEF_TYPE&&window.navigator?window.navigator:undefined,NAVIGATOR_UADATA=NAVIGATOR&&NAVIGATOR.userAgentData?NAVIGATOR.userAgentData:undefined;var extend=function(regexes,extensions){var mergedRegexes={};for(var i in regexes){mergedRegexes[i]=extensions[i]&&extensions[i].length%2===0?extensions[i].concat(regexes[i]):regexes[i]}return mergedRegexes},enumerize=function(arr){var enums={};for(var i=0;i<arr.length;i++){enums[arr[i].toUpperCase()]=arr[i]}return enums},has=function(str1,str2){if(typeof str1===OBJ_TYPE&&str1.length>0){for(var i in str1){if(lowerize(str1[i])==lowerize(str2))return true}return false}return typeof str1===STR_TYPE?lowerize(str2).indexOf(lowerize(str1))!==-1:false},isExtensions=function(obj){for(var prop in obj){return/^(browser|cpu|device|engine|os)$/.test(prop)}},itemListToArray=function(header){if(!header)return undefined;var arr=[];var tokens=strip(/\\?\"/g,header).split(", ");for(var i=0;i<tokens.length;i++){var token=tokens[i].split(";v=");arr[i]={brand:token[0],version:token[1]}}return arr},lowerize=function(str){return typeof str===STR_TYPE?str.toLowerCase():str},majorize=function(version){return typeof version===STR_TYPE?strip(/[^\d\.]/g,version).split(".")[0]:undefined},setProps=function(arr){for(var i in arr){var propName=arr[i];if(typeof propName==OBJ_TYPE&&propName.length==2){this[propName[0]]=propName[1]}else{this[propName]=undefined}}return this},strip=function(pattern,str){return str.replace(pattern,EMPTY)},stripQuotes=function(val){return typeof val===STR_TYPE?strip(/\"/g,val):val},trim=function(str,len){if(typeof str===STR_TYPE){str=strip(/^\s\s*/,str);return typeof len===UNDEF_TYPE?str:str.substring(0,UA_MAX_LENGTH)}};var rgxMapper=function(ua,arrays){if(!ua||!arrays)return;var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){if(!regex[j]){break}matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length===2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length===3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length===4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},strMapper=function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(has(map[i],str)){return i===UNKNOWN?undefined:i}}return str};var windowsVersionMap={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"};var defaultRegexes={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[VERSION,[NAME,PREFIX_MOBILE+"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[VERSION,[NAME,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[NAME,VERSION],[/opios[\/ ]+([\w\.]+)/i],[VERSION,[NAME,OPERA+" Mini"]],[/\bopr\/([\w\.]+)/i],[VERSION,[NAME,OPERA]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[NAME,VERSION],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[VERSION,[NAME,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[VERSION,[NAME,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[VERSION,[NAME,"WeChat"]],[/konqueror\/([\w\.]+)/i],[VERSION,[NAME,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[VERSION,[NAME,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[VERSION,[NAME,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Secure"+SUFFIX_BROWSER],VERSION],[/\bfocus\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" Focus"]],[/\bopt\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[VERSION,[NAME,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[VERSION,[NAME,"Dolphin"]],[/coast\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI"+SUFFIX_BROWSER]],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,PREFIX_MOBILE+FIREFOX]],[/\bqihu|(qi?ho?o?|360)browser/i],[[NAME,"360"+SUFFIX_BROWSER]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[NAME,/(.+)/,"$1"+SUFFIX_BROWSER],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[NAME,VERSION],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[NAME],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[NAME,FACEBOOK],VERSION],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[NAME,VERSION],[/\bgsa\/([\w\.]+) .*safari\//i],[VERSION,[NAME,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[VERSION,[NAME,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[VERSION,[NAME,CHROME+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[NAME,CHROME+" WebView"],VERSION],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[VERSION,[NAME,"Android"+SUFFIX_BROWSER]],[/chrome\/([\w\.]+) mobile/i],[VERSION,[NAME,PREFIX_MOBILE+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[VERSION,[NAME,PREFIX_MOBILE+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[NAME,PREFIX_MOBILE+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[VERSION,NAME],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[NAME,PREFIX_MOBILE+FIREFOX],VERSION],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[NAME,"Netscape"],VERSION],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[VERSION,[NAME,FIREFOX+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[NAME,VERSION],[/(cobalt)\/([\w\.]+)/i],[NAME,[VERSION,/[^\d\.]+./,EMPTY]]],cpu:[[/\b(?:(amd|x|x86[-_]?|wow|win)64)\b/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i,/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[ARCHITECTURE,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[ARCHITECTURE,"armhf"]],[/windows (ce|mobile); ppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[ARCHITECTURE,/ower/,EMPTY,lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[ARCHITECTURE,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[MODEL,[VENDOR,SAMSUNG],[TYPE,TABLET]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[MODEL,[VENDOR,SAMSUNG],[TYPE,MOBILE]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[MODEL,[VENDOR,APPLE],[TYPE,MOBILE]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[MODEL,[VENDOR,APPLE],[TYPE,TABLET]],[/(macintosh);/i],[MODEL,[VENDOR,APPLE]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[MODEL,[VENDOR,SHARP],[TYPE,MOBILE]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[MODEL,[VENDOR,HUAWEI],[TYPE,TABLET]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[MODEL,[VENDOR,HUAWEI],[TYPE,MOBILE]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[MODEL,/_/g," "],[VENDOR,XIAOMI],[TYPE,MOBILE]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[MODEL,/_/g," "],[VENDOR,XIAOMI],[TYPE,TABLET]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[MODEL,[VENDOR,"OPPO"],[TYPE,MOBILE]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[MODEL,[VENDOR,"Vivo"],[TYPE,MOBILE]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[MODEL,[VENDOR,"Realme"],[TYPE,MOBILE]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[MODEL,[VENDOR,MOTOROLA],[TYPE,MOBILE]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[MODEL,[VENDOR,MOTOROLA],[TYPE,TABLET]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[MODEL,[VENDOR,LG],[TYPE,TABLET]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[MODEL,[VENDOR,LG],[TYPE,MOBILE]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[MODEL,/_/g," "],[VENDOR,"Nokia"],[TYPE,MOBILE]],[/(pixel c)\b/i],[MODEL,[VENDOR,GOOGLE],[TYPE,TABLET]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[MODEL,[VENDOR,GOOGLE],[TYPE,MOBILE]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,SONY],[TYPE,MOBILE]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[MODEL,"Xperia Tablet"],[VENDOR,SONY],[TYPE,TABLET]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[MODEL,[VENDOR,AMAZON],[TYPE,TABLET]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[MODEL,/(.+)/g,"Fire Phone $1"],[VENDOR,AMAZON],[TYPE,MOBILE]],[/(playbook);[-\w\),; ]+(rim)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[MODEL,[VENDOR,BLACKBERRY],[TYPE,MOBILE]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[MODEL,[VENDOR,ASUS],[TYPE,TABLET]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[MODEL,[VENDOR,ASUS],[TYPE,MOBILE]],[/(nexus 9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(surface duo)/i],[MODEL,[VENDOR,MICROSOFT],[TYPE,TABLET]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[MODEL,[VENDOR,"Fairphone"],[TYPE,MOBILE]],[/(shield[\w ]+) b/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,TABLET]],[/(sprint) (\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,MICROSOFT],[TYPE,MOBILE]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,TABLET]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,MOBILE]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,SAMSUNG],[TYPE,SMARTTV]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[VENDOR,LG],[TYPE,SMARTTV]],[/(apple) ?tv/i],[VENDOR,[MODEL,APPLE+" TV"],[TYPE,SMARTTV]],[/crkey/i],[[MODEL,CHROME+"cast"],[VENDOR,GOOGLE],[TYPE,SMARTTV]],[/droid.+aft(\w)( bui|\))/i],[MODEL,[VENDOR,AMAZON],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[MODEL,[VENDOR,SHARP],[TYPE,SMARTTV]],[/(bravia[\w ]+)( bui|\))/i],[MODEL,[VENDOR,SONY],[TYPE,SMARTTV]],[/(mitv-\w{5}) bui/i],[MODEL,[VENDOR,XIAOMI],[TYPE,SMARTTV]],[/Hbbtv.*(technisat) (.*);/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[VENDOR,trim],[MODEL,trim],[TYPE,SMARTTV]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[TYPE,SMARTTV]],[/(ouya)/i,/(nintendo) (\w+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/droid.+; (shield) bui/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation \w+)/i],[MODEL,[VENDOR,SONY],[TYPE,CONSOLE]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[MODEL,[VENDOR,MICROSOFT],[TYPE,CONSOLE]],[/((pebble))app/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[MODEL,[VENDOR,APPLE],[TYPE,WEARABLE]],[/droid.+; (glass) \d/i],[MODEL,[VENDOR,GOOGLE],[TYPE,WEARABLE]],[/droid.+; (wt63?0{2,3})\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,WEARABLE]],[/(quest( 2| pro)?)/i],[MODEL,[VENDOR,FACEBOOK],[TYPE,WEARABLE]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[VENDOR,[TYPE,EMBEDDED]],[/(aeobc)\b/i],[MODEL,[VENDOR,AMAZON],[TYPE,EMBEDDED]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[MODEL,[TYPE,MOBILE]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[MODEL,[TYPE,TABLET]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[TYPE,TABLET]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[TYPE,MOBILE]],[/(android[-\w\. ]{0,9});.+buil/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[VERSION,[NAME,EDGE+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[VERSION,NAME]],os:[[/microsoft (windows) (vista|xp)/i],[NAME,VERSION],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[NAME,[VERSION,strMapper,windowsVersionMap]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[NAME,WINDOWS],[VERSION,strMapper,windowsVersionMap]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[NAME,"macOS"],[VERSION,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[VERSION,NAME],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[NAME,VERSION],[/\(bb(10);/i],[VERSION,[NAME,BLACKBERRY]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[VERSION,[NAME,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[VERSION,[NAME,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[VERSION,[NAME,"watchOS"]],[/crkey\/([\d\.]+)/i],[VERSION,[NAME,CHROME+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[NAME,"Chrome OS"],VERSION],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[NAME,VERSION],[/(sunos) ?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[NAME,VERSION]]};var defaultProps=function(){var props={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}};setProps.call(props.init,[[UA_BROWSER,[NAME,VERSION,MAJOR]],[UA_CPU,[ARCHITECTURE]],[UA_DEVICE,[TYPE,MODEL,VENDOR]],[UA_ENGINE,[NAME,VERSION]],[UA_OS,[NAME,VERSION]]]);setProps.call(props.isIgnore,[[UA_BROWSER,[VERSION,MAJOR]],[UA_ENGINE,[VERSION]],[UA_OS,[VERSION]]]);setProps.call(props.isIgnoreRgx,[[UA_BROWSER,/ ?browser$/i],[UA_OS,/ ?os$/i]]);setProps.call(props.toString,[[UA_BROWSER,[NAME,VERSION]],[UA_CPU,[ARCHITECTURE]],[UA_DEVICE,[VENDOR,MODEL]],[UA_ENGINE,[NAME,VERSION]],[UA_OS,[NAME,VERSION]]]);return props}();var createIData=function(item,itemType){var init_props=defaultProps.init[itemType],is_ignoreProps=defaultProps.isIgnore[itemType]||0,is_ignoreRgx=defaultProps.isIgnoreRgx[itemType]||0,toString_props=defaultProps.toString[itemType]||0;function IData(){setProps.call(this,init_props)}IData.prototype.getItem=function(){return item};IData.prototype.withClientHints=function(){if(!NAVIGATOR_UADATA){return item.parseCH().get()}return NAVIGATOR_UADATA.getHighEntropyValues(CH_ALL_VALUES).then(function(res){return item.setCH(new UACHData(res,false)).parseCH().get()})};IData.prototype.withFeatureCheck=function(){return item.detectFeature().get()};if(itemType!=UA_RESULT){IData.prototype.is=function(strToCheck){var is=false;for(var i in this){if(this.hasOwnProperty(i)&&!has(is_ignoreProps,i)&&lowerize(is_ignoreRgx?strip(is_ignoreRgx,this[i]):this[i])==lowerize(is_ignoreRgx?strip(is_ignoreRgx,strToCheck):strToCheck)){is=true;if(strToCheck!=UNDEF_TYPE)break}else if(strToCheck==UNDEF_TYPE&&is){is=!is;break}}return is};IData.prototype.toString=function(){var str=EMPTY;for(var i in toString_props){if(typeof this[toString_props[i]]!==UNDEF_TYPE){str+=(str?" ":EMPTY)+this[toString_props[i]]}}return str||UNDEF_TYPE}}if(!NAVIGATOR_UADATA){IData.prototype.then=function(cb){var that=this;var IDataResolve=function(){for(var prop in that){if(that.hasOwnProperty(prop)){this[prop]=that[prop]}}};IDataResolve.prototype={is:IData.prototype.is,toString:IData.prototype.toString};var resolveData=new IDataResolve;cb(resolveData);return resolveData}}return new IData};function UACHData(uach,isHTTP_UACH){uach=uach||{};setProps.call(this,CH_ALL_VALUES);if(isHTTP_UACH){setProps.call(this,[[BRANDS,itemListToArray(uach[CH_HEADER])],[FULLVERLIST,itemListToArray(uach[CH_HEADER_FULL_VER_LIST])],[BRANDS,itemListToArray(uach[CH_HEADER])],[MOBILE,/\?1/.test(uach[CH_HEADER_MOBILE])],[MODEL,stripQuotes(uach[CH_HEADER_MODEL])],[PLATFORM,stripQuotes(uach[CH_HEADER_PLATFORM])],[PLATFORMVER,stripQuotes(uach[CH_HEADER_PLATFORM_VER])],[ARCHITECTURE,stripQuotes(uach[CH_HEADER_ARCH])],[BITNESS,stripQuotes(uach[CH_HEADER_BITNESS])]])}else{for(var prop in uach){if(this.hasOwnProperty(prop)&&typeof uach[prop]!==UNDEF_TYPE)this[prop]=uach[prop]}}}function UAItem(itemType,ua,rgxMap,uaCH){this.get=function(prop){if(!prop)return this.data;return this.data.hasOwnProperty(prop)?this.data[prop]:undefined};this.set=function(prop,val){this.data[prop]=val;return this};this.setCH=function(ch){this.uaCH=ch;return this};this.detectFeature=function(){if(NAVIGATOR&&NAVIGATOR.userAgent==this.ua){switch(this.itemType){case UA_BROWSER:if(NAVIGATOR.brave&&typeof NAVIGATOR.brave.isBrave==FUNC_TYPE){this.set(NAME,"Brave")}break;case UA_DEVICE:if(!this.get(TYPE)&&NAVIGATOR_UADATA&&NAVIGATOR_UADATA[MOBILE]){this.set(TYPE,MOBILE)}if(this.get(MODEL)=="Macintosh"&&NAVIGATOR&&typeof NAVIGATOR.standalone!==UNDEF_TYPE&&NAVIGATOR.maxTouchPoints&&NAVIGATOR.maxTouchPoints>2){this.set(MODEL,"iPad").set(TYPE,TABLET)}break;case UA_OS:if(!this.get(NAME)&&NAVIGATOR_UADATA&&NAVIGATOR_UADATA[PLATFORM]){this.set(NAME,NAVIGATOR_UADATA[PLATFORM])}break;case UA_RESULT:var data=this.data;var detect=function(itemType){return data[itemType].getItem().detectFeature().get()};this.set(UA_BROWSER,detect(UA_BROWSER)).set(UA_CPU,detect(UA_CPU)).set(UA_DEVICE,detect(UA_DEVICE)).set(UA_ENGINE,detect(UA_ENGINE)).set(UA_OS,detect(UA_OS))}}return this};this.parseUA=function(){if(this.itemType!=UA_RESULT){rgxMapper.call(this.data,this.ua,this.rgxMap)}if(this.itemType==UA_BROWSER){this.set(MAJOR,majorize(this.get(VERSION)))}return this};this.parseCH=function(){var ua=this.ua,uaCH=this.uaCH,rgxMap=this.rgxMap;switch(this.itemType){case UA_BROWSER:var brands=uaCH[FULLVERLIST]||uaCH[BRANDS];if(brands){for(var i in brands){var brandName=brands[i].brand,brandVersion=brands[i].version;if(!/not.a.brand/i.test(brandName)&&(i<1||/chromi/i.test(this.get(NAME)))){this.set(NAME,strip(GOOGLE+" ",brandName)).set(VERSION,brandVersion).set(MAJOR,majorize(brandVersion))}}}break;case UA_CPU:var archName=uaCH[ARCHITECTURE];if(archName){if(archName&&uaCH[BITNESS]=="64")archName+="64";rgxMapper.call(this.data,archName+";",rgxMap)}break;case UA_DEVICE:if(uaCH[MOBILE]){this.set(TYPE,MOBILE)}if(uaCH[MODEL]){this.set(MODEL,uaCH[MODEL])}break;case UA_OS:var osName=uaCH[PLATFORM];if(osName){var osVersion=uaCH[PLATFORMVER];if(osName==WINDOWS)osVersion=parseInt(majorize(osVersion),10)>=13?"11":"10";this.set(NAME,osName).set(VERSION,osVersion)}break;case UA_RESULT:var data=this.data;var parse=function(itemType){return data[itemType].getItem().setCH(uaCH).parseCH().get()};this.set(UA_BROWSER,parse(UA_BROWSER)).set(UA_CPU,parse(UA_CPU)).set(UA_DEVICE,parse(UA_DEVICE)).set(UA_ENGINE,parse(UA_ENGINE)).set(UA_OS,parse(UA_OS))}return this};setProps.call(this,[["itemType",itemType],["ua",ua],["uaCH",uaCH],["rgxMap",rgxMap],["data",createIData(this,itemType)]]);return this}function UAParser(ua,extensions,headers){if(typeof ua===OBJ_TYPE){if(isExtensions(ua)){if(typeof extensions===OBJ_TYPE){headers=extensions}extensions=ua}else{headers=ua;extensions=undefined}ua=undefined}else if(typeof ua===STR_TYPE&&!isExtensions(extensions)){headers=extensions;extensions=undefined}if(!(this instanceof UAParser)){return new UAParser(ua,extensions,headers).getResult()}var userAgent=ua||(NAVIGATOR&&NAVIGATOR.userAgent?NAVIGATOR.userAgent:headers&&headers[USER_AGENT]?headers[USER_AGENT]:EMPTY),HTTP_UACH=new UACHData(headers,true),regexMap=extensions?extend(defaultRegexes,extensions):defaultRegexes,createItemFunc=function(itemType){if(itemType==UA_RESULT){return function(){return new UAItem(itemType,userAgent,regexMap,HTTP_UACH).set("ua",userAgent).set(UA_BROWSER,this.getBrowser()).set(UA_CPU,this.getCPU()).set(UA_DEVICE,this.getDevice()).set(UA_ENGINE,this.getEngine()).set(UA_OS,this.getOS()).get()}}else{return function(){return new UAItem(itemType,userAgent,regexMap[itemType],HTTP_UACH).parseUA().get()}}};setProps.call(this,[["getBrowser",createItemFunc(UA_BROWSER)],["getCPU",createItemFunc(UA_CPU)],["getDevice",createItemFunc(UA_DEVICE)],["getEngine",createItemFunc(UA_ENGINE)],["getOS",createItemFunc(UA_OS)],["getResult",createItemFunc(UA_RESULT)],["getUA",function(){return userAgent}],["setUA",function(ua){userAgent=typeof ua===STR_TYPE&&ua.length>UA_MAX_LENGTH?trim(ua,UA_MAX_LENGTH):ua;return this}]]).setUA(userAgent);return this}UAParser.VERSION=LIBVERSION;UAParser.BROWSER=enumerize([NAME,VERSION,MAJOR]);UAParser.CPU=enumerize([ARCHITECTURE]);UAParser.DEVICE=enumerize([MODEL,VENDOR,TYPE,CONSOLE,MOBILE,SMARTTV,TABLET,WEARABLE,EMBEDDED]);UAParser.ENGINE=UAParser.OS=enumerize([NAME,VERSION]);if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if(typeof define===FUNC_TYPE&&define.amd){define(function(){return UAParser})}else if(typeof window!==UNDEF_TYPE){window.UAParser=UAParser}}var $=typeof window!==UNDEF_TYPE&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(ua){parser.setUA(ua);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);