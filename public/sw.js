if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,t)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let n={};const d=e=>i(e,s),r={module:{uri:s},exports:n,require:d};a[s]=Promise.all(c.map((e=>r[e]||d(e)))).then((e=>(t(...e),n)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1396-e27c17c85718b09d.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/1424-3bc1c784637174a8.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/2523-6d8920be98a0582b.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/2662-4c72b948a4cf1a0f.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/2820-3a8fb9792d4aa032.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/3011-06739fd3736bc372.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/39209d7c-8886b705bed6b64b.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/3954-f769904aad326512.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/5032-7bdfdf9eb97d6d97.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/5321-091068fe42821cae.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/5530-d8228b270aab8f87.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/5983.c5eeb2306219854e.js",revision:"c5eeb2306219854e"},{url:"/_next/static/chunks/6201.168178a578756de7.js",revision:"168178a578756de7"},{url:"/_next/static/chunks/6698-c6f54b58475a2039.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/7095-afe859010f41eeb9.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/7186-72890be9f8a4b006.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/737dfa3e-46e0a4b10128f539.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/7759-0d031b4b0d0201a3.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/8012d7e2-ffa912404a0aabcf.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/8622.811893451478b112.js",revision:"811893451478b112"},{url:"/_next/static/chunks/8970-ad3c64f6e6bad595.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/9849-a55c38c6ddc6c954.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/%5B...not-found%5D/page-6c3dc5966613eef5.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/(client)/(dish)/dishes-list/page-4fa1caaa82721a95.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/(client)/(dish)/dishes/%5BdishId%5D/page-a8b10e4a31dad4dc.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/(client)/(dish)/dishes/page-dac03c91cfab0730.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/(client)/(protected)/cart/page-0ed30a99c5853aec.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/(client)/(protected)/checkout/page-015e4d8a2955e352.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/(client)/(protected)/layout-95b34be0094219b4.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/(client)/(protected)/wishlist/page-4415cf1d3ac82232.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/(client)/contact-us/page-593bba0adb27a8aa.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/(client)/faqs/page-776a018df948af97.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/(client)/home/page-3a7651155ceae49d.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/(client)/layout-6737a7f8100be3f9.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(customer)/add-customer/page-6606117a3fd472c2.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(customer)/customers/%5BcustomerId%5D/page-57651b3865e025b0.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(customer)/customers/page-433e774290a8f73d.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(customer)/edit-customer/page-70ea0399f71aa399.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(dish)/add-dish/page-542a04d1bde7393b.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(dish)/dishes/%5BadminDishId%5D/page-9585023abd08b4eb.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(dish)/dishes/page-7000a1a8be7a4310.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(dish)/edit-dish/page-f46b2cb1efc35e9e.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(order)/orders/%5BorderId%5D/page-98944bc4118d678c.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(order)/orders/page-4389962fdea0d120.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(restaurant)/add-restaurant/page-502941e20128e86f.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(restaurant)/edit-restaurant/page-cde35f313fe7504a.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(restaurant)/restaurants/%5BrestaurantId%5D/page-62cd94e517a89d66.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(restaurant)/restaurants/page-01fb27aa7846c39b.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(seller)/add-seller/page-57e8f324d436ee9c.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(seller)/edit-seller/page-ee212f4e9d76d7ce.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(seller)/sellers/%5BsellerId%5D/page-53debe56fd38eb11.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/(seller)/sellers/page-cd8c9ba1ec0ae110.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/dashboard/page-4aef2fd480b6351d.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/layout-bfd7710d8ba49ab7.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/manage/page-3569e80c1c40d9be.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/profile/page-636d440421604e0e.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/admin/wallet/page-5096285776dab427.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/auth/forgot-password/page-b6204ef9d304d278.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/auth/layout-75409e268a97836d.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/auth/login/page-6c64d989313d8d6f.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/auth/logout/page-82a73231629d8cba.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/auth/register/page-29d11c659972b01a.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/auth/reset-password/page-5748b9b45d80ba44.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/layout-99a7ee7006f62393.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/not-found-612b60620cd5fa72.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/app/page-ada2c9199f7777e9.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/cb3e912c-8cf01e5851f14aa1.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/d6a3c14e-6cba4673870fcd23.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/fd9d1056-706e3085aa9ceb17.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/main-app-1abd7d47b7a1c0e9.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/main-fd32061f3f697e84.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/pages/_app-31397adcb4d2b835.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/pages/_error-b225d4412fb76f89.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-4796b6597ecd4d07.js",revision:"h0Ac3MkyB74nINzKzdHXK"},{url:"/_next/static/css/64e242d9b5e663a5.css",revision:"64e242d9b5e663a5"},{url:"/_next/static/css/8aee48eb52f4c731.css",revision:"8aee48eb52f4c731"},{url:"/_next/static/css/ae0f6b176f8a446a.css",revision:"ae0f6b176f8a446a"},{url:"/_next/static/css/e24294222c81ed14.css",revision:"e24294222c81ed14"},{url:"/_next/static/h0Ac3MkyB74nINzKzdHXK/_buildManifest.js",revision:"a27b2b7607326fa26b144e657011ec52"},{url:"/_next/static/h0Ac3MkyB74nINzKzdHXK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/1.18b3971e.png",revision:"887ee68e60433eb9285cf1d8532c44d8"},{url:"/_next/static/media/1.1c079140.png",revision:"4e5232f1c05767a8cc4c83256a978a80"},{url:"/_next/static/media/1.64c9e5f5.png",revision:"6a3ed4b3401e14f056f9c6866ca08ec3"},{url:"/_next/static/media/1.6af45dcc.png",revision:"d8e1849b4116809903473f60744cb897"},{url:"/_next/static/media/10.0ff708c2.png",revision:"f3535da3bec733664fe694946372df2b"},{url:"/_next/static/media/10.76132fff.png",revision:"27d13c4420d03ccac522873257a36e79"},{url:"/_next/static/media/10939feefdad71be-s.woff2",revision:"72b3ae37567ee5efdf2254b657c36ba9"},{url:"/_next/static/media/11.015d8fde.png",revision:"bbda874428439548ded7cf09cdb5e399"},{url:"/_next/static/media/12.bd54ca4f.png",revision:"554ff52866eb74071636b0cbcc846cbd"},{url:"/_next/static/media/13.c6d76185.png",revision:"f5d393409ddeb11dfd48218f3de8ef02"},{url:"/_next/static/media/14.fde726a2.png",revision:"82b8f8343862f88b86a2f715bc7a8a9d"},{url:"/_next/static/media/15.e72f2c43.png",revision:"cd915dd38fa4ebc1e739871895a88c53"},{url:"/_next/static/media/16.c74c8962.png",revision:"83383407b123c24b4c25dc992ace291a"},{url:"/_next/static/media/17.d8c731c7.png",revision:"055b19c643147b47c9db6ac73a31b366"},{url:"/_next/static/media/18.e8fa6cb1.png",revision:"e488d707fcbc687a7a9a81627a267b43"},{url:"/_next/static/media/19.ed8a7b41.png",revision:"75a6538d7fdaba3ee5a2c7a544604ea7"},{url:"/_next/static/media/2.006a9939.png",revision:"2ee2e6836fec6e1b834fa531b63a83b0"},{url:"/_next/static/media/2.1cd0c054.png",revision:"087d4e79802208e54f51cb90ba6b92fd"},{url:"/_next/static/media/2.21ecd2b4.png",revision:"5beaa6ed427d76b27c23a4b27479081a"},{url:"/_next/static/media/2.34502fc2.png",revision:"28e425b16b04fcc2deec8b38c1f46cc0"},{url:"/_next/static/media/20.328a78df.png",revision:"5d345e50a2b0f8ede15cc5abd813863c"},{url:"/_next/static/media/20b8b8f6f47c1e10-s.p.woff2",revision:"7def222d1a45cb1cb7d8c3ae675dbdcc"},{url:"/_next/static/media/21.9b1bdd30.png",revision:"3791c288ba400ab89f10e0b2dad1cd6b"},{url:"/_next/static/media/3.06bda95d.png",revision:"f4bf04e57a9e76d1a19fba5d75594fe8"},{url:"/_next/static/media/3.27ea9e2c.png",revision:"6bd86e7ea6828572194bb0b3ebdcebc4"},{url:"/_next/static/media/3.9b7a9763.png",revision:"dd0ea11afe35cf06362aaf266c989411"},{url:"/_next/static/media/3.f7332e30.png",revision:"d6a45f47ea197965440686a5e2bfada3"},{url:"/_next/static/media/370d1cc320ec5619-s.woff2",revision:"a6ff41d10fa89e7f8fec937c243d7428"},{url:"/_next/static/media/3828f203592f7603-s.p.woff2",revision:"e9fd398a43c9e51f9ee14e757eaf95d9"},{url:"/_next/static/media/4.445f966f.png",revision:"260275e19ffb788b8ddc9fc05db56df9"},{url:"/_next/static/media/4.b87e033f.png",revision:"6ec693f15eae4b8563f913a335863b8b"},{url:"/_next/static/media/4.d324373f.png",revision:"7fa4d2f247482e88f7358d3ac1e79701"},{url:"/_next/static/media/4.d97c4d74.png",revision:"ff071c243dbfb78afe36af357905fd8a"},{url:"/_next/static/media/5.10f45f40.png",revision:"7a4aa78a0378cae4e5d35497b87f05a1"},{url:"/_next/static/media/5.31412035.png",revision:"3a554fe48d6042ade5b68498494e83e0"},{url:"/_next/static/media/5.43649e6e.png",revision:"9f3377fd770087288b6154bf8de98312"},{url:"/_next/static/media/5.b6feb234.png",revision:"e11517a762b3ce84e9b9ae5167a7f87c"},{url:"/_next/static/media/591327bf3b62a611-s.woff2",revision:"0ed299a4bb5262e17e2145783b2c18f1"},{url:"/_next/static/media/6.21b74505.png",revision:"91342d7e6ce0f367b8a525f746a44d36"},{url:"/_next/static/media/6.b8f2b4a5.png",revision:"8bba39fd6363cbaeba3ac0ab2badddff"},{url:"/_next/static/media/6.cdb253f1.png",revision:"3821938ea3407f6bfcbb086d317e3380"},{url:"/_next/static/media/6.d0a0a7ee.png",revision:"da1af5e6ce71d22340820379f0906767"},{url:"/_next/static/media/7.76aced86.png",revision:"c973e4a4570ffeb48a83c11eff0ab0b7"},{url:"/_next/static/media/7.acd72349.png",revision:"34b8f4d5a9a7f914d272309d82e5072a"},{url:"/_next/static/media/7.f0d52644.png",revision:"684a8c1cbbbc58745ec08fa8cd61ff46"},{url:"/_next/static/media/7777133e901cd5ed-s.woff2",revision:"a09f2fccfee35b7247b08a1a266f0328"},{url:"/_next/static/media/8.a423117d.png",revision:"8d6a4b210e14634e8e016b589aac69eb"},{url:"/_next/static/media/8.b5ecbf65.png",revision:"77aed46382f63af1763f1596e3355ceb"},{url:"/_next/static/media/8.faea176e.png",revision:"308ccbd98ca7ee57ab3138e52092fc00"},{url:"/_next/static/media/839135d04a097cea-s.p.woff2",revision:"79e6e81d255edac7e8627c7e16baccf5"},{url:"/_next/static/media/87c72f23c47212b9-s.p.woff2",revision:"790d0c8dbcd491d29d58f1369c199d40"},{url:"/_next/static/media/9.82a8c31b.png",revision:"9bb60f6f9b4c5fc268b5818f13765f5b"},{url:"/_next/static/media/9.e01b19dd.png",revision:"56f4456b1db2c0f2046c7ba7bd94f91f"},{url:"/_next/static/media/916d3686010a8de2-s.woff2",revision:"9212f6f9860f9fc6c69b02fedf6db8c3"},{url:"/_next/static/media/953974ac5e9ff354-s.woff2",revision:"6731e1ba3788bda094c89ee8fc131aef"},{url:"/_next/static/media/9a881e2ac07d406b-s.woff2",revision:"25b0e113ca7cce3770d542736db26368"},{url:"/_next/static/media/about-us.43de6022.png",revision:"4013d82bf84824a98fe63761932cc89b"},{url:"/_next/static/media/ac614beb32f7a7c2-s.p.woff2",revision:"20f5992a9c019fb146a38e1cc0c101d3"},{url:"/_next/static/media/admin.6702f877.png",revision:"944b2b3edf2018fd86b5f77ca6dabd0e"},{url:"/_next/static/media/aefc8ad6d88b3354-s.woff2",revision:"6a4298fc0390ec22c52f618daa0e82bf"},{url:"/_next/static/media/amazon.4f6197bd.svg",revision:"08abb7c573f7b56754c26f427a14e135"},{url:"/_next/static/media/appetizer-1.2bbb3a63.png",revision:"ce073c6ffcbd3b254920eb23c50c935c"},{url:"/_next/static/media/appetizer-2.e29e234d.png",revision:"093e22253b79d25b102ff928f84f7aa8"},{url:"/_next/static/media/appetizer-3.f0bb3696.png",revision:"08fb939bfd5061da891478a84b3ff5cc"},{url:"/_next/static/media/appetizer-4.f8b5c9f7.png",revision:"e5d5082fc513e0dd603693722d63f1f4"},{url:"/_next/static/media/appetizer-5.1c3a3375.jpg",revision:"5c732d040e613592cb3d93ad9189cdcb"},{url:"/_next/static/media/arrow.2324c35a.png",revision:"3c903b306700b4a052c2f07ec6b20bf3"},{url:"/_next/static/media/auth-bg.81a86c2e.png",revision:"a8e93f7af33401520db9086bc0502594"},{url:"/_next/static/media/avatar1.eeeaf881.png",revision:"8e4691181124a062ac2df2a267543cb8"},{url:"/_next/static/media/avatar10.bbb1cc17.jpg",revision:"fb66ef2baa566963ce35faeb201f89f2"},{url:"/_next/static/media/avatar2.bb5f2292.png",revision:"1325dc57506240cdbff83e3048393c23"},{url:"/_next/static/media/avatar3.3a079220.png",revision:"be8a3cd9b797e0d73b808d617da5cca8"},{url:"/_next/static/media/avatar4.2491de00.png",revision:"7ddbabfa47a58b5da5c70fb5fd709b3e"},{url:"/_next/static/media/avatar5.096b6cc0.png",revision:"26ecd7f4e477a397bcdb78b1b1ccffbf"},{url:"/_next/static/media/avatar6.a04dee82.png",revision:"d86560522d7957fab7344c633ba3a1a7"},{url:"/_next/static/media/avatar7.208f6c05.jpg",revision:"98f67ca5e175923763a8a0b7f7e2cc9e"},{url:"/_next/static/media/avatar8.2ae0172c.jpg",revision:"6631036200dc36e7c64d724f66dfe5a7"},{url:"/_next/static/media/avatar9.38074b07.jpg",revision:"5328320eb430e83a36f9691dcb26fedc"},{url:"/_next/static/media/bag.e1903e41.svg",revision:"84b398fbeda302face538eb1169ebeec"},{url:"/_next/static/media/bakery.fc9f82e9.svg",revision:"ce702305d72af625a562e5c9d15707b0"},{url:"/_next/static/media/bbq.a9ae8ebb.png",revision:"bcabe543d258e00d2827858f55306d6a"},{url:"/_next/static/media/bg.2a5c8339.png",revision:"58745f58bb2e24aedb0222d85208079d"},{url:"/_next/static/media/bread.e5bf5aa5.png",revision:"ea0055b4986e634a0fc0a58cf649276f"},{url:"/_next/static/media/bubble-tea.cb48208b.svg",revision:"fcac9a1c25a03ddbe37a01d0d1162f0f"},{url:"/_next/static/media/bun.c3951305.svg",revision:"5a5f09ffcbba13d95cd2419be4515a5d"},{url:"/_next/static/media/burger-1.01a11571.png",revision:"c223ba74a34d87f5b6f927b7699f2f03"},{url:"/_next/static/media/burger-1.a6690efa.svg",revision:"fa9073ba950a2adce2a91e23ad90bccc"},{url:"/_next/static/media/burger-2.974a87bd.png",revision:"ddbb133da4aac543e1abb05027687015"},{url:"/_next/static/media/burger-3.3ebe0757.png",revision:"e24399d5df9258b4f4c510f7f72ad69c"},{url:"/_next/static/media/burger-4.d7626339.png",revision:"80d7c1cd6f3eb8a8c5ac86cae7f70252"},{url:"/_next/static/media/burger.2cea5778.svg",revision:"7fa16678a2b59b6081edeb3e3cf1ec70"},{url:"/_next/static/media/burger.355f9b53.png",revision:"30a1673199987cfa18789c1f76f226a5"},{url:"/_next/static/media/burger.d8d1dd50.png",revision:"62f6ea7a4f516fa717eff727a80709c4"},{url:"/_next/static/media/burrito-bowl-2.6233bff4.png",revision:"25fe157e8ae3b662f6aece47c83abc0b"},{url:"/_next/static/media/burrito-bowl-3.c7fc7937.png",revision:"7e2e2056168ed5e5130fe1c1ecb64e83"},{url:"/_next/static/media/burrito-bowl.6c04b15c.png",revision:"090a1f7736b2d32d00cbadc62d259808"},{url:"/_next/static/media/butter-cookies.1fc0353a.png",revision:"ac6eb8c20d6c754e261b59d69714a55b"},{url:"/_next/static/media/c04551857776278f-s.woff2",revision:"8d91ec1ca2d8b56640a47117e313a3e9"},{url:"/_next/static/media/cake-1.daa746cf.png",revision:"d0523559d8864f700275fdbc72d3c8b0"},{url:"/_next/static/media/cake-2.29d59469.png",revision:"e63e9b21400879259e96bd3bf13dfc78"},{url:"/_next/static/media/cake-3.8ea88a4b.png",revision:"f9d9a6aa09fdbf57d0cceaf8e5e4b758"},{url:"/_next/static/media/cake-4.1693d41e.png",revision:"75223c234fa66d3928975a0583ec457f"},{url:"/_next/static/media/card-chip.3a24d162.png",revision:"3600bb4087b34b52c43c99ed787a4dd1"},{url:"/_next/static/media/chickpea-hummus.354af4ff.png",revision:"e2f31136c03363d21d8db6097deb4b5c"},{url:"/_next/static/media/circle-line.caf3ae27.png",revision:"df87a0ae45f34a782b88726b6f618a65"},{url:"/_next/static/media/coffee-1.d19bf493.png",revision:"bc3749b33a0f1cc893b04d9bcf505474"},{url:"/_next/static/media/coffee-2.69f8dc5d.png",revision:"0e0c4308d6b8f8f5afa9b8503f4df6a5"},{url:"/_next/static/media/coffee-3.1ec7e6b4.png",revision:"9f57d33b41514bd7f53f23ac7191231c"},{url:"/_next/static/media/coffee-4.d5832f18.png",revision:"17230c957602309d3d9e3844c5aaf586"},{url:"/_next/static/media/combo.eef4b30e.svg",revision:"d031aeda214f7f91234a00e63f44479a"},{url:"/_next/static/media/contact.1fcb50bb.png",revision:"305d27350f9e44be1fd73fa093d38361"},{url:"/_next/static/media/cookie.f86b0eb5.png",revision:"5672c53e0a15e2df2900364a7441143e"},{url:"/_next/static/media/css.8c6c335e.svg",revision:"206bb4672bf7c0010ce7ae1b0e7cdfd0"},{url:"/_next/static/media/cup.0b5fe471.png",revision:"516f5337c1ce8f88855d730924dc5a48"},{url:"/_next/static/media/cup.56962526.svg",revision:"41ef05918bb4109ac800e8e8325ce875"},{url:"/_next/static/media/d36a2a2bb416f59e-s.woff2",revision:"a7f7eebec745ef48ccf7a3d08c66d84a"},{url:"/_next/static/media/d869208648ca5469-s.woff2",revision:"72993dddf88a63e8f226656f7de88e57"},{url:"/_next/static/media/dessert.942344b3.svg",revision:"450888d5d229e4a8486723625b101ec8"},{url:"/_next/static/media/discount.8da9914f.png",revision:"d5ad1162f9d15000cd4d00cb4ad67ac3"},{url:"/_next/static/media/e025c64520263018-s.p.woff2",revision:"dc820d9f0f62811268590ff631f36be9"},{url:"/_next/static/media/error404.c7b3d898.png",revision:"cdebe6e786666e6c6d436eff59f1faa7"},{url:"/_next/static/media/f93b79c1ea023ab6-s.woff2",revision:"96b6d54684daa94742f7bfd72a981213"},{url:"/_next/static/media/facebook.c47a5b3e.svg",revision:"14e0cd0e8edf0d0fe4befadd1228fc9b"},{url:"/_next/static/media/figma.044409ef.svg",revision:"6f1667e73e7e86c9f7ee33d6b8a33d73"},{url:"/_next/static/media/filter-offer-dish-2.573b44d8.png",revision:"1dfd95cc6817ab22eb5d1797ee9d25e2"},{url:"/_next/static/media/filter-offer-dish.1707a0b7.png",revision:"a113779f0aa002ae38834bf992da63c7"},{url:"/_next/static/media/forgotpassword.0f7a4165.png",revision:"dbf294111166f8bbd10a175f998afa28"},{url:"/_next/static/media/french.d3d4244b.jpg",revision:"ed28420a8f74b0631c24659a40511c2d"},{url:"/_next/static/media/garlic-herb-bread.e278b2e3.png",revision:"2834e3beb9640b7a7fb2a6e3ae5b4be3"},{url:"/_next/static/media/gelato.b16106f5.svg",revision:"e77a3566e5b57d513719f0409f08a0e7"},{url:"/_next/static/media/germany.17779b28.jpg",revision:"82623da2fecdb9f7f01c8d2a40280115"},{url:"/_next/static/media/google.c429e5f7.svg",revision:"d7f8d848c36452e1997ba836978fc0ae"},{url:"/_next/static/media/hero.1868646f.png",revision:"9cd3bb03118fefc39a3328b30e8966c6"},{url:"/_next/static/media/hot-chocolate.cbcd6305.png",revision:"b9efbd0a1a3819dcb2cb14475d0d077f"},{url:"/_next/static/media/html.dab9332a.svg",revision:"40ac6faa7304dfcf153514ababfedc63"},{url:"/_next/static/media/italy.4419d6da.jpg",revision:"cb70a909316380dd64b00f2556e6ab48"},{url:"/_next/static/media/javascript.9eef369c.svg",revision:"1070dacad0c756462c3bde948376186b"},{url:"/_next/static/media/leaf.ed19e422.png",revision:"cd77da99c00e7c8baef48fcd787f4b4d"},{url:"/_next/static/media/login.cae83a7e.png",revision:"04eff9bbbc17401fe6060d29b392ce55"},{url:"/_next/static/media/logo-dark.f1e598b0.png",revision:"566e3538a4e1022bfddc00d1961465f8"},{url:"/_next/static/media/logo-light.68ebc5d3.png",revision:"b13120d4332ce5a3e5d84dd5ff718cdc"},{url:"/_next/static/media/master.9f887cc9.svg",revision:"4d8f23ba9e31ecdc0fbcfc9b4b4b38f6"},{url:"/_next/static/media/mockup.4355b178.png",revision:"130f9307ebf12efcc660d60e63278b64"},{url:"/_next/static/media/nextjs.bc3d8a24.svg",revision:"d8587e69f2c08c386420cdd9678c9182"},{url:"/_next/static/media/noodles-1.7b826321.png",revision:"abe778208857acc88daafa3fc4e96cfa"},{url:"/_next/static/media/noodles-2.100a6e70.png",revision:"b2cad32c7a8b293de37942040597283f"},{url:"/_next/static/media/noodles.896e3738.svg",revision:"17c516409c377a4e9bf6b5d7bdef31ea"},{url:"/_next/static/media/noodles.f61185fe.png",revision:"845122ed83be3846fb7f5c0f3aaf9ff5"},{url:"/_next/static/media/offer-bg.48dce48d.png",revision:"dfeb71198c0758d02118aee1d0363b54"},{url:"/_next/static/media/offer-bg.c5f93410.png",revision:"52415cec9dcdc9347068cfdc70e3f968"},{url:"/_next/static/media/offer-bg2.91b0ff7f.png",revision:"f9036c38c29b210b82a4b9fb308663a3"},{url:"/_next/static/media/offer-bg3.6397f865.png",revision:"410533d75cacf548ce713165acd32256"},{url:"/_next/static/media/offer-popup.d62e505b.svg",revision:"2f55814a447dc8ff5f6a749577417d40"},{url:"/_next/static/media/onion-rings.a569b9e1.png",revision:"d2622e5428f6c179efea7573f697b773"},{url:"/_next/static/media/onion.049a8363.png",revision:"7c4bf7e0e766957c42aa944e45c99cfd"},{url:"/_next/static/media/palmier-puff-pastry.d813e4f9.png",revision:"f3ff78d3a61fb0e78216f66467f3ba80"},{url:"/_next/static/media/paypal-2.a134a293.svg",revision:"981d33b004d05265c36df9edfb1eb16d"},{url:"/_next/static/media/paypal.0b1a58c4.svg",revision:"a8895e653ba78ccd473217385fb894e0"},{url:"/_next/static/media/pizza-1.041b5719.png",revision:"7a0416567eb363d1f990cc244cfde6ca"},{url:"/_next/static/media/pizza-2.5ba327f3.png",revision:"8f4077a7169c30a72c309011866c78ba"},{url:"/_next/static/media/pizza-2.dd106446.png",revision:"c9a6337e715e7ffb22f8c2e08944eea2"},{url:"/_next/static/media/pizza-3.f4bac625.png",revision:"8422aa15a828847166126257d53c33fe"},{url:"/_next/static/media/pizza-4.0342d87e.png",revision:"56bdcd419aef27e993eb682519e44fa8"},{url:"/_next/static/media/pizza-slice.3256d0c4.svg",revision:"853574523f8acae7c579cf64a7b77e47"},{url:"/_next/static/media/pizza.080e9952.svg",revision:"7b6f025e74256b0fc0d7ec4ffc0bbe1e"},{url:"/_next/static/media/pizza.17165e36.png",revision:"98008edc7ea5855fe28043a9518e4d8f"},{url:"/_next/static/media/pizza.7b127aa1.png",revision:"1e5982fe8038715ffe9fa03d4d7d6c41"},{url:"/_next/static/media/red-velvet-pastry.7b943a27.png",revision:"3a3357bfccfc654df241778537894310"},{url:"/_next/static/media/register.4643b876.png",revision:"00fa201b4479148ff464d3db4ef696c8"},{url:"/_next/static/media/resetpassword.614ca63e.png",revision:"25fda3997058723e0bfdc89c63a4f3f1"},{url:"/_next/static/media/rice.f7552e27.png",revision:"7aa3ff6de6fb0a80414371458c125317"},{url:"/_next/static/media/rupay.32cf1717.svg",revision:"f2fb78fe1842fb9f086e64fb416cef55"},{url:"/_next/static/media/russia.253d3bf8.jpg",revision:"aa348603d5e2978178190247b169974e"},{url:"/_next/static/media/salad.47b92375.png",revision:"c752f341c8921e94cd71b947682ee236"},{url:"/_next/static/media/seafood.79e2e572.svg",revision:"459be7964808b8733fa34c68762980cf"},{url:"/_next/static/media/skewer.9066d1c8.svg",revision:"4b59b0b6bfa373c26728580496dd0909"},{url:"/_next/static/media/spaghetti.b402795d.png",revision:"48b587f236b2821ad23ff18331611465"},{url:"/_next/static/media/spain.c53b4c5d.jpg",revision:"25d67fb418ce2623d770679b2fd4f575"},{url:"/_next/static/media/special-offer.d2d9fee3.svg",revision:"5cc3d1e2dd82f360149cd757b02454f4"},{url:"/_next/static/media/steamed-dumpling.80d68f10.png",revision:"75c070ddb096e245136c3553fd0a8ba2"},{url:"/_next/static/media/sushi-roll.60f14d05.png",revision:"c474fad30600c934d064a5c75d1e9ebf"},{url:"/_next/static/media/taco.3b69eeb4.svg",revision:"6722fd394516fae12ba5d824049601ff"},{url:"/_next/static/media/tailwindcss.d52e9897.svg",revision:"b533b18c3585ddd570ba7f1ba4b178b8"},{url:"/_next/static/media/testimonial-img.578a6634.png",revision:"23942a0b0201448e1f811dba21b4350c"},{url:"/_next/static/media/truck.afd6490d.png",revision:"a9cdf13d52d3fc1b022c3dd3c77f6042"},{url:"/_next/static/media/turbopack.f50bd6a4.svg",revision:"e67e0ce509d44a50d1278445fe9860f9"},{url:"/_next/static/media/typescript.0a9d1a9b.svg",revision:"d4ae177aae3203061b76de9a62f9af27"},{url:"/_next/static/media/usa.d7faa4f3.jpg",revision:"6dd96569bff0a5c5ada7d99222b9815d"},{url:"/_next/static/media/veg-rice.646f400c.png",revision:"849f5c2352742edd277235d368fa5588"},{url:"/_next/static/media/vegetables.e89deacd.png",revision:"51dd80bcbc7b0487f5f260484a3d65eb"},{url:"/_next/static/media/visa.dbd260e2.svg",revision:"bc7cdc80287c4dc8c11bfd56694f4bfb"},{url:"/_next/static/media/vitejs-logo.8cb2dcae.svg",revision:"1821c958bbe5e0a6a4563025af907760"},{url:"/_next/static/media/wallet-card-bg.ff1f7b7d.png",revision:"99f5e9db05b7dd239c5d7e48d71cca9a"},{url:"/_next/static/media/wave.7891c34b.png",revision:"44e329ef4a42c5d968318ac4ffd9ee12"},{url:"/_next/static/media/wraps-1.467fa0fb.png",revision:"cdca51bf13197dfd9d17b02640d33ce2"},{url:"/_next/static/media/wraps-2.f435bb2c.png",revision:"5913155bdd1af9ab575fff1ea18a4265"},{url:"/_next/static/media/wraps-3.f012046b.png",revision:"f882d4a93556f31893c1f4e137d5a0c8"},{url:"/_next/static/media/wraps-4.bcd49244.png",revision:"52504a435fe83f4c3d70a75fa5905b64"},{url:"/_next/static/media/wraps.b88bbd59.png",revision:"2c4b910da913734e47c5426e07fc5a1b"},{url:"/_next/static/media/yarn.03a84245.svg",revision:"95c906efe9a2106489d4694b32b28e1e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
