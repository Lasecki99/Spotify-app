(this.webpackJsonpspotify=this.webpackJsonpspotify||[]).push([[0],{30:function(n,e,t){n.exports=t.p+"static/media/music.4cbc434b.jpg"},42:function(n,e,t){n.exports=t.p+"static/media/yt.29cbc2bb.webp"},49:function(n,e,t){n.exports=t(64)},54:function(n,e,t){},60:function(n,e,t){},62:function(n,e,t){},64:function(n,e,t){"use strict";t.r(e);var a={};t.r(a),t.d(a,"dustyGray",(function(){return ln})),t.d(a,"alto",(function(){return un})),t.d(a,"codGray",(function(){return sn})),t.d(a,"mineShaft",(function(){return pn}));var r=t(0),o=t.n(r),c=t(19),i=t.n(c),l=(t(54),function(){for(var n,e={},t=/([^&;=]+)=?([^&;]*)/g,a=window.location.hash.substring(1);n=t.exec(a);)e[n[1]]=decodeURIComponent(n[2]);return e}),u=t(26),s=new(t.n(u).a),p=t(6),d=t(5);function m(){var n=Object(p.a)(["\n\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n  background-color: black;\n\n  a {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-decoration: none;\n    color: white;\n    letter-spacing: 1px;\n    border: 3px solid white;\n    background-color: royalblue;\n    padding: 10px 15px;\n    border-radius: 30px;\n    font-size: 40px;\n    transition: .2s;\n\n    &:hover {\n      transform: translate(-50%, -50%) scale(1.2);\n      transform-origin: 50% 50%;\n    }\n  }\n\n  @media (max-width: 1024px) {\n\n    a {\n      width: 220px;\n      font-size: 20px;\n      padding: 5px 10px;\n      border-width: 2px;\n      text-align: center;\n    }\n  }\n"]);return m=function(){return n},n}var f=d.b.div(m()),g=function(){return o.a.createElement(f,null,o.a.createElement("a",{href:"http://localhost:8888/login"},"Login with Spotify"))},h=t(20),b=t(15),x=t(46),v=t(30),E=t.n(v),y=t(4),w=function(n){return{author:n.artists[0].name,name:n.name,audio:new Audio(n.preview_url)}},O=function(n){return{type:"SET_MUSIC_ARR",value:n}},k=function(n){return function(e){if(n){var t=n.type,a=n.id;switch(t){case"album":s.getAlbumTracks(a).then((function(n){var t=n.items.filter((function(n){return null!==n.preview_url}));t=t.map((function(n){return w(n)})),e(O(t))})).catch((function(n){return console.log(n)}));break;case"artist":s.getArtistTopTracks(a,"PL").then((function(n){var t=n.tracks.filter((function(n){return null!==n.preview_url}));t=t.map((function(n){return w(n)})),e(O(t))})).catch((function(n){return console.log(n)}));break;case"playlist":s.getPlaylistTracks(a,{limit:15}).then((function(n){var t=n.items.filter((function(n){return null!==n.track.preview_url}));t=t.map((function(n){return w(n.track)})),e(O(t))})).catch((function(n){return console.log(n)}));break;case"track":s.getTrack(a).then((function(n){var t={};n.preview_url&&(t=[w(n)]),e(O(t))})).catch((function(n){return console.log(n)}))}}}},_=function(n){var e=n.item,t=Object(y.b)();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"song"},o.a.createElement("img",{onClick:function(){return t(k(e))},src:e.images&&e.images.length?e.images[0].url:E.a,alt:"song"}),o.a.createElement("p",{onClick:function(){return t(k(e))},className:"song-name"},e.name)))},S=t(65);function j(){var n=Object(p.a)(["\n  display: inline-block;\n  \n    h2 {\n      color: ",";\n      margin: 25px 0 25px 20px;\n    }\n\n    div.song {\n      display: inline-block;\n      width: 210px;\n      height: 258px;\n\n      img {\n        display: block;\n        width: 170px;\n        height: 170px;\n        cursor: pointer;\n        margin: 0 auto;\n        border-radius: 5px;\n      }\n\n      p {\n        cursor: pointer;\n        color: ",";\n        text-align: center;\n        margin-top: 10px;\n      }\n    }\n\n    @media (max-width: 1024px) {\n      width: calc(100% - 60px);\n\n      div.song {\n        width: 100%;\n        margin: 0 auto;\n      }\n\n      h2 {\n        text-align: center;\n        margin: 25px auto;\n      }\n    }\n"]);return j=function(){return n},n}var T=d.b.div(j(),(function(n){return n.theme.alto}),(function(n){return n.theme.alto})),R=function(n){var e=n.item;return o.a.createElement(o.a.Fragment,null,e.data.items.length?o.a.createElement(T,{className:e.type},o.a.createElement("h2",null,e.type),e.data.items.map((function(n){return o.a.createElement(_,{key:Object(S.a)(),item:n})}))):"New Releases"!==e.type?o.a.createElement("h2",{style:{margin:"25px 0 25px 20px",color:"#ddd"}},"No ",e.type," found"):null)},N=(t(60),function(){return o.a.createElement("div",{className:"lds-ring"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))});function L(){var n=Object(p.a)(["\n  width: calc(100% - 230px);\n  margin-left: 230px;\n  height: 100%;\n\n  input {\n    width: 100%;\n    background-color: ",";\n    color: #eee;\n    font-weight: 600;\n    font-size: 30px;\n    padding: 15px 40px;\n    outline: none;\n    border: none;\n  }\n\n  div.search-main-content {\n    height: calc(100% - 67px);\n    background-color: ",";\n    overflow: scroll;\n  }\n\n  @media (max-width: 1024px) {\n    margin-left: 60px;\n    width: 100%;\n\n    input {\n      width: calc(100% - 60px);\n      font-size: 18px;\n      padding: 10px 10px;\n    }\n  }\n"]);return L=function(){return n},n}var A=d.b.div(L(),(function(n){return n.theme.mineShaft}),(function(n){return n.theme.codGray})),I=function(){var n=Object(y.c)((function(n){return n.searchReducer.searchList})),e=Object(y.c)((function(n){return n.searchReducer.isLoading})),t=Object(y.b)(),a=Object(r.useState)(""),c=Object(x.a)(a,2),i=c[0],l=c[1];return Object(r.useEffect)((function(){i?(t({type:"SET_LOADER"}),t(function(n){return function(e){s.search(n,["album","artist","playlist","track"],{limit:10}).then((function(n){var t=[{type:"Albums",data:n.albums},{type:"Artists",data:n.artists},{type:"Playlists",data:n.playlists},{type:"Tracks",data:n.tracks}];e(function(n){return{type:"GET_SEARCH_LIST",res:n}}(t))})).catch((function(n){return console.log(n)}))}}(i))):n.length&&!i&&t({type:"RESET_LIST"})}),[i]),o.a.createElement(o.a.Fragment,null,o.a.createElement(A,null,o.a.createElement("input",{value:i,onChange:function(n){return l(n.target.value)},placeholder:"Start typing...",type:"text"}),e?o.a.createElement(N,null):o.a.createElement("div",{className:"search-main-content"},n?n.map((function(n){return o.a.createElement(R,{key:n.type,item:n})})):null)))};function G(){var n=Object(p.a)(["\n  width: calc(100% - 230px);\n  margin-left: 230px;\n  height: 100%;\n  overflow: scroll;\n\n  @media (max-width: 1024px) {\n    margin-left: 60px;\n    width: 100%;\n  }\n"]);return G=function(){return n},n}var P=d.b.div(G()),C=function(){var n=Object(y.c)((function(n){return n.newReleases.newReleases})),e=Object(y.b)();Object(r.useEffect)((function(){n.length||e((function(n){s.getNewReleases({limit:10}).then((function(e){return n(function(n){return{type:"GET_NEW_RELEASES",res:n}}(e.albums.items))})).catch((function(n){return console.log(n)}))}))}),[e,n]);var t=[{type:"New Releases",data:{items:n}}];return o.a.createElement(P,null,t?o.a.createElement("div",{className:"releases-wrapper"},t.map((function(n){return o.a.createElement(R,{key:n.type,item:n})}))):null)};function D(){var n=Object(p.a)(["\n  color: #999;\n  padding-top: 10px;\n\n  > h2 {\n    color: #eee;\n    padding-top: 15px;\n    font-size: 22px;\n  }\n\n  @media (max-width: 1024px) {\n    display: none;\n  }\n"]);return D=function(){return n},n}var z=d.b.div(D()),F=function(){var n=Object(y.c)((function(n){return n.playbackReducer.songToPlay}));return o.a.createElement(o.a.Fragment,null,n?o.a.createElement(o.a.Fragment,null,o.a.createElement(z,null,o.a.createElement("h2",null,"Now playing"),o.a.createElement("p",{className:"song-list-name clickable"},"".concat(n.author," - ").concat(n.name)))):null)};function M(){var n=Object(p.a)(["\n\n  h2 {\n    color: #eee;\n    padding-top: 8px;\n    padding-bottom: 4px;\n  }\n\n  p {\n    color: #999;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    text-align: left;\n    cursor: pointer;\n  }\n\n  p.selected {\n    color: #222;\n    background-color: #ddd;\n    font-weight: bold;\n  }\n\n  @media (max-width: 1024px) {\n    h2 {\n      display: none;\n    }\n\n    p {\n      display: none;\n    }\n\n    p.selected {\n      display: none;\n    }\n  }\n"]);return M=function(){return n},n}var Y=d.b.div(M()),q=function(){var n=Object(y.b)(),e=Object(y.c)((function(n){return n.albumReducer.musicArr})),t=Object(y.c)((function(n){return n.playbackReducer.songToPlay}));return Object(r.useEffect)((function(){e.length&&n({type:"SET_SONG_TO_PLAY",song:e[0]})}),[e]),o.a.createElement(Y,null,o.a.createElement(F,null),e.length?o.a.createElement("h2",null,"List of songs"):null,e.length?e.map((function(e){var a=e.author,r=e.name;return o.a.createElement("p",{key:Object(S.a)(),onClick:function(){return n({type:"SET_SONG_TO_PLAY",song:e})},className:t===e?"selected":""},"".concat(a," - ").concat(r))})):null)},J=t(45),U=(t(61),t(62),t(42)),W=t.n(U);function B(){var n=Object(p.a)(["\nposition: absolute;\nwidth: 60px;\nheight: 40px;\nbottom: 20px;\nleft: 40px;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n\n  @media (max-width:1024px) {\n    display: none;\n  }\n"]);return B=function(){return n},n}var H=d.b.a(B()),V=function(n){var e=n.name,t=n.author;return o.a.createElement(H,{href:"https://www.youtube.com/results?search_query=".concat(t,"+-+").concat(e),target:"_blank"},o.a.createElement("img",{src:W.a,alt:"youtube"}))};function X(){var n=Object(p.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 90px;\n  width: 100vw;\n  background-color: ",";\n\n  > div.audio-player {\n      background-color: ",";\n      width: 500px;\n      margin: 0 auto;\n      box-shadow: none;\n  }\n\n  @media (max-width: 1024px) {\n      div.audio-player {\n          width: 360px;\n      }\n  }\n\n    /* > div.playback-text {\n        position: absolute;\n        display: inline-block;\n        bottom: 15px;\n        left: 15px;\n        > p {\n            color: ",";\n            text-align: center;\n        }\n    } */\n"]);return X=function(){return n},n}var K=d.b.div(X(),(function(n){return n.theme.mineShaft}),(function(n){return n.theme.mineShaft}),(function(n){return n.theme.alto})),$=function(){var n=Object(y.c)((function(n){return n.playbackReducer.songToPlay})),e=Object(y.c)((function(n){return n.albumReducer.musicArr})),t=Object(y.b)(),a=Object(r.useRef)();return Object(r.useEffect)((function(){n&&(a.current.audio.src=n.audio.src)}),[n]),o.a.createElement(K,null,n?o.a.createElement(V,{name:n.name,author:n.author}):null,o.a.createElement(J.a,{className:"audio-player",ref:a,showSkipControls:!0,onClickNext:function(){if(n){var a=e.indexOf(n);(a+=1)===e.length&&(a=0),t({type:"SET_SONG_TO_PLAY",song:e[a]})}},onClickPrevious:function(){if(n){var a=e.indexOf(n);(a-=1)<0&&(a=e.length-1),t({type:"SET_SONG_TO_PLAY",song:e[a]})}}}))};function Q(){var n=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 90px;\n  width: 230px;\n  background-color: black;\n  overflow: scroll;\n\n  > ul {\n    display: flex;\n    flex-direction: column;\n    margin: 30px 0 0 30px;\n\n    > a {\n      margin: 4px 0;\n      z-index: 1000000;\n      color: ",";\n\n      &:hover i,\n      &:hover p,\n      &.active i,\n      &.active p {\n        color: ","\n      }\n\n      > p {\n        z-index: -1;\n        display: inline-block;\n        margin-left: 10px;\n        font-size: 18px;\n        vertical-align: -1px;\n      }\n\n      > i {\n        font-size: 19px;\n        z-index: -1;\n      }\n    }\n  }\n\n  @media (max-width: 1024px) {\n    width: 60px;\n\n    ul {\n      margin: 15px 0 0 15px;\n\n      a {\n\n        p {\n          display: none;\n        }\n\n        i {\n          font-size: 26px;\n          margin: 10px 0;\n        }\n      }\n    }\n  }\n"]);return Q=function(){return n},n}var Z=d.b.div(Q(),(function(n){return n.theme.dustyGray}),(function(n){return n.theme.alto})),nn=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,null,o.a.createElement(Z,null,o.a.createElement("ul",null,o.a.createElement(h.b,{exact:!0,to:"/"},o.a.createElement("i",{className:"fas fa-search"}),o.a.createElement("p",null,"Search")),o.a.createElement(h.b,{to:"/new-releases"},o.a.createElement("i",{className:"fas fa-compact-disc"}),o.a.createElement("p",null,"New releases")),o.a.createElement(q,null))),o.a.createElement(b.a,{path:"/new-releases",component:C}),o.a.createElement(b.a,{path:"/",component:I}),o.a.createElement($,null)))};function en(){var n=Object(p.a)(["\n  position: absolute;\n  display: table;\n  bottom: 65px;\n  right: 28px;\n  color: ",";\n  border: 1px solid ",";\n  background-color: ",";\n  border-radius: 5px;\n  cursor: pointer;\n\n  &.hide {\n    display: none;\n  }\n\n  > li {\n    display: table-cell;\n    width: 100%;\n    height: 100%;\n    padding: 5px 45px;\n    transition: .2s;\n\n    &:hover {\n      background-color: gray;\n    }\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(p.a)(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  display: flex;\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 20px;\n  padding: 2px 6px;\n  cursor: pointer;\n  background-color: ",";\n  transition: .2s;\n\n  &:hover {\n    background-color: gray;\n  }\n\n  > i {\n    color: white;\n    margin-right: 3px;\n\n    &.hide {\n      display: none;\n    }\n  }\n\n  > img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  margin-left: 10px;\n  }\n\n  > p {\n  color: ",";\n  font-size: 12px;\n  font-weight: bold;\n  }\n  \n  @media (max-width: 1024px) {\n    display: none;\n  }\n  "]);return tn=function(){return n},n}var an=d.b.div(tn(),(function(n){return n.theme.alto}),(function(n){return n.theme.codGray}),(function(n){return n.theme.alto})),rn=d.b.ul(en(),(function(n){return n.theme.alto}),(function(n){return n.theme.alto}),(function(n){return n.theme.codGray})),on=function(){var n=Object(y.b)(),e=Object(y.c)((function(n){return n.getMeReducer.user}));return Object(r.useEffect)((function(){e.username||n((function(n){s.getMe().then((function(e){return n((t=e.display_name,a=e.images.length?e.images[0].url:"https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",{type:"GET_ME",name:t,photo:a}));var t,a})).catch((function(n){return console.log(n)}))}))}),[n,e]),o.a.createElement(o.a.Fragment,null,o.a.createElement(rn,{className:"user-list hide"},o.a.createElement("li",{onClick:function(){localStorage.removeItem("accessToken"),window.location.href=window.location.origin}},"Logout")),o.a.createElement(an,{onClick:function(){document.body.querySelector("i.fa-angle-up").classList.toggle("hide"),document.body.querySelector("i.fa-angle-down").classList.toggle("hide"),document.body.querySelector("ul.user-list").classList.toggle("hide")}},e.username?o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:"fas fa-angle-down"}),o.a.createElement("i",{className:"fas fa-angle-up hide"}),o.a.createElement("p",null,e.username),o.a.createElement("img",{src:e.photo,alt:"you"})):null))},cn=function(){var n=function(){localStorage.removeItem("accessToken"),localStorage.removeItem("expirationDate"),alert("Please login again ;)"),window.location.href=window.location.origin},e=Object(y.c)((function(n){return n.appReducer.loggedIn})),t=Object(y.b)();if(localStorage.getItem("accessToken"))s.setAccessToken(JSON.parse(localStorage.getItem("accessToken"))),e||t({type:"SET_LOGGED_IN",bool:!0});else{var a=l();if(Object.keys(a).length){var r=JSON.stringify(a.access_token);localStorage.setItem("accessToken",r),localStorage.setItem("expirationDate",Date.now()+36e5),s.setAccessToken(a.access_token),e||t({type:"SET_LOGGED_IN",bool:!0})}}var c=Number(localStorage.getItem("expirationDate"));if(c&&c<Date.now())n();else{var i=c-Date.now();setTimeout(n,i)}return o.a.createElement(o.a.Fragment,null,e?o.a.createElement("div",{className:"App"},o.a.createElement(nn,null),o.a.createElement(on,null)):o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ln="#999",un="#ddd",sn="#121212",pn="#282828",dn=t(16),mn=t(44),fn=t(7),gn={newReleases:[]},hn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_NEW_RELEASES":return Object(fn.a)({},n,{newReleases:n.newReleases.concat(e.res)});default:return n}},bn={loggedIn:!1},xn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_LOGGED_IN":return Object(fn.a)({},n,{loggedIn:e.bool});default:return n}},vn={searchList:[],isLoading:!1},En=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_SEARCH_LIST":return Object(fn.a)({},n,{searchList:e.res,isLoading:!1});case"RESET_LIST":return Object(fn.a)({},n,{searchList:[]});case"SET_LOADER":return Object(fn.a)({},n,{isLoading:!0});default:return n}},yn={clickedSong:null,musicArr:[]},wn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CLICKED_SONG":return Object(fn.a)({},n,{clickedSong:e.clicked});case"SET_MUSIC_ARR":return Object(fn.a)({},n,{musicArr:e.value});default:return n}},On={songToPlay:null},kn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:On,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_SONG_TO_PLAY":return Object(fn.a)({},n,{songToPlay:e.song});default:return n}},_n={playlist:[]},Sn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_n,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TO_PLAYLIST":return Object(fn.a)({},n,{playlist:n.playlist.concat(e.song)});case"REMOVE_FROM_PLAYLIST":return Object(fn.a)({},n,{playlist:n.playlist.filter((function(n){return n.id!==e.id}))});default:return n}},jn={user:{username:null,photo:null}},Tn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_ME":return Object(fn.a)({},n,{user:{username:e.name,photo:e.photo}});default:return n}},Rn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||dn.d,Nn=Object(dn.c)({newReleases:hn,appReducer:xn,searchReducer:En,albumReducer:wn,playbackReducer:kn,playlistReducer:Sn,getMeReducer:Tn}),Ln=Object(dn.e)(Nn,Rn(Object(dn.a)(mn.a)));i.a.render(o.a.createElement(y.a,{store:Ln},o.a.createElement(d.a,{theme:a},o.a.createElement(cn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.8c150b9e.chunk.js.map