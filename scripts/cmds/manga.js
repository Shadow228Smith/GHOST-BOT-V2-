const _0x42e61c=_0x1074;(function(_0x4b5f1e,_0x4741ac){const _0x562f0f=_0x1074,_0x494bb5=_0x4b5f1e();while(!![]){try{const _0x3c350b=-parseInt(_0x562f0f(0x109))/0x1*(-parseInt(_0x562f0f(0x115))/0x2)+parseInt(_0x562f0f(0x12a))/0x3*(parseInt(_0x562f0f(0xe9))/0x4)+-parseInt(_0x562f0f(0x107))/0x5+-parseInt(_0x562f0f(0x137))/0x6+-parseInt(_0x562f0f(0x10e))/0x7+parseInt(_0x562f0f(0x12b))/0x8+parseInt(_0x562f0f(0x124))/0x9;if(_0x3c350b===_0x4741ac)break;else _0x494bb5['push'](_0x494bb5['shift']());}catch(_0x2291c7){_0x494bb5['push'](_0x494bb5['shift']());}}}(_0xcdc6,0xec2d1));const axios=require('axios'),fs=require('fs-extra');module[_0x42e61c(0x122)]={'config':{'name':_0x42e61c(0x123),'aliases':[_0x42e61c(0x123)],'version':_0x42e61c(0x131),'author':_0x42e61c(0x102),'countDown':0x5,'role':0x0,'longDescription':{'vi':'','en':'Read\x20Manga'},'category':_0x42e61c(0x105),'guide':{'vi':'','en':_0x42e61c(0xe4)}},'onStart':async function({api:_0x28d5a9,commandName:_0x3b508c,event:_0x92d5f3}){const _0x25e25f=_0x42e61c;return _0x28d5a9[_0x25e25f(0x10b)](_0x25e25f(0xee),_0x92d5f3['threadID'],(_0xb98a75,_0x53b03a)=>{const _0x961b38=_0x25e25f;global['GoatBot'][_0x961b38(0x12f)][_0x961b38(0x119)](_0x53b03a[_0x961b38(0xf2)],{'commandName':_0x3b508c,'author':_0x92d5f3['senderID'],'messageID':_0x53b03a[_0x961b38(0xf2)],'type':_0x961b38(0x126),'pagetype':![],'page':0x1,'searchStatus':!![]});},_0x92d5f3['messageID']);},'onReply':async function({Reply:_0x2bdd30,api:_0x474ccd,event:_0x447882,args:_0x30a795}){const _0x32c772=_0x42e61c;try{const {commandName:_0xa0c114,author:_0x52c72d,messageID:_0x47ed56,type:_0x147282}=_0x2bdd30;if(_0x447882[_0x32c772(0x130)]!=_0x52c72d)return;if(_0x147282==_0x32c772(0x126)){let _0x5a16cc=_0x2bdd30[_0x32c772(0x103)];if(_0x2bdd30[_0x32c772(0x12c)]==!![]){if(_0x30a795[0x0][_0x32c772(0x125)]()===_0x32c772(0x103)&&_0x30a795[0x1]>0x0)_0x5a16cc=_0x30a795[0x1];else{if(_0x30a795[0x0][_0x32c772(0x125)]()===_0x32c772(0x116)&&_0x30a795[0x1]>0x0){const _0x41e1ab=_0x30a795[0x1]-0x1,_0x2e318c=_0x2bdd30[_0x32c772(0x11e)][_0x41e1ab];if(_0x2e318c){_0x474ccd[_0x32c772(0xf8)]('⏳',_0x447882[_0x32c772(0xf2)],()=>{},!![]);const _0x1efa10=await axios[_0x32c772(0x11f)]('https://api.consumet.org/manga/mangadex/info/'+_0x2e318c['ID']),_0x1cae99=_0x1efa10[_0x32c772(0xf6)],_0xe6267e=_0x32c772(0xf3)+_0x1cae99[_0x32c772(0x101)]+_0x32c772(0x133)+_0x1cae99[_0x32c772(0x117)]['en']+'\x0a\x0aGenres:\x20'+_0x1cae99[_0x32c772(0x11d)][_0x32c772(0x128)](',\x20')+_0x32c772(0x112)+_0x1cae99[_0x32c772(0xf7)][_0x32c772(0x128)](',\x20')+_0x32c772(0xe3)+_0x1cae99[_0x32c772(0x11a)]+'\x0aRelease\x20Date:\x20'+_0x1cae99[_0x32c772(0x11c)]+_0x32c772(0xf9)+_0x1cae99['chapters']['length']+_0x32c772(0x111),_0x8ea568=await global[_0x32c772(0x120)]['getStreamFromURL'](_0x1cae99[_0x32c772(0x104)]);return _0x474ccd['sendMessage']({'body':_0xe6267e,'attachment':_0x8ea568},_0x447882[_0x32c772(0xe7)],(_0x2a9e0b,_0x3e8ccd)=>{const _0xf5828c=_0x32c772;_0x474ccd['setMessageReaction']('',_0x447882['messageID'],()=>{},!![]),global[_0xf5828c(0x12e)][_0xf5828c(0x12f)]['set'](_0x3e8ccd[_0xf5828c(0xf2)],{'commandName':_0xa0c114,'author':_0x52c72d,'messageID':_0x3e8ccd[_0xf5828c(0xf2)],'type':_0xf5828c(0x113),'mangaInfo':_0x1cae99,'option':![]});},_0x447882[_0x32c772(0xf2)]);}else return _0x474ccd[_0x32c772(0x10b)](_0x32c772(0xfa),_0x447882['threadID'],_0x447882[_0x32c772(0xf2)]);}else return _0x30a795[0x0][_0x32c772(0x125)]()==_0x32c772(0xfd)?_0x474ccd[_0x32c772(0x136)](_0x47ed56)&&_0x474ccd[_0x32c772(0xf8)]('✅',_0x447882['messageID'],()=>{},!![]):_0x474ccd[_0x32c772(0x10b)]('Invalid\x20input!⚠️\x0aEx:\x20Page\x202/Select\x202/Done',_0x447882['threadID'],_0x447882['messageID']);}}let _0x1333d7=[],_0x324c45=_0x1333d7;if(_0x2bdd30['searchStatus']==!![]){search=_0x447882[_0x32c772(0x11b)];const _0x13eff3=search[_0x32c772(0xe6)](/[\/\\:]/g,'');_0x474ccd['setMessageReaction']('⏳',_0x447882[_0x32c772(0xf2)],()=>{},!![]);const _0x389477=await axios[_0x32c772(0x11f)]('https://api.consumet.org/manga/mangadex/'+_0x13eff3),_0x338ded=_0x389477[_0x32c772(0xf6)][_0x32c772(0xf4)];if(!_0x338ded[_0x32c772(0x10f)])return _0x474ccd['sendMessage'](_0x32c772(0x114),_0x447882[_0x32c772(0xe7)],()=>{const _0x1509d6=_0x32c772;_0x474ccd[_0x1509d6(0xf8)]('⚠️',_0x447882[_0x1509d6(0xf2)],()=>{},!![]);},_0x447882['messageID']);_0x338ded[_0x32c772(0x10a)](_0x3958ae=>{const _0x5bf6fd=_0x32c772;_0x1333d7[_0x5bf6fd(0x10c)]({'ID':_0x3958ae['id'],'description':_0x5bf6fd(0xf3)+_0x3958ae[_0x5bf6fd(0x101)]+'\x0aDescription:\x20'+_0x3958ae[_0x5bf6fd(0x117)]+_0x5bf6fd(0xe3)+_0x3958ae[_0x5bf6fd(0x11a)]+_0x5bf6fd(0x10d)+_0x3958ae[_0x5bf6fd(0x11c)]+_0x5bf6fd(0xec)+_0x3958ae[_0x5bf6fd(0x106)]+'\x0aLast\x20Volume:\x20'+_0x3958ae[_0x5bf6fd(0xfe)]+_0x5bf6fd(0x134)+_0x3958ae['lastChapter']+'\x0a\x0a'});});}else _0x1333d7=_0x2bdd30[_0x32c772(0x127)],_0x324c45=_0x2bdd30[_0x32c772(0x127)];const _0x32b6ff=0x5,_0x5e012b=Math[_0x32c772(0xf5)](_0x324c45[_0x32c772(0x10f)]/_0x32b6ff);let _0x58bc97='',_0x676679;if(_0x5a16cc<0x1||_0x5a16cc>_0x5e012b)return _0x474ccd[_0x32c772(0x10b)]('Page\x20'+_0x5a16cc+_0x32c772(0x135)+_0x5e012b,_0x447882[_0x32c772(0xe7)],_0x447882['messageID']);else _0x676679=await paginate(_0x324c45,_0x5a16cc,_0x32b6ff),_0x676679[_0x32c772(0x10a)]((_0x555905,_0x8b2f19)=>{const _0x4bcc2b=_0x32c772;_0x58bc97+=_0x8b2f19+0x1+'.\x20'+_0x555905[_0x4bcc2b(0x117)]+'\x0a';});return await _0x474ccd['unsendMessage'](_0x47ed56),_0x474ccd[_0x32c772(0x10b)]('Results:\x0a--------------------------\x0a'+_0x58bc97+_0x32c772(0xea)+_0x5a16cc+_0x32c772(0xeb)+_0x5e012b+_0x32c772(0x121),_0x447882[_0x32c772(0xe7)],(_0x5aced9,_0x28e017)=>{const _0x5e5cb8=_0x32c772;global['GoatBot'][_0x5e5cb8(0x12f)][_0x5e5cb8(0x119)](_0x28e017[_0x5e5cb8(0xf2)],{'commandName':_0xa0c114,'author':_0x52c72d,'messageID':_0x28e017[_0x5e5cb8(0xf2)],'resultString':_0x1333d7,'type':'search','pagetype':!![],'page':_0x5a16cc,'searchStatus':![],'currentPageData':_0x676679}),_0x474ccd['setMessageReaction']('',_0x447882['messageID'],()=>{},!![]);},_0x447882[_0x32c772(0xf2)]);}else{if(_0x147282=='read'){let _0x251bca;if(_0x2bdd30[_0x32c772(0x100)]==![]){if(_0x30a795[0x0][_0x32c772(0x125)]()==_0x32c772(0xff)&&_0x30a795[0x1]>0x0&&_0x2bdd30[_0x32c772(0xfb)][_0x32c772(0x110)]['length']>_0x30a795[0x1]-0x1)_0x251bca=_0x30a795[0x1]-0x1;else{if(_0x30a795[0x0][_0x32c772(0x125)]()=='done')return _0x474ccd[_0x32c772(0x136)](_0x47ed56)&&_0x474ccd['setMessageReaction']('✅',_0x447882[_0x32c772(0xf2)],()=>{},!![]);else{if(_0x30a795[0x0][_0x32c772(0x125)]()==_0x32c772(0x113)&&_0x2bdd30[_0x32c772(0xfb)][_0x32c772(0x110)][_0x32c772(0x10f)]>0x0)_0x251bca=0x0;else return _0x474ccd[_0x32c772(0x10b)](_0x32c772(0xed),_0x447882['threadID'],_0x447882[_0x32c772(0xf2)]);}}}else{if(_0x30a795[0x0][_0x32c772(0x125)]()==_0x32c772(0xfc)&&_0x2bdd30[_0x32c772(0xfb)][_0x32c772(0x110)][_0x32c772(0x10f)]>_0x2bdd30[_0x32c772(0x118)]+0x1)_0x251bca=_0x2bdd30[_0x32c772(0x118)]+0x1;else{if(_0x30a795[0x0][_0x32c772(0x125)]()==_0x32c772(0x12d)&&_0x2bdd30[_0x32c772(0x118)]>0x0)_0x251bca=_0x2bdd30[_0x32c772(0x118)]-0x1;else{if(_0x30a795[0x0][_0x32c772(0x125)]()===_0x32c772(0xff)&&_0x30a795[0x1]>0x0&&_0x2bdd30[_0x32c772(0xfb)][_0x32c772(0x110)][_0x32c772(0x10f)]>_0x30a795[0x1]-0x1)_0x251bca=_0x30a795[0x1]-0x1;else return _0x30a795[0x0][_0x32c772(0x125)]()=='done'?_0x474ccd['unsendMessage'](_0x47ed56)&&_0x474ccd[_0x32c772(0xf8)]('✅',_0x447882['messageID'],()=>{},!![]):_0x474ccd[_0x32c772(0x10b)](_0x32c772(0xf1),_0x447882['threadID'],_0x447882[_0x32c772(0xf2)]);}}}const _0x4fd9e0=_0x2bdd30[_0x32c772(0xfb)][_0x32c772(0x110)],_0x553be9=[..._0x4fd9e0]['reverse'](),_0x3fab35=_0x553be9[_0x251bca];_0x474ccd[_0x32c772(0xf8)]('⏳',_0x447882[_0x32c772(0xf2)],async()=>{const _0x479a5e=_0x32c772;try{const _0xf0c377=await axios[_0x479a5e(0x11f)](_0x479a5e(0xf0)+_0x3fab35['id']),_0x25aefd=_0xf0c377['data']['map'](_0x333430=>_0x333430[_0x479a5e(0xe8)]),_0x420980=await Promise['all'](_0x25aefd['map'](_0x38b0f2=>global['utils'][_0x479a5e(0xe5)](_0x38b0f2)));let _0x2638c7=_0x479a5e(0xf3)+_0x3fab35['title']+_0x479a5e(0xef)+_0x3fab35[_0x479a5e(0x129)];const _0x25aa51=0x1e;for(let _0x36d18d=0x0;_0x36d18d<_0x420980['length'];_0x36d18d+=_0x25aa51){const _0x4b7e79=_0x420980['slice'](_0x36d18d,_0x36d18d+_0x25aa51),_0x569bf6={'body':_0x2638c7,'attachment':_0x4b7e79},_0x4f11dd=await _0x474ccd[_0x479a5e(0x10b)](_0x569bf6,_0x447882[_0x479a5e(0xe7)]);global[_0x479a5e(0x12e)][_0x479a5e(0x12f)]['set'](_0x4f11dd[_0x479a5e(0xf2)],{'commandName':_0xa0c114,'author':_0x52c72d,'messageID':_0x4f11dd[_0x479a5e(0xf2)],'type':_0x479a5e(0x113),'position':_0x251bca,'mangaInfo':_0x2bdd30[_0x479a5e(0xfb)],'option':!![]}),_0x2638c7='';}await _0x474ccd[_0x479a5e(0xf8)]('',_0x447882[_0x479a5e(0xf2)],()=>{},!![]);}catch(_0x1641c4){return _0x474ccd[_0x479a5e(0x10b)]('Something\x20went\x20wrong',_0x447882[_0x479a5e(0xe7)],_0x447882['messageID'])&&_0x474ccd[_0x479a5e(0xf8)]('⚠️',_0x447882[_0x479a5e(0xf2)],()=>{},!![]);}},!![]);}}}catch(_0x321325){return _0x474ccd[_0x32c772(0x10b)](_0x32c772(0x108)+_0x321325,_0x447882['threadID'],_0x447882[_0x32c772(0xf2)])&&_0x474ccd['setMessageReaction']('⚠️',_0x447882[_0x32c772(0xf2)],()=>{},!![]);}}};function _0xcdc6(){const _0x4fe7e7=['messageID','Title:\x20','results','ceil','data','themes','setMessageReaction','\x0aChapters:\x20','Invalid\x20item\x20number⚠️','mangaInfo','next','done','lastVolume','chapter','option','title','jfhigtfdv','page','image','box\x20chat','contentRating','3317925AMbTCY','Error:\x20','233855yoSPRe','forEach','sendMessage','push','\x0aRelease\x20Date:\x20','6162114fzOwDB','length','chapters','\x0a\x0a(Reply\x20to\x20this\x20message\x20the\x20chapter\x20you\x20want\x20to\x20read.\x20Ex:\x20Read/Chapter\x202/Done)','\x0aThemes:\x20','read','No\x20results\x20found!','2xMTPCu','select','description','position','set','status','body','releaseDate','genres','currentPageData','get','utils','\x20page/s.\x0a(Reply\x20to\x20this\x20message.\x20Ex:\x20Page\x202/Select\x202/Done)','exports','manga','4849407MhUKYa','toLowerCase','search','resultString','join','chapterNumber','120VvyNFe','11089064intvUA','pagetype','prev','GoatBot','onReply','senderID','1.0','slice','\x0a\x0aDescription:\x20','\x0aLast\x20Chapter:\x20','\x20does\x20not\x20exist.\x0aTotal\x20pages:\x20','unsendMessage','3185442ZrcJxL','\x0aStatus:\x20','{pn}\x20<content>','getStreamFromURL','replace','threadID','img','88336SkRwJm','Current\x20page\x20','\x20of\x20','\x0aContent\x20Rating:\x20','Invalid\x20chapter!⚠️\x0aEx:\x20Chapter\x202/Read/Done','Search\x20Manga\x0a--------------------------\x0a(Reply\x20to\x20this\x20message)','\x0aChapter:\x20','https://api.consumet.org/manga/mangadex/read/','No\x20chapter\x20available.\x20Ex:\x20Chapter\x202/Next/Prev/Done'];_0xcdc6=function(){return _0x4fe7e7;};return _0xcdc6();}function _0x1074(_0x1828d0,_0x4359e5){const _0xcdc6b=_0xcdc6();return _0x1074=function(_0x1074e7,_0x56ca8f){_0x1074e7=_0x1074e7-0xe3;let _0x25c73c=_0xcdc6b[_0x1074e7];return _0x25c73c;},_0x1074(_0x1828d0,_0x4359e5);}async function paginate(_0x4da0fe,_0x24a528,_0x3c5b3f){const _0x2b13db=_0x42e61c,_0x3df2ff=(_0x24a528-0x1)*_0x3c5b3f,_0x558519=_0x3df2ff+_0x3c5b3f;return _0x4da0fe[_0x2b13db(0x132)](_0x3df2ff,_0x558519);}
